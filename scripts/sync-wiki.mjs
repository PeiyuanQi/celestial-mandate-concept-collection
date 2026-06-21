import {
  existsSync,
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import path from "node:path/posix";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, "..");
const referencesRoot = resolve(
  projectRoot,
  process.env.CELESTIAL_MANDATE_REFERENCES_DIR ??
    "../celestial-mandate/references",
);
const generatedModulePath = resolve(projectRoot, "src/i18n/wiki/generated.ts");
const publicWikiRoot = resolve(projectRoot, "public/wiki-content");

const dlcs = [
  {
    id: "po-zhen-zi",
    sourceDir: "southern-ming",
    label: {
      "zh-Hans": "第一章：破阵子",
      en: "Chapter One: Po Zhen Zi (破阵子)",
    },
    sourceLabel: "references/southern-ming",
  },
];

const categories = [
  {
    id: "people",
    sourceDir: "people",
    label: {
      "zh-Hans": "人物",
      en: "People",
    },
  },
  {
    id: "events",
    sourceDir: "events",
    label: {
      "zh-Hans": "事件",
      en: "Events",
    },
  },
  {
    id: "places",
    sourceDir: "places",
    label: {
      "zh-Hans": "地点",
      en: "Places",
    },
  },
  {
    id: "timeline",
    sourceDir: "chronicle",
    label: {
      "zh-Hans": "时间线",
      en: "Timeline",
    },
  },
];

const priorityFiles = new Map([
  ["index.md", 0],
  ["README.md", 1],
  ["catalog.md", 2],
]);
const portraitImageNames = [
  "portrait.png",
  "portrait.jpg",
  "portrait.jpeg",
  "portrait.webp",
];
const collator = new Intl.Collator("en", { numeric: true });

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function stripMarkdown(value) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_|~[\]()`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromFilename(filename) {
  return filename
    .replace(/\.md$/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function extractTitle(markdown, filename) {
  const heading = markdown.match(/^#\s+(.+)$/m);
  return heading ? heading[1].trim() : titleFromFilename(filename);
}

function extractExcerpt(markdown, title) {
  const blocks = markdown
    .replace(/^#\s+.+$/m, "")
    .split(/\n{2,}/)
    .map((block) => stripMarkdown(block))
    .filter((block) => block && block !== stripMarkdown(title));
  const excerpt = blocks.find((block) => block.length >= 24) ?? blocks[0] ?? "";
  return excerpt.length > 160 ? `${excerpt.slice(0, 157)}...` : excerpt;
}

function compareSourceFiles(a, b) {
  const aPriority = priorityFiles.get(a.name) ?? 10;
  const bPriority = priorityFiles.get(b.name) ?? 10;
  if (aPriority !== bPriority) {
    return aPriority - bPriority;
  }

  return collator.compare(a.name, b.name);
}

function collectMarkdownSources(category, sourceDir) {
  const dirents = readdirSync(sourceDir, { withFileTypes: true });
  const topLevelFiles = dirents
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
    .map((dirent) => ({
      name: dirent.name,
      slug: dirent.name.replace(/\.md$/, ""),
      absolutePath: resolve(sourceDir, dirent.name),
      fallbackTitleFilename: dirent.name,
      sourcePathAliases: [],
    }));

  if (category.id !== "people") {
    return topLevelFiles.sort(compareSourceFiles);
  }

  const profileSources = dirents
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        existsSync(resolve(sourceDir, dirent.name, "profile.md")),
    )
    .map((dirent) => {
      const legacySourcePath = normalizeSourcePath(
        relative(
          resolve(referencesRoot, ".."),
          resolve(sourceDir, `${dirent.name}.md`),
        ),
      );

      return {
        name: `${dirent.name}/profile.md`,
        slug: dirent.name,
        absolutePath: resolve(sourceDir, dirent.name, "profile.md"),
        fallbackTitleFilename: `${dirent.name}.md`,
        sourcePathAliases: [legacySourcePath],
      };
    });
  const profileSlugs = new Set(profileSources.map((source) => source.slug));
  const legacyFiles = topLevelFiles.filter(
    (source) => priorityFiles.has(source.name) || !profileSlugs.has(source.slug),
  );

  return [...legacyFiles, ...profileSources].sort(compareSourceFiles);
}

function normalizeSourcePath(value) {
  return value.split(path.sep).join("/");
}

function extractPortraitCaption(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const statusLine = lines.find((line) =>
    /^(?:>\s*)?-\s*Status:\s+/i.test(line) ||
    /^>\s*Status:\s+/i.test(line),
  );
  if (!statusLine) {
    return "";
  }

  return stripMarkdown(
    statusLine
      .replace(/^(?:>\s*)?-\s*Status:\s+/i, "")
      .replace(/^>\s*Status:\s+/i, ""),
  );
}

function findPortrait(category, sourceDir, dlc, slug, title) {
  if (category.id !== "people") {
    return undefined;
  }

  const portraitDir = resolve(sourceDir, slug);
  if (!existsSync(portraitDir)) {
    return undefined;
  }

  const imageName = portraitImageNames.find((name) =>
    existsSync(resolve(portraitDir, name)),
  );
  if (!imageName) {
    return undefined;
  }

  const imagePath = `/wiki-content/${dlc.id}/${category.id}/${slug}/${imageName}`;
  const sourceNotePath = resolve(portraitDir, "portrait.md");
  const hasSourceNote = existsSync(sourceNotePath);
  const caption = hasSourceNote
    ? extractPortraitCaption(readFileSync(sourceNotePath, "utf8"))
    : "";

  return {
    imagePath,
    absoluteImagePath: resolve(portraitDir, imageName),
    sourcePath: hasSourceNote
      ? normalizeSourcePath(relative(resolve(referencesRoot, ".."), sourceNotePath))
      : undefined,
    caption:
      caption ||
      "AI-generated game concept art; not an authenticated likeness.",
    alt: `${title} portrait concept art`,
  };
}

function publicPortrait(portrait) {
  if (!portrait) {
    return undefined;
  }

  const {
    absoluteImagePath: _absoluteImagePath,
    sourcePath,
    ...publicFields
  } = portrait;
  return {
    ...publicFields,
    ...(sourcePath ? { sourcePath } : {}),
  };
}

function resolveWikiHref(href, sourcePath, entryBySourcePath) {
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:")
  ) {
    return { href };
  }

  const [targetPath, hash = ""] = href.split("#");
  if (!targetPath.endsWith(".md")) {
    return { href };
  }

  const currentDir = path.dirname(sourcePath);
  const resolvedPath = path.normalize(path.join(currentDir, targetPath));
  const target = entryBySourcePath.get(resolvedPath);
  if (!target) {
    return { href };
  }

  return {
    href: `#${target.id}${hash ? `-${hash}` : ""}`,
    entryId: target.id,
  };
}

function renderInline(text, sourcePath, entryBySourcePath) {
  let html = escapeHtml(text);

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => {
    const resolved = resolveWikiHref(href, sourcePath, entryBySourcePath);
    const safeHref = escapeAttribute(resolved.href);
    const attrs = resolved.entryId
      ? ` href="${safeHref}" data-wiki-entry-link="${escapeAttribute(resolved.entryId)}"`
      : ` href="${safeHref}"`;
    return `<a${attrs}>${label}</a>`;
  });

  return html;
}

function isTableLine(line) {
  return /^\s*\|.*\|\s*$/.test(line);
}

function isSeparatorLine(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderTable(lines, sourcePath, entryBySourcePath) {
  const rows = lines.map(splitTableRow);
  const hasHeader = rows.length > 1 && isSeparatorLine(lines[1]);
  const head = hasHeader ? rows[0] : [];
  const body = hasHeader ? rows.slice(2) : rows;

  const renderCells = (cells, tag) =>
    `<tr>${cells
      .map(
        (cell) =>
          `<${tag}>${renderInline(cell, sourcePath, entryBySourcePath)}</${tag}>`,
      )
      .join("")}</tr>`;

  return [
    '<div class="wiki-table-wrap"><table>',
    hasHeader ? `<thead>${renderCells(head, "th")}</thead>` : "",
    `<tbody>${body.map((row) => renderCells(row, "td")).join("")}</tbody>`,
    "</table></div>",
  ].join("");
}

function markdownToHtml(markdown, sourcePath, entryBySourcePath) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listItems = [];
  let blockquote = [];
  let tableLines = [];
  let inCode = false;
  let codeLines = [];
  let skippedFirstTitle = false;

  const flushParagraph = () => {
    if (!paragraph.length) {
      return;
    }
    html.push(
      `<p>${renderInline(paragraph.join(" "), sourcePath, entryBySourcePath)}</p>`,
    );
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) {
      return;
    }
    html.push(
      `<ul>${listItems
        .map(
          (item) =>
            `<li>${renderInline(item, sourcePath, entryBySourcePath)}</li>`,
        )
        .join("")}</ul>`,
    );
    listItems = [];
  };

  const flushBlockquote = () => {
    if (!blockquote.length) {
      return;
    }
    html.push(
      `<blockquote><p>${blockquote
        .map((line) => renderInline(line, sourcePath, entryBySourcePath))
        .join("<br />")}</p></blockquote>`,
    );
    blockquote = [];
  };

  const flushTable = () => {
    if (!tableLines.length) {
      return;
    }
    html.push(renderTable(tableLines, sourcePath, entryBySourcePath));
    tableLines = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushBlockquote();
    flushTable();
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushAll();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!trimmed) {
      flushAll();
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushAll();
      const level = heading[1].length;
      const text = heading[2].trim();
      if (level === 1 && !skippedFirstTitle) {
        skippedFirstTitle = true;
        continue;
      }
      const tag = `h${Math.min(level + 1, 6)}`;
      html.push(
        `<${tag}>${renderInline(text, sourcePath, entryBySourcePath)}</${tag}>`,
      );
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      flushTable();
      blockquote.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      flushBlockquote();
      flushTable();
      listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }

    if (isTableLine(line)) {
      flushParagraph();
      flushList();
      flushBlockquote();
      tableLines.push(line);
      continue;
    }

    flushList();
    flushBlockquote();
    flushTable();
    paragraph.push(trimmed);
  }

  if (inCode) {
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  }
  flushAll();

  return html.join("\n");
}

function assertReferencesRoot() {
  if (!existsSync(referencesRoot)) {
    throw new Error(
      `Reference directory was not found: ${referencesRoot}. Set CELESTIAL_MANDATE_REFERENCES_DIR if it lives elsewhere.`,
    );
  }
}

function collectEntries() {
  const entries = [];

  for (const dlc of dlcs) {
    for (const category of categories) {
      const sourceDir = resolve(referencesRoot, dlc.sourceDir, category.sourceDir);
      if (!existsSync(sourceDir)) {
        continue;
      }

      const sources = collectMarkdownSources(category, sourceDir);

      for (const source of sources) {
        const markdown = readFileSync(source.absolutePath, "utf8");
        const title = extractTitle(markdown, source.fallbackTitleFilename);
        const excerpt = extractExcerpt(markdown, title);
        const sourcePath = normalizeSourcePath(
          relative(resolve(referencesRoot, ".."), source.absolutePath),
        );
        const id = `${dlc.id}__${category.id}__${source.slug}`;
        const contentPath = `/wiki-content/${dlc.id}/${category.id}/${source.slug}.json`;
        const portrait = findPortrait(category, sourceDir, dlc, source.slug, title);

        entries.push({
          id,
          dlcId: dlc.id,
          categoryId: category.id,
          slug: source.slug,
          title,
          excerpt,
          sourcePath,
          sourcePathAliases: source.sourcePathAliases,
          contentPath,
          portrait,
          markdown,
        });
      }
    }
  }

  return entries;
}

function writeGeneratedContent(entries) {
  const entryBySourcePath = new Map();
  for (const entry of entries) {
    entryBySourcePath.set(entry.sourcePath, entry);
    for (const sourcePathAlias of entry.sourcePathAliases) {
      entryBySourcePath.set(sourcePathAlias, entry);
    }
  }

  rmSync(publicWikiRoot, { recursive: true, force: true });

  for (const entry of entries) {
    const outputPath = resolve(projectRoot, `public${entry.contentPath}`);
    mkdirSync(dirname(outputPath), { recursive: true });
    const html = markdownToHtml(entry.markdown, entry.sourcePath, entryBySourcePath);
    const plainText = stripMarkdown(entry.markdown);
    if (entry.portrait) {
      const imageOutputPath = resolve(projectRoot, `public${entry.portrait.imagePath}`);
      mkdirSync(dirname(imageOutputPath), { recursive: true });
      copyFileSync(entry.portrait.absoluteImagePath, imageOutputPath);
    }
    writeFileSync(
      outputPath,
      `${JSON.stringify(
        {
          id: entry.id,
          title: entry.title,
          sourcePath: entry.sourcePath,
          ...(entry.portrait ? { portrait: publicPortrait(entry.portrait) } : {}),
          html,
          plainText,
        },
        null,
        2,
      )}\n`,
    );
  }

  const firstEntry = entries[0];
  const initialWikiEntryHtml = firstEntry
    ? markdownToHtml(firstEntry.markdown, firstEntry.sourcePath, entryBySourcePath)
    : "";

  const publicEntries = entries.map(
    ({ markdown: _markdown, portrait, sourcePathAliases: _aliases, ...entry }) => ({
      ...entry,
      ...(portrait ? { portrait: publicPortrait(portrait) } : {}),
    }),
  );

  mkdirSync(dirname(generatedModulePath), { recursive: true });
  writeFileSync(
    generatedModulePath,
    `// Generated by npm run sync-wiki. Do not edit by hand.\n` +
      `export const wikiDlcGroups = ${JSON.stringify(dlcs, null, 2)} as const;\n\n` +
      `export const wikiCategoryGroups = ${JSON.stringify(
        categories,
        null,
        2,
      )} as const;\n\n` +
      `export const wikiEntries = ${JSON.stringify(
        publicEntries,
        null,
        2,
      )} as const;\n\n` +
      `export const initialWikiEntryId = ${JSON.stringify(firstEntry?.id ?? "")} as const;\n\n` +
      `export const initialWikiEntryHtml = ${JSON.stringify(initialWikiEntryHtml)} as const;\n`,
  );
}

assertReferencesRoot();
const entries = collectEntries();
writeGeneratedContent(entries);

console.log(
  `Synced ${entries.length} wiki entries from ${referencesRoot} into public/wiki-content and src/i18n/wiki/generated.ts.`,
);
