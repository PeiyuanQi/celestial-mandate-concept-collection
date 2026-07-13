import { type GameplayContent, type Locale } from "../types";

export const gameplayContent: Record<Locale, GameplayContent> = {
  "zh-Hans": {
    kicker: "玩法介绍",
    title: "权力有限，才有策略。",
    body:
      "从一个具体人物的席位进入持续运转的历史社会。你在权限、所知、资源、制度和距离允许的范围内施政，并承担命令离开案头后的变化。",
    heroImageAlt:
      "暮色中的驿站庭院，信使携文书换马，屋内官员围着地图商议命令。",
    pillarsTitle: "玩法的四个支点",
    pillars: [
      {
        label: "权威",
        text: "令出案头，行经万阻。",
      },
      {
        label: "地方",
        text: "一地之内，数权并立。",
      },
      {
        label: "历史",
        text: "势由因生，不由剧定。",
      },
      {
        label: "史境",
        text: "山川人物，入局成势。",
      },
    ],
    systemIndex: {
      kicker: "玩法系统",
      title: "这些系统共同决定你的意图能否成为现实。",
      body:
        "以下是项目希望让玩家直接体验的玩法方向：以两到四项可见战略重点整理计划；通过委任与制度常规推动执行；并从有日期、有来路的报告中判断后果。",
      ariaLabel: "玩法系统子页",
      sourceLabel: "玩法重点",
      openLabel: "了解玩法",
    },
    systemGroups: [
      {
        id: "seat-command",
        label: "身份与命令",
        title: "我是谁，我能命令谁？",
        body:
          "你先选择一个权力席位：皇帝、阁臣、督师、军镇主将或幕府赞画，各自拥有不同的权限、视野、资源与风险。界面以两到四项可见战略重点呈现当前计划。",
        question:
          "当你想改变局势时，先弄清楚谁能受命、谁只能被说服，以及哪些事务必须交给官署与地方常规持续办理。",
        steps: [
          "选择一个有权力也有盲区的历史席位，并明确当前两到四项战略重点。",
          "把意图变成直接命令、正式请求、私人影响，或交由属官和既有制度常规处理。",
          "根据预计送达、预计得报与实际回执重新排定计划。",
        ],
        systemSlugs: [
          "player-seat",
          "orders-messages",
          "authority-control",
          "intelligence-security",
        ],
      },
      {
        id: "local-friction",
        label: "地方阻力",
        title: "地方为什么不照办？",
        body:
          "州县、士绅、盐商、军户、难民、道路和粮仓共同决定命令抵达以后，是变成执行、拖延、讨价还价，还是新的危机。",
        question:
          "你真正管理的是地方愿不愿意、能不能、敢不敢把你的意图变成现实。",
        steps: [
          "判断一个地方由谁实际控制，谁能提供合作。",
          "在赈济、征发、修路、护路、借款和减税之间分配短缺资源。",
          "观察民心、流民、粮价、谣言和正统性如何互相牵动。",
        ],
        systemSlugs: [
          "society-actors",
          "place-flow",
          "economy-relief",
          "legitimacy-rumors",
        ],
      },
      {
        id: "war-pressure",
        label: "战争压力",
        title: "战争为什么难只靠推线？",
        body:
          "军队能守城、争渡、威慑地方，也会消耗粮饷、破坏秩序、制造债务。战斗由路线、补给、将领、士气和地方承受力共同压出。",
        question:
          "把兵力送上前线只是开始；你还要决定军队如何被养活、被信任、被约束。",
        steps: [
          "选择守哪里、救哪里、放弃哪里，以及命令是否来得及抵达。",
          "在战斗风险、补给压力、地方承受和军权膨胀之间取舍。",
          "处理占领、溃败、军纪和前线自治造成的后果。",
        ],
        systemSlugs: [
          "war-occupation",
          "battle-engagement",
          "orders-messages",
          "economy-relief",
        ],
      },
      {
        id: "cascading-consequence",
        label: "局势后果",
        title: "局势如何自行延续，又因你而改变？",
        body:
          "承认、休战、借粮、改革、谣言和历史记忆会在你介入或不介入时继续作用。结构压力让无人干预的模拟大体沿历史方向推进；你的选择则改变下一轮可以承受的代价。",
        question:
          "一次妥协可能换来喘息，也可能让盟友怀疑你；一次改革可能救财政，也可能引爆既得利益。你需要看清后果为何发生，以及还剩多少恢复余地。",
        steps: [
          "用外交、承认和交易争取时间，为军事行动创造空间。",
          "阅读因果报告，分辨直接触发、长期压力与仍可动用的恢复路径。",
          "让之前的选择以信誉、旧怨、制度惯例和物质损失留在局中。",
        ],
        systemSlugs: [
          "diplomacy-recognition",
          "reform-institutions",
          "historical-consequences",
          "legitimacy-rumors",
        ],
      },
    ],
    systemDetail: {
      kicker: "玩法系统",
      sourceLabel: "玩法重点",
      overviewTitle: "这套玩法是什么",
      questionsTitle: "你会做什么",
      feedbackTitle: "你会看到什么",
      guardrailsTitle: "策略从哪里来",
      relatedTitle: "继续了解",
      backLabel: "返回玩法",
    },
    systems: [
      {
        slug: "player-seat",
        category: "角色与视角",
        source: "docs/sot/high-level/21-player-seat-ai-and-multiplayer.md",
        shortTitle: "角色席位",
        title: "角色席位：身在其位，所知有限",
        deck:
          "选择一个历史人物或权力位置，带着其权限、消息渠道、责任和生存压力进入危局。",
        summary:
          "同一场南明危机，弘光皇帝、马士英、史可法、江北诸镇主将和低权力幕府赞画看到的世界并不一样。席位决定你能直接命令什么、只能请求谁、可以调动哪些资源、要依靠哪些制度，以及消息要走多远。",
        indexPoints: ["可选角色", "权限边界", "连续视角"],
        questions: [
          "选一个高位但脆弱的朝廷角色，还是选一个窄权但更能自保的军镇角色。",
          "用职权、奏报、使节、私人关系和交易施加影响，并把日常事务委任给属官与机构。",
          "在失官、流亡、投降、死亡或继承之后，若当前局势仍存在有效连续路径，可转入继任席位或观察视角；若不存在，战局也可能终结。",
        ],
        feedback: [
          {
            label: "权限",
            text: "命令预览区分直接命令、受条件约束的请求，以及超出权限的意图。",
          },
          {
            label: "视角",
            text: "你看到的是这个席位能得到的报告、传闻和估计。",
          },
          {
            label: "存续",
            text: "失官、流亡、投降、死亡与继承会改变可用席位；当前局势允许时，战局可由继任者或观察视角延续，否则可能走向终局。",
          },
        ],
        guardrails: [
          "你带着现代知识进局，也只能通过时代内的官职、关系与文书渠道行动。",
          "每位角色的权限、视野、资源和风险各不相同，策略从席位差异里长出来。",
          "席位把你接进官职、军队、财政、交通与地方接受度；离开这些条件，意图难成现实。",
        ],
        relatedSlugs: ["orders-messages", "authority-control", "intelligence-security"],
      },
      {
        slug: "orders-messages",
        category: "命令与时间",
        source: "docs/sot/high-level/24-communication-command-and-natural-clock.md",
        shortTitle: "命令与消息",
        title: "命令与消息：权力需要抵达",
        deck:
          "起草、队列、信使、路途、回执、过期报告和地方接受度，共同限制命令。",
        summary:
          "命令离开案头后，仍要经幕僚起草、节点排队、信使传递与地方校验；计划界面以两到四项可见战略重点组织当前意图，日常事务则可交由属官和制度常规持续办理。",
        indexPoints: ["战略重点", "委任常规", "命令周期"],
        questions: [
          "确定当前两到四项战略重点，并决定哪些亲自推动、哪些交给属官或既有制度常规。",
          "为急令选择快速但危险的路线，或选择更慢、更可靠的渠道。",
          "在预计得报日之前继续等待、追加授权、另发命令，或承担信息尚未回来的风险。",
        ],
        feedback: [
          {
            label: "日期",
            text: "命令会显示预计送达日与预计得报日；报告同时标明观察日和到达日。",
          },
          {
            label: "周期",
            text: "你会跟踪起草、送出、抵达、受理、执行与回报等阶段。",
          },
          {
            label: "余地",
            text: "延误、拒绝或执行偏差会说明原因，并提示仍可改道、增援、撤回、委任或接受损失。",
          },
        ],
        guardrails: [
          "计划以两到四项可见战略重点组织意图；日常靠委任与制度推进，急令则排队上路、等人回执。",
          "远方在命令抵达与地方受理之前，仍按既有状态运转。",
          "时间流速可以调节，但世界与在途命令继续前进；你要在延误中重新排定计划。",
        ],
        relatedSlugs: ["player-seat", "place-flow", "battle-engagement"],
      },
      {
        slug: "authority-control",
        category: "权力与地方",
        source: "docs/sot/high-level/09-authority-and-control.md",
        shortTitle: "权力控制",
        title: "权力控制：一地不止一个主人",
        deck:
          "朝廷有名义，军镇有兵，士绅有地方执行力，商人有粮与信用，敌军有压力。",
        summary:
          "你可能拥有法理宣称，却没有财政汲取；军队能压住治安，却难以替文官建立统治；地方精英愿意合作时，命令才更像命令。",
        indexPoints: ["多重控制", "地方合作", "权力衰减"],
        questions: [
          "把稀缺行政注意力投向哪个城市、渡口或军镇。",
          "任命官员、派巡察、承认军权、谈判士绅，或用军力先稳住局面。",
          "接受短期强制带来的秩序提升，还是避免长期正统性和地方合作受损。",
        ],
        feedback: [
          {
            label: "维度",
            text: "一个地方会分别显示民政、军事、财政、正统、治安和威胁压力。",
          },
          {
            label: "惯性",
            text: "权力控制通常缓慢移动，需要持续经营才会改变。",
          },
          {
            label: "原因",
            text: "报告会说明是距离、治安、精英合作、军镇压力还是合法性拖住了执行。",
          },
        ],
        guardrails: [
          "涂色只是表象——你要分开经营宣称、驻军、钱粮与地方是否肯办。",
          "江北诸镇各有主将、粮饷与利害，需要分别经营，不能当成一块整体按钮。",
          "局势通过政治、行政、军事和交易行动改变；你推动条件，而不是直接改写权力数值。",
        ],
        relatedSlugs: ["society-actors", "war-occupation", "legitimacy-rumors"],
      },
      {
        slug: "society-actors",
        category: "社会与人物",
        source: "docs/sot/high-level/10-people-and-agency.md",
        shortTitle: "人群与人物",
        title: "人群与人物：社会会回应你",
        deck:
          "饥民、士绅、盐商、漕运行会、军户、官员和将领会合作、讨价、阻挠或背离。",
        summary:
          "普通人口形成饥饿、税负、迁徙和动荡压力；特殊人群带来粮、钱、船、工匠、训练、风评和阻挠能力；个人角色决定命令如何被执行、改写或背叛。",
        indexPoints: ["大众压力", "特殊人群", "关键角色"],
        questions: [
          "赈济饥民、安抚士绅、借力商人，还是先满足军队和官府。",
          "保护一个有用人群，给它特权，或冒着反噬压制它。",
          "任命、奖惩、调查、调停或撤换一个可能成事也可能坏事的人。",
        ],
        feedback: [
          {
            label: "民生",
            text: "粮价、税负、迁徙、动荡和治安会逐步改变地方社会的承受力。",
          },
          {
            label: "筹码",
            text: "盐商能救粮荒，也会要求税务或盐务让步；士绅能组织地方，也会保护利益。",
          },
          {
            label: "人物",
            text: "角色的忠诚、派系、能力、名望和野心会影响执行风险。",
          },
        ],
        guardrails: [
          "社会以人群压力、关键群体与关键人物进入玩法，便于你抓住杠杆。",
          "策略落在能改变局面的人群与人物上：粮、钱、船、风评、阻挠与执行都从这里来。",
          "军队另有军事制度与补给压力，需要按军镇逻辑经营，而不是当作普通人群。",
        ],
        relatedSlugs: ["authority-control", "economy-relief", "legitimacy-rumors"],
      },
      {
        slug: "place-flow",
        category: "地图与路线",
        source: "docs/sot/high-level/12-place-graph-flow-and-historical-geography.md",
        shortTitle: "地理流动",
        title: "地理流动：地图是一张会堵塞的网络",
        deck:
          "江河、运河、渡口、湿地、港口和驿路决定命令、粮食、军队、流民和谣言如何抵达。",
        summary:
          "同样的两座城，对命令、粮食、军队和谣言来说距离并不相同。路线的容量、安全、季节、地方合作和战争扰动，都会把地图变成一张有瓶颈的历史网络。",
        indexPoints: ["江河运河", "路线瓶颈", "抵达范围"],
        questions: [
          "修复运河、护卫渡口、改走长江，或先和地方人群谈妥通行。",
          "把粮食、军队、信使和流民分别看作不同的流动。",
          "在洪水、战乱或治安崩坏时，重新评估哪些地方仍然可达。",
        ],
        feedback: [
          {
            label: "瓶颈",
            text: "系统会指出卡住你的是真路程、渡口、运力、治安、季节还是地方合作。",
          },
          {
            label: "路线",
            text: "粮食可能适合水路，急令可能适合信使，军队可能被湿地和补给拖住。",
          },
          {
            label: "变化",
            text: "地理状态会随时代、剧本、洪涝、战争和玩家行动改变。",
          },
        ],
        guardrails: [
          "地图是命令、粮食、军队与谣言真正会堵塞的网络，护路与改道都是策略。",
          "路线反馈可读：你能看出卡在路程、渡口、运力、治安还是地方合作。",
          "边疆与自然环境区带着路程、季节与补给代价，需要按真实条件经营。",
        ],
        relatedSlugs: ["orders-messages", "economy-relief", "war-occupation"],
      },
      {
        slug: "economy-relief",
        category: "经济与民生",
        source: "docs/sot/high-level/13-economy-production-and-industry.md",
        shortTitle: "经济赈济",
        title: "经济赈济：粮、银和信用都不够用",
        deck:
          "你要在赈济、军供、税收、修堤、护路、借款和征发之间分配永远不够的物资。",
        summary:
          "经济系统关注生产、消耗、运输、税收、仓储、价格压力和战时优先级。富庶地区未必能养活前线；开仓能救人，也会掏空下个月的军供。",
        indexPoints: ["粮价压力", "仓储赈济", "商人信用"],
        questions: [
          "开仓赈济、留粮供军、向盐商借款，或承受地方动荡。",
          "减税保民心，还是加派税银维持军队和官府。",
          "修堤、修船、护运、查账、征粮或限制粮食外流。",
        ],
        feedback: [
          {
            label: "短缺",
            text: "粮价压力会牵动动荡、迁徙、纳税服从、正统性和商人筹码。",
          },
          {
            label: "仓储",
            text: "仓有多少、能不能运到、运到时还剩多少，会比总产量更重要。",
          },
          {
            label: "债务",
            text: "商人信用能买时间，也会增加未来财政和政治成本。",
          },
        ],
        guardrails: [
          "经济聚焦粮、银、盐、运力与信用——危机里真正短缺的东西。",
          "物资落在仓储、路线与地方，开仓救人也会掏空下月军供。",
          "南明演示版优先赈济、军供与财政压力，把后续时代的产业展开留给更后的章节。",
        ],
        relatedSlugs: ["society-actors", "place-flow", "war-occupation"],
      },
      {
        slug: "war-occupation",
        category: "战争与军权",
        source:
          "docs/sot/high-level/14-war-supply-occupation-and-military-institutions.md",
        shortTitle: "战争占领",
        title: "战争与占领：军队既是盾，也是债",
        deck:
          "军队需要粮、饷、路线、主将、制度和地方承受力；它能保国，也能掏空国家。",
        summary:
          "军队从军事制度中产生，消耗粮饷和社会资源，受命令与忠诚限制，并在驻防、护路、占领和征发中重塑地方权力。",
        indexPoints: ["军饷补给", "将领自主", "占领代价"],
        questions: [
          "给哪支军队粮饷，放弃哪片地方或哪项赈济。",
          "任用能打但危险的将领，或用更可靠但低效的安排。",
          "占领后安抚、镇压、征发、设官，或承认地方自治。",
        ],
        feedback: [
          {
            label: "补给",
            text: "缺粮、欠饷、运力不足和路线危险会迅速影响士气与执行。",
          },
          {
            label: "自主",
            text: "一支靠主将、地方税粮或私人网络维持的军队，会越来越像一个权力中心。",
          },
          {
            label: "占领",
            text: "驻军提高军事存在，也可能压低地方接受、财政能力和长期正统性。",
          },
        ],
        guardrails: [
          "战略层关注粮饷、命令、将领与地方承受力——军队如何被养活、被信任、被约束。",
          "占领之后仍要安抚、设官、征发或承认自治，才能把军事存在变成可持续秩序。",
          "江北诸镇各有主将与利害，反应与筹码因镇而异。",
        ],
        relatedSlugs: ["battle-engagement", "economy-relief", "authority-control"],
      },
      {
        slug: "battle-engagement",
        category: "战斗与战役",
        source: "docs/sot/high-level/15-battle-and-engagement-resolution.md",
        shortTitle: "战斗结算",
        title: "战斗结算：条件压出胜负",
        deck:
          "命令是否迟到、粮饷是否断裂、湿地是否拖慢展开、地方是否给向导，都可能改写战斗。",
        summary:
          "战斗是军事行动在具体地点的结算。它会考虑命令、补给、士气、地形、城防、地方合作、情报和受约束的偶然事件，并把结果反馈到军队、地方、经济和正统性。",
        indexPoints: ["命令保真", "当地条件", "结果后效"],
        questions: [
          "追求决战、护送粮运、坚守城池、压制动乱，或避战保存政治余地。",
          "在战斗仍可被新命令影响时，冒险加急传令或授权主将临机处置。",
          "接受惨胜、僵持、撤退或暂时放弃路线带来的连锁后果。",
        ],
        feedback: [
          {
            label: "条件",
            text: "战报会说明指挥、补给、士气、地形、地方支持和情报分别强弱。",
          },
          {
            label: "偶然",
            text: "暴雨、信使被截、向导误导、疫病和发饷失败都来自既有风险。",
          },
          {
            label: "代价",
            text: "胜利也可能带来疲劳、欠饷、地方怨恨、商人筹码或将领声望上升。",
          },
        ],
        guardrails: [
          "战报拆开指挥、补给、士气、地形与地方支持，让你看清胜负从何而来。",
          "暴雨、截信、疫病与欠饷都来自既有风险，战斗里的偶然仍可追溯。",
          "关键战役高保真结算；背景战事以更轻的方式反馈到补给、士气与地方压力。",
        ],
        relatedSlugs: ["war-occupation", "orders-messages", "intelligence-security"],
      },
      {
        slug: "diplomacy-recognition",
        category: "外交与承诺",
        source: "docs/sot/high-level/16-diplomacy-alliances-and-international-order.md",
        shortTitle: "外交承认",
        title: "外交与承认：每个承诺都要有人买单",
        deck:
          "承认、休战、借粮、通商、军事合作和自治交易，会解决一种压力，也把另一种压力带进内部。",
        summary:
          "你谈的是谁承认谁、谁承诺什么、谁有能力兑现、谁在内部反对、违约会伤害什么信誉，以及这个交易会怎样改变正统性和地方权力。",
        indexPoints: ["承认", "义务", "可信度"],
        questions: [
          "承认一个军镇或外部权力，换取防御、粮、银或时间。",
          "承诺援助、请求援助、谈休战、开市场，或支持对方将领归附。",
          "公开协议争取正统，或保密协议避免内部反弹。",
        ],
        feedback: [
          {
            label: "条款",
            text: "协议会拆成具体承诺，兑现需要时间、路线与内部条件。",
          },
          {
            label: "内部",
            text: "朝廷派系、军镇、士绅、商人和民众会对同一协议有不同反应。",
          },
          {
            label: "信誉",
            text: "兑现、拖延、违约和虚张声势都会改变后续谈判空间。",
          },
        ],
        guardrails: [
          "外交围绕承认、条款、兑现能力与信誉展开，每一项承诺都有人买单。",
          "援助仍受路线、补给与对方内部政治约束；答应了，也要运得动。",
          "贸易与承认会换时间与资源，也会牵动正统性与地方权力。",
        ],
        relatedSlugs: ["legitimacy-rumors", "intelligence-security", "authority-control"],
      },
      {
        slug: "reform-institutions",
        category: "改革与能力",
        source:
          "docs/sot/high-level/17-knowledge-reform-technology-and-institutions.md",
        shortTitle: "改革制度",
        title: "改革与制度：知道答案还不够",
        deck:
          "堤防、账簿、操练、火器、修船和漕运调度都需要人、材料、路线、权威、接受和维护。",
        summary:
          "你可能知道该怎么做，却缺工匠、工具、账册、资金、路线、安全、合法性，或能把试点维持成制度的人。",
        indexPoints: ["瓶颈诊断", "试点", "维护"],
        questions: [
          "资助试点、任命改革者、招募工匠、保护专业人群，或与反对者交易。",
          "先做地方小试，还是冒着政治反弹强行推广。",
          "把一次成功变成可维护制度，或承认它只是危机中的临时办法。",
        ],
        feedback: [
          {
            label: "瓶颈",
            text: "改革会指出缺的是知识、人才、材料、制造、资金、交通、权威还是接受度。",
          },
          {
            label: "阻力",
            text: "旧特权、派系、行会、军镇或地方社会会让好想法变慢、变贵或变形。",
          },
          {
            label: "维护",
            text: "制度化之后仍会因为断粮、断钱、人散、路线危险和腐败而衰退。",
          },
        ],
        guardrails: [
          "改革按瓶颈推进：知识、人才、材料、资金、路线、权威与接受度缺一都慢。",
          "成功先从试点长出来，再花代价推广；全国效果靠制度化，不靠一次点击。",
          "你知道该怎么做，也要把答案接进当时的社会执行条件里。",
        ],
        relatedSlugs: ["economy-relief", "society-actors", "legitimacy-rumors"],
      },
      {
        slug: "legitimacy-rumors",
        category: "正统与舆论",
        source: "docs/sot/high-level/18-ideology-legitimacy-and-information.md",
        shortTitle: "正统舆论",
        title: "正统、舆论与谣言：发生了什么不等于别人相信了什么",
        deck:
          "赈济、军功、继统、税役、军镇自治和外部承认，会被不同人群用不同方式理解。",
        summary:
          "士绅、商人、军户、流民、官员和敌对势力会按自己的利益、记忆、信息渠道和观念框架理解你的行动。",
        indexPoints: ["多维正统", "议题立场", "谣言传播"],
        questions: [
          "颁诏、举行仪式、公布赈济账目、惩处贪官或奖励忠义群体。",
          "压制谣言、反制谣言、借士绅传达、派可信使者，或公开条约。",
          "为了短期安全牺牲声望，或为了正统性拒绝一个实用交易。",
        ],
        feedback: [
          {
            label: "受众",
            text: "同一行动可能让流民安心，让商人警惕，让军镇觉得朝廷软弱。",
          },
          {
            label: "消息",
            text: "信息会有抵达、失真、可信度、情绪强度和反叙事。",
          },
          {
            label: "记忆",
            text: "成功赈济、失败征税、欠饷谣言和派系争端会影响后续接受度。",
          },
        ],
        guardrails: [
          "正统性按人群与议题分开读：同一行动在不同受众眼里可以完全不同。",
          "宣传要接住物资与军事现实；空话压不住断粮与溃败。",
          "舆论与报告锚定已发生的事；叙事解释局面，不发明模拟中没有的事实。",
        ],
        relatedSlugs: ["society-actors", "diplomacy-recognition", "historical-consequences"],
      },
      {
        slug: "intelligence-security",
        category: "情报与不确定",
        source: "docs/sot/high-level/26-intelligence-espionage-and-security.md",
        shortTitle: "情报安全",
        title: "情报与安全：世界有真相，你只有报告",
        deck:
          "报告可能可靠、模糊、迟到、被夸大、被截获，甚至是对方故意放出的诱饵。",
        summary:
          "情报系统让隐藏或有争议的现实变成玩法：你要决定查什么、信谁、等不等核验、要不要保护信使、要不要清查泄密，以及何时按不完整情报行动。",
        indexPoints: ["来源置信", "陈旧度", "反情报"],
        questions: [
          "派侦骑、收买线人、截获信使、核验粮仓、侦察军情或保护自己的消息线。",
          "用商人、幕僚、胥吏、地方士绅、军中斥候或叛逃者提供的不同报告互相校验。",
          "提高保密与反情报强度，同时承担信任下降和误告风险。",
        ],
        feedback: [
          {
            label: "报告",
            text: "情报会显示来源类型、可靠性、保真度、置信度、观察时间和到达时间。",
          },
          {
            label: "矛盾",
            text: "两份报告可能都不是谎言，只是来自不同时间、来源和观察范围。",
          },
          {
            label: "暴露",
            text: "用掉一个情报网络可能救下一次行动，也可能让这个渠道以后不再安全。",
          },
        ],
        guardrails: [
          "你只掌握本席位能收集、拦截或买到的报告，盲区本身就是策略。",
          "情报围绕侦察、线人、核验、保密与暴露风险展开，服务命令与战役。",
          "报告改变角色与 AI 认为自己知道什么；世界真相仍按模拟推进。",
        ],
        relatedSlugs: ["player-seat", "orders-messages", "battle-engagement"],
      },
      {
        slug: "historical-consequences",
        category: "历史因果",
        source: "docs/sot/high-level/25-historical-state-modifiers-and-causal-memory.md",
        shortTitle: "历史后果",
        title: "历史因果：世界不等玩家才开始运转",
        deck:
          "拥立争议、军镇功劳、派系记忆、欠饷、失败赈济和过去交易，会在玩家介入之外继续推动局势。",
        summary:
          "角色、群体与机构按资源、利益、信息和既有关系行动；结构压力使无人干预的模拟大体沿历史方向发展。有因果根据的介入可以改变进程，也必须承受留下的后效。",
        indexPoints: ["无人干预走向", "因果报告", "恢复余地"],
        questions: [
          "面对一个已经有旧账的军镇或派系，是补偿、威胁、换人还是绕开它。",
          "用一次交易解决眼前危机，同时承担它在未来变成筹码的可能。",
          "阅读因果报告，判断直接触发、结构压力、连锁后果与尚存的恢复路径。",
        ],
        feedback: [
          {
            label: "因果",
            text: "报告会区分直接触发、长期压力与传播路径，说明结果为何发生。",
          },
          {
            label: "后效",
            text: "选择会留下信誉、旧怨、制度惯例与物质损失，继续改变后来的接受度和谈判。",
          },
          {
            label: "恢复",
            text: "报告会标出仍可修复、需要长期恢复或已经难以挽回的部分。",
          },
        ],
        guardrails: [
          "结构压力推着无人干预的世界大体向历史走；有因果的介入可以改势，也会留下后效。",
          "人物与局势判断尽量有来源、有不确定性；你读的是压力与机会，不是隐藏惩罚表。",
          "已经结算的结果会作为信誉、旧怨与物质损失留下；后续解释不能倒改过去。",
        ],
        relatedSlugs: ["legitimacy-rumors", "authority-control", "diplomacy-recognition"],
      },
    ],
  },
  en: {
    kicker: "Gameplay",
    title: "Limited power makes strategy matter.",
    body:
      "Enter a living historical society from a particular character's seat. You govern within the authority, knowledge, resources, institutions, and distance available to you—and live with what happens after an order leaves your desk.",
    heroImageAlt:
      "A relay station courtyard at dusk where a courier changes horses while officials study a map inside.",
    pillarsTitle: "Four Gameplay Pillars",
    pillars: [
      {
        label: "Authority",
        text: "Orders leave the desk; resistance begins.",
      },
      {
        label: "Places",
        text: "One place can hold many powers.",
      },
      {
        label: "History",
        text: "Pressure follows causes, not scripts.",
      },
      {
        label: "Setting",
        text: "Land, water, and people enter the game.",
      },
    ],
    systemIndex: {
      kicker: "Gameplay Systems",
      title: "These systems determine whether intent can become reality.",
      body:
        "These are the project's player-facing design directions: organize plans around two to four visible strategic priorities, work through delegation and institutional routines, and judge consequences through dated, sourced reports.",
      ariaLabel: "Gameplay system pages",
      sourceLabel: "Play Focus",
      openLabel: "Explore",
    },
    systemGroups: [
      {
        id: "seat-command",
        label: "Seat and Orders",
        title: "Who Are You, and Who Can You Actually Direct?",
        body:
          "You choose a position of power: emperor, grand secretary, field commander, garrison leader, or staff adviser—each with different authority, sightlines, resources, and risks. The interface presents the current plan as two to four visible strategic priorities.",
        question:
          "When you want to change the situation, start by asking who can be ordered, who must be persuaded, and which affairs must keep moving through offices and local routines.",
        steps: [
          "Choose a historical seat with real authority and blind spots, then define two to four current strategic priorities.",
          "Turn intent into direct orders, formal requests, private influence, or work delegated through officials and existing institutions.",
          "Re-plan around estimated delivery, expected reporting, and actual acknowledgement.",
        ],
        systemSlugs: [
          "player-seat",
          "orders-messages",
          "authority-control",
          "intelligence-security",
        ],
      },
      {
        id: "local-friction",
        label: "Local Friction",
        title: "Why Does the Local World Push Back?",
        body:
          "Counties, gentry, salt merchants, soldiers, refugees, roads, and granaries decide whether an arrived order becomes action, delay, bargaining, or a new crisis.",
        question:
          "You manage whether local society is willing, able, and brave enough to make your intent real.",
        steps: [
          "Read who actually controls a place, and who can provide cooperation.",
          "Divide scarce resources between relief, requisition, route repair, route security, credit, and tax pressure.",
          "Watch morale, refugees, food prices, rumor, and legitimacy pull on each other.",
        ],
        systemSlugs: [
          "society-actors",
          "place-flow",
          "economy-relief",
          "legitimacy-rumors",
        ],
      },
      {
        id: "war-pressure",
        label: "War Pressure",
        title: "Why Is War Harder Than Pushing a Front?",
        body:
          "Armies can defend, contest crossings, and pressure local society, but they also consume grain and pay, damage order, and create debt. Battles emerge from routes, supply, commanders, morale, and local tolerance.",
        question:
          "Getting forces to the front is only the start. You decide how armies are fed, trusted, and restrained.",
        steps: [
          "Choose what to defend, rescue, abandon, and whether your orders can arrive in time.",
          "Trade off battle risk, supply pressure, local tolerance, and expanding military power.",
          "Deal with occupation, defeat, discipline, and front-line autonomy.",
        ],
        systemSlugs: [
          "war-occupation",
          "battle-engagement",
          "orders-messages",
          "economy-relief",
        ],
      },
      {
        id: "cascading-consequence",
        label: "Consequences",
        title: "How Does the Situation Continue—and How Do You Change It?",
        body:
          "Recognition, truces, loans, reform, rumor, and historical memory keep working whether or not you intervene. Structural pressures keep an unattended simulation broadly historical; your choices alter what costs the next round can bear.",
        question:
          "A compromise may buy time and make allies doubt you. A reform may save revenue and provoke entrenched interests. You need to understand why consequences occurred and what room for recovery remains.",
        steps: [
          "Use diplomacy, recognition, and exchange to buy time and create room for military action.",
          "Read causal reports that separate immediate triggers, long pressures, and remaining paths to recovery.",
          "Let earlier choices persist as credibility, grievances, institutional precedent, and material loss.",
        ],
        systemSlugs: [
          "diplomacy-recognition",
          "reform-institutions",
          "historical-consequences",
          "legitimacy-rumors",
        ],
      },
    ],
    systemDetail: {
      kicker: "Gameplay System",
      sourceLabel: "Play Focus",
      overviewTitle: "What It Is",
      questionsTitle: "What You Do",
      feedbackTitle: "What You See",
      guardrailsTitle: "Where Strategy Comes From",
      relatedTitle: "Keep Exploring",
      backLabel: "Back to Gameplay",
    },
    systems: [
      {
        slug: "player-seat",
        category: "Role and Perspective",
        source: "docs/sot/high-level/21-player-seat-ai-and-multiplayer.md",
        shortTitle: "Player Seat",
        title: "Player Seat: Office Defines What You Know",
        deck:
          "Choose a historical person or power position, then enter the crisis through that seat's permissions, channels, duties, and survival pressure.",
        summary:
          "The same Southern Ming crisis looks different from the Hongguang Emperor, Ma Shiying, Shi Kefa, a Jiangbei commander, or a low-power staff adviser. Your seat determines what you can command, whom you can only petition, which resources you can move, which institutions you depend on, and how far information must travel.",
        indexPoints: ["Playable roles", "Permission limits", "Continuity"],
        questions: [
          "Choose a high office with fragile survival, or a narrower command with more personal continuity.",
          "Act through office power, memorials, envoys, personal ties, and bargains while delegating routine affairs to officials and institutions.",
          "After loss of office, exile, surrender, death, or succession, move to a successor seat or observer view only when the current state leaves a valid continuity path; otherwise the campaign may end.",
        ],
        feedback: [
          {
            label: "Permission",
            text: "Command previews distinguish direct orders, constrained requests, and intentions beyond your authority.",
          },
          {
            label: "Perspective",
            text: "You see the reports, rumors, and estimates available to your seat.",
          },
          {
            label: "Continuity",
            text: "Loss of office, exile, surrender, death, and succession change the available seat. The campaign may continue through a successor or observer view only when the current state permits; otherwise it may reach a terminal end.",
          },
        ],
        guardrails: [
          "You enter with modern knowledge, yet you can act only through era-internal offices, relationships, and documentary channels.",
          "Each role carries different authority, sightlines, resources, and risks—strategy grows from those differences.",
          "Your seat plugs you into offices, armies, finance, routes, and local acceptance; without those conditions, intent rarely becomes reality.",
        ],
        relatedSlugs: ["orders-messages", "authority-control", "intelligence-security"],
      },
      {
        slug: "orders-messages",
        category: "Orders and Time",
        source: "docs/sot/high-level/24-communication-command-and-natural-clock.md",
        shortTitle: "Orders",
        title: "Orders and Messages: Power Has to Arrive",
        deck:
          "Drafting, queues, messengers, travel, acknowledgement, stale reports, and local acceptance all constrain a command.",
        summary:
          "After an order leaves your desk, it still passes through staff drafting, node queues, couriers, and local validation. The planning view organizes intent into two to four visible strategic priorities, while routine affairs can continue through delegated officials and institutions.",
        indexPoints: ["Strategic priorities", "Delegated routines", "Command lifecycle"],
        questions: [
          "Set two to four current strategic priorities, deciding which to press personally and which to leave to officials or established routines.",
          "Send an urgent order through a fast, risky route or choose a slower, more reliable channel.",
          "Before the expected report date, wait, extend authority, issue another order, or accept the risk of acting without news.",
        ],
        feedback: [
          {
            label: "Dates",
            text: "Orders show estimated delivery and expected reporting dates; reports show both observation and arrival dates.",
          },
          {
            label: "Lifecycle",
            text: "You track drafting, dispatch, arrival, acceptance, execution, and reporting.",
          },
          {
            label: "Options",
            text: "Delay, refusal, or distorted execution explains its cause and shows whether rerouting, reinforcement, withdrawal, delegation, or accepting loss remains possible.",
          },
        ],
        guardrails: [
          "Plans organize intent into two to four visible strategic priorities; routines move through delegation, while urgent orders queue, travel, and wait for acknowledgement.",
          "Distant places keep running under existing conditions until an order arrives and is accepted.",
          "You can change time speed, but the world and orders already in motion keep advancing—so you re-plan under delay.",
        ],
        relatedSlugs: ["player-seat", "place-flow", "battle-engagement"],
      },
      {
        slug: "authority-control",
        category: "Authority and Places",
        source: "docs/sot/high-level/09-authority-and-control.md",
        shortTitle: "Control",
        title: "Authority Control: One Place, Several Powers",
        deck:
          "The court may hold legitimacy, the army holds force, gentry hold execution, merchants hold credit, and enemies hold pressure.",
        summary:
          "You may have a legal claim without tax access; an army may impose order without civil rule; and local elites can decide whether an order behaves like an order at all.",
        indexPoints: ["Layered control", "Local cooperation", "Decaying reach"],
        questions: [
          "Spend scarce administrative attention on a city, crossing, or military command.",
          "Appoint officials, send inspectors, recognize military power, bargain with elites, or stabilize by force.",
          "Take short-term coercive gains while accepting long-term legitimacy and cooperation damage.",
        ],
        feedback: [
          {
            label: "Dimensions",
            text: "Places show civil, military, fiscal, legitimacy, order, and threat pressure separately.",
          },
          {
            label: "Inertia",
            text: "Control usually shifts gradually and needs sustained effort to change.",
          },
          {
            label: "Cause",
            text: "Reports name distance, security, elite cooperation, military pressure, or legitimacy as bottlenecks.",
          },
        ],
        guardrails: [
          "Map color is only the surface—you manage claims, garrisons, revenue, and local willingness separately.",
          "Each Jiangbei command has its own leaders, supply, and interests, and must be handled on its own terms.",
          "You change conditions through political, administrative, military, and bargain actions—not by editing control values.",
        ],
        relatedSlugs: ["society-actors", "war-occupation", "legitimacy-rumors"],
      },
      {
        slug: "society-actors",
        category: "Society and Characters",
        source: "docs/sot/high-level/10-people-and-agency.md",
        shortTitle: "Society",
        title: "Society and Characters: People Push Back",
        deck:
          "Refugees, gentry, salt merchants, transport guilds, military households, officials, and generals cooperate, bargain, obstruct, or defect.",
        summary:
          "Population creates hunger, tax, migration, and unrest pressure. Special groups provide grain, silver, boats, artisans, training, reputation, and obstruction. Characters decide how orders are executed, bent, or betrayed.",
        indexPoints: ["Mass pressure", "Special groups", "Key people"],
        questions: [
          "Relieve refugees, placate gentry, borrow from merchants, or prioritize armies and offices.",
          "Protect a useful group, grant privilege, or suppress it and risk backlash.",
          "Appoint, reward, punish, investigate, mediate, or remove a person who can make or break execution.",
        ],
        feedback: [
          {
            label: "Livelihood",
            text: "Food prices, taxes, migration, unrest, and order gradually change local tolerance.",
          },
          {
            label: "Leverage",
            text: "Salt merchants can avert famine while demanding tax or salt concessions.",
          },
          {
            label: "People",
            text: "Loyalty, faction, competence, reputation, and ambition shape execution risk.",
          },
        ],
        guardrails: [
          "Society enters play as mass pressure, key groups, and key people—so you can grab the real levers.",
          "Strategy focuses on groups and characters who can move grain, silver, boats, reputation, obstruction, and execution.",
          "Armies run on military institutions and supply pressure, and must be managed as military power centers.",
        ],
        relatedSlugs: ["authority-control", "economy-relief", "legitimacy-rumors"],
      },
      {
        slug: "place-flow",
        category: "Map and Routes",
        source: "docs/sot/high-level/12-place-graph-flow-and-historical-geography.md",
        shortTitle: "Routes",
        title: "Geography and Flow: The Map Can Clog",
        deck:
          "Rivers, canals, ferries, wetlands, ports, and relay roads decide how orders, grain, armies, refugees, and rumors move.",
        summary:
          "Two cities are not the same distance for every purpose. Routes have capacity, safety, seasonality, local cooperation, and war disruption, turning the map into a historical network of bottlenecks.",
        indexPoints: ["Rivers and canals", "Bottlenecks", "Reach fields"],
        questions: [
          "Repair a canal, secure a ferry, reroute through the Yangtze, or negotiate passage.",
          "Treat grain, armies, messages, refugees, and rumors as different kinds of movement.",
          "Reassess what can still be reached when flood, war, or disorder breaks the usual route.",
        ],
        feedback: [
          {
            label: "Bottleneck",
            text: "The game tells you whether distance, ferries, capacity, security, season, or cooperation is blocking you.",
          },
          {
            label: "Route",
            text: "Grain may prefer water, urgent messages may prefer couriers, and armies may be slowed by wetland and supply.",
          },
          {
            label: "Change",
            text: "Geography changes with era, scenario, flood, war, and player action.",
          },
        ],
        guardrails: [
          "The map is a network where orders, grain, armies, and rumors can clog—securing and rerouting paths is strategy.",
          "Route feedback stays readable: you can see whether distance, ferries, capacity, security, or cooperation is blocking you.",
          "Frontier and natural zones carry travel, season, and supply cost, and must be handled on those terms.",
        ],
        relatedSlugs: ["orders-messages", "economy-relief", "war-occupation"],
      },
      {
        slug: "economy-relief",
        category: "Economy and Livelihood",
        source: "docs/sot/high-level/13-economy-production-and-industry.md",
        shortTitle: "Relief",
        title: "Economy and Relief: Grain, Silver, and Credit Run Short",
        deck:
          "You divide scarce material between relief, army supply, tax extraction, dike repair, route security, debt, and requisition.",
        summary:
          "The economy focuses on production, consumption, transport, taxation, stockpiles, price pressure, and war priorities. A rich region may fail to feed the front; opening granaries saves lives and empties next month's reserve.",
        indexPoints: ["Food pressure", "Granaries", "Merchant credit"],
        questions: [
          "Open granaries, reserve grain for the army, borrow from salt merchants, or absorb unrest.",
          "Reduce taxes to preserve support, or increase extraction to keep armies and offices alive.",
          "Repair dikes, repair boats, secure convoys, audit ledgers, requisition grain, or restrict exports.",
        ],
        feedback: [
          {
            label: "Shortage",
            text: "Food pressure links to unrest, migration, tax compliance, legitimacy, and merchant leverage.",
          },
          {
            label: "Stores",
            text: "How much grain exists, whether it can move, and how much arrives can matter more than total output.",
          },
          {
            label: "Debt",
            text: "Merchant credit buys time while adding future fiscal and political cost.",
          },
        ],
        guardrails: [
          "The economy focuses on grain, silver, salt, transport, and credit—the shortages that define a crisis.",
          "Goods live in stores, routes, and places; opening granaries saves lives and can empty next month's army reserve.",
          "The Southern Ming demo prioritizes relief, army supply, and fiscal pressure, leaving later industrial expansion to later chapters.",
        ],
        relatedSlugs: ["society-actors", "place-flow", "war-occupation"],
      },
      {
        slug: "war-occupation",
        category: "War and Military Power",
        source:
          "docs/sot/high-level/14-war-supply-occupation-and-military-institutions.md",
        shortTitle: "War",
        title: "War and Occupation: Armies Are Shield and Debt",
        deck:
          "Armies need grain, pay, routes, commanders, institutions, and local tolerance; they can save a state or hollow it out.",
        summary:
          "Forces arise from military institutions, consume grain and society, obey or resist command, and reshape local authority through garrisoning, route security, occupation, and requisition.",
        indexPoints: ["Pay and supply", "Commander autonomy", "Occupation cost"],
        questions: [
          "Feed one army while abandoning another place, relief plan, or office budget.",
          "Use a capable but dangerous commander, or a safer but weaker arrangement.",
          "Conciliate, repress, requisition, install administration, or recognize autonomy after occupation.",
        ],
        feedback: [
          {
            label: "Supply",
            text: "Food, pay, equipment, transport, and route danger quickly affect morale and execution.",
          },
          {
            label: "Autonomy",
            text: "A force sustained by a commander, local revenue, or private network begins to look like a power center.",
          },
          {
            label: "Occupation",
            text: "Garrisons raise military presence while potentially lowering local acceptance, tax access, and legitimacy.",
          },
        ],
        guardrails: [
          "At the strategic layer you manage grain, pay, command, commanders, and local tolerance—how armies are fed, trusted, and restrained.",
          "After occupation you still conciliate, install offices, requisition, or recognize autonomy to turn military presence into lasting order.",
          "Jiangbei commands differ by leader and interest, so their reactions and leverage differ as well.",
        ],
        relatedSlugs: ["battle-engagement", "economy-relief", "authority-control"],
      },
      {
        slug: "battle-engagement",
        category: "Battle and Campaigns",
        source: "docs/sot/high-level/15-battle-and-engagement-resolution.md",
        shortTitle: "Battles",
        title: "Battle Resolution: Conditions Decide Victory",
        deck:
          "A battle can turn on late orders, broken supply, wetland deployment, bad guides, morale, or an unpaid camp.",
        summary:
          "Battle resolves a military operation in a particular place. It considers command, supply, morale, terrain, city defense, local cooperation, intelligence, and bounded contingency, then feeds results back into armies, places, economy, and legitimacy.",
        indexPoints: ["Command fidelity", "Local conditions", "Aftereffects"],
        questions: [
          "Seek a decisive clash, escort grain, hold a city, suppress disorder, or avoid battle for political room.",
          "Rush another order while the battle can still change, or authorize the commander to improvise.",
          "Accept costly victory, stalemate, withdrawal, or temporary route loss and its chain effects.",
        ],
        feedback: [
          {
            label: "Conditions",
            text: "Battle reports break down command, supply, morale, terrain, local support, and intelligence.",
          },
          {
            label: "Chance",
            text: "Rain, captured couriers, false guides, disease, and pay failure arise from existing risks.",
          },
          {
            label: "Cost",
            text: "Victory can leave fatigue, arrears, resentment, merchant leverage, or commander prestige.",
          },
        ],
        guardrails: [
          "Battle reports break down command, supply, morale, terrain, and local support so you can see where victory came from.",
          "Rain, intercepted messages, disease, and pay failure arise from existing risks—chance remains traceable.",
          "Key battles resolve at high fidelity; background clashes feed lighter pressure into supply, morale, and local order.",
        ],
        relatedSlugs: ["war-occupation", "orders-messages", "intelligence-security"],
      },
      {
        slug: "diplomacy-recognition",
        category: "Diplomacy and Promises",
        source: "docs/sot/high-level/16-diplomacy-alliances-and-international-order.md",
        shortTitle: "Diplomacy",
        title: "Diplomacy and Recognition: Every Promise Has a Cost",
        deck:
          "Recognition, ceasefires, grain loans, trade access, cooperation, and autonomy bargains solve one pressure while moving another inside.",
        summary:
          "You negotiate who recognizes whom, who promises what, who can execute it, who opposes it internally, what breach would damage, and how the bargain changes legitimacy and local power.",
        indexPoints: ["Recognition", "Obligations", "Credibility"],
        questions: [
          "Recognize a military command or outside power in exchange for defense, grain, silver, or time.",
          "Promise aid, request aid, propose ceasefire, open markets, or support a defection.",
          "Publicize an agreement for legitimacy, or hide it to avoid internal backlash.",
        ],
        feedback: [
          {
            label: "Clauses",
            text: "Agreements break into concrete promises that still need time, routes, and internal conditions to deliver.",
          },
          {
            label: "Internal",
            text: "Factions, commanders, gentry, merchants, and populations react differently to the same pact.",
          },
          {
            label: "Credibility",
            text: "Fulfilling, delaying, breaking, or bluffing changes future negotiation space.",
          },
        ],
        guardrails: [
          "Diplomacy turns on recognition, clauses, capacity to deliver, and credibility—every promise has someone who must pay.",
          "Aid still faces routes, supply, and the other side's internal politics; a promise only helps if it can move.",
          "Trade and recognition buy time and resources while also shifting legitimacy and local power.",
        ],
        relatedSlugs: ["legitimacy-rumors", "intelligence-security", "authority-control"],
      },
      {
        slug: "reform-institutions",
        category: "Reform and Capability",
        source:
          "docs/sot/high-level/17-knowledge-reform-technology-and-institutions.md",
        shortTitle: "Reform",
        title: "Reform and Institutions: Knowing Is Not Enough",
        deck:
          "Dikes, ledgers, drill, firearms, boat repair, and convoy scheduling need people, materials, routes, authority, acceptance, and upkeep.",
        summary:
          "You may know what should be done while lacking artisans, tools, ledgers, funding, routes, security, legitimacy, or people who can turn a pilot into an institution.",
        indexPoints: ["Diagnosis", "Pilots", "Upkeep"],
        questions: [
          "Fund a pilot, appoint a reformer, recruit craftsmen, protect specialists, or bargain with opponents.",
          "Start locally, or force expansion and risk political backlash.",
          "Turn one success into a maintainable institution, or admit it was a crisis workaround.",
        ],
        feedback: [
          {
            label: "Bottleneck",
            text: "Reforms identify missing knowledge, people, material, manufacturing, money, transport, authority, or acceptance.",
          },
          {
            label: "Resistance",
            text: "Old privileges, factions, guilds, commanders, and local society can slow, raise the cost, or distort the plan.",
          },
          {
            label: "Upkeep",
            text: "Institutions decay when grain, money, people, routes, safety, or integrity fail.",
          },
        ],
        guardrails: [
          "Reform advances by bottleneck: knowledge, people, materials, money, routes, authority, and acceptance all matter.",
          "Success grows from pilots, then costs to scale; nationwide effects come from institutions, not a single click.",
          "Knowing the answer still means fitting it into the era's social execution conditions.",
        ],
        relatedSlugs: ["economy-relief", "society-actors", "legitimacy-rumors"],
      },
      {
        slug: "legitimacy-rumors",
        category: "Legitimacy and Rumor",
        source: "docs/sot/high-level/18-ideology-legitimacy-and-information.md",
        shortTitle: "Legitimacy",
        title: "Legitimacy and Rumor: What Happened Is Not What People Believe",
        deck:
          "Relief, victory, succession, taxation, military autonomy, and recognition are interpreted differently by different audiences.",
        summary:
          "Gentry, merchants, military households, refugees, officials, and enemies interpret your actions through their interests, memory, information channels, and ideas of order.",
        indexPoints: ["Multi-sided legitimacy", "Topic stance", "Rumor spread"],
        questions: [
          "Issue edicts, hold rites, publish relief accounts, punish corruption, or reward loyalty.",
          "Suppress rumor, counter rumor, speak through gentry, send trusted envoys, or publicize a treaty.",
          "Sacrifice reputation for immediate safety, or refuse a practical bargain for legitimacy.",
        ],
        feedback: [
          {
            label: "Audience",
            text: "One action may reassure refugees, worry merchants, and make a military command see weakness.",
          },
          {
            label: "Message",
            text: "Information has reach, distortion, credibility, emotional charge, and counternarrative.",
          },
          {
            label: "Memory",
            text: "Relief success, failed taxation, pay rumors, and factional disputes affect future acceptance.",
          },
        ],
        guardrails: [
          "Legitimacy is read by audience and issue: the same action can land differently with each group.",
          "Propaganda has to meet material and military reality; empty words will not cover empty granaries or broken armies.",
          "Rumor and reports stay anchored to what happened; narrative explains the state without inventing facts the simulation never produced.",
        ],
        relatedSlugs: ["society-actors", "diplomacy-recognition", "historical-consequences"],
      },
      {
        slug: "intelligence-security",
        category: "Intelligence and Uncertainty",
        source: "docs/sot/high-level/26-intelligence-espionage-and-security.md",
        shortTitle: "Intelligence",
        title: "Intelligence and Security: The World Has Truth; You Have Reports",
        deck:
          "A report may be reliable, vague, late, exaggerated, intercepted, or bait deliberately released by someone else.",
        summary:
          "Intelligence makes hidden or contested reality playable. You choose what to learn, whom to trust, whether to verify, whether to protect couriers, how hard to hunt leaks, and when to act on incomplete knowledge.",
        indexPoints: ["Source confidence", "Staleness", "Counterintelligence"],
        questions: [
          "Scout, bribe informants, intercept couriers, audit granaries, assess field forces, or protect your own channels.",
          "Compare merchant, staff, clerk, gentry, scout, and defector reports against each other.",
          "Increase secrecy and counterintelligence while accepting trust and false-accusation costs.",
        ],
        feedback: [
          {
            label: "Report",
            text: "Intelligence shows source class, reliability, fidelity, confidence, observation time, and arrival time.",
          },
          {
            label: "Conflict",
            text: "Two reports can both be sincere while differing in time, source, and scope.",
          },
          {
            label: "Exposure",
            text: "Spending an intelligence network can save an operation and make that channel unsafe later.",
          },
        ],
        guardrails: [
          "You only have the reports your seat can collect, intercept, or buy—blind spots are part of the strategy.",
          "Intelligence centers on scouting, informants, verification, secrecy, and exposure risk in service of orders and campaigns.",
          "Reports change what characters and AI believe they know; world truth still advances through the simulation.",
        ],
        relatedSlugs: ["player-seat", "orders-messages", "battle-engagement"],
      },
      {
        slug: "historical-consequences",
        category: "Historical Consequences",
        source: "docs/sot/high-level/25-historical-state-modifiers-and-causal-memory.md",
        shortTitle: "Consequences",
        title: "Historical Consequences: The World Keeps Moving",
        deck:
          "Enthronement disputes, military merit, factional memory, arrears, failed relief, and past bargains keep moving the situation beyond player intervention.",
        summary:
          "Characters, groups, and institutions act from resources, interests, information, and existing relationships. Structural pressures keep an unattended simulation broadly historical. Causally grounded intervention can redirect events and must carry its aftereffects.",
        indexPoints: ["Unattended direction", "Causal reports", "Recovery room"],
        questions: [
          "Compensate, threaten, replace, or work around a command or faction with old grievances.",
          "Solve a crisis with a bargain while accepting that it may become leverage later.",
          "Read causal reports to separate the immediate trigger, structural pressure, cascading effects, and remaining paths to recovery.",
        ],
        feedback: [
          {
            label: "Causes",
            text: "Reports distinguish immediate triggers, long pressures, and transmission paths to explain why an outcome occurred.",
          },
          {
            label: "Aftereffects",
            text: "Choices leave credibility, grievances, institutional precedent, and material loss that shape later acceptance and bargaining.",
          },
          {
            label: "Recovery",
            text: "Reports mark what can still be repaired, what needs long recovery, and what is becoming hard to reverse.",
          },
        ],
        guardrails: [
          "Structural pressures keep an unattended world broadly historical; causally grounded intervention can redirect events and leave aftereffects.",
          "Character and situation judgments stay sourced and uncertain where the record is thin—you read pressure and opportunity, not a hidden penalty table.",
          "Settled results remain as credibility, grievances, and material loss; later explanation cannot rewrite what already resolved.",
        ],
        relatedSlugs: ["legitimacy-rumors", "authority-control", "diplomacy-recognition"],
      },
    ],
  },
};
