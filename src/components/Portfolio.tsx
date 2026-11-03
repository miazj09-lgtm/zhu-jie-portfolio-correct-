import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Filter, AlertCircle, Eye, ChevronRight, X, ExternalLink, TrendingUp, Sparkles, CheckCircle, Target, Compass, Award, Image, Video, Upload } from 'lucide-react';
import { ProjectItem } from '../types';
import { projectsData } from '../projectsData';
import { CozyBreeze, WritingGirl, LineThumbsUp } from './LineArtTransitions';
import pinhbViralVideoImg from '../assets/images/regenerated_image_1780618927472.png';
import pinhbViralCommentsImg from '../assets/images/regenerated_image_1780442373023.jpg';
import pinhbViralLeft1Img from '../assets/images/regenerated_image_1780527921850.png';
import pinhbViralLeft2Img from '../assets/images/meituan_pinhb_douyin_1780610618348.png';
import pinhbViralLeft3Img from '../assets/images/meituan_pinhb_posts_1780610641594.png';
import jiePortraitImg from '../assets/images/jie_portrait_1779989858914.png';
import youdaoNewImg from '../assets/images/regenerated_image_1780695905247.png';
import youdaoDouyinChatImg from '../assets/images/youdao_douyin_chat_1780604251993.png';
import youdaoOkrResultsImg from '../assets/images/youdao_okr_results_1780603589739.png';
import youdaoExampleImg from '../assets/images/regenerated_image_1780694919686.jpg';
import pinhbViralScreenshotImg from '../assets/images/regenerated_image_1780869157563.png';
import pinhbViralScreenshot2Img from '../assets/images/regenerated_image_1780881244639.png';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'event' | 'seeding'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [youdaoSlideIdx, setYoudaoSlideIdx] = useState<number>(0);
  const [uglyCatActiveTab, setUglyCatActiveTab] = useState<number>(0);
  const [customUglyCatSrc, setCustomUglyCatSrc] = useState<string | null>(null);
  const [customUglyCatSrc1, setCustomUglyCatSrc1] = useState<string | null>(null);
  const [customUglyCatSrc2, setCustomUglyCatSrc2] = useState<string | null>(null);
  const [customMeituanSrc, setCustomMeituanSrc] = useState<string | null>(() => {
    try {
      return localStorage.getItem('customMeituanSrc');
    } catch {
      return null;
    }
  });
  const [meituanDragging, setMeituanDragging] = useState<boolean>(false);

  const handleMeituanImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target?.result) {
        const base64 = evt.target.result as string;
        setCustomMeituanSrc(base64);
        try {
          localStorage.setItem('customMeituanSrc', base64);
        } catch (e) {
          console.error("Failed to save to localStorage:", e);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // Filter project lists
  const filteredProjects = projectsData.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="portfolio" className="py-20 bg-apricot-50 relative">
      {/* Decorative wind/leaves backdrop */}
      <div className="absolute right-4 top-10 opacity-10 pointer-events-none">
        <WritingGirl className="w-48 h-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-moss-50 border border-moss-200 text-moss-800 text-xs font-mono font-medium tracking-wide">
            <FolderGit2 className="w-3.5 h-3.5 text-moss-600" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight">副本成就积累中：创意作品Showcase</h2>
          <p className="text-stone-500 text-sm">
            点击项目卡片查阅包含“项目目标、爆款策略、执行细节与核心亮点贡献”在内的完整复盘细节
          </p>

          {/* Filter toggle buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => setSelectedCategory(selectedCategory === 'event' ? 'all' : 'event')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-serif italic tracking-wide transition-all duration-300 border cursor-pointer hover:shadow-sm ${
                selectedCategory === 'event'
                  ? 'bg-moss-600 border-moss-700 text-white shadow-md'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span>营销事件showcase</span>
            </button>
            <button
              onClick={() => setSelectedCategory(selectedCategory === 'seeding' ? 'all' : 'seeding')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-serif italic tracking-wide transition-all duration-300 border cursor-pointer hover:shadow-sm ${
                selectedCategory === 'seeding'
                  ? 'bg-moss-600 border-moss-700 text-white shadow-md'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span>social种草投放</span>
            </button>
          </div>
        </div>



        {/* Projects Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEvent = project.category === 'event';
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveProject(project)}
                  className="bg-white rounded-3xl border border-stone-200 hover:border-moss-200 shadow-sm hover:shadow-lg hover:shadow-moss-900/5 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div className="p-6 space-y-4">
                    {/* Top badgies */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                        {isEvent ? '营销事件' : '种草投放'}
                      </span>
                      <span className="text-xs text-stone-400 font-mono tracking-wide">
                        {project.typeLabel}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-lg leading-snug text-stone-900 hover:text-moss-700 transition-colors duration-200">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-stone-500 text-xs sm:text-sm italic font-serif">
                          “ {project.subtitle} ”
                        </p>
                      )}
                    </div>

                    {/* Highly highlighted core metrics */}
                    <div className="grid grid-cols-2 gap-2.5 bg-moss-50/50 p-3 rounded-2xl border border-moss-100">
                      {(project.id === 'project-seeding-youdao-pen'
                        ? project.metrics.slice(1, 3)
                        : project.metrics.slice(0, 2)
                      ).map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <p className="text-[10px] text-stone-500 tracking-wide font-sans">{m.label}</p>
                          <p className="font-mono text-base font-semibold text-moss-700">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Action summary strategy teaser */}
                    {(() => {
                      const label = project.id === 'project-seeding-fanyu-daily' ? '个人贡献' : '策略';
                      const content = project.strategy ? project.strategy.replace(/<[^>]*>/g, '') : '';

                      return (
                        <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                          <strong>{label}：</strong>
                          {content}
                        </p>
                      );
                    })()}
                  </div>

                  {/* Card footer detail trigger */}
                  <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-semibold text-stone-500 group-hover:text-moss-600 transition-colors">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-stone-400" />
                      <span>查看完整复盘</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-500 font-sans text-sm">暂无该分类作品</p>
          </div>
        )}

        <CozyBreeze className="max-w-xl mx-auto mt-16" />
      </div>

      {/* PORTFOLIO DETAIL OVERLAY MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-apricot-50 w-full max-w-4xl rounded-3xl border border-stone-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
              onClick={e => e.stopPropagation()}
            >
              {/* Header Panel */}
              <div className="bg-white border-b border-stone-200 p-6 flex items-start justify-between relative">
                <div className="space-y-2 max-w-[90%]">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded bg-moss-100 text-moss-800">
                      {activeProject.category === 'event' ? '营销项目 SHOWCASE' : 'SOCIAL 种草与媒介投放'}
                    </span>
                    <span className="text-stone-300 font-serif text-sm">|</span>
                    <span className="text-xs text-stone-500 font-mono italic">
                      {activeProject.typeLabel}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-xl sm:text-2xl text-stone-900 leading-snug">
                    {activeProject.title}
                  </h3>
                  {activeProject.subtitle && (
                    <p className="text-stone-600 text-xs sm:text-sm font-serif italic border-l-2 border-moss-300 pl-2.5">
                      “{activeProject.subtitle}”
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 rounded-full border border-stone-200 hover:border-stone-300 bg-stone-50 hover:bg-stone-100 flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <X className="w-5 h-5 text-stone-500" />
                </button>
              </div>

              {/* Scrollable Contents area */}
              <div className="overflow-y-auto p-6 space-y-6 flex-1 text-sm text-stone-700">
                  <>
                    {/* Metrics ribbon */}
                    <div className="bg-white border border-stone-200 p-4 rounded-2xl">
                  <p className="text-[10px] font-mono font-bold tracking-wider text-stone-400 mb-3 uppercase text-center sm:text-left">
                    {activeProject.id === 'project-seeding-fanyu-daily' 
                      ? '项目核心成果 KPI RESULTS（以24.07当月结果为例）:' 
                      : '项目核心成果 KPI RESULTS:'}
                  </p>
                  <div className={`grid grid-cols-2 gap-4 text-center ${activeProject.metrics.length <= 2 ? 'sm:grid-cols-2 max-w-xl mx-auto' : 'sm:grid-cols-4'}`}>
                    {activeProject.metrics.map((m, idx) => (
                      <div 
                        key={idx} 
                        className={`space-y-1 relative group ${activeProject.id === 'project-seeding-youdao-pen' && idx === 0 ? 'hidden' : ''}`}
                      >
                        <p className="text-xs text-stone-500 leading-none">{m.label}</p>
                        <p className="font-mono text-lg sm:text-xl font-bold text-moss-700 tracking-tight">
                          {m.value}
                        </p>
                        {m.trend && (
                          <span className="text-[9px] font-mono bg-moss-50 text-moss-800 px-1.5 py-0.5 rounded-full border border-moss-100 block mx-auto w-max">
                            {m.trend}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 抖音&小红书的拼好饭话题传播效果 block for project-seeding-meituan */}
                {activeProject.id === 'project-seeding-meituan' && (
                  <div className="space-y-3 bg-white p-5 rounded-2xl border border-stone-200">
                    <h4 className="font-serif font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                      <TrendingUp className="w-4 h-4 text-moss-600 animate-pulse" />
                      <span>抖音&小红书的拼好饭话题传播效果</span>
                    </h4>
                    <div className="rounded-xl overflow-hidden bg-stone-50 border border-stone-150 p-1 flex items-center justify-center">
                      <img 
                        src={pinhbViralScreenshot2Img} 
                        alt="抖音&小红书的拼好饭话题传播效果" 
                        className="max-w-full h-auto max-h-[460px] object-contain rounded-lg shadow-2xs"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                )}

                {/* Split layout: targets and goals */}
                <div className={`grid grid-cols-1 ${activeProject.id === 'project-seeding-youdao-pen' ? 'md:grid-cols-3' : activeProject.id === 'project-seeding-meituan' ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-5`}>
                  <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2">
                    <h4 className="font-serif font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                      <Target className="w-4 h-4 text-red-600" />
                      <span>目标</span>
                    </h4>
                    <p 
                      className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans"
                      dangerouslySetInnerHTML={{ __html: activeProject.target }}
                    />
                  </div>

                  {activeProject.id !== 'project-seeding-meituan' && (
                    <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-serif font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                        {activeProject.id === 'project-seeding-fanyu-daily' ? (
                          <Award className="w-4 h-4 text-amber-600" />
                        ) : (
                          <Compass className="w-4 h-4 text-moss-700" />
                        )}
                        <span>{activeProject.id === 'project-seeding-fanyu-daily' ? '个人贡献' : '策略'}</span>
                      </h4>
                      <p 
                        className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans"
                        dangerouslySetInnerHTML={{ __html: activeProject.strategy }}
                      />
                    </div>
                  )}

                  {activeProject.id === 'project-seeding-youdao-pen' && (
                    <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-serif font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                        <Compass className="w-4 h-4 text-sky-600" />
                        <span>渠道</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans-serif">
                        抖音财经类、商业分析类账号
                      </p>
                    </div>
                  )}
                </div>

                {/* 个人爆款方法论 block for project-seeding-meituan */}
                {activeProject.id === 'project-seeding-meituan' && (
                  <div className="space-y-4 pt-5 border-t border-stone-200">
                    <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                      <span>个人贡献与方法论总结</span>
                    </h4>
                    
                    <div className="bg-stone-50 border border-stone-200 p-5 sm:p-6 rounded-3xl shadow-xs leading-relaxed text-xs sm:text-sm text-stone-700 space-y-4">
                      {/* Content Column */}
                      <div className="space-y-4">
                        {/* Point 1 */}
                        <div className="space-y-1.5 bg-white p-3.5 rounded-2xl border border-stone-150 shadow-2xs">
                          <p className="font-sans font-bold text-stone-900 text-xs sm:text-sm flex items-start gap-1">
                            <span className="text-amber-600 font-bold shrink-0 mt-0.5">1)</span>
                            <span>低成本情况下最大化内容产能、优化投放策略：</span>
                          </p>
                          <p className="text-stone-600 pl-4 text-xs leading-relaxed">
                            <strong>大量低成本的素人内容赛马 + 少量达人跟进复制爆款 + 事件营销打声量波峰</strong>。主要通过高频的素人传播以小博大，通过持续性的内容赛马、低成本博爆款；再针对测试出的高潜内容方向、配合以 KOC & KOL 跟进复制爆款，进一步扩散流量。同步通过低频少量的新闻事件传播，实现声量波峰。
                          </p>
                        </div>

                        {/* Point 2 */}
                        <div className="space-y-2 bg-white p-3.5 rounded-2xl border border-stone-150 shadow-2xs">
                          <p className="font-sans font-bold text-stone-900 text-xs sm:text-sm flex items-start gap-1 flex-wrap">
                            <span className="text-amber-600 font-bold shrink-0 mt-0.5">2)</span>
                            <span>成功沉淀爆款内容方法论，提升月度爆款率至 <span className="text-red-600 font-extrabold bg-red-50 px-1.5 py-0.5 rounded">8%</span>，环比入职前【11月爆款率（2.5%）】<span className="text-red-700 font-extrabold">提升 220%</span>：</span>
                          </p>
                          <div className="pl-4 space-y-2 text-xs leading-relaxed text-stone-600">
                            <div className="border-l-2 border-amber-300 pl-2">
                              <p className="font-bold text-stone-800 text-[11px] sm:text-xs">• for 素人投放：</p>
                              <p className="mt-0.5">
                                主要以图文形式的内容为主。沉淀出两类高流量易爆内容角度，一类是<strong>素人求助/吐槽方向</strong>，用反差性/冲突感情节做钩子，结尾抛问题引导用户自发讨论拼好饭相关问题；一类是<strong>温情故事方向</strong>，以朴素感文案分享拼好饭相关的互助温暖故事。
                              </p>
                            </div>
                            <div className="border-l-2 border-indigo-300 pl-2">
                              <p className="font-bold text-stone-800 text-[11px] sm:text-xs">• for koc&kol：</p>
                              <p className="mt-0.5">
                                针对素人低成本跑出的易爆内容方向，快速跟进复制。
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Point 3 */}
                        <div className="space-y-1.5 bg-white p-3.5 rounded-2xl border border-stone-150 shadow-2xs">
                          <p className="font-sans font-bold text-stone-900 text-xs sm:text-sm flex items-start gap-1">
                            <span className="text-amber-600 font-bold shrink-0 mt-0.5">3)</span>
                            <span>开发【热评撬动自传播】模式：</span>
                          </p>
                          <p className="text-stone-600 pl-4 text-xs leading-relaxed">
                            将 UGC 自然发酵起来的<strong>神评论铺进评论区</strong>，反哺我们所发布内容的流量。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 爆款示例 block for project-seeding-meituan */}
                {activeProject.id === 'project-seeding-meituan' && (
                  <div className="space-y-4 pt-5 border-t border-stone-200 animate-fadeIn">
                    <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5 col-span-full">
                      <Award className="w-4 h-4 text-moss-600 animate-pulse" />
                      <span>【素人+KOC&KOL】爆款内容示例</span>
                    </h4>
                    
                    <div className="bg-stone-50 border border-stone-200 p-5 sm:p-6 rounded-3xl shadow-xs leading-relaxed text-xs sm:text-sm text-stone-700 space-y-8">
                      {/* Sub-section a: 素人爆款内容 */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <p className="font-sans font-extrabold text-stone-900 text-xs sm:text-sm flex items-start gap-1.5">
                            <span className="text-moss-600 font-extrabold">a.</span>
                            <span>素人爆款内容示例：【温情故事】方向（左1、左2）和【素人吐槽/求助】方向（左3）为沉淀的两大流量易爆角度。</span>
                          </p>
                        </div>
                        
                        {/* Interactive Photo Case */}
                        <div className="bg-white rounded-2xl border border-stone-150 p-2 sm:p-3 shadow-xs hover:shadow-md transition-all group overflow-hidden">
                          <div className="rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center border border-stone-100 max-h-[500px]">
                            <img 
                              src={pinhbViralLeft3Img} 
                              alt="素人爆款内容示例" 
                              className="w-full h-full max-h-[480px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Sub-section b: 热点延展内容 */}
                      <div className="space-y-4 pt-4 border-t border-stone-150">
                        <div className="space-y-1">
                          <p className="font-sans font-extrabold text-stone-900 text-xs sm:text-sm flex items-start gap-1.5">
                            <span className="text-moss-600 font-extrabold">b.</span>
                            <span>热点延展内容示例：下图为结婚梗（等结婚了两个人吃拼好饭都不用等）的热梗延展内容。该热梗发酵自用户ugc，监测到后通过内容合作进一步扩散。</span>
                          </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          {/* Text/details card: left column */}
                          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                            <div className="space-y-4">
                              {/* Direct Link button */}
                              <div>
                                <a 
                                  href="https://www.douyin.com/video/7448099000986832187"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[#2d2d2c] text-xs font-semibold hover:underline bg-[#fbfbfa] border border-stone-200 px-3.5 py-1.5 rounded-lg shadow-3xs hover:bg-stone-50 transition-colors"
                                >
                                  <span>抖音爆款视频链接</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                                </a>
                              </div>
 
                              <div className="space-y-3">
                                <p className="font-sans font-bold text-stone-950 text-sm sm:text-[15px] md:text-[16px] leading-relaxed tracking-tight">以结婚梗为例，对于热点延展方向的内容传播，本人操作路径分为以下两步：</p>
                                
                                <div className="space-y-3.5 text-xs sm:text-[13px] text-stone-600">
                                  <div className="bg-[#fbfbfa] p-3.5 rounded-xl border border-stone-150/80 shadow-3xs">
                                    <span className="font-sans font-bold text-stone-900 block mb-1">2) 合作万粉koc&kol跟进复制爆款：</span>
                                    <span className="leading-relaxed">在评论区预埋与业务强相关的热评“等结婚了两个人吃拼好饭都不用等”，强化心智渗透、并撬动自传播扩散。</span>
                                  </div>
                                </div>
                              </div>
                            </div>
 
                            {/* Stat block highlight */}
                            <div className="bg-[#f4f7f4] p-[14px] rounded-xl border border-[#dce6dc] text-[#2a4d2a]">
                              <p className="text-xs sm:text-[13px] leading-relaxed font-sans font-semibold text-moss-900 flex items-center flex-wrap gap-x-1.5">
                                <span>其中右侧爆款视频单条播放量高达 <span className="text-stone-900 font-black text-[14px] sm:text-[16px]">400w+</span> ，</span>
                                <span>点赞量 <span className="text-stone-900 font-black text-[14px] sm:text-[16px]">11.8w</span> ，</span>
                                <span>转发 <span className="text-stone-900 font-black text-[14px] sm:text-[16px]">4.9w</span> 。</span>
                              </p>
                            </div>
                          </div>
 
                          {/* Image card: right column */}
                          <div className="md:col-span-5 flex flex-col justify-center">
                            <div
                              onDragOver={(e) => {
                                e.preventDefault();
                                setMeituanDragging(true);
                              }}
                              onDragLeave={() => setMeituanDragging(false)}
                              onDrop={(e) => {
                                e.preventDefault();
                                setMeituanDragging(false);
                                const file = e.dataTransfer.files?.[0];
                                if (file) {
                                  handleMeituanImageUpload(file);
                                }
                              }}
                              onClick={() => {
                                const fileInput = document.getElementById('meituan-persistent-upload') as HTMLInputElement | null;
                                if (fileInput) fileInput.click();
                              }}
                              className={`w-full overflow-hidden bg-white relative p-1.5 flex flex-col items-center justify-center transition-all duration-200 cursor-pointer group shadow-sm ${
                                meituanDragging
                                  ? 'border-[3px] border-moss-550 bg-moss-50/40 scale-[0.98] rounded-[18px]'
                                  : 'border-[3px] border-[#44423e] hover:border-moss-500 rounded-[18px] hover:shadow-md'
                              }`}
                            >
                              <input
                                id="meituan-persistent-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleMeituanImageUpload(file);
                                  }
                                }}
                              />
                              <div className="w-full h-auto relative block text-center">
                                <img
                                  src={customMeituanSrc || pinhbViralLeft2Img}
                                  alt="图片素材"
                                  referrerPolicy="no-referrer"
                                  className="w-full h-auto rounded-lg max-h-[380px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                                />
                                {customMeituanSrc && (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setCustomMeituanSrc(null);
                                      try {
                                        localStorage.removeItem('customMeituanSrc');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-stone-900/80 text-white hover:bg-stone-850 hover:scale-105 active:scale-95 transition-all shadow-md z-10"
                                    title="恢复默认图片"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                                  <div className="px-3 py-1.5 rounded-lg bg-stone-900/90 text-white text-[11px] font-sans font-semibold shadow-md flex items-center gap-1.5">
                                    <Upload className="w-3.5 h-3.5" />
                                    <span>更换图片素材 (支持拖拽)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Million-view video examples block for project-meituan-00s */}
                {activeProject.id === 'project-meituan-00s' && (
                  <div className="space-y-4 pt-4 border-t border-stone-100">
                    <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-3.5 rounded bg-moss-600 block" />
                      <span>百万播放视频示例</span>
                    </h4>
                    <div className="flex flex-col items-center justify-center pt-2">
                      {/* Video 1: Kuaishou */}
                      <div className="flex flex-col items-center space-y-2 group w-full max-w-[280px]">
                        <a 
                          href="https://v.kuaishou.com/cKdGb3" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full aspect-[3/4] sm:aspect-[9/16] overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-2 shadow-sm hover:shadow-md hover:border-moss-500/30 transition-all duration-300 relative cursor-pointer"
                        >
                          <div className="w-full h-full rounded-xl overflow-hidden bg-stone-100 relative">
                            <img 
                              src={pinhbViralScreenshotImg} 
                              alt="拼好饭爆款视频截图1" 
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                              <span className="text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 bg-moss-600/90 backdrop-blur-sm rounded-full flex items-center gap-1 shadow-sm">
                                <Eye className="w-3.5 h-3.5" />
                                <span>打开快手播放原片</span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <a 
                          href="https://v.kuaishou.com/cKdGb3" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[11px] sm:text-xs text-stone-500 hover:text-moss-700 underline font-mono break-all text-center transition-colors block px-1"
                        >
                          https://v.kuaishou.com/cKdGb3
                        </a>
                      </div>
                    </div>
                    
                    {/* Centered Results Container */}
                    <div className="mt-8 p-6 bg-stone-50 border border-stone-150 rounded-2xl max-w-2xl mx-auto text-stone-700 leading-relaxed text-xs sm:text-sm shadow-sm space-y-3">
                      <div className="font-bold text-stone-950 border-b border-stone-200 pb-2 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-moss-600" />
                        <span>最终成果：</span>
                      </div>
                      <p>
                        基于<strong>4.6w</strong>成本（制作+媒介），视频总播放量<strong>700w+</strong>，播放CPM<strong>6.8元</strong>，<strong>33%</strong>视频破百万播放，爆款视频点赞达<strong>7.9w</strong>。
                      </p>
                      <p>
                        评论区自然发酵出<strong>“没钱靠拼好饭生存”</strong><strong>“拼好饭别涨价”</strong><strong>“拼好饭有肉有菜”</strong>等用户<strong>自发为拼好饭发声</strong>的正面评论；吸引了（不了解拼好饭、因中毒梗对拼好饭有误解的）<strong>路人进场</strong>，大量评论在围绕<strong>“拼好饭是什么/为什么便宜”</strong>等问题进行互动。
                      </p>
                    </div>

                    {/* Personal Contribution Block */}
                    <div className="space-y-3 pt-6 border-t border-stone-100">
                      <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-3.5 rounded bg-moss-600 block" />
                        <span>个人贡献</span>
                      </h4>
                      <div className="p-5 bg-stone-50 border border-stone-150 rounded-2xl max-w-2xl mx-auto text-stone-700 leading-relaxed text-xs sm:text-sm shadow-sm">
                        主导该小预算项目的策略及执行，负责创意产出（从<strong>00后实习生年底晒记账本</strong>的内容角度切入）+传播执行。
                      </div>
                    </div>
                  </div>
                )}

                {/* Gallery showcase */}
                {activeProject.gallery && activeProject.gallery.length > 0 && activeProject.id !== 'project-seeding-meituan' && activeProject.id !== 'project-meituan-00s' && (
                  <div className="space-y-6 pt-2">
                    {/* Part 1: Project Live Photos */}
                    {activeProject.gallery.some(img => img.type === 'live') && activeProject.id !== 'project-seeding-youdao-pen' && (
                      <div className="space-y-3">
                        {(activeProject.detailsTitle === '最终成果' || activeProject.detailsTitle === '爆款视频') ? (
                          <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-3.5 rounded bg-moss-600 block" />
                            <span>{activeProject.detailsTitle}</span>
                          </h4>
                        ) : (
                          <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-3.5 rounded bg-moss-600 block" />
                            <span>{activeProject.galleryLiveTitle || '现场实拍'}</span>
                          </h4>
                        )}
                        
                        {(activeProject.detailsTitle === '最终成果' || activeProject.detailsTitle === '爆款视频') ? (
                          (() => {
                            const liveImages = activeProject.gallery.filter(img => img.type === 'live');
                            const firstLive = liveImages[0];
                            const otherLive = liveImages.slice(1);
                            return (
                              <div className="space-y-6">
                                {/* First Row: 最终成果 on the left, first live image on the right */}
                                <div className={activeProject.id === 'project-fanyu-ctrip' ? "max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch justify-center" : "grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch"}>
                                  {activeProject.id === 'project-fanyu-ctrip' ? (
                                    <>
                                      {/* Image Card 1: Video scene */}
                                      <div className="bg-gradient-to-br from-amber-50/70 to-moss-50/40 rounded-3xl border-2 border-amber-200/50 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between space-y-4">
                                        <div className="aspect-[3/4] w-full overflow-hidden bg-transparent relative p-1 flex items-center justify-center rounded-2xl">
                                          <a href={firstLive.link || 'https://www.douyin.com/video/7405484099630107967'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity rounded-2xl overflow-hidden">
                                            <img
                                              src={firstLive.src}
                                              alt=""
                                              referrerPolicy="no-referrer"
                                              className="max-w-full max-h-full object-contain rounded-2xl"
                                            />
                                          </a>
                                        </div>
                                        {(firstLive.link || 'https://www.douyin.com/video/7405484099630107967') && (
                                          <div className="pt-3 bg-transparent border-t border-amber-200/50 flex flex-col gap-2">
                                            <p 
                                              className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
                                              dangerouslySetInnerHTML={{ __html: firstLive.caption || '' }}
                                            />
                                            <div className="mt-1 flex justify-center">
                                              <a
                                                href={firstLive.link || 'https://www.douyin.com/video/7405484099630107967'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold transition-all border border-red-200/50 hover:border-red-300"
                                              >
                                                <ExternalLink className="w-3 h-3 text-red-500" />
                                                <span className="truncate">打开播放链接</span>
                                              </a>
                                            </div>
                                          </div>
                                        )}
                                      </div>

                                      {/* Image Card 2: Comments and CTA */}
                                      {otherLive[0] && (
                                        <div className="bg-gradient-to-br from-amber-50/70 to-moss-50/40 rounded-3xl border-2 border-amber-200/50 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between space-y-4">
                                          <div className="aspect-[3/4] w-full overflow-hidden bg-transparent relative p-1 flex items-center justify-center rounded-2xl">
                                            <img
                                              src={otherLive[0].src}
                                              alt=""
                                              referrerPolicy="no-referrer"
                                              className="max-w-full max-h-full object-contain rounded-2xl"
                                            />
                                          </div>
                                          <div className="pt-3 bg-transparent border-t border-amber-200/50 flex flex-col gap-2">
                                            <p 
                                              className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
                                              dangerouslySetInnerHTML={{ __html: otherLive[0].caption || '' }}
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {activeProject.galleryMergedDouble ? (
                                        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-amber-50/70 to-moss-50/40 border-2 border-amber-200/50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                                          <div className={`grid grid-cols-1 ${(!activeProject.galleryDoubleImages?.[0] || !activeProject.galleryDoubleImages?.[1]) ? 'max-w-md mx-auto w-full' : 'md:grid-cols-2'} gap-6 items-stretch justify-center`}>
                                            {/* Left Slot */}
                                            {activeProject.galleryDoubleImages?.[0] && (
                                              <div className="flex flex-col items-center justify-center bg-transparent rounded-2xl overflow-hidden border border-amber-100/30 p-1 shadow-sm">
                                                {activeProject.galleryDoubleLinks?.[0] ? (
                                                  <a href={activeProject.galleryDoubleLinks[0]} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity rounded-2xl overflow-hidden">
                                                    <img
                                                      src={activeProject.galleryDoubleImages[0]}
                                                      alt=""
                                                      referrerPolicy="no-referrer"
                                                      className="max-w-full max-h-full object-contain rounded-2xl shadow"
                                                    />
                                                  </a>
                                                ) : (
                                                  <img
                                                    src={activeProject.galleryDoubleImages[0]}
                                                    alt=""
                                                    referrerPolicy="no-referrer"
                                                    className="max-w-full max-h-full object-contain rounded-2xl shadow"
                                                  />
                                                )}
                                              </div>
                                            )}

                                            {/* Right Slot */}
                                            {activeProject.galleryDoubleImages?.[1] && (
                                              <div className="flex flex-col items-center justify-center bg-transparent rounded-2xl overflow-hidden border border-amber-100/30 p-1 shadow-sm">
                                                {activeProject.galleryDoubleLinks?.[1] ? (
                                                  <a href={activeProject.galleryDoubleLinks[1]} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity rounded-2xl overflow-hidden">
                                                    <img
                                                      src={activeProject.galleryDoubleImages[1]}
                                                      alt=""
                                                      referrerPolicy="no-referrer"
                                                      className="max-w-full max-h-full object-contain rounded-2xl shadow"
                                                    />
                                                  </a>
                                                ) : (
                                                  <img
                                                    src={activeProject.galleryDoubleImages[1]}
                                                    alt=""
                                                    referrerPolicy="no-referrer"
                                                    className="max-w-full max-h-full object-contain rounded-2xl shadow"
                                                  />
                                                )}
                                              </div>
                                            )}
                                          </div>

                                          <div className="mt-4 pt-4 border-t border-amber-200/50 flex flex-col items-center justify-center">
                                            <p className="text-xs sm:text-sm text-stone-700 font-sans text-center">
                                              爆款视频链接：
                                              <a 
                                                href={activeProject.links?.[0]?.url || "https://v.douyin.com/_Zg0cxO44N0/"} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-red-600 hover:text-red-700 font-semibold underline break-all inline-flex items-center gap-1 hover:brightness-110 active:scale-95 transition-all text-center"
                                              >
                                                <span>{activeProject.links?.[0]?.url || "https://v.douyin.com/_Zg0cxO44N0/"}</span>
                                                <ExternalLink className="w-3.5 h-3.5 text-red-500 inline-block ml-0.5" />
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      ) : (
                                        <>
                                          {/* Left Card: 最终成果 */}
                                          {activeProject.id !== 'project-fanyu-ctrip' && (
                                            <div className="bg-gradient-to-br from-amber-50/70 to-moss-50/40 border-2 border-amber-200/50 p-6 rounded-3xl flex flex-col justify-center space-y-4 shadow-sm">
                                              <div className="space-y-1">
                                                <div 
                                                  className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans"
                                                  dangerouslySetInnerHTML={{ __html: activeProject.details[0].content }}
                                                />
                                              </div>
                                            </div>
                                          )}

                                          {/* Right Card: First Live Image */}
                                          {firstLive && (
                                            <div className="bg-gradient-to-br from-amber-50/70 to-moss-50/40 rounded-3xl border-2 border-amber-200/50 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between space-y-4">
                                              <div className={
                                                activeProject.galleryUncropped 
                                                  ? `${activeProject.galleryAspect || 'w-full'} overflow-hidden bg-transparent relative p-1 flex items-center justify-center rounded-2xl` 
                                                  : "aspect-[4/3] w-full overflow-hidden bg-transparent relative rounded-2xl"
                                              }>
                                                {firstLive.link ? (
                                                  <a href={firstLive.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity rounded-2xl overflow-hidden">
                                                    <img
                                                      src={firstLive.src}
                                                      alt={firstLive.caption || ''}
                                                      referrerPolicy="no-referrer"
                                                      className={
                                                        activeProject.galleryUncropped 
                                                          ? (activeProject.galleryAspect ? "max-w-full max-h-full object-contain rounded-2xl" : "w-full h-auto object-contain rounded-2xl")
                                                          : "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                                                      }
                                                    />
                                                  </a>
                                                ) : (
                                                  <img
                                                    src={firstLive.src}
                                                    alt={firstLive.caption || ''}
                                                    referrerPolicy="no-referrer"
                                                    className={
                                                      activeProject.galleryUncropped 
                                                        ? (activeProject.galleryAspect ? "max-w-full max-h-full object-contain rounded-2xl" : "w-full h-auto object-contain rounded-2xl")
                                                        : "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                                                    }
                                                  />
                                                )}
                                              </div>
                                              {firstLive.link && (
                                                <div className="pt-3 bg-transparent border-t border-amber-200/50 flex flex-col gap-1.5">
                                                  <div className={`mt-1 flex ${firstLive.center ? 'justify-center' : 'justify-start'}`}>
                                                    <a
                                                      href={firstLive.link}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold transition-all border border-red-200/50 hover:border-red-300"
                                                    >
                                                      <ExternalLink className="w-3 h-3 text-red-500" />
                                                      <span className="truncate">{firstLive.link}</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>

                                {activeProject.id === 'project-fanyu-ctrip' && (
                                  <p className="mt-8 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans text-center max-w-xl mx-auto bg-gradient-to-r from-amber-50/50 via-stone-50/20 to-amber-50/50 border border-amber-200/40 p-5 rounded-3xl shadow-sm">
                                    <strong>成果：</strong>通过线上抖音阵地产出的<strong>万赞爆款短视频</strong>，<br />卷动闲鱼站内的用户简历<strong>发布量环比提升285%</strong>。
                                  </p>
                                )}

                                  {/* Remaining Live Photos */}
                                  {((activeProject.galleryMergedDouble ? liveImages : otherLive).length > 0) && activeProject.id !== 'project-fanyu-ctrip' && (
                                    <div className="space-y-3">
                                      <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                                        <span className="w-1.5 h-3.5 rounded bg-moss-600 block" />
                                        <span>{activeProject.galleryLiveTitle || '现场实拍'}</span>
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {(activeProject.galleryMergedDouble ? liveImages : otherLive).map((img, idx) => (
                                          <div key={idx} className={`${img.cols === 2 ? 'md:col-span-2' : ''} bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between`}>
                                            {img.doubleImages ? (
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-stone-50/50">
                                                {img.doubleImages[0] && (
                                                  <div className="flex flex-col items-center justify-center bg-white rounded-xl overflow-hidden border border-stone-200 p-1 shadow-sm hover:shadow transition-shadow">
                                                    {img.doubleLinks?.[0] ? (
                                                      <span className="block text-stone-500 text-[10px] uppercase tracking-wider font-mono font-bold mb-1 mt-1">抖音搜索指数</span>
                                                    ) : null}
                                                    {img.doubleLinks?.[0] ? (
                                                      <a href={img.doubleLinks[0]} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity">
                                                        <img
                                                          src={img.doubleImages[0]}
                                                          alt=""
                                                          referrerPolicy="no-referrer"
                                                          className="max-w-full max-h-full object-contain rounded-xl"
                                                        />
                                                      </a>
                                                    ) : (
                                                      <img
                                                        src={img.doubleImages[0]}
                                                        alt=""
                                                        referrerPolicy="no-referrer"
                                                        className="max-w-full max-h-full object-contain rounded-xl"
                                                      />
                                                    )}
                                                  </div>
                                                )}
                                                {img.doubleImages[1] && (
                                                  <div className="flex flex-col items-center justify-center bg-white rounded-xl overflow-hidden border border-stone-200 p-1 shadow-sm hover:shadow transition-shadow">
                                                    {img.doubleLinks?.[1] ? (
                                                      <span className="block text-stone-500 text-[10px] uppercase tracking-wider font-mono font-bold mb-1 mt-1">天猫/京东搜索人气</span>
                                                    ) : null}
                                                    {img.doubleLinks?.[1] ? (
                                                      <a href={img.doubleLinks[1]} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity">
                                                        <img
                                                          src={img.doubleImages[1]}
                                                          alt=""
                                                          referrerPolicy="no-referrer"
                                                          className="max-w-full max-h-full object-contain rounded-xl"
                                                        />
                                                      </a>
                                                    ) : (
                                                      <img
                                                        src={img.doubleImages[1]}
                                                        alt=""
                                                        referrerPolicy="no-referrer"
                                                        className="max-w-full max-h-full object-contain rounded-xl"
                                                      />
                                                    )}
                                                  </div>
                                                )}
                                              </div>
                                            ) : (
                                              <div className={
                                                activeProject.galleryUncropped 
                                                  ? `${activeProject.galleryAspect || 'w-full'} overflow-hidden bg-stone-50 relative p-1 flex items-center justify-center` 
                                                  : "aspect-[4/3] w-full overflow-hidden bg-stone-100 relative"
                                              }>
                                                {img.link ? (
                                                  <a href={img.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity">
                                                    <img
                                                      src={img.src}
                                                      alt={img.caption || ''}
                                                      referrerPolicy="no-referrer"
                                                      className={
                                                        activeProject.galleryUncropped 
                                                          ? (activeProject.galleryAspect ? "max-w-full max-h-full object-contain rounded-xl" : "w-full h-auto object-contain rounded-xl")
                                                          : "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                                      }
                                                    />
                                                  </a>
                                                ) : (
                                                  <img
                                                    src={img.src}
                                                    alt={img.caption || ''}
                                                    referrerPolicy="no-referrer"
                                                    className={
                                                      activeProject.galleryUncropped 
                                                        ? (activeProject.galleryAspect ? "max-w-full max-h-full object-contain rounded-xl" : "w-full h-auto object-contain rounded-xl")
                                                        : "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                                    }
                                                  />
                                                )}
                                              </div>
                                            )}
                                            {img.link && (
                                              <div className="p-3 bg-stone-50 border-t border-stone-100 flex flex-col gap-1.5">
                                                <div className={`mt-1 flex ${img.center ? 'justify-center' : 'justify-start'}`}>
                                                  <a
                                                    href={img.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold transition-all border border-red-200/50 hover:border-red-300"
                                                  >
                                                    <ExternalLink className="w-3 h-3 text-red-500" />
                                                    <span className="truncate">{img.link}</span>
                                                  </a>
                                                </div>
                                              </div>
                                            )}
                                            {img.caption && (
                                              <div className="p-4 bg-stone-50/10 border-t border-stone-100/50 flex flex-col gap-1.5 justify-center">
                                                <p 
                                                  className="text-xs sm:text-sm text-stone-700 font-sans font-normal leading-relaxed text-center"
                                                  dangerouslySetInnerHTML={{ __html: img.caption }}
                                                />
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                            );
                          })()
                        ) : activeProject.id === 'project-dy-uglycat' ? (
                          <div className="max-w-3xl mx-auto w-full bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 space-y-8">
                            <div className="space-y-10">
                                {/* Module 1 */}
                                <div className="space-y-4 group">
                                  <div className="overflow-hidden bg-stone-50 relative p-2 flex flex-col items-center justify-center rounded-2xl border border-stone-150 shadow-sm group-hover:border-stone-300 transition-all">
                                    <img
                                      src={activeProject.gallery.filter(img => img.type === 'live')[0]?.src}
                                      alt="决战丑猫之巅PK赛"
                                      referrerPolicy="no-referrer"
                                      className="max-w-full max-h-[500px] object-contain rounded-xl"
                                    />
                                  </div>
                                  <div className="p-3 bg-stone-50/70 rounded-xl border border-stone-100 flex flex-col justify-center">
                                    <p className="text-xs sm:text-sm text-stone-800 font-sans font-semibold text-center">
                                      决战丑猫之巅PK赛话题号召 + 大奖激励&转化路径
                                    </p>
                                  </div>
                                </div>

                                {/* Module 2 */}
                                <div className="space-y-4 group">
                                  <div className="overflow-hidden bg-stone-50 relative p-2 flex flex-col items-center justify-center rounded-2xl border border-stone-150 shadow-sm group-hover:border-stone-300 transition-all">
                                    <img
                                      src={activeProject.gallery.filter(img => img.type === 'live')[1]?.src}
                                      alt="内部近万名员工投票"
                                      referrerPolicy="no-referrer"
                                      className="max-w-full max-h-[500px] object-contain rounded-xl"
                                    />
                                  </div>
                                  <div className="p-3 bg-stone-50/70 rounded-xl border border-stone-100 flex flex-col justify-center">
                                    <p className="text-xs sm:text-sm text-stone-800 font-sans font-semibold text-center">
                                      内部近万名员工投票 + 社群搞笑颁奖二次促转化&为线下快闪售卖点位引流
                                    </p>
                                  </div>
                                </div>
                              </div>
                          </div>
                        ) : (
                          <div className={`grid grid-cols-1 ${(activeProject.gallery?.filter(img => img.type === 'live') || []).length > 1 ? 'md:grid-cols-2' : 'max-w-md mx-auto w-full'} gap-4`}>
                            {activeProject.gallery
                              .filter(img => img.type === 'live')
                              .map((img, idx) => (
                                <div key={idx} className={`${img.cols === 2 ? 'md:col-span-2' : ''} bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between`}>
                                  <div className={
                                    activeProject.galleryUncropped 
                                      ? `${activeProject.galleryAspect || 'w-full'} overflow-hidden bg-stone-50 relative p-1 flex items-center justify-center` 
                                      : "aspect-[4/3] w-full overflow-hidden bg-stone-100 relative"
                                  }>
                                    {img.link ? (
                                      <a href={img.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-95 transition-opacity">
                                        <img
                                          src={img.src}
                                          alt={img.caption || ''}
                                          referrerPolicy="no-referrer"
                                          className={
                                            activeProject.galleryUncropped 
                                              ? (activeProject.galleryAspect ? "max-w-full max-h-full object-contain rounded-2xl" : "w-full h-auto object-contain rounded-2xl")
                                              : "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                          }
                                        />
                                      </a>
                                    ) : (
                                      <img
                                        src={img.src}
                                        alt={img.caption || ''}
                                        referrerPolicy="no-referrer"
                                        className={
                                          activeProject.galleryUncropped 
                                            ? (activeProject.galleryAspect ? "max-w-full max-h-full object-contain rounded-2xl" : "w-full h-auto object-contain rounded-2xl")
                                            : "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                        }
                                      />
                                    )}
                                  </div>
                                  {img.link && (
                                    <div className="p-3 bg-stone-50 border-t border-stone-100 flex flex-col gap-1.5">
                                      <div className={`mt-1 flex ${img.center ? 'justify-center' : 'justify-start'}`}>
                                        <a
                                          href={img.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-full font-semibold transition-all border border-red-200/50 hover:border-red-300"
                                        >
                                          <ExternalLink className="w-3 h-3 text-red-500" />
                                          <span className="truncate">{img.link}</span>
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                  {img.caption && (
                                    <div className="p-4 bg-stone-50/10 border-t border-stone-100/50 flex flex-col gap-1.5 justify-center">
                                      <p 
                                        className="text-xs sm:text-sm text-stone-700 font-sans font-normal leading-relaxed text-center"
                                        dangerouslySetInnerHTML={{ __html: img.caption }}
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Part 2: Xiaohongshu discussion images */}
                    {activeProject.gallery.some(img => img.type === 'xhs') && (
                      <div className="space-y-3">
                        <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-3.5 rounded bg-red-500 block" />
                          <span>线上热搜讨论氛围</span>
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50/55 p-4 rounded-2xl border border-stone-200/60">
                          {activeProject.gallery
                            .filter(img => img.type === 'xhs')
                            .map((img, idx) => (
                              <div key={idx} className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-stone-50 relative">
                                  <img
                                    src={img.src}
                                    alt={img.caption}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                                  />
                                </div>
                                {img.caption && (
                                  <div className="p-2 bg-stone-50/50 border-t border-stone-100">
                                    <p className="text-[10px] sm:text-xs text-stone-600 leading-tight line-clamp-2 font-sans">
                                      {img.caption}
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Detailed steps of execution */}
                {activeProject.details && activeProject.details.length > 0 && activeProject.detailsTitle !== '最终成果' && activeProject.detailsTitle !== '爆款视频' && activeProject.id !== 'project-seeding-meituan' && activeProject.id !== 'project-meituan-00s' && (
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-900 text-sm">
                      {activeProject.detailsTitle || '实施落地细节与物料：'}
                    </h4>
                    {activeProject.id === 'project-seeding-meituan' ? (
                      <div className="space-y-4">
                        {/* Merged Single Card: 爆款内容与热点延展示例 */}
                        <div className="bg-stone-50/60 rounded-2xl p-6 border border-moss-200 space-y-6 w-full relative overflow-hidden shadow-sm">
                          {/* Section B: 热点延展内容 */}
                          <div className="space-y-3 pb-4 border-b border-stone-200/50">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-3 bg-moss-500/80 rounded" />
                              <h6 className="font-sans font-bold text-stone-800 text-xs sm:text-sm">
                                {activeProject.details[1].title}
                              </h6>
                            </div>

                            {/* Image Inserted from Attachment */}
                            <div className="my-4 max-w-xs mx-auto">
                              <a 
                                href="https://v.kuaishou.com/cKdGb3" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block relative group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-2 shadow-sm transition-all duration-300 hover:shadow-md hover:border-moss-500/30 cursor-pointer"
                              >
                                <div className="aspect-[3/4] sm:aspect-[9/16] rounded-xl overflow-hidden bg-stone-100 relative">
                                  <img 
                                    src={pinhbViralScreenshotImg} 
                                    alt="拼好饭快手爆款视频截图" 
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" 
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                                    <span className="text-white text-[11px] sm:text-xs font-medium px-2.5 py-1 bg-moss-600/90 backdrop-blur-sm rounded-full flex items-center gap-1 shadow-sm">
                                      <Eye className="w-3.5 h-3.5" />
                                      <span>查看快手爆款原片</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="mt-2 text-center">
                                  <p className="text-[10px] font-mono font-bold text-stone-400">@毒舌说娱乐 视频互动截图</p>
                                </div>
                              </a>
                            </div>

                            <p 
                              className="text-xs sm:text-sm text-stone-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: activeProject.details[1].content.replace(/\n/g, '<br />') }}
                            />
                          </div>

                          {/* Section A: 素人爆款内容 */}
                          <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-3 bg-moss-500/80 rounded" />
                              <h6 className="font-sans font-bold text-stone-800 text-xs sm:text-sm">
                                {activeProject.details[0].title}
                              </h6>
                            </div>
                            <div className="text-stone-700 leading-relaxed">
                              <p 
                                className="text-xs sm:text-sm text-stone-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: activeProject.details[0].content }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeProject.id === 'project-seeding-fanyu-daily' ? (
                      <div className="space-y-6">
                        {/* Slide Mockup 2: Seeding Content Methodology */}
                        <div className="bg-sky-50/50 rounded-2xl p-5 sm:p-6 border border-sky-200/80 space-y-4 w-full relative overflow-hidden shadow-sm">
                          <div className="bg-sky-600 text-white px-3 py-1 text-xs font-bold rounded-lg inline-flex items-center gap-1.5 self-start">
                            <Compass className="w-3.5 h-3.5" />
                            <span>➡ 高热笔记示例：</span>
                          </div>

                           {/* New Centered Image Module for @徐福记不咸 */}
                          <div className="bg-white rounded-xl p-5 border border-sky-100 shadow-sm flex flex-col items-center justify-center space-y-4 w-full">
                            <div className="max-w-xl w-full bg-stone-50 rounded-xl overflow-hidden border border-stone-100 shadow-inner relative flex items-center justify-center">
                              <img 
                                src={pinhbViralLeft2Img} 
                                alt="日常种草笔记 - 徐福记不咸 5倍点赞爆款案例" 
                                className="w-full max-h-[480px] object-contain filter saturate-105" 
                                referrerPolicy="no-referrer" 
                              />
                              <div className="absolute top-3 left-3 bg-red-500 text-white rounded-full px-2.5 py-0.5 text-[9px] font-sans flex items-center gap-1 font-bold shadow-sm">
                                <span>小红书爆款 KOC</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              </div>
                            </div>
                            
                            <div className="text-center space-y-2 max-w-2xl px-2">
                              <p className="text-xs sm:text-sm text-stone-800 font-medium">
                                该日常种草笔记点赞量高于该koc历史平均点赞<strong>5倍</strong>
                              </p>
                              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                                （抓住餐饮品类<strong>热点</strong>+受众对新品口味测评的<strong>需求</strong>+餐饮产品<strong>本身的亮点</strong>安利➡️抛出闲鱼帮助用户<strong>低价消费的方案</strong>）
                              </p>
                            </div>
                          </div>

                          {/* Subheading: 内容方法论 */}
                          <div className="bg-sky-600 text-white px-3 py-1 text-xs font-bold rounded-lg inline-flex items-center gap-1.5 self-start mt-4">
                            <Compass className="w-3.5 h-3.5" />
                            <span>➡ 内容方法论：</span>
                          </div>

                          {/* Reworked Methodology Block */}
                          <div className="bg-white hover:bg-white/98 transition-all rounded-xl p-5 border border-sky-100 space-y-5 text-stone-800 font-sans">
                            {/* Side-by-side grid for Selection Logics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* 选品逻辑 */}
                              <div className="bg-sky-50/20 rounded-lg p-4 border border-sky-100/60 flex flex-col justify-between space-y-2">
                                <div>
                                  <h6 className="font-bold text-sky-950 text-xs sm:text-sm flex items-center gap-1.5 pb-2 border-b border-sky-100/40">
                                    <span className="w-4 h-4 rounded-full bg-sky-150 text-sky-700 flex items-center justify-center font-bold text-[10px]">🎯</span>
                                    <span>选品逻辑</span>
                                  </h6>
                                  <p className="text-xs text-stone-700 leading-relaxed font-sans mt-2">
                                    <strong>热点反推&业务需求：</strong>基于<strong>social热点</strong>的反馈（如xx影视剧很火➡️对应去推该影视平台的卡券）、以及<strong>站内近期业务数据显示的高热品类</strong>，以此确定站外种草内容中主要植入的闲鱼二手交易场景和对应的<strong>闲鱼商品券资源</strong>。
                                  </p>
                                </div>
                              </div>

                              {/* 选人逻辑 */}
                              <div className="bg-sky-50/20 rounded-lg p-4 border border-sky-100/60 flex flex-col justify-between space-y-2">
                                <div>
                                  <h6 className="font-bold text-sky-950 text-xs sm:text-sm flex items-center gap-1.5 pb-2 border-b border-sky-100/40">
                                    <span className="w-4 h-4 rounded-full bg-sky-150 text-sky-700 flex items-center justify-center font-bold text-[10px]">👥</span>
                                    <span>选人逻辑</span>
                                  </h6>
                                  <p className="text-xs text-stone-700 leading-relaxed font-sans mt-2">
                                    判断达人粉丝画像和闲鱼 TA 是否一致、历史商单效果是否达到闲鱼 benchmark 线。
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* 选题逻辑 */}
                            <div className="bg-sky-50/20 rounded-lg p-4 border border-sky-100/60 space-y-3">
                              <h6 className="font-bold text-sky-950 text-xs sm:text-sm flex items-center gap-1.5 pb-2 border-b border-sky-100/40">
                                <span className="w-4 h-4 rounded-full bg-sky-150 text-sky-700 flex items-center justify-center font-bold text-[10px]">✨</span>
                                <span>选题逻辑</span>
                              </h6>
                              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                                针对受众想在闲鱼捡漏的普遍需求，结合达人特性 and 平台热点定制选题和植入切口（即在达人呈现的某个具体的闲鱼使用场景中，植入笔记里提示的品类资源）。<strong>从有用的角度， 放大所选择的商品的卖点，帮助受众去捡漏。</strong>
                              </p>

                              {/* Nested structural detail cards */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1.5">
                                {/* Macro */}
                                <div className="bg-white rounded-lg p-3 border border-sky-100/50 space-y-1">
                                  <p className="font-bold text-sky-950 flex items-center gap-1 text-[11px] sm:text-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                    1）宏观层面：对比测试与赛马机制
                                  </p>
                                  <p className="text-[10px] sm:text-xs text-stone-600 leading-relaxed pl-2">
                                    对比测试有潜在爆点机会的内容方向，进行笔记赛马，沉淀出 <strong>抓马剧情演绎、副业搞钱攻略、搞笑聊天段子</strong> 等易爆的内容模版。
                                  </p>
                                </div>

                                {/* Micro */}
                                <div className="bg-white rounded-lg p-3 border border-sky-100/50 space-y-2">
                                  <p className="font-bold text-sky-950 flex items-center gap-1 text-[11px] sm:text-xs pb-1 border-b border-stone-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                                    2）微观层面：噱头内容钩子+资源利益钩子
                                  </p>
                                  <div className="space-y-2 pl-2">
                                    <div className="border-l-2 border-sky-400 pl-1.5">
                                      <p className="font-bold text-sky-900 text-[10px] sm:text-xs flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-sky-300" />
                                        a. 内容钩子 (激活需求)
                                      </p>
                                      <p className="text-[10px] text-stone-500 leading-relaxed mt-0.5">
                                        维持<strong>原生内容的吸引力</strong>。结合对小红书站内热点的洞察和达人粉丝圈层的关注点，来打造爆文选题。（比如<strong>美食博主做肯德基猎奇新品的组合测评</strong>）
                                      </p>
                                    </div>
                                    <div className="border-l-2 border-emerald-400 pl-1.5">
                                      <p className="font-bold text-emerald-950 text-[10px] sm:text-xs flex items-center gap-1">
                                        <span className="w-1 h-1 rounded-full bg-emerald-300" />
                                        b. 资源钩子 (驱动消费决策)
                                      </p>
                                      <p className="text-[10px] text-stone-500 leading-relaxed mt-0.5">
                                        通过内容钩子把用户代入到使用场景里之后，用与业务拿到的品类资源（如肯德基<strong>秒杀券</strong>）去满足<strong>用户想要捡漏的痒点</strong>。
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeProject.id === 'project-seeding-youdao-pen' ? (
                      <div className="space-y-8">
                        {/* 种草内容示例 */}
                        <div className="space-y-3 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                          <h4 className="font-serif font-black text-stone-900 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-moss-600 rounded-full inline-block" />
                            <span>种草内容示例</span>
                          </h4>
                          <div className="rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center border border-stone-100 p-2 max-w-full">
                            <a 
                              href="https://v.douyin.com/G6LSBLRmflw/" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="block w-full h-full cursor-pointer hover:opacity-95 transition-opacity flex items-center justify-center"
                            >
                              <img 
                                src={youdaoExampleImg} 
                                alt="种草内容示例" 
                                className="rounded-lg max-h-[480px] w-full object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </a>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Column 1 */}
                          <div className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center border border-stone-100 p-1">
                              <img 
                                src={youdaoNewImg} 
                                alt="总结同类视频爆款逻辑" 
                                className="max-w-full max-h-full object-contain rounded-lg" 
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans text-center">
                              <strong>a. 总结同类视频爆款逻辑</strong>。基于此提供创意内容方向：<br />
                              <strong>CEO人物角度</strong>【网易CEO丁磊：能当首富也能养猪】、<strong>行业动荡竞争角度</strong>【双减政策后，教育行业的新风口】、<strong>中国科技角度</strong>【中国黑科技：马斯克妈妈都在用的国产神笔】
                            </p>
                          </div>

                          {/* Column 2 */}
                          <div className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center border border-stone-100 p-1">
                              <img 
                                src={youdaoDouyinChatImg} 
                                alt="完善短视频脚本" 
                                className="max-w-full max-h-full object-contain rounded-lg" 
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans text-center">
                              b. 根据内容方向完善<strong>短视频脚本大纲</strong>，<strong>沟通达人</strong>创作。
                            </p>
                          </div>

                          {/* Column 3 */}
                          <div className="bg-white rounded-2xl border border-stone-200 p-5 flex flex-col space-y-4 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 flex items-center justify-center border border-stone-100 p-1">
                              <img 
                                src={youdaoOkrResultsImg} 
                                alt="数据复盘评估" 
                                className="max-w-full max-h-full object-contain rounded-lg" 
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans text-center">
                              <strong>c. 项目数据复盘：</strong>（在<strong>互动量、赞播比、粉丝粘性</strong>等维度下）通过对比账号短视频的平均播放数据与本次投放内容播放数据的差异，评估账号投放价值，作为下一轮投放参考。
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeProject.details.map((detail, idx) => {
                          const isLastAndOdd = activeProject.details.length % 2 !== 0 && idx === activeProject.details.length - 1;
                          return (
                            <div 
                              key={idx} 
                              className={`bg-stone-50/80 rounded-2xl p-4 border border-stone-200 space-y-2 ${
                                isLastAndOdd ? 'sm:col-span-2' : ''
                              }`}
                            >
                              {detail.title && (
                                <h5 className="font-sans font-bold text-stone-800 text-xs sm:text-sm flex items-center gap-1 flex-wrap">
                                  <span className="w-1.5 h-1.5 rounded-full bg-moss-600" />
                                  <span>{detail.title}</span>
                                </h5>
                              )}
                              <p 
                                className="text-xs sm:text-sm text-stone-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: detail.content.replace(/\n/g, '<br />') }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}



                {/* Target channels listed */}
                {activeProject.channels && activeProject.id !== 'project-meituan-00s' && activeProject.id !== 'project-seeding-meituan' && (
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-mono text-stone-400 font-bold uppercase tracking-wider">
                      主要渠道 CHANNELS:
                    </span>
                    {activeProject.channels.map((chan, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200 font-sans">
                        {chan}
                      </span>
                    ))}
                  </div>
                )}
              </>
          </div>

              {/* Bottom Actions footer */}
              <div className="bg-stone-100 border-t border-stone-200 p-4 flex flex-wrap gap-3.5 items-center justify-between">
                <div className="text-xs text-stone-400 font-mono">
                  Zhu Jie Marketing Portfolio
                </div>

                <div className="flex items-center gap-2">
                  {/* Close trigger button */}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-800 cursor-pointer"
                  >
                    关闭
                  </button>


                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
