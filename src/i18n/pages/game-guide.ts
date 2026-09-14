import { type GameGuideContent, type Locale } from "../types";

export const gameGuideContent: Record<Locale, GameGuideContent> = {
  "zh-Hans": {
    kicker: "游戏指南",
    title: "从玩法，到模型，再到历史推演。",
    body:
      "这里整理《社稷》的玩法、游戏企划、设计原则与系统策划。你可以先了解如何游玩，也可以继续追问：历史资料如何进入模型，同一个世界又怎样同时支持角色扮演式游戏与可检查的历史推演。",
    heroImageAlt:
      "铺有舆图、奏报、封印、账册与路线标记的历史策略案头。",
    intro: {
      kicker: "阅读路径",
      title: "先看你如何入局，再看这个世界为何这样运转。",
      body:
        "玩法介绍从玩家席位、命令、地方、战争与后果讲起；三份设计资料则分别说明产品愿景、历史模拟方法和具体系统蓝图。它们是设计目标与制作依据，不等于当前版本已经实现全部功能。",
    },
    gameplayCard: {
      label: "从这里开始",
      title: "玩法介绍",
      body:
        "选择一个历史人物的席位，在有限权力与有限信息中下令、等待、判断和承担后果。",
      points: ["角色席位", "命令与消息", "地方社会", "战争与后果"],
      openLabel: "进入玩法介绍",
    },
    library: {
      kicker: "设计资料",
      title: "三份资料，回答为什么、怎样设计，以及如何落地。",
      body:
        "面向玩家整理内部企划、设计与策划内容，保留关键原则，同时省去实现文档中的工程细节。",
      openLabel: "阅读资料",
    },
    modePromise: {
      kicker: "共同承诺",
      title: "同一个世界，两种理解方式。",
      body:
        "游戏模式与历史模拟模式共享同一套世界状态、规则、时间与因果。区别在于你以什么身份观察，以及能做什么。",
      gameLabel: "游戏模式",
      gameText:
        "身处历史人物的位置，只能依据此人能够收到的报告、关系与权限行动。",
      simulationLabel: "历史模拟模式",
      simulationText:
        "观察无人推演或声明过的实验，检查模拟真值、人物认知、公式、参数、来源与运行差异。",
      sharedRule:
        "观察方式可以不同，世界的结算规则不能因此改变。",
    },
    status: {
      label: "当前状态",
      title: "双模式是已确立的产品方向，研究工作台仍在设计与实现阶段。",
      body:
        "当前正式 Rust/Bevy 宿主已可运行两条原生角色旅程（多尔衮、史可法）。史可法的江北四镇现有 Canwu 驱动的月度政策窗口：每月只能用印一项赈济、军镇协同或自治政策；下一月结算会把政策作为可追溯的模型来源写入报告后再重开窗口。原生存档/续入、确定性回放与受限报告均已覆盖这条循环。其余已编写角色、全国战区地图、完整报告钻取和研究工作台尚未完成；本页的历史模拟模式描述目标合同，不代表所有能力已开放。",
    },
    articleDetail: {
      backLabel: "返回游戏指南",
      contentsLabel: "本页内容",
      closingLabel: "设计结论",
    },
    articles: [
      {
        slug: "vision",
        navLabel: "游戏愿景",
        category: "游戏企划",
        kicker: "游戏愿景",
        title: "一款历史社会模拟，也是一场身在局中的大策略。",
        body:
          "《社稷》希望把历史世界的制度、距离、物资、人物与信息变成真正会运转的条件，而不是装饰在征服玩法外面的背景。",
        summary:
          "这份企划说明产品为什么存在、面向谁、第一章做什么，以及游戏模式和历史模拟模式怎样共享一个内核。",
        indexPoints: ["产品定位", "目标玩家", "双模式承诺", "破阵子范围"],
        sections: [
          {
            kicker: "产品定位",
            title: "玩家经营的不是颜色，而是一个能否继续运转的社会。",
            body:
              "领土宣称、驻军、钱粮、官职与地方合作并不等价。你可能名义上拥有一座城，却无法征税、调兵或让命令离开衙门。",
            layout: "grid",
            items: [
              { label: "角色", text: "从皇帝、阁臣、督师、军镇主将或幕府人物的具体位置进入局势。" },
              { label: "社会", text: "人物、人群、地方与机构按照各自资源、利益、关系和认知行动。" },
              { label: "历史", text: "史实提供开局、压力和限制，不按日期强制结局。" },
              { label: "策略", text: "每个办法都要经过权限、信息、物资、制度、路线和地方接受。" },
            ],
          },
          {
            kicker: "面向谁",
            title: "为愿意理解限制、因果和代价的人设计。",
            body:
              "它既不是纯粹的史料阅读器，也不是用复杂数字装饰的版图扩张游戏。",
            layout: "grid",
            items: [
              { label: "大策略玩家", text: "希望国家能力、后勤、政治和社会比领土涂色更重要。" },
              { label: "历史爱好者", text: "希望反事实来自历史条件，而不是随意分支。" },
              { label: "系统玩家", text: "愿意追踪命令为何延误、政策为何变形、胜利为何留下债务。" },
              { label: "学习与研究使用者", text: "希望比较运行、检查假设，并清楚看到模型的证据与限制。" },
            ],
          },
          {
            kicker: "双模式",
            title: "一套世界规则，两种正式使用方式。",
            body:
              "两种模式的差别是视角、权限和呈现，不是暗中调整历史规律。",
            layout: "comparison",
            items: [
              { label: "游戏模式", text: "绑定历史角色，只看到角色能知道的事，只能通过时代内的官职、关系、文书与行动渠道介入。" },
              { label: "历史模拟模式", text: "运行无人推演或版本化实验，检查模拟真值、人物认知、模型假设、公式、随机流与轨迹差异。" },
            ],
            note: "游戏优先实现，不等于历史模型只为界面便利服务；公开研究工作台可以后发布，但不能另建一套规则。",
          },
          {
            kicker: "第一章",
            title: "《破阵子》从南明转折进入整个时代危机。",
            body:
              "当前首个可玩窗口从崇祯之死与北京失守开始，聚焦弘光朝廷与江北四镇的危局，并为更广的南明、大西、大顺、清与沿海力量留下扩展路径。",
            layout: "grid",
            items: [
              { label: "时间", text: "1644-04-25 至约 1645-06-15 的首个演示窗口。" },
              { label: "地理", text: "南京、镇江、扬州、淮安、长江、运河及因果所需的外部节点。" },
              { label: "人物", text: "重要角色在拥有真实决策渠道后逐步成为可选席位。" },
              { label: "结局", text: "历史候选只有在当前状态支持时发生，不由日期或预写分支强制。" },
            ],
          },
          {
            kicker: "产品边界",
            title: "它不会把模拟结果包装成历史真相。",
            body:
              "历史资料存在缺口和争议，模型也必然省略现实。产品可以展示来源、假设与可辩护的反事实，但不能声称完整复原历史或替代学术研究。",
            layout: "grid",
            items: [
              { label: "不做万能沙盘", text: "不会让玩家以全知视角直接改动所有人物、城市与数值。" },
              { label: "不做固定剧本", text: "不会为了重演史实而忽略当前世界状态。" },
              { label: "不做虚假精确", text: "没有来源支持的精确数值会标为假设、区间或待研究。" },
              { label: "不做双重规则", text: "游戏模式和历史模拟模式不能各自拥有更方便的物理与历史规律。" },
            ],
          },
        ],
        closing:
          "《社稷》的产品目标不是在“真实”和“好玩”之间随意折中，而是让模型承担历史因果，让界面承担理解、节奏与行动。",
      },
      {
        slug: "design",
        navLabel: "设计原则",
        category: "游戏设计",
        kicker: "设计原则",
        title: "从史料到玩法，中间必须经过模型与解释。",
        body:
          "现实不能完整复制，史料也不等于程序输入。设计的任务是选择关键变量、建立可验证的因果，再为不同使用者提供合适的理解方式。",
        summary:
          "这份设计资料解释五层结构、三种信息状态、模型取舍规则，以及为什么体验问题应先从呈现和行动方式解决。",
        indexPoints: ["五层结构", "三种状态", "模型取舍", "体验修正"],
        sections: [
          {
            kicker: "五层结构",
            title: "每一层只回答自己的问题。",
            body:
              "把史料、模型、程序和界面混在一起，最终会让“好玩”悄悄改写历史，或让复杂数据直接压到玩家身上。",
            layout: "sequence",
            items: [
              { label: "历史证据", text: "史料、测量、研究与争议告诉我们可以支持哪些主张，哪里仍然未知。" },
              { label: "历史模型", text: "决定保留哪些人物、变量、关系、尺度和因果，哪些被省略或聚合。" },
              { label: "模拟执行", text: "用统一的时间、状态、公式、规则与不确定性结算这个模型。" },
              { label: "解释层", text: "把模拟真值转换为某个角色的认知，或研究者获准查看的观察。" },
              { label: "呈现层", text: "用报告、地图、区间、建议、时间线与工具帮助玩家或研究者理解。" },
            ],
          },
          {
            kicker: "三种状态",
            title: "世界发生了什么，不等于人物知道什么。",
            body:
              "同一场战事可以同时存在权威模拟状态、不同人物的认知，以及界面最终展示给使用者的信息。",
            layout: "grid",
            items: [
              { label: "世界真值状态", text: "这一局模拟内部已经结算并保存的状态；它不是现实历史真相。" },
              { label: "行动者认知状态", text: "人物或机构通过奏报、传闻、侦察、关系与推断形成的认识，带有延迟、置信与矛盾。" },
              { label: "呈现状态", text: "游戏界面、公共观察、研究工具或开发诊断被允许展示的内容。" },
              { label: "不可越界", text: "研究者能看到真值，不代表 AI 或玩家角色也能凭空知道。" },
            ],
          },
          {
            kicker: "模型取舍",
            title: "真实性不是变量越多越好。",
            body:
              "一个细节只有在改变历史因果、人物选择、反事实差异或验证结果时，才值得进入模型。仅为界面表达所需的信息，应由派生投影或追踪资料提供，而不是增加新的权威变量。",
            layout: "grid",
            items: [
              { label: "保留", text: "能改变关键结果、约束或行动渠道，并且有证据或明确假设支撑。" },
              { label: "聚合", text: "细节很多，但对当前尺度只需要一个可解释的总结果。" },
              { label: "省略", text: "证据不足、重复计算、不会改变结果，或会制造虚假精确。" },
              { label: "延后", text: "长期模型成立，但当前章节尚不需要实现；记录影响与后续条件。" },
            ],
          },
          {
            kicker: "体验修正",
            title: "命令需要十八天，不代表玩家要无事可做十八天。",
            body:
              "体验不佳时，先调整玩家如何计划、等待与理解，再判断模型本身是否错误。",
            layout: "sequence",
            items: [
              { label: "先解释", text: "显示预计抵达区间、路线、风险、最近消息和为什么会慢。" },
              { label: "再组织", text: "允许同时处理多项事务，用战略重点、提醒与时间线管理注意力。" },
              { label: "再授权", text: "通过属官、常设制度、预案与委任，让时代内的人替你持续办事。" },
              { label: "再加速", text: "快进、自动降速、逐步与回放改变观看节奏，不改变世界时间。" },
              { label: "最后审模", text: "只有因果缺失、证据不足、尺度错误或计算不可承受时，才修改模型。" },
            ],
          },
          {
            kicker: "历史合理性",
            title: "好的反事实不是随意，而是换了原因以后真的会换结果。",
            body:
              "模型不以是否重演史实为唯一标准，而要检查结构压力、人物能动性、因果消融、替代轨迹与解释是否成立。",
            layout: "grid",
            items: [
              { label: "因果而非日历", text: "日期可以提供窗口与压力，不能单独强制投降、死亡或政权出现。" },
              { label: "没有特权种子", text: "不能挑一局最像史实的结果当作模型有效的证据。" },
              { label: "反事实响应", text: "移除欠饷、路线阻断或政治冲突后，下游行为应通过普通规则发生变化。" },
              { label: "限制可见", text: "来源不足、参数假设、适用范围和无法验证的部分都必须标明。" },
            ],
          },
        ],
        closing:
          "复杂的是模型，不一定是界面；有限的是人物所知，不是系统对因果的要求。",
      },
      {
        slug: "systems",
        navLabel: "系统蓝图",
        category: "系统策划",
        kicker: "系统蓝图",
        title: "让一次意图经过权力、道路、地方与社会，最后留下历史。",
        body:
          "系统策划把设计原则拆成可实现、可配置、可验证的对象、流程、内容与界面，并明确哪些基础已经存在，哪些仍需补齐。",
        summary:
          "这份策划资料展示核心因果循环、领域系统、双模式差异、研究工作台和当前实现边界。",
        indexPoints: ["因果循环", "领域系统", "双模式界面", "实现边界"],
        sections: [
          {
            kicker: "核心循环",
            title: "玩家点击只是开始，结果要经过完整的社会链条。",
            body:
              "一项赈济、任命、调兵或谈判不会直接修改数值，而会经过责任、传递、接受、资源与后果。",
            layout: "sequence",
            items: [
              { label: "席位与意图", text: "谁想做什么，此人拥有什么职位、关系、责任与信息。" },
              { label: "权限与筹备", text: "判断能直接命令、必须提议、需要委任，还是根本无权行动。" },
              { label: "指令与路线", text: "文书起草、排队、派遣，并选择驿路、水路、使节或其他渠道。" },
              { label: "地方受理", text: "目标人物和机构依据利益、资源、关系、制度与认知接受、拖延、改写或拒绝。" },
              { label: "领域结算", text: "钱粮、人口、军队、路线、政治、情报与环境由各自系统提交变化。" },
              { label: "历史候选", text: "只有当前状态满足条件时，史实压力才可能成为政权、人物或局势转换。" },
              { label: "报告与记忆", text: "结果通过有限信息返回，并留下信誉、旧怨、债务、制度惯例与恢复空间。" },
            ],
          },
          {
            kicker: "领域系统",
            title: "不同系统拥有自己的真值，却通过明确的因果记录连接。",
            body:
              "任何系统都不能顺手替另一个系统改状态。战争可以提出征粮需求，但粮食如何分配仍由经济与义务结算决定。",
            layout: "grid",
            items: [
              { label: "地理与流动", text: "地点、道路、江河、运河、容量、季节与安全。" },
              { label: "权力与官职", text: "名义、控制、任命、权限、委任、地方执行与连续性。" },
              { label: "人口与人群", text: "生计、迁徙、士绅、商人、军户、难民与组织行动。" },
              { label: "经济与义务", text: "粮、银、信用、库存、运输、债务、军饷、赈济与竞争需求。" },
              { label: "战争与军权", text: "军队、将领、补给、士气、战斗、占领、自治与军政后果。" },
              { label: "政治与正统", text: "继承、官职、派系、礼制、承认、信誉与不同受众的判断。" },
              { label: "情报与认知", text: "来源、观察时间、送达时间、置信、矛盾、保密与行动者认知。" },
              { label: "环境与灾害", text: "水文、季节、天气、疾病、损坏、维护与恢复。" },
            ],
          },
          {
            kicker: "双模式界面",
            title: "世界结算相同，观察权限与操作方式不同。",
            body:
              "模式不能只靠一个“显示全部数值”的开关实现，而要把运行目的、控制者、席位、观察权限、交互方式与追踪深度分开。",
            layout: "comparison",
            items: [
              { label: "游戏模式", text: "角色绑定、时代内命令、有限报告、预计区间、因果复盘与存续选择。" },
              { label: "历史模拟模式", text: "无人运行或版本化实验、完整观察、逐步、公式与来源检查、轨迹比较和结构化导出。" },
            ],
            note: "只读观察不能发命令；看过隐藏真值后若要介入，必须从检查点建立新的实验运行。",
          },
          {
            kicker: "研究工作台",
            title: "历史推演需要稳定工具，而不是临时调试窗口。",
            body:
              "目标工作台围绕复现、比较和解释组织，不把开发者日志直接包装成研究产品。",
            layout: "grid",
            items: [
              { label: "运行总览", text: "剧本、模型、数据、参数、种子、控制策略、限制与哈希。" },
              { label: "时间线", text: "结算边界、命令、消息、决策、状态变化、报告与转换。" },
              { label: "认知比较", text: "并排查看模拟真值、不同人物的认知和游戏界面实际展示。" },
              { label: "规则检查", text: "查看公式、输入、参数、随机抽取、输出、归属系统与因果链。" },
              { label: "证据检查", text: "查看历史主张、来源、冲突、模型假设、省略与适用范围。" },
              { label: "运行比较", text: "比较不同干预、参数、种子和轨迹族的差异及出现原因。" },
            ],
          },
          {
            kicker: "当前边界",
            title: "底层方向可复用，但双模式尚未完成。",
            body:
              "统一运行引擎与原子结算提供了基础；真正的研究模式仍需要补齐认知、随机、规则出处、导出与权限。",
            layout: "grid",
            items: [
              { label: "已有基础", text: "正式 Rust/Bevy 宿主、两条原生角色旅程、江北四镇的 Canwu 月度政策窗口与长期结算、原生存档续入、确定性回放与受限因果报告。" },
              { label: "认知缺口", text: "人物认知尚未成为完整独立状态，界面不能继续用当前真值代替迟到报告。" },
              { label: "复现缺口", text: "种子需要扩展为命名随机流、抽取位置、规则版本与数据语义哈希。" },
              { label: "检查缺口", text: "结果需要能够钻取到公式、参数、史料、假设、限制和运行谱系。" },
            ],
          },
        ],
        closing:
          "系统策划的目标不是列出更多系统，而是让每个系统知道自己拥有什么、读什么、写什么、怎样被解释，以及怎样证明没有在两种模式之间悄悄改变世界。",
      },
    ],
  },
  en: {
    kicker: "Game Guide",
    title: "From play, to model, to historical simulation.",
    body:
      "This guide brings together Celestial Mandate's gameplay, product vision, design principles, and systems planning. Start with how the game plays, then follow how historical evidence becomes a model and how one world can support both role-bound play and inspectable historical simulation.",
    heroImageAlt:
      "A historical strategy desk covered with maps, memorials, seals, ledgers, and route markers.",
    intro: {
      kicker: "Reading Path",
      title: "Begin with how you enter the crisis, then ask why the world works this way.",
      body:
        "Gameplay introduces seats, orders, places, war, and consequences. Three design documents cover product vision, the historical simulation method, and the systems blueprint. They describe design targets and production contracts, not a claim that every feature is already implemented.",
    },
    gameplayCard: {
      label: "Start Here",
      title: "Gameplay",
      body:
        "Choose a historical seat and act with limited authority and limited information, then wait, interpret, and carry the consequences.",
      points: ["Character seats", "Orders and reports", "Local society", "War and consequences"],
      openLabel: "Explore Gameplay",
    },
    library: {
      kicker: "Design Library",
      title: "Three documents explain why the product exists, how it is designed, and how it is made concrete.",
      body:
        "Internal product planning, game design, and systems planning are rewritten for players while preserving their central commitments.",
      openLabel: "Read Document",
    },
    modePromise: {
      kicker: "Shared Promise",
      title: "One world, two ways to understand it.",
      body:
        "Game Mode and Historical Simulation Mode share the same state, rules, time, and causality. What changes is who you are, what you may observe, and how you may intervene.",
      gameLabel: "Game Mode",
      gameText:
        "Inhabit a historical role and act only from reports, relationships, and authority available to that position.",
      simulationLabel: "Historical Simulation Mode",
      simulationText:
        "Observe unattended runs or declared experiments, inspecting simulated truth, actor knowledge, formulas, parameters, sources, and trajectory differences.",
      sharedRule:
        "Observation may differ; settlement rules may not change with it.",
    },
    status: {
      label: "Current Status",
      title: "Dual-mode support is a ratified product direction; the research workbench is still being designed and implemented.",
      body:
        "The formal Rust/Bevy host currently runs two native character journeys (Dorgon and Shi Kefa). Shi Kefa’s Jiangbei four towns now use a Canwu-driven monthly policy window: each month permits one sealed relief, garrison-cooperation, or autonomy policy; the following month settles it as a traceable modelled report cause and reopens the window. Native save/continue, deterministic replay, and actor-scoped reports cover this loop. The remaining authored roster, nationwide theatre map, full report drilldown, and research workbench remain incomplete; the Historical Simulation Mode pages describe the target contract rather than claiming every capability is open today.",
    },
    articleDetail: {
      backLabel: "Back to Game Guide",
      contentsLabel: "On This Page",
      closingLabel: "Design Conclusion",
    },
    articles: [
      {
        slug: "vision",
        navLabel: "Game Vision",
        category: "Product Planning",
        kicker: "Game Vision",
        title: "A historical society simulation, experienced from inside the crisis.",
        body:
          "Celestial Mandate turns institutions, distance, material constraints, people, and information into active conditions rather than historical decoration around conquest play.",
        summary:
          "This product plan explains why the game exists, who it serves, what the first chapter covers, and how Game Mode and Historical Simulation Mode share one core.",
        indexPoints: ["Product identity", "Audience", "Dual-mode promise", "Po Zhen Zi scope"],
        sections: [
          {
            kicker: "Product Identity",
            title: "You govern a society's capacity to function, not merely a color on the map.",
            body:
              "Claims, garrisons, revenue, offices, and local cooperation are separate. A city may be nominally yours while remaining impossible to tax, command, or administer.",
            layout: "grid",
            items: [
              { label: "Role", text: "Enter through a specific emperor, minister, commander, governor, or staff position." },
              { label: "Society", text: "People, groups, places, and institutions act from their resources, interests, relationships, and knowledge." },
              { label: "History", text: "Recorded history supplies starting conditions, pressures, and constraints without forcing endings by date." },
              { label: "Strategy", text: "Every solution must pass through authority, information, material, institutions, routes, and local acceptance." },
            ],
          },
          {
            kicker: "Audience",
            title: "Designed for people who value limits, causality, and cost.",
            body:
              "It is neither a passive source reader nor a map painter decorated with complicated numbers.",
            layout: "grid",
            items: [
              { label: "Grand-strategy players", text: "Players who want capacity, logistics, politics, and society to matter more than map color." },
              { label: "History enthusiasts", text: "Players who want counterfactuals to emerge from historical conditions rather than arbitrary branches." },
              { label: "Systems players", text: "Players who want to know why an order was delayed, a policy distorted, or a victory created debt." },
              { label: "Learning and research users", text: "Users who want comparable runs, inspectable assumptions, and visible evidence limits." },
            ],
          },
          {
            kicker: "Two Modes",
            title: "One world model, two formal ways to use it.",
            body:
              "The difference is perspective, permission, and presentation, never a hidden rewrite of historical rules.",
            layout: "comparison",
            items: [
              { label: "Game Mode", text: "Bind to a historical role, see what the role can know, and intervene through period offices, relationships, documents, and actions." },
              { label: "Historical Simulation Mode", text: "Run unattended worlds or versioned experiments and inspect simulated truth, actor knowledge, assumptions, formulas, random streams, and trajectory differences." },
            ],
            note: "Game Mode is the first delivery priority. That does not make the historical model answerable to interface convenience, and a later public workbench may not use a second ruleset.",
          },
          {
            kicker: "Chapter One",
            title: "Po Zhen Zi enters the wider Southern Ming crisis through a focused transition window.",
            body:
              "The first playable window begins with Chongzhen's death and Beijing's fall, focusing on the Hongguang Court and Jiangbei commands while preserving expansion into the wider Southern Ming, Daxi, Dashun, Qing, and maritime struggle.",
            layout: "grid",
            items: [
              { label: "Time", text: "The first demo window runs from 1644-04-25 to about 1645-06-15." },
              { label: "Geography", text: "Nanjing, Zhenjiang, Yangzhou, Huai'an, the Yangtze, the Grand Canal, and causally necessary external nodes." },
              { label: "People", text: "Important actors become playable as their real decision channels are modeled." },
              { label: "Outcomes", text: "Historical candidates occur only when current conditions support them, never because a branch or date demands it." },
            ],
          },
          {
            kicker: "Product Boundaries",
            title: "A simulation result is not presented as historical truth.",
            body:
              "Sources are incomplete and contested, and every model omits reality. The product can expose evidence, assumptions, and defensible counterfactuals without claiming complete reconstruction or replacing scholarship.",
            layout: "grid",
            items: [
              { label: "No god sandbox", text: "Players do not directly edit every person, city, and value from an omniscient view." },
              { label: "No fixed reenactment", text: "Recorded outcomes do not override the current simulated state." },
              { label: "No false precision", text: "Unsupported exact values remain hypotheses, ranges, or open research questions." },
              { label: "No dual rules", text: "Game and Historical Simulation modes cannot receive separate, more convenient historical physics." },
            ],
          },
        ],
        closing:
          "Celestial Mandate does not solve the tension between history and play by arbitrary compromise. The model carries causality; the interface carries comprehension, pacing, and action.",
      },
      {
        slug: "design",
        navLabel: "Design Principles",
        category: "Game Design",
        kicker: "Design Principles",
        title: "Evidence must pass through a model and an interpretation before it becomes play.",
        body:
          "Reality cannot be copied in full, and sources are not program inputs by themselves. Design selects key variables, establishes testable causality, and builds suitable ways for different users to understand the result.",
        summary:
          "This design document explains the five layers, three information states, model-selection rules, and why experience problems should first be solved through presentation and action design.",
        indexPoints: ["Five layers", "Three states", "Model choices", "Experience correction"],
        sections: [
          {
            kicker: "Five Layers",
            title: "Each layer answers a different question.",
            body:
              "When evidence, model, program, and interface are collapsed together, play convenience quietly rewrites history or raw complexity is pushed directly onto the player.",
            layout: "sequence",
            items: [
              { label: "Historical evidence", text: "Sources, measurements, scholarship, and disagreements establish what can be supported and what remains unknown." },
              { label: "Historical model", text: "Select the actors, variables, relationships, scales, causes, omissions, and aggregations that matter." },
              { label: "Simulation execution", text: "Resolve the model through shared time, state, formulas, rules, and bounded uncertainty." },
              { label: "Interpretation", text: "Turn simulated truth into one actor's knowledge or an authorized research observation." },
              { label: "Presentation", text: "Use reports, maps, ranges, advice, timelines, and tools to make the model understandable." },
            ],
          },
          {
            kicker: "Three States",
            title: "What happened is not the same as what a character knows.",
            body:
              "The same battle can have an authoritative simulated state, several actor beliefs, and the final information shown by a particular interface.",
            layout: "grid",
            items: [
              { label: "World truth state", text: "The committed state inside this simulated run; it is not historical truth." },
              { label: "Actor knowledge state", text: "What a person or institution believes through reports, rumors, reconnaissance, relationships, and inference, including delay and contradiction." },
              { label: "Presentation state", text: "What a game, public observer, research tool, or developer diagnostic is allowed to display." },
              { label: "No leakage", text: "A researcher seeing truth never means an AI actor or player character may know it without a historical channel." },
            ],
          },
          {
            kicker: "Model Choices",
            title: "Fidelity is not a contest to maximize the number of variables.",
            body:
              "A detail belongs when it changes historical causality, actor choices, counterfactual differences, or validation. Presentation-only needs should use derived projections or trace metadata instead of adding authoritative variables.",
            layout: "grid",
            items: [
              { label: "Represent", text: "Keep a variable when it changes material outcomes or constraints and has evidence or an explicit assumption." },
              { label: "Aggregate", text: "Compress many details when the current scale only needs a clear and causally faithful result." },
              { label: "Omit", text: "Leave out unsupported, duplicated, immaterial, or falsely precise detail." },
              { label: "Defer", text: "Record a valid long-term model element whose implementation is not yet required by the current chapter." },
            ],
          },
          {
            kicker: "Experience Correction",
            title: "An eighteen-day order does not require eighteen days without meaningful play.",
            body:
              "When the experience fails, first change how people plan, wait, and understand before deciding the model itself is wrong.",
            layout: "sequence",
            items: [
              { label: "Explain", text: "Show arrival ranges, routes, risks, last reports, and the reasons for delay." },
              { label: "Organize", text: "Let several concerns advance together through priorities, alerts, and timelines." },
              { label: "Delegate", text: "Use staff, standing institutions, contingencies, and authorized routines to continue period-appropriate work." },
              { label: "Accelerate", text: "Fast-forward, auto-slow, stepping, and replay change viewing speed without changing world time." },
              { label: "Revisit the model", text: "Change the model only when causality, evidence, scale, stability, or computational tractability is wrong." },
            ],
          },
          {
            kicker: "Historical Plausibility",
            title: "A good counterfactual is constrained: change the cause, and the result must be able to change.",
            body:
              "The model is not judged only by reenacting recorded history. It must preserve pressures, agency, causal ablations, coherent alternatives, and inspectable limits.",
            layout: "grid",
            items: [
              { label: "Causal, not calendrical", text: "Dates provide windows and pressure but cannot force surrender, death, or regime formation alone." },
              { label: "No privileged seed", text: "One run that resembles history cannot stand in for validation." },
              { label: "Counterfactual response", text: "Removing arrears, route disruption, or political conflict must be able to change downstream behavior through ordinary rules." },
              { label: "Visible limits", text: "Evidence gaps, parameter hypotheses, validity scope, and unvalidated claims remain explicit." },
            ],
          },
        ],
        closing:
          "The model may be complex without making the interface complex; the character's knowledge may be limited without lowering the standard of causality.",
      },
      {
        slug: "systems",
        navLabel: "Systems Blueprint",
        category: "Systems Planning",
        kicker: "Systems Blueprint",
        title: "An intention must pass through authority, distance, local response, and society before it becomes history.",
        body:
          "Systems planning turns the design into implementable, authorable, and verifiable objects, flows, content, and interfaces while keeping current gaps visible.",
        summary:
          "This planning document shows the causal loop, domain systems, dual-mode interfaces, research workbench, and current implementation boundary.",
        indexPoints: ["Causal loop", "Domain systems", "Dual-mode interface", "Implementation boundary"],
        sections: [
          {
            kicker: "Causal Loop",
            title: "The click is only the beginning; the result must travel through society.",
            body:
              "Relief, appointment, mobilization, and negotiation do not directly edit values. They pass through responsibility, transmission, acceptance, resources, and consequences.",
            layout: "sequence",
            items: [
              { label: "Seat and intent", text: "Who wants what, with which office, relationships, obligations, and information." },
              { label: "Authority and preparation", text: "Determine whether the action is direct, proposed, delegated, or outside the actor's power." },
              { label: "Packet and route", text: "Draft, queue, dispatch, and route the order through relay roads, rivers, envoys, or other channels." },
              { label: "Local validation", text: "Targets accept, delay, reinterpret, bargain, or refuse from their interests, resources, institutions, relationships, and beliefs." },
              { label: "Domain settlement", text: "Economy, population, war, routes, politics, intelligence, and environment commit their own changes." },
              { label: "Historical candidate", text: "Recorded pressures become transitions only when the current state supports them." },
              { label: "Report and memory", text: "Results return through limited information and leave credibility, grievance, debt, precedent, and recovery space." },
            ],
          },
          {
            kicker: "Domain Systems",
            title: "Each system owns its truth and connects through explicit causal records.",
            body:
              "A war system may request grain, but it cannot deduct grain itself. Resource ownership and settlement remain with the economy and obligations domain.",
            layout: "grid",
            items: [
              { label: "Geography and flow", text: "Places, roads, rivers, canals, capacity, season, and security." },
              { label: "Authority and office", text: "Claims, control, appointment, permission, delegation, execution, and continuity." },
              { label: "Population and groups", text: "Livelihood, migration, gentry, merchants, military households, refugees, and organized action." },
              { label: "Economy and obligations", text: "Grain, silver, credit, stores, transport, debt, pay, relief, and competing claims." },
              { label: "War and military power", text: "Forces, commanders, supply, morale, battle, occupation, autonomy, and political aftereffects." },
              { label: "Politics and legitimacy", text: "Succession, office, factions, ritual, recognition, credibility, and different audiences." },
              { label: "Intelligence and knowledge", text: "Sources, observed and received time, confidence, contradiction, secrecy, and actor beliefs." },
              { label: "Environment and hazards", text: "Hydrology, season, weather, disease, damage, maintenance, and recovery." },
            ],
          },
          {
            kicker: "Dual-Mode Interface",
            title: "Settlement stays the same; observation rights and interaction differ.",
            body:
              "A single 'show all values' toggle is not enough. Run purpose, controller, seat, observation, interaction, and trace policies must remain separate.",
            layout: "comparison",
            items: [
              { label: "Game Mode", text: "Role binding, period commands, limited reports, estimate ranges, causal reckoning, and continuity choices." },
              { label: "Historical Simulation Mode", text: "Unattended runs or versioned experiments, full inspection, stepping, formula and evidence review, trajectory comparison, and structured exports." },
            ],
            note: "Read-only observers cannot issue commands. Intervening after hidden truth is inspected requires a new experimental run from a checkpoint.",
          },
          {
            kicker: "Research Workbench",
            title: "Historical simulation needs stable tools, not a temporary debug window.",
            body:
              "The target workbench is organized around reproduction, comparison, and explanation rather than exposing raw developer logs.",
            layout: "grid",
            items: [
              { label: "Run overview", text: "Scenario, model, data, parameters, seed, controller policy, limitations, and hashes." },
              { label: "Timeline", text: "Boundaries, orders, messages, decisions, state changes, reports, and transitions." },
              { label: "Knowledge comparison", text: "View simulated truth, different actor beliefs, and the actual game presentation side by side." },
              { label: "Rule inspection", text: "Inspect formulas, inputs, parameters, random draws, outputs, ownership, and causal links." },
              { label: "Evidence inspection", text: "Inspect historical claims, sources, disagreements, assumptions, omissions, and validity scope." },
              { label: "Run comparison", text: "Compare interventions, parameters, seeds, trajectory families, and divergence causes." },
            ],
          },
          {
            kicker: "Current Boundary",
            title: "The foundation can be reused, but dual-mode support is not complete.",
            body:
              "The shared run engine and atomic settlement provide a strong base. Real research support still needs complete knowledge, randomness, rule provenance, exports, and capability controls.",
            layout: "grid",
            items: [
              { label: "Existing base", text: "Formal Rust/Bevy host, two native character journeys, a Canwu monthly policy window and long-run settlement for the Jiangbei four towns, native save/continue, deterministic replay, and actor-scoped reports." },
              { label: "Knowledge gap", text: "Actor knowledge is not yet a complete independent state, and current truth cannot substitute for delayed reports." },
              { label: "Reproduction gap", text: "Seeds must become named random streams with draw positions, rule versions, and data semantic hashes." },
              { label: "Inspection gap", text: "Results must drill into formulas, parameters, evidence, assumptions, limitations, and run lineage." },
            ],
          },
        ],
        closing:
          "Systems planning is not a longer list of systems. It makes every system state what it owns, reads, writes, explains, and proves, without letting two modes quietly change the world in different ways.",
      },
    ],
  },
};
