import { type GameplayContent, type Locale } from "../types";

export const gameplayContent: Record<Locale, GameplayContent> = {
  "zh-Hans": {
    kicker: "玩法介绍",
    title: "策略，生于受限的权力。",
    body:
      "你不是站在地图外拖动棋子，而是坐进一个会迟疑、会缺粮、会传错话、会被地方社会反推的政权。",
    heroImageAlt:
      "暮色中的驿站庭院，信使携文书换马，屋内官员围着地图商议命令。",
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
      title: "这些系统决定你的命令能不能变成现实。",
      body:
        "下面只列你会在游戏里直接体验到的玩法系统：你会做什么选择、看到什么反馈、承担什么代价。",
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
          "你先选择一个权力席位，而不是选择一个抽象国家。皇帝、阁臣、督师、军镇主将和幕府赞画拥有不同的权限、视野和风险；同一条命令，在不同席位手里会有不同的成本。",
        question:
          "当你想改变局势时，第一件事不是点哪里，而是弄清楚谁听你的、谁只会考虑你的请求。",
        steps: [
          "选择一个有权力也有盲区的历史席位。",
          "把想法变成直接命令、正式请求、私人影响或情报行动。",
          "在消息迟到、权限不足和地方拒绝之间重新安排优先级。",
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
          "州县、士绅、盐商、军户、难民、道路和粮仓不是背景。它们决定命令抵达以后，是变成执行、拖延、讨价还价，还是新的危机。",
        question:
          "你真正管理的不是地图颜色，而是地方愿不愿意、能不能、敢不敢把你的意图变成现实。",
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
        title: "战争为什么不只是推线？",
        body:
          "军队能守城、争渡、威慑地方，也会消耗粮饷、破坏秩序、制造债务。战斗不是孤立结算，而是路线、补给、将领、士气和地方承受力共同压出来的结果。",
        question:
          "你不是把兵力拖到前线就结束了；你还要决定军队如何被养活、被信任、被约束。",
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
        title: "局势如何越滚越大？",
        body:
          "承认、休战、借粮、改革、谣言和历史记忆都会改变下一轮选择。游戏不会只问你是否赢下一场危机，还会追问你用什么代价把局势推到了下一步。",
        question:
          "一次妥协可能换来喘息，也可能让盟友怀疑你；一次改革可能救财政，也可能引爆既得利益。",
        steps: [
          "用外交、承认和交易争取时间，而不是只靠军事解决一切。",
          "推动制度调整，同时承担推行成本和地方反弹。",
          "让之前的选择以修正、声望、仇恨和惯例的形式留在局中。",
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
      guardrailsTitle: "它不会变成什么",
      relatedTitle: "继续了解",
      backLabel: "返回玩法",
    },
    systems: [
      {
        slug: "player-seat",
        category: "角色与视角",
        source: "docs/sot/high-level/21-player-seat-ai-and-multiplayer.md",
        shortTitle: "角色席位",
        title: "角色席位：你不是全知上帝",
        deck:
          "选择一个历史人物或权力位置，带着他的权限、消息渠道、责任和生存压力进入危局。",
        summary:
          "同一场南明危机，弘光皇帝、马士英、史可法、江北诸镇主将和低权力幕府赞画看到的世界并不一样。你能直接下令的范围、能请求谁、谁会无视你、哪些消息会迟到，都由席位决定。",
        indexPoints: ["可选角色", "权限边界", "信息视角"],
        questions: [
          "选一个高位但脆弱的朝廷角色，还是选一个窄权但更能自保的军镇角色。",
          "用自己的职权直接下令，或通过奏报、使节、私人关系和交易去影响别人。",
          "在死亡、失势、流亡或继承之后，选择新的连续席位继续这局故事。",
        ],
        feedback: [
          {
            label: "权限",
            text: "命令界面会区分直接命令、需要对方接受的请求，以及完全越权的想法。",
          },
          {
            label: "视角",
            text: "你看到的是这个席位能得到的报告、传闻和估计，而不是整张地图的真相。",
          },
          {
            label: "存续",
            text: "角色的生死和职位变化不会只是结算画面，而会改变你能继续掌握的权力。",
          },
        ],
        guardrails: [
          "不会让玩家因为知道历史结果就直接获得超自然能力。",
          "不会把所有角色都做成对称国家玩家。",
          "不会让角色席位绕过官职、军队、财政、交通和地方接受度。",
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
          "没有行动点。你的限制来自起草、排队、信使、路途、回执、过期报告和地方是否接受。",
        summary:
          "命令不是点击后全地图立刻生效。它会变成一份指令，经过幕僚起草、节点排队、信使传递、地方校验，再变成行动或被拒绝。消息回来也需要时间，所以你常常在过期情报上做决定。",
        indexPoints: ["自然时钟", "信使延迟", "过期报告"],
        questions: [
          "把急令走最快但危险的路线，还是走慢一点但更可靠的渠道。",
          "把权力委任给前线或地方，让他们更快行动，同时承担失控风险。",
          "在回执未到时继续催逼、等待确认，或改用另一条命令链。",
        ],
        feedback: [
          {
            label: "抵达",
            text: "你会看到预计抵达时间、实际延误、信道拥堵和途中风险。",
          },
          {
            label: "回执",
            text: "命令是否收到、是否接受、是否执行，可能要过几天才知道。",
          },
          {
            label: "过期",
            text: "救援命令可能到得太晚，税报可能已经失真，战报可能只说明过去的局势。",
          },
        ],
        guardrails: [
          "不会用行动点把复杂政治压力简化成每月点数。",
          "不会允许远方状态在命令抵达前被玩家瞬间改写。",
          "不会把暂停做成冻结世界后随便重排所有命令的玩法。",
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
          "地图上的地点不是简单的我方或敌方。你可能拥有法理宣称，却没有财政汲取；军队能压住治安，却不能替文官建立统治；地方精英愿意合作时，命令才更像命令。",
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
            text: "权力控制通常缓慢移动，不会因为一道命令立刻翻面。",
          },
          {
            label: "原因",
            text: "报告会说明是距离、治安、精英合作、军镇压力还是合法性拖住了执行。",
          },
        ],
        guardrails: [
          "不会把地图涂色当作统治本身。",
          "不会把江北四镇合并成一个听话或不听话的整体。",
          "不会让玩家直接调数值，只能通过政治、行政、军事和交易行动改变局势。",
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
          "饥民、士绅、盐商、漕运行会、军户、官员和将领不是背景，他们会合作、讨价、阻挠或背离。",
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
          "不会变成每户每人的人口表。",
          "不会把所有职业都做成一个可点击派系。",
          "不会把军队当作普通特殊人群，军队有自己的军事制度和补给压力。",
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
          "把粮食、军队、信使和流民分别看作不同的流动，而不是同一条路线上的数字。",
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
          "不会把地理只做成漂亮背景图。",
          "不会一开始就做无法解释的完整市场均衡或最大流黑箱。",
          "不会把边疆或自然环境区当作免费空地。",
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
          "不会做成全商品自由市场模拟。",
          "不会把盐、粮、银、木材和运力变成抽象全国资源池。",
          "不会在南明演示版里提前展开工业化玩法。",
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
          "战争不只是兵力对比。军队从军事制度中产生，消耗粮饷和社会资源，受命令与忠诚限制，并在驻防、护路、占领和征发中重塑地方权力。",
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
          "不会先做细碎战术棋盘。",
          "不会让占领自动等于治理。",
          "不会把所有江北军镇的反应写成一个统一 AI。",
        ],
        relatedSlugs: ["battle-engagement", "economy-relief", "authority-control"],
      },
      {
        slug: "battle-engagement",
        category: "战斗与战役",
        source: "docs/sot/high-level/15-battle-and-engagement-resolution.md",
        shortTitle: "战斗结算",
        title: "战斗结算：胜负不是一个总战力数字",
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
          "不会用一个隐藏战斗力数值解释所有结果。",
          "不会让随机事件脱离已有风险凭空决定胜负。",
          "不会把所有背景战事都做成同等高保真战斗。",
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
          "外交不是关系数值。你谈的是谁承认谁、谁承诺什么、谁有能力兑现、谁在内部反对、违约会伤害什么信誉，以及这个交易会怎样改变正统性和地方权力。",
        indexPoints: ["承认", "义务", "可信度"],
        questions: [
          "承认一个军镇或外部权力，换取防御、粮、银或时间。",
          "承诺援助、请求援助、谈休战、开市场，或支持对方将领归附。",
          "公开协议争取正统，或保密协议避免内部反弹。",
        ],
        feedback: [
          {
            label: "条款",
            text: "协议会拆成具体承诺，而不是签完立刻产生魔法收益。",
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
          "不会用单一好感度代替外交。",
          "不会让盟友无视路线、补给和内部政治瞬间送来援助。",
          "不会把贸易和承认写成只有收益没有正统性代价的按钮。",
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
          "改革不是科技树解锁。你可能知道该怎么做，却缺工匠、工具、账册、资金、路线、安全、合法性，或能把试点维持成制度的人。",
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
          "不会做线性科技时代。",
          "不会让一个概念瞬间给全国加成。",
          "不会让现代玩家知识直接跳过当时社会的执行条件。",
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
          "正统性不是全国单条数值。士绅、商人、军户、流民、官员和敌对势力会按自己的利益、记忆、信息渠道和观念框架理解你的行动。",
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
          "不会把正统性做成一个万能声望条。",
          "不会让宣传凭空覆盖失败的物资和军事现实。",
          "不会让叙事 AI 发明模拟中没有发生的事实。",
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
          "不会给玩家全图全知。",
          "不会把情报做成独立刺杀小游戏。",
          "不会让报告改写真实世界状态；它只改变角色和 AI 认为自己知道什么。",
        ],
        relatedSlugs: ["player-seat", "orders-messages", "battle-engagement"],
      },
      {
        slug: "historical-consequences",
        category: "历史因果",
        source: "docs/sot/high-level/25-historical-state-modifiers-and-causal-memory.md",
        shortTitle: "历史后果",
        title: "历史因果：局势会记住来路",
        deck:
          "拥立争议、军镇功劳、派系记忆、欠饷、失败赈济和过去交易，会继续改变今天的选择。",
        summary:
          "历史不是固定事件树，也不是纯随机背景。它像一组有来源的压力：改变人们信谁、军队听谁、地方愿不愿意配合，以及某些命令为什么比纸面上更难执行。",
        indexPoints: ["历史压力", "决策后果", "可解释记忆"],
        questions: [
          "面对一个已经有旧账的军镇或派系，是补偿、威胁、换人还是绕开它。",
          "用一次交易解决眼前危机，同时承担它在未来变成筹码的可能。",
          "阅读报告里的因果说明，判断这次失败是新问题还是旧问题爆发。",
        ],
        feedback: [
          {
            label: "旧账",
            text: "报告会说明某个阻力来自拥立、派系、欠饷、失败赈济或前次命令。",
          },
          {
            label: "后效",
            text: "你的选择会留下记忆，影响信任、接受度、军令保真和未来谈判。",
          },
          {
            label: "弹性",
            text: "历史压力会推高风险，但不会强迫剧本按同一结局发生。",
          },
        ],
        guardrails: [
          "不会做成硬日期事件树。",
          "不会把没有来源的性格判断变成隐藏惩罚。",
          "不会让历史修饰倒改已经结算过的结果。",
        ],
        relatedSlugs: ["legitimacy-rumors", "authority-control", "diplomacy-recognition"],
      },
    ],
  },
  en: {
    kicker: "Gameplay",
    title: "Strategy, built from constrained power.",
    body:
      "You do not stand outside the map moving obedient pieces. You sit inside a regime that hesitates, runs short of grain, misreads messages, and gets pushed back by local society.",
    heroImageAlt:
      "A relay station courtyard at dusk where a courier changes horses while officials study a map inside.",
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
      title: "These systems decide whether your orders become reality.",
      body:
        "This list only includes systems you directly experience in play: what you choose, what feedback you see, and what costs you inherit.",
      ariaLabel: "Gameplay system pages",
      sourceLabel: "Play Focus",
      openLabel: "Explore",
    },
    systemGroups: [
      {
        id: "seat-command",
        label: "Seat and Orders",
        title: "Who Are You, and Who Actually Obeys?",
        body:
          "You choose a position of power, not an abstract nation. An emperor, grand secretary, field commander, garrison leader, or staff adviser has different authority, sightlines, and personal risks. The same order can cost very different things from different seats.",
        question:
          "When you want to change the situation, the first question is not where to click. It is who obeys you, and who only weighs your request.",
        steps: [
          "Choose a historical seat with real authority and real blind spots.",
          "Turn intent into direct orders, formal requests, private influence, or intelligence work.",
          "Re-prioritize when messages are late, authority is thin, and local actors resist.",
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
          "Counties, gentry, salt merchants, soldiers, refugees, roads, and granaries are not scenery. They decide whether an arrived order becomes action, delay, bargaining, or a new crisis.",
        question:
          "You are not managing map color. You are managing whether local society is willing, able, and brave enough to make your intent real.",
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
        title: "Why Is War More Than Pushing a Front?",
        body:
          "Armies can defend, contest crossings, and pressure local society, but they also consume grain and pay, damage order, and create debt. Battles emerge from routes, supply, commanders, morale, and local tolerance.",
        question:
          "You do not simply drag forces to the front. You decide how armies are fed, trusted, and restrained.",
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
        title: "How Does the Crisis Keep Rolling Forward?",
        body:
          "Recognition, truces, loans, reform, rumor, and historical memory reshape the next round of choices. The game asks not only whether you survived a crisis, but what price moved the situation forward.",
        question:
          "One compromise may buy time and make allies doubt you. One reform may save revenue and provoke entrenched interests.",
        steps: [
          "Use diplomacy, recognition, and exchange to buy time instead of solving everything by force.",
          "Push institutional change while carrying enforcement cost and local backlash.",
          "Let earlier choices persist as modifiers, reputation, grudges, and precedents.",
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
      guardrailsTitle: "What It Is Not",
      relatedTitle: "Keep Exploring",
      backLabel: "Back to Gameplay",
    },
    systems: [
      {
        slug: "player-seat",
        category: "Role and Perspective",
        source: "docs/sot/high-level/21-player-seat-ai-and-multiplayer.md",
        shortTitle: "Player Seat",
        title: "Player Seat: You Are Not Omniscient",
        deck:
          "Choose a historical person or power position, then play through its permissions, channels, duties, and survival pressure.",
        summary:
          "The same Southern Ming crisis looks different from Hongguang Emperor, Ma Shiying, Shi Kefa, a Jiangbei commander, or a low-power staff adviser. Your seat decides what you can command, whom you can only persuade, who can ignore you, and which reports arrive late.",
        indexPoints: ["Playable roles", "Permission limits", "Information view"],
        questions: [
          "Choose a high office with fragile survival, or a narrower command with more personal continuity.",
          "Act through office power, memorials, envoys, personal ties, and bargains.",
          "Continue the campaign through death, dismissal, exile, succession, or a changed seat.",
        ],
        feedback: [
          {
            label: "Permission",
            text: "Command previews separate direct orders, constrained requests, and ideas beyond your authority.",
          },
          {
            label: "Perspective",
            text: "You see the reports, rumors, and estimates available to your seat, not perfect world truth.",
          },
          {
            label: "Survival",
            text: "Death and office change alter your playable power instead of only showing a fail screen.",
          },
        ],
        guardrails: [
          "It does not turn player historical knowledge into a supernatural ability.",
          "It does not make every role a symmetric country player.",
          "It does not bypass offices, armies, finance, routes, or local acceptance.",
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
          "There are no action points. Your limits are drafting, queues, messengers, travel, acknowledgements, stale reports, and local acceptance.",
        summary:
          "An order is not an instant map edit. It becomes a packet drafted by staff, queued at a node, carried through a route, checked locally, and then accepted, rejected, delayed, or distorted. Reports take time to return, so you often decide with old information.",
        indexPoints: ["Natural clock", "Messenger delay", "Stale reports"],
        questions: [
          "Send an urgent order through the fastest risky channel, or a slower reliable one.",
          "Delegate power to the front or local office to move faster while risking autonomy.",
          "Act before acknowledgement, wait for confirmation, or send a second command chain.",
        ],
        feedback: [
          {
            label: "Arrival",
            text: "You see estimated arrival, actual delay, channel overload, and route risk.",
          },
          {
            label: "Ack",
            text: "Whether an order was received, accepted, or executed may take days to learn.",
          },
          {
            label: "Stale",
            text: "A relief order may arrive too late; a tax or battle report may describe a world that already moved.",
          },
        ],
        guardrails: [
          "It does not reduce political pressure to monthly action points.",
          "It does not let distant state change before an order arrives.",
          "It does not make pause a frozen edit board for reshaping the world.",
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
          "Places are not simply yours or theirs. You may have a legal claim without tax access; an army may impose order without civil rule; and local elites can decide whether an order behaves like an order at all.",
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
            text: "Control usually shifts gradually rather than flipping instantly after one order.",
          },
          {
            label: "Cause",
            text: "Reports name distance, security, elite cooperation, military pressure, or legitimacy as bottlenecks.",
          },
        ],
        guardrails: [
          "It does not treat map color as rule.",
          "It does not merge the Jiangbei Four Towns into one obedient or disobedient block.",
          "It does not let players edit control values directly.",
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
          "Refugees, gentry, salt merchants, transport guilds, military households, officials, and generals are not backdrop.",
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
          "It does not become a household-by-household census.",
          "It does not make every profession a clickable faction.",
          "It does not treat armies as ordinary social groups.",
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
          "It does not make geography only background art.",
          "It does not start with an opaque full market or max-flow model.",
          "It does not treat frontier or natural zones as free empty land.",
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
          "It does not become a full commodity market simulator.",
          "It does not reduce salt, grain, silver, timber, and transport to one national resource pool.",
          "It does not pull industrial gameplay into the Southern Ming demo.",
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
          "War is more than troop count. Forces arise from military institutions, consume grain and society, obey or resist command, and reshape local authority through garrisoning, route security, occupation, and requisition.",
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
          "It does not start as a tactical battle board.",
          "It does not make occupation equal administration.",
          "It does not give every Jiangbei command the same reaction.",
        ],
        relatedSlugs: ["battle-engagement", "economy-relief", "authority-control"],
      },
      {
        slug: "battle-engagement",
        category: "Battle and Campaigns",
        source: "docs/sot/high-level/15-battle-and-engagement-resolution.md",
        shortTitle: "Battles",
        title: "Battle Resolution: Victory Is Not One Power Number",
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
          "It does not explain every result with one hidden combat score.",
          "It does not let random events decide outcomes without prior risk.",
          "It does not simulate every background clash at the same fidelity.",
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
          "Diplomacy is not a relation score. You negotiate who recognizes whom, who promises what, who can execute it, who opposes it internally, what breach would damage, and how the bargain changes legitimacy and local power.",
        indexPoints: ["Recognition", "Obligations", "Credibility"],
        questions: [
          "Recognize a military command or outside power in exchange for defense, grain, silver, or time.",
          "Promise aid, request aid, propose ceasefire, open markets, or support a defection.",
          "Publicize an agreement for legitimacy, or hide it to avoid internal backlash.",
        ],
        feedback: [
          {
            label: "Clauses",
            text: "Agreements break into concrete promises instead of instant magical benefits.",
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
          "It does not replace diplomacy with one friendliness number.",
          "It does not let allies ignore route, supply, and internal politics.",
          "It does not make trade or recognition pure upside buttons.",
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
          "Reform is not a tech-tree unlock. You may know what should be done while lacking artisans, tools, ledgers, funding, routes, security, legitimacy, or people who can turn a pilot into an institution.",
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
          "It does not use linear technology ages.",
          "It does not grant instant national modifiers.",
          "It does not let modern player knowledge skip historical execution conditions.",
        ],
        relatedSlugs: ["economy-relief", "society-actors", "legitimacy-rumors"],
      },
      {
        slug: "legitimacy-rumors",
        category: "Legitimacy and Rumor",
        source: "docs/sot/high-level/18-ideology-legitimacy-and-information.md",
        shortTitle: "Legitimacy",
        title: "Legitimacy and Rumor: Events Are Not Beliefs",
        deck:
          "Relief, victory, succession, taxation, military autonomy, and recognition are interpreted differently by different audiences.",
        summary:
          "Legitimacy is not one national meter. Gentry, merchants, military households, refugees, officials, and enemies interpret your actions through their interests, memory, information channels, and ideas of order.",
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
          "It does not make legitimacy a universal prestige bar.",
          "It does not let propaganda erase material or military failure.",
          "It does not let narrative AI invent facts that did not happen.",
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
          "It does not give the player full omniscience.",
          "It does not become a separate assassination game.",
          "It does not let reports overwrite world truth; they change what actors believe.",
        ],
        relatedSlugs: ["player-seat", "orders-messages", "battle-engagement"],
      },
      {
        slug: "historical-consequences",
        category: "Historical Consequences",
        source: "docs/sot/high-level/25-historical-state-modifiers-and-causal-memory.md",
        shortTitle: "Consequences",
        title: "Historical Consequences: The Crisis Remembers Its Past",
        deck:
          "Enthronement disputes, founding military merit, factional memory, arrears, failed relief, and past bargains continue to shape today.",
        summary:
          "History is neither a fixed event tree nor random flavor. It acts as sourced pressure that changes whom people trust, whose orders armies accept, how places cooperate, and why some commands are harder than they look on paper.",
        indexPoints: ["Historical pressure", "Decision memory", "Readable causes"],
        questions: [
          "Compensate, threaten, replace, or work around a command or faction with old grievances.",
          "Solve a crisis with a bargain while accepting that it may become leverage later.",
          "Read causal reports to decide whether failure came from a new problem or an old one surfacing.",
        ],
        feedback: [
          {
            label: "Old Debts",
            text: "Reports can explain resistance through enthronement, faction, arrears, failed relief, or prior orders.",
          },
          {
            label: "Aftereffect",
            text: "Your choices leave memory that shapes trust, acceptance, command fidelity, and later deals.",
          },
          {
            label: "Flex",
            text: "Historical pressure raises risk without forcing the same ending every run.",
          },
        ],
        guardrails: [
          "It does not become a hard-date event tree.",
          "It does not turn unsourced personality claims into hidden penalties.",
          "It does not retroactively rewrite settled outcomes.",
        ],
        relatedSlugs: ["legitimacy-rumors", "authority-control", "diplomacy-recognition"],
      },
    ],
  },
};
