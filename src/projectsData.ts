import { ProjectItem, Keyword, EducationItem, ExperienceItem } from './types';
import duckGiantRoofImg from './assets/images/duck_giant_roof_1780049451476.png';
import duckGroundInteractiveImg from './assets/images/duck_ground_interactive_1780049481226.png';
import duckXhsPost1Img from './assets/images/duck_xhs_post1_1780049502729.png';
import duckXhsPost2Img from './assets/images/duck_xhs_post2_1780049520476.png';
import duckXhsComments1Img from './assets/images/duck_xhs_comments1_1780049547368.png';
import duckXhsComments2Img from './assets/images/duck_xhs_comments2_1780049571054.png';
import uglyCatPosterImg from './assets/images/ugly_cat_poster_1780437791139.png';
import uglyCatTopicImg from './assets/images/regenerated_image_1780443087398.png';
import uglyCatPrizesImg from './assets/images/regenerated_image_1780442114473.jpg';
import uglyCatVotesImg from './assets/images/regenerated_image_1780442371063.jpg';
import uglyCatClosingImg from './assets/images/regenerated_image_1780443625426.png';
import pinhbViralVideoImg from './assets/images/regenerated_image_1780618927472.png';
import pinhbViralCommentsImg from './assets/images/regenerated_image_1780442373023.jpg';
import pinhbViralLeft1Img from './assets/images/regenerated_image_1780527921850.png';
import pinhbViralLeft2Img from './assets/images/meituan_pinhb_douyin_1780610618348.png';
import pinhbViralLeft3Img from './assets/images/meituan_pinhb_posts_1780610641594.png';
import harbinBusVideoImg from './assets/images/harbin_bus_video_1780529074042.png';
import harbinBusMapImg from './assets/images/harbin_bus_map_1780529090837.png';
import harbinBusInteriorImg from './assets/images/regenerated_image_1780585802745.jpg';
import harbinBusEaselImg from './assets/images/harbin_bus_easel_1780529122365.png';
import fanyuCtripVideoImg from './assets/images/fanyu_ctrip_video_1780529091234_jpg_1780588617933.png';
import fanyuCtripCommentsImg from './assets/images/regenerated_image_1780590711474.jpg';
import youdaoOkrOverviewImg from './assets/images/youdao_okr_overview_1780603569699.png';
import youdaoOkrResultsImg from './assets/images/youdao_okr_results_1780603589739.png';
import youdaoDouyinChatImg from './assets/images/youdao_douyin_chat_1780604251993.png';
import youdaoOkrTreeImg from './assets/images/youdao_okr_tree_1780604270021.png';
import jiePortraitImg from './assets/images/jie_portrait_1779989858914.png';
import youdaoNewImg from './assets/images/regenerated_image_1780695905247.png';
import youdaoTabletImg from './assets/images/regenerated_image_1780781888362.jpg';

export const keywordsData: Keyword[] = [
  {
    id: 'in-house',
    title: 'In-house 一体户',
    englishTitle: 'All-in-One Creator',
    desc: '文案与多媒体内容可自闭环产出',
    highlight: '出过爆款文案，同时可兼顾基础设计、剪辑工作，可in-house自闭环内容制作流。',
    details: [
      '如为抖音文创产品制作电商广告短视频，对标爆款素材拍摄并剪辑；为有道AI学习机等产品做创意剪辑、产出百万曝光视频。'
    ]
  },
  {
    id: 'ideas',
    title: '奇思妙想',
    englishTitle: 'Creative Strategist',
    desc: '擅长低成本、高效率地策划病毒式爆款',
    highlight: '擅长花小钱办大事，敏锐捕捉和转化网络热点与社会情绪。',
    details: [
      '通过热点转化、舆论引导等方式，策划过多个百万&千万曝光的爆款创意内容，以最小成本最大化传播效果。'
    ]
  },
  {
    id: 'communication',
    title: '沟通达人',
    englishTitle: 'Resource Integrator',
    desc: '强执行与资源撬动',
    highlight: '多次参与较大项目统筹执行工作，会主动寻求可打通的内外部资源，擅长沟通谈判。',
    details: [
      '资源拓展：多次0元撬动内外部资源联动。如在字节联合垂类创作者资源做文创产品种草、在小红书马路生活节通过传播资源置换免费合作场地的使用资源等。',
      '品牌资产建设：曾通过官方社群拓展、私域维护、问卷打捞沉淀优质素人和达人，以产品体验等权益置换免费合作内容，为抖音文创沉淀100+人数规模的优质KOC库。'
    ]
  },
  {
    id: 'ai-user',
    title: 'AI 雇主',
    englishTitle: 'AI-Native Operator',
    desc: '善用AI工具嵌入工作流提效。',
    highlight: '沉淀可由AI辅助的SOP，压缩营销成本和人力。',
    details: [
      '如用AI生成<strong>电商文案&商品详情页</strong>、解放设计人力；结合飞书多维表格、内嵌AI大模型，<strong>将「选题到笔记内容」流程化</strong>，快速<strong>批量产出</strong>素人笔记。'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'undergrad',
    period: '2019 - 2023',
    school: '中国传媒大学',
    major: '公共关系学',
    degree: '本科',
    highlights: [
      '综合测评专业第 4 / 48，保研直升硕士研究生。',
      '学生干部经历：曾任学生会行政部负责人，全面负责志愿服务工作与大型活动执行。',
      '专业竞赛：荣获“互联网+”大学生创新创业大赛国家级铜奖、中国大学生公共关系策划大赛一等奖等荣誉。'
    ]
  },
  {
    id: 'graduate',
    period: '2023 - 2025',
    school: '中国传媒大学',
    major: '新闻与传播（品牌营销传播方向）',
    degree: '硕士',
    highlights: [
      '深造品牌与整合营销传播，将学术理论与互联网实践紧密结合。',
      'AI 科研实践：协助导师孵化国家广告研究院下的『中国品牌AI大模型』，参与真实的模型训练、对齐评测与数据集搭建。',
      '业界合作：参与多项大厂合作项目，深入探索AI在保险、汽车等多行业的营销研究报告产出。'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'bytedance-fulltime',
    period: '2025.12 - 2026.04',
    company: '字节跳动',
    logoColor: 'bg-stone-900 text-stone-100 border border-stone-800',
    role: '抖音自有文创运营',
    department: '集团文创线',
    type: '正式工作',
    description: '针对抖音文创业务（抖音内部独立的集团文创线），通过社群活动运营、电商营销等手段维护抖音文创小店的盈利，撬动以员工群体为主的消费。\n促进哈基米IP等<strong>IP系列</strong>文创品月销售量<strong>破千</strong>份，及粉丝群增长<strong>1000+</strong>粉丝。'
  },
  {
    id: 'xhs-fulltime',
    period: '2025.06 - 2025.12',
    company: '小红书',
    logoColor: 'bg-red-600 text-white',
    role: '媒介营销',
    department: '社区市场部',
    type: '正式工作',
    description: '参与“马路生活节”整合营销项目的策划与执行，服务于社区本地心智的增长。主要负责线下创意媒介策划，预热马路生活节IP声量。\n最终冲上站内<strong>热榜第四</strong>，成功转化线下的<strong>上千</strong>位在地用户报名后续活动。'
  },
  {
    id: 'meituan-intern',
    period: '2024.10 - 2025.02',
    company: '美团',
    logoColor: 'bg-amber-400 text-stone-900 font-semibold',
    role: '品牌营销（校招提前实习）',
    department: '餐饮生态市场',
    type: '实习经历',
    description: '聚焦外卖侧生态营销工作，提升拼好饭C端正向声量占比，渗透低价不low心智。\n达成月均<strong>6000w+</strong>曝光、抖红全渠道的<strong>百万播放</strong>爆款率<strong>10%</strong>，并帮助业务侧正声量占比+<strong>9.6pp</strong>/月。'
  },
  {
    id: 'alifanyu-intern',
    period: '2024.05 - 2024.09',
    company: '阿里巴巴淘天集团',
    logoColor: 'bg-yellow-300 text-black font-semibold',
    role: '市场营销暑期实习生',
    department: '市场&新场景-闲鱼',
    type: '实习经历',
    description: '参与站外的营销事件、媒介投放，重点种草闲鱼省、赚心智，提升站外的口碑渗透率、并将用户引流至站内。\n9月小红书千互动爆文率高达<strong>85%</strong>，换端成本环比降低<strong>53</strong>%。'
  },
  {
    id: 'nestle-intern',
    period: '2023.04 - 2023.08',
    company: '雀巢 (中国) 有限公司',
    logoColor: 'bg-white text-stone-800 border border-amber-200',
    role: 'Marketing Intern',
    department: '雀巢婴儿营养事业部',
    type: '实习经历',
    description: '参与雀巢婴儿奶粉新品 铂初能恩 的上市推广项目，通过促销策略协助打出种子消费者的新品认知。\n协助优化品牌key message为“<strong>肚肚舒适</strong>”，建设<strong>HMOs</strong>成分的母乳平替概念。'
  },
  {
    id: 'youdao-intern',
    period: '2022.07 - 2023.01',
    company: '网易有道',
    logoColor: 'bg-red-600 text-white',
    role: '市场推广 (整合营销方向) 暑期实习生',
    department: '市场部智能硬件组',
    type: '实习经历',
    description: '协助大型整合营销项目策划及传播，以高声量打心智为目标，主要面向中年家长群体推广AI学习机等有道智能学习硬件产品。\n策划的事件营销爆款最高赞达<strong>15w+</strong>，冲上抖音热榜，电商搜索指数同期增长<strong>3倍</strong>。'
  }
];

export const projectsData: ProjectItem[] = [
  // SECTION 1: 营销事件 SHOWCASE
  {
    id: 'project-xhs-duck',
    category: 'event',
    title: '小红书马路生活节 X 鸭马路IP创意媒介事件',
    subtitle: '打造有老广特色的IP形象，用巨物视觉锤引发破圈讨论',
    typeLabel: '正式工作经历',
    accentColor: '#556B2F',
    metrics: [
      { label: '线上热榜', value: '第 4 位', trend: '线上冲上站内热榜' },
      { label: '自来水笔记', value: '30 + 篇', trend: '纯素人路透爆发' },
      { label: '线下报名转化', value: '800 + 人', trend: '精准转化入站' }
    ],
    target: '马路生活节第三届要从原活动地点“上海”破圈辐射到“广州”，让这一IP服务于小红书在全国的吃喝玩乐本地业务。为了<strong>扩大马路生活节即将在广州举办线下活动的认知度、提高本地用户参加活动的报名规模</strong>，需要借助“鸭马路”的<strong>IP形象预热</strong>、前置地打爆IP声量。',
    strategy: '以<strong>巨物视觉锤</strong>的创意媒介手段作为<strong>活动起调</strong>，炒作<strong>抽象版的“鸭马路”IP</strong>形象路透，炒热社区的广州在地用户对马路生活节的讨论氛围。',
    detailsTitle: '落地模式：于高流量商圈天环广场，楼顶落地抽象版“鸭马路”巨物视觉锤+地面创意互动装置（为活动报名引流）',
    contributionsTitle: '个人亮点贡献review',
    details: [
      {
        title: '老广 Chill 鸭巨物气模创意',
        content: '结合对广州在地文化【人字拖、喝凉茶、吃烧鸭】，把过往“鸭马路”IP的鸭子形象改造成了被烤得微黑的老广chill鸭，同时松弛地穿着人字拖、拿着鸡公杯喝茶，预埋广州人精神状态等传播玩梗方向。'
      },
      {
        title: '地面创意互动装置+报名抽奖点位',
        content: '基于路人对楼顶巨物的关注，将人流引向地面互动装置打卡拍照，并自然引导其报名抽奖（凭凭证到后续活动现场兑奖）。'
      }
    ],
    channels: ['小红书素人路透', '评论区玩梗预埋', '达人打卡', '线下快闪路展'],
    contributions: [
      '创意侧：1) 视觉锤：链接广州在地文化，对「鸭马路」的鸭子IP形象进行玩梗改造；2) 地面路展呈现马路生活节吃喝玩乐瞬间：以商场地面的创意互动装置承接流量关注，用「好好生活展」链接小红书的吃喝玩乐业态。',
      '传播侧：1) 提前预埋路透；2) 私戳建联站内koc，撬动20+达人免费打卡发布。',
      '转化侧：配合楼顶巨物，通过地面的创意互动装置将用户导向报名点位，以抽奖形式吸引用户现场报名，为后续的大型活动派对引流。'
    ],
    gallery: [
      { type: 'live', src: duckGiantRoofImg, caption: '核心地段楼顶巨物视觉锤：一个chill的老广”鸭马路“（综合人字拖、鸡公杯喝凉茶、烧鸭肤色等元素）' },
      { type: 'live', src: duckGroundInteractiveImg, caption: '商场地面创意互动装置：好好生活展打卡体验与报名抽奖点位' },
      { type: 'xhs', src: duckXhsPost1Img, caption: '' },
      { type: 'xhs', src: duckXhsPost2Img, caption: '' },
      { type: 'xhs', src: duckXhsComments1Img, caption: '' },
      { type: 'xhs', src: duckXhsComments2Img, caption: '' }
    ]
  },
  {
    id: 'project-dy-uglycat',
    category: 'event',
    title: '抖音文创《丑猫局，不丑别来》互动玩法裂变',
    subtitle: '以猎奇向话题、拉票互动玩法撬动哈基米IP新品文创月销量破千',
    typeLabel: '正式工作经历',
    accentColor: '#333333',
    metrics: [
      { label: '参赛选手', value: '561 位', trend: '全员晒自家丑猫' },
      { label: '投票参与人次', value: '9000 +', trend: '拉票玩法促破圈传播' },
      { label: '活动访问量', value: '1.4 w+', trend: '内部社群狂热刷屏' },
      { label: '加粉社群用户', value: '500 +', trend: '拉新高活' }
    ],
    target: '针对字节内部同学这批种子用户，拓展抖音文创社群粉丝量，并提升抖音<strong>「哈基米」表情包系列</strong>文创品的消费者<strong>认知 and 销量</strong>。',
    strategy: '挖掘哈基米相关热门<strong>趋势「丑猫」</strong>，用户聚焦猎奇向猫咪丑照讨论，转化为在公司内部策划的<strong>丑猫大赛</strong>活动。',
    galleryLiveTitle: '互动设计',
    detailsTitle: '互动转化路径',
    contributionsTitle: '个人亮点贡献review',
    details: [
      {
        content: '<strong style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.4); display: inline-block; margin-bottom: 6px; font-weight: 600;" class="inline-block bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md border border-amber-200 mb-1.5 font-semibold text-xs shadow-sm">互动玩法拉新：</strong><br />基于此打造「丑猫局，不丑别来」比赛，号召内部同学报名投稿小猫的<strong>黑历史丑照</strong>进行PK。联动<strong>宠物垂类资源</strong>，以<strong>粉丝社群</strong>为主阵地、<strong>宠物话题</strong>为主的<strong>泛圈层社群</strong>为辅，进行丑猫玩梗宣发互动<br />➡️ 撬动<strong>561位</strong>参赛选手，并鼓动<strong>9000+人</strong>为“丑到心巴上”的丑咪投票，吸引<strong>1.4w次</strong>活动页面浏览；同步撬动抖音文创官方粉丝社群<strong>拉新500+</strong>'
      },
      {
        content: '<strong style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.4); display: inline-block; margin-bottom: 6px; font-weight: 600;" class="inline-block bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md border border-amber-200 mb-1.5 font-semibold text-xs shadow-sm">通过拉票权益和奖品激励带动哈基米系列文创销量：</strong><br />消费哈基米系列文创品即可增加为丑咪<strong>投票的机会</strong>，并获得专属<strong>丑猫相册奖品</strong>。<br />➡️ 带动哈基米文创销量wow<strong>增长70%+</strong>'
      },
      {
        content: '<strong style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.4); display: inline-block; margin-bottom: 6px; font-weight: 600;" class="inline-block bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md border border-amber-200 mb-1.5 font-semibold text-xs shadow-sm">线下沉淀IP影响力：</strong><br />在丑咪排行公布后<strong>承接比赛流量</strong>，借助丑猫IP推出哈基米家族线下<strong>洞洞板售卖点位</strong>。<br />➡️ 带动线下渠道销量wow<strong>增长20%+</strong>'
      }
    ],
    channels: ['官方粉丝社群', '泛兴趣圈层社群', '全国工区屏幕', '线下丑猫相册巡展'],
    contributions: [
      '以猎奇向ugc玩法吸引大量公司员工，成功开辟种子用户。',
      '将活动流量转化为文创销售收益：承接丑猫大赛的内部流量，及时开辟线下洞洞板销售点位，转化为常态化的IP线文创售卖点，成功带动了一波哈基米系列文创销售高峰。'
    ],
    galleryUncropped: true,
    gallery: [
      { type: 'live', src: uglyCatTopicImg, caption: '<strong>决战丑猫之巅PK赛话题号召 + 大奖激励&转化路径</strong>', cols: 2, center: true },
      { type: 'live', src: uglyCatClosingImg, caption: '<strong>内部近万名员工投票 + 社群搞笑颁奖二次促转化&为线下快闪售卖点位引流</strong>', cols: 2, center: true }
    ]
  },
  {
    id: 'project-meituan-00s',
    category: 'event',
    title: '美团拼好饭X新闻事件传播 《00后实习生不拼爹妈拼好饭》',
    subtitle: '用社会化热梗回应恶搞，扭转拼好饭中毒舆情',
    typeLabel: '实习经历',
    accentColor: '#FABF2C',
    galleryUncropped: true,
    galleryAspect: 'aspect-[3/4]',
    metrics: [
      { label: '制作+媒介成本', value: '4.6 w', trend: '低预算控制' },
      { label: '视频总播放量', value: '700 w+', trend: '全渠道曝光（6条视频分发）' },
      { label: '播放 CPM', value: '6.8 元', trend: '低于历史benchmark10元' },
      { label: '视频破百万率', value: '33 %', trend: '爆款率同比增长2.3pp' }
    ],
    target: '为了透传拼好饭便宜（可以帮助打工族省钱）、干净（低价但是不低质）的心智，扭转用户恶意玩梗“吃拼好饭中毒”的舆情，需要以新闻事件这类软性的宣传方式低成本地吸引TA共鸣、引导用户自发为拼好饭发声，撬动自然口碑发酵。',
    strategy: '结合年底网友会被总结类话题带动的情绪（如年终记账本等形式），塑造一个人间清醒00后的人物形象。以“靠吃拼好饭半年攒1w块”的行为作为钩子，通过第三视角质疑拼好饭不卫生、自然引出主角维护拼好饭的情节，引导用户讨论传播。',
    detailsTitle: '最终成果',
    details: [
      {
        title: '',
        content: '基于4.6w成本（制作+媒介），视频总播放量<strong>700w+</strong>，播放CPM<strong>6.8元</strong>，<strong>33%视频破百万播放</strong>，爆款视频点赞达<strong>7.9w</strong>。评论区自然发酵出“没钱靠拼好饭生存”“拼好饭别涨价”“拼好饭有肉有菜”等用户自发为拼好饭发声的正面评论；吸引（不了解拼好饭、因中毒梗对拼好饭有误解的）路人进场，大量评论围绕“拼好饭是什么/为什么便宜”等问题进行互动。'
      }
    ],
    galleryLiveTitle: '爆款视频',
    channels: ['抖&快&视频号平台均投放1营销号+1新闻号'],
    contributions: [
      '主导该小预算项目的策略及执行，负责创意产出（从00后实习生年底晒记账本的内容角度切入）+传播执行。'
    ],
    gallery: [
      { 
        type: 'live', 
        src: pinhbViralVideoImg, 
        link: 'https://v.kuaishou.com/cKdGb3'
      },
      { 
        type: 'live', 
        src: pinhbViralCommentsImg, 
        link: 'https://weixin.qq.com/sph/AtpiiEe4K'
      }
    ],
    links: [
      { label: '百万爆款视频观看 [快手]', url: 'https://v.kuaishou.com/cKdGb3' },
      { label: '百万爆款视频观看 [视频号]', url: 'https://weixin.qq.com/sph/AtpiiEe4K' }
    ]
  },
  {
    id: 'project-mt-bus',
    category: 'event',
    title: '城市风味榜X哈尔滨线下“风味巡游”大巴',
    subtitle: '借力「小土豆」文旅热点，放大抖音餐饮榜单IP的认知度，并助力当地上榜商家GMV增长',
    typeLabel: '实习经历',
    accentColor: '#FABF2C',
    galleryUncropped: true,
    galleryAspect: 'aspect-[4/3]',
    metrics: [
      { label: '线下覆盖人流量', value: '70 w+', trend: '线下辐射本地用户圈层' },
      { label: '线上C端曝光量', value: '434.5 w+', trend: '渗透东北地域榜单认知度' },
      { label: '抖音同城榜话题最高', value: '第 4 位', trend: '#哈尔滨连大巴车都开始卷了' },
      { label: '同步单商户GMV增长', value: '50 w+', trend: '助力商家化流量为GMV' }
    ],
    target: '为了<strong>承接和扩散</strong>城市风味榜2024年Q1季度<strong>发榜的传播热度</strong>，联合风味榜商家探索区域自运营模式，尝试打造特色城市餐饮营销，以进一步提升榜单C端心智。预期<strong>站内热搜一个、实现百万级曝光及数十万线下人群覆盖</strong>，同步撬动（参与活动的）单商户达成<strong>50W+的GMV增长</strong>。',
    strategy: '耦合<strong>「哈尔滨欢迎小土豆」</strong>热点，基于哈尔滨城市特色，为城市风味榜打造<strong>“风味巡游大巴”</strong>的事件营销，联合本地商家打造<strong>哈尔滨土豆接驳车、免费接送大家巡游体验当地美食</strong>，在巴士内植入大量城市风味榜的视觉元素，并<strong>定点停靠</strong>、安排上榜<strong>商家上车赠送</strong>美食、到店优惠券等<strong>互动礼品</strong>。',
    detailsTitle: '最终成果',
    details: [
      {
        title: '',
        content: '整体覆盖了70W+的人流量，为B端商家提供与用户线下深度互动机会；线上C端曝光434.5W+，话题<strong>#哈尔滨连大巴车都开始卷了</strong>最高至抖音同城榜第4位。'
      }
    ],
    contributionsTitle: '个人贡献',
    galleryLiveTitle: '个人贡献',
    channels: [
      '抖音达人号打卡大巴+营销号炒作新闻',
      '线下大巴移动式广告',
      '商家参与大巴车互动&拍视频营销'
    ],
    contributions: [
      '<strong>a. 转化热点：</strong>耦合哈尔滨欢迎小土豆的热点，提出以“风味巡游大巴”形式面向游客打造本地文旅+餐饮体验，并结合招商商户地点设计景点巡游路线。',
      '<strong>b. 设计：</strong>针对大巴车外包及内饰、巡游地图、玩法易拉宝等物料，结合用户玩梗素材，设计创意文案、提供视觉元素需求。'
    ],
    gallery: [
      {
        type: 'live',
        src: harbinBusVideoImg,
        caption: '哈尔滨连大巴车都开始卷了：风味巡游大巴事件营销爆款视频封面与宣传海报设计',
        cols: 2,
        center: true
      },
      {
        type: 'live',
        src: harbinBusMapImg,
        caption: '<strong>a. 转化热点：</strong><br />耦合<strong>哈尔滨欢迎小土豆</strong>的热点，提出以“<strong>风味巡游大巴</strong>”形式面向游客打造本地<strong>文旅+餐饮</strong>体验，并结合招商商户地点设计景点<strong>巡游路线</strong>。'
      },
      {
        type: 'live',
        src: harbinBusInteriorImg,
        caption: '<strong>b. 设计：</strong><br />针对<strong>大巴车外包及内饰</strong>、<strong>巡游地图</strong>、<strong>玩法易拉宝</strong>等物料，结合用户<strong>玩梗素材</strong>，设计创意文案、提供视觉元素需求'
      }
    ]
  },
  {
    id: 'project-fanyu-ctrip',
    category: 'event',
    title: '闲鱼 X 携程跨界事件营销：携程上闲鱼带薪捞人',
    subtitle: '借势霸总追妻短剧热梗，联合携程酒旅资源炒作大厂招人事件，撬动闲鱼副业业务简历上传量',
    typeLabel: '实习经历',
    accentColor: '#556B2F',
    metrics: [
      { label: '简历发布增幅', value: '+285 % 环比', trend: '站内副业业务活跃dau激增' },
      { label: '事件曝光量', value: '1kw+', trend: '猎奇招聘事件破圈传播' }
    ],
    target: '<strong>活动目标：</strong>为了推广闲鱼<strong>副业业务</strong>、卷动站内用户<strong>简历发布量</strong>，需要联动知名大厂或品牌IP策划<strong>招人事件</strong>，通过丰富<strong>副业供给方</strong>、来卷动<strong>C端对简历的参与度</strong>。<br />预期炒作新闻短视频、促<strong>事件总曝光破千万</strong>，并提升闲鱼站内活动的<strong>dau活跃度</strong>。',
    strategy: '耦合<strong>携程酒店推广</strong>需求&<strong>闲鱼副业业务声量</strong>需求，打造携程跨界拍短剧、<strong>上闲鱼招编剧的热点事件</strong>。<br /><strong>在创意侧</strong>，确定“<strong>霸总追妻</strong>”<strong>短剧写手</strong>的创意副业形式，将故事场景限制于携程平台内的豪华酒店、由闲鱼用户大开脑洞玩梗霸总文学。<br /><strong>在传播侧</strong>，从<strong>00后离谱就业方式</strong>的内容方向入手，炒作携程在闲鱼招人的新闻事件。',
    detailsTitle: '最终成果',
    details: [
      {
        title: '',
        content: '通过线上抖音阵地产出的万赞爆款短视频，卷动闲鱼站内的用户简历发布量<strong>环比提升285%</strong>。'
      }
    ],
    galleryUncropped: true,
    galleryAspect: 'aspect-[3/4]',
    gallery: [
      {
        type: 'live',
        src: fanyuCtripVideoImg,
        link: 'https://www.douyin.com/video/7405484099630107967',
        caption: '<strong>a. 促成异业合作，借势携程资源：</strong>基于7万预算，负责创意提案+合作品牌资源沟通<strong>（额外争取携程站内资源位&携程抖音侧10+媒体号传播资源）</strong>+传播侧执行。'
      },
      {
        type: 'live',
        src: fanyuCtripCommentsImg,
        link: 'https://www.douyin.com/video/7405484099630107967',
        caption: '<strong>b. 打造热评，借助评论区艾特扩散传播：</strong>预埋有梗神评论，借力<strong>热评引发自传播</strong>；并在评论区回复活动<strong>参与路径</strong>'
      }
    ],
    channels: ['抖音营销号+新闻号'],
    contributionsTitle: '个人贡献',
    contributions: [
      '主导该7万预算项目的策略及执行。负责<strong class="text-rose-600 font-bold">创意方案产出+合作品牌资源沟通+传播侧执行。</strong>'
    ],
    links: []
  },
  {
    id: 'project-youdao-okr',
    category: 'event',
    title: '有道 AI 学习机事件营销：《90后大厂父母用 OKR 带娃》',
    subtitle: '以90后大厂父母的okr带娃方式做猎奇的话题钩子，让有道AI学习机破圈传播',
    typeLabel: '实习经历',
    accentColor: '#333333',
    galleryUncropped: true,
    galleryAspect: 'aspect-[16/9]',
    galleryMergedDouble: true,
    galleryDoubleImages: [youdaoTabletImg],
    galleryLiveTitle: '亮点数据盘点（搜索心智&电商转化均达成）',
    detailsTitle: '爆款视频',
    metrics: [
      { label: '多视频总播放量', value: '1144.9w', trend: '5w低成本预算获高ROI回报' },
      { label: '爆款单视频点赞', value: '15.2w', trend: '6倍于同类历史平均' },
      { label: '视频平均互动率', value: '6.11%', trend: '高于平均互动率4.4pp' },
      { label: '电商搜索人气', value: '3倍增长', trend: '传播势能外溢至天猫/京东' }
    ],
    target: '低成本地将新品“有道AI学习机”的<strong>功能利益点（学情AI分析等）</strong>初步打入消费者心智，打造<strong>千万曝光</strong>的爆款短视频，<strong>引流直播间及电商平台</strong>，促进电商搜索指数倍数级增长。',
    strategy: '设定一对90后大厂卷王父母将运营逻辑套用在孩子的暑期学习规划上，<strong>借助有道AI学习平板中的AI功能鸡娃</strong>。通过互联网黑话和创意辅导形式，结合<strong>“90后父母教育方式”</strong>这一话题热点，以<strong>“事件营销+新闻短视频”</strong>形式创意展现产品。',
    details: [
      {
        title: '项目亮点',
        content: '<strong>项目亮点：</strong>以低成本猎奇事件营销实现高声量传播；用户可通过关联词一键搜索产品或直接点击评论区官号直达直播间，为直播间引流，形成消转闭环，同时也外溢流量到天猫、京东等电商平台。'
      }
    ],
    channels: ['抖音娱乐营销号（触达年轻家长群体）', '新闻号（覆盖更广泛受众）'],
    contributionsTitle: '个人亮点贡献',
    contributions: [
      '<strong>a. 核心创意提案落地：</strong>以低成本猎奇事件营销实现高声量传播。',
      '<strong>b. in-house制作传播物料：</strong>独立完成图文素材、视频粗剪、内嵌特效创作，由营销号和新闻号进行包框加工。',
      '<strong>c. 撬动销售，外溢至抖音直播间及外部电商平台：</strong>用户可通过关联词一键搜索产品或直接点击评论区官号直达直播间，为直播间引流，形成消转闭环，同时也外溢流量到天猫、京东等电商平台。'
    ],
    gallery: [
      {
        type: 'live',
        src: youdaoOkrResultsImg,
        doubleImages: [youdaoOkrOverviewImg, youdaoOkrResultsImg],
        caption: '<strong>抖音搜索心智激增，并外溢至电商平台促GMV转化：</strong>抖音搜索指数环比<strong>大涨2039%</strong>，同时流量外溢至天猫、京东等电商平台，使有道AI学习机产品的<strong>电商搜索指数增长</strong>至日常的<strong>3倍</strong>以上。',
        cols: 2,
        center: true
      }
    ],
    links: [
      { label: '抖音爆款视频链接', url: 'https://v.douyin.com/_Zg0cxO44N0/' }
    ]
  },

  // SECTION 2: SOCIAL种草与媒介投放
  {
    id: 'project-seeding-meituan',
    category: 'seeding',
    title: '【拼好饭心智渗透】红抖快 “素人+koc&kol” 矩阵social传播',
    subtitle: '营造拼好饭低价不LOW观感，沉淀「素人内容赛马+达人跟进复制爆款+事件营销打声量波峰」的高爆款率口碑传播方法论',
    typeLabel: '实习经历',
    accentColor: '#556B2F',
    galleryUncropped: true,
    galleryAspect: 'aspect-[3/4]',
    metrics: [
      { label: '月度全渠道爆款率', value: '10%', trend: '环比入职前（2.5%）提升3倍' },
      { label: '月均总曝光', value: '6100w+', trend: '月增长环比116%' },
      { label: '月均CPM', value: '3.1元', trend: '月环比降低49%' },
      { label: '业务侧TOP500正声量占比', value: '+4pp', trend: '帮助用增业务解决负面传播环境' }
    ],
    target: '营造<strong>拼好饭低价不LOW</strong>观感。需提升拼好饭整体<strong>正声量占比</strong>、以及top500内容的<strong>正声量占比</strong>，即在有限成本下<strong>最大化内容产能、并提高爆款产出率</strong>。',
    strategy: '<strong>低成本情况下最大化内容产能、优化投放策略：</strong><u><strong>大量低成本的素人内容赛马+少量达人跟进复制爆款+事件营销打声量波峰</strong></u>。主要通过高频的素人传播以小博大，通过持续性的内容赛马、低成本博爆款；再针对测试出的高潜内容方向、配合以koc&kol跟进复制爆款，进一步扩散流量。同步通过低频少量的新闻事件传播，实现声量波峰。',
    detailsTitle: '爆款示例',
    details: [
      {
        title: 'a. 素人爆款内容示例',
        content: '沉淀出快手、微信视频号等多渠道下的人气爆款短视频素材与高互动热评自传播模版。'
      },
      {
        title: 'b. 热点延展内容示例（结婚梗）',
        content: '<strong>“等我们结婚了，两个人吃拼好饭都不用等”</strong>热梗发酵自用户ugc，监测到后通过内容合作进一步扩散。本人操作路径分为以下两步：<br/><strong>1）首先通过千粉素人测试该热点方向下的对镜口播短视频效果：</strong>借助低成本的少量内容赛马跑出多篇千互动视频，判定为高潜热梗结合方向。<br/><strong>2）合作万粉koc&kol跟进复制爆款：</strong>在评论区预埋与业务强相关的热评，强化心智渗透并撬动自传播扩散。其中该方向爆款视频单条播放量高达<strong>400w+</strong>，点赞量<strong>11.8w</strong>，转发<strong>4.9w</strong>。'
      }
    ],
    channels: ['小红书KOC创作者矩阵', '抖音/快手日常口播与吐槽短剧', '快手极简流'],
    contributionsTitle: '个人亮点贡献',
    contributions: [
      '<strong>低成本情况下最大化内容产能、优化投放策略：</strong>大量低成本的素人内容赛马+少量达人跟进复制爆款+事件营销打声量波峰。主要通过高频的素人传播以小博大，通过持续性的内容赛马、低成本博爆款；再针对测试出的高潜内容方向、配合以koc&kol跟进复制爆款，进一步扩散流量。同步通过低频少量的新闻事件传播，实现声量波峰。',
      '<strong>成功沉淀爆款内容方法论，提升月度爆款率至8%（环比入职前【11月爆款率（2.5%）】提升220%）：</strong><br/>• <strong>for 素人投放：</strong>主要以图文形式的内容为主。沉淀出两类高流量易爆内容角度，一类是素人求助/吐槽方向，用反差性/冲突感情节做钩子，结尾抛问题引导用户自发讨论拼好饭相关问题；一类是温情故事方向，以朴素感文案分享拼好饭相关的互助温暖故事。<br/>• <strong>for koc&kol：</strong>针对素人低成本跑出的易爆内容方向，快速跟进复制。',
      '<strong>开发【热评煽动自传播】模式：</strong>将ugc自然发酵起来的神评论铺进评论区，反哺我们所发布内容的流量。'
    ],
    galleryLiveTitle: '拼好饭正向话题传播成果',
    gallery: [
      {
        type: 'live',
        src: pinhbViralLeft1Img,
        caption: '<strong>温情故事方向（左1）：</strong>以朴素、充满人情味的真实情感叙述（如给邻居奶奶点拼好饭）切入，触动核心大众阶层，撬动巨量正向自发讨论。'
      },
      {
        type: 'live',
        src: pinhbViralLeft2Img,
        caption: '<strong>温情互助方向（左2）：</strong>秉持真实性的女性互助与感恩互动心智（如请保洁阿姨吃拼好饭），用反哺善意的朴素生活细节击中泛主流圈层痛点。'
      },
      {
        type: 'live',
        src: pinhbViralLeft3Img,
        caption: '<strong>素人吐槽/求助方向（左3）：</strong>采用天然去雕饰的反差性冲突细节（如富婆室友也天天自提拼好饭）做爆点钩子，结尾巧妙设置评论区话题自传播抓手。'
      }
    ],
    links: []
  },
  {
    id: 'project-seeding-fanyu-daily',
    category: 'seeding',
    title: '【闲鱼心智投放】小红书KOC种草',
    subtitle: '种草闲鱼省赚心智，沉淀从达人、内容到投流全链路的小红书投放SOP，带动🍠新客引流至闲鱼站内',
    typeLabel: '实习经历',
    accentColor: '#333333',
    metrics: [
      { label: '7月笔记CPE', value: '3.3 元', trend: '环比6月降低34%' },
      { label: '千互动爆文率', value: '85 %', trend: '环比6月上升24%' },
      { label: '唤端成本', value: '- 53 %', trend: '环比6月降低53%' }
    ],
    target: '<strong>1) 心智投放全渠道达人监测：</strong>每日分析达人投放效果数据，承接投流决策。<br/><strong>2) 小红书投放渠道开拓：</strong>针对新开拓的达人合作渠道小红书，重点投放腰尾部达人，渗透闲鱼“省钱”“赚钱”心智，扭转小红书平台内的品牌口碑。',
    strategy: '<strong>1）分析全渠道达人投放数据（完善投流侧方法论）：</strong>针对投流环节，贡献<strong>承接达人投流的看数逻辑</strong>。基于每日拉新效果、成本及投流带来的拉新成本，综合给出<strong>是否追加投流</strong>的决策。<br/><br/><strong>2）沉淀从达人、内容到投流的小红书投放SOP。</strong>沉淀从达人筛选、审稿、投流到数据复盘的小红书投放SOP。同步输出爆款笔记方法论并持续复用。',
    detailsTitle: '内容方法论',
    details: [
      {
        title: '1. 选品逻辑（热点反推&业务需求）',
        content: '基于social热点的反馈（如xx影视剧很火 ➡ 对应去推该影视平台的卡券）、或站内同期热销的品类，确定小红书平台同期主要植入的闲置物场景。'
      },
      {
        title: '2. 选人逻辑',
        content: '<strong>场景对：</strong>达人历史内容场景匹配其对应推广的闲鱼品类；<br/><strong>画像准：</strong>达人粉丝画像和闲鱼TA一致；<br/><strong>数据好：</strong>主要看历史「商单」效果。'
      },
      {
        title: '3. 选题逻辑',
        content: '针对受众想在闲鱼捡漏的普遍需求，结合达人特性和平台热点定制选题和植入切口（即在达人呈现的某个具体的闲鱼使用场景中，植入笔记里提示的品类资源）。从有用的角度，放大所选择的商品的卖点，帮助受众去捡漏。<br/><br/><strong>1) 宏观层面：</strong>对比测试有潜在爆点机会的内容方向，进行笔记赛马，沉淀出抓马剧情演绎、副业搞钱攻略、搞笑聊天段子等易爆的内容模版。<br/><br/><strong>2) 微观层面：</strong>有噱头的内容钩子+有利益点的资源钩子（秒杀券）。<br/>• <strong>a. 内容钩子（激活需求）：</strong>维持原生内容的吸引力。结合对小红书站内热点的洞察和达人粉丝圈层的关注点，来打造爆文选题（比如美食博主做肯德基猎奇新品的组合测评）。<br/>• <strong>b. 资源钩子（驱动消费决策）：</strong>在通过内容钩子把用户代入到使用场景里的基础上，用和业务拿到的品类资源（如肯德基秒杀券）去满足用户想要捡漏的痒点。'
      }
    ],
    channels: ['小红书腰尾部达人'],
    contributionsTitle: '个人贡献',
    galleryLiveTitle: '个人贡献',
    contributions: [
      '<strong>1）分析全渠道达人投放数据（完善投流侧方法论）：</strong>针对投流环节，贡献<strong>承接达人投流的看数逻辑</strong>。基于每日拉新效果、成本及投流带来的拉新成本，综合给出<strong>是否追加投流</strong>的决策。',
      '<strong>2）沉淀从达人、内容到投流的小红书投放SOP。</strong>沉淀从达人筛选、审稿、投流到数据复盘的小红书投放SOP。同步输出爆款笔记方法论并持续复用。'
    ]
  },
  {
    id: 'project-seeding-youdao-pen',
    category: 'seeding',
    title: '有道词典笔X5合作财经博主 X 商业案例包装种草',
    subtitle: '把词典笔的成功原因包装成科技逆袭的商业案例，钓足中年男性兴趣，种草查词功能心智',
    typeLabel: '实习经历',
    accentColor: '#333333',
    galleryUncropped: true,
    metrics: [
      { label: '投放短视频数', value: '5 条', trend: '财经/运营视角' },
      { label: '合计视频播放', value: '900 w+', trend: '切中中年关注' },
      { label: '平均热度', value: '1 w+ 均赞', trend: '投放视频点赞量均破万赞' }
    ],
    target: '推广最新款有道词典笔的<strong>核心查词功能</strong>，夯实有道词典笔<strong>行业第一</strong>地位，占领用户心智。',
    strategy: '将有道词典笔核心查词功能包装成<strong>商业案例</strong>，分析讨论<strong>有道词典笔成功原因</strong>；在短视频平台寻找<strong>商业分析类账号</strong>进行投放推广，用通俗易懂的语言向潜在用户沟通，<strong>切中中年人群</strong>。',
    details: [
      {
         title: 'a. 总结同类视频爆款逻辑并输出内容方向',
         content: '• <strong>CEO人物角度：</strong>【网易CEO丁磊：能当首富也能养猪】（大佬传奇式死磕一支词典笔）\n• <strong>行业动荡竞争角度：</strong>【双减政策后，教育行业的新风口】（教培巨变后转型有道智能硬件的突围之路）\n• <strong>中国科技角度：</strong>【中国黑科技: 马斯克妈妈都在用的国产神笔】（用黑科技破局同质化竞争，代表中国速度）'
      },
      {
         title: 'b. 完善短视频脚本大纲与 c. 数据复盘评估',
         content: '根据内容方向完善短视频脚本大纲给到合作达人，并建立第一轮投放数据维度复盘体系，对比分析播放与互动数据，精准判定账号投放商业价值。'
      }
    ],
    channels: ['抖音财经类', '商业分析类账号'],
    galleryLiveTitle: '抖音种草视频示例',
    detailsTitle: '个人亮点贡献',
    contributionsTitle: '个人贡献',
    contributions: [
      '短视频内容方向创意',
      '脚本大纲制定与达人统筹工作',
      '建立账号播放差异评估，输出第一轮投放数据盘点'
    ],
    galleryAspect: 'aspect-[3/4] sm:aspect-[9/16] max-h-[450px] sm:max-h-[550px] mx-auto rounded-3xl border border-stone-200 bg-stone-50 shadow-sm',
    gallery: [
      {
        type: 'live',
        src: youdaoNewImg,
        caption: '<strong>抖音推广视频画面示范（新哥财经）：</strong>基于大佬丁磊死磕词典笔的商业案例包装，精准撬动中年、新中产高净值人群。单发视频播放量超 380 w+，点赞量高达 <strong>1.7 w+</strong>，大幅提升品牌在高端心智中的价值厚度。',
        center: true
      },
      {
        type: 'live',
        src: youdaoDouyinChatImg,
        caption: '<strong>抖音推广视频画面示范（深氪财经）：</strong>紧贴“双减之后教培转型，教育硬件乘风突围”的社会热度与中国科技等视角。单发视频播放量超 520 w+，点赞量超 <strong>1.2 w+</strong>，极大地建立受众心智好感度与信任。',
        center: true
      }
    ],
    links: [
      { label: '抖音红人新哥财经观看链接', url: 'https://www.douyin.com/video/7146136773813341447' }
    ]
  }
];
