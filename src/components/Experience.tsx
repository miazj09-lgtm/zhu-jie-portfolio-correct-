import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, ChevronRight, MapPin, Building2, BookHeart } from 'lucide-react';
import { experienceData } from '../projectsData';
import { ExperienceItem } from '../types';
import { CozyBreeze, LaptopGirl, WritingGirl } from './LineArtTransitions';
// @ts-ignore
import meituanKangarooImg from '../assets/images/regenerated_image_1780778672418.png';

const getLogoComponent = (id: string, company: string, logoColor: string) => {
  switch (id) {
    case 'bytedance-fulltime':
      return (
        <div className="w-11 h-11 rounded-xl bg-white border border-stone-200/50 flex items-center justify-center shadow-sm select-none p-1.5 flex-shrink-0">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <rect x="25" y="45" width="12" height="30" rx="6" fill="#3858f6" />
            <rect x="42" y="30" width="12" height="60" rx="6" fill="#139dfb" />
            <rect x="59" y="50" width="12" height="20" rx="6" fill="#0cbda3" />
            <rect x="76" y="20" width="12" height="80" rx="6" fill="#00e599" />
          </svg>
        </div>
      );
    case 'xhs-fulltime':
      return (
        <div className="w-11 h-11 rounded-xl bg-[#ff2442] flex items-center justify-center shadow-md select-none flex-shrink-0">
          <span className="text-white font-serif font-black text-xs tracking-tight">小红书</span>
        </div>
      );
    case 'meituan-intern':
      return (
        <div className="w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-sm select-none p-0.5 overflow-hidden flex-shrink-0">
          <img 
            src={meituanKangarooImg} 
            alt="美团" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      );
    case 'alifanyu-intern':
      return (
        <div className="w-11 h-11 rounded-xl bg-[#FFD400] flex flex-col items-center justify-center border border-amber-400/40 shadow-sm select-none flex-shrink-0">
          <div className="text-stone-950 font-sans font-black text-sm tracking-tight leading-none">闲鱼</div>
          <div className="text-stone-900 text-[6px] font-sans tracking-widest mt-0.5 font-bold">XIANYU</div>
        </div>
      );
    case 'nestle-intern':
      return (
        <div className="w-11 h-11 rounded-xl bg-[#5C4533] flex items-center justify-center shadow-md select-none p-1 border border-stone-800/10 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-9/12 h-9/12" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,62 C15,62 13,67 15,70 C18,75 30,78 50,78 C70,78 82,75 85,70 C87,67 85,62 80,62" />
            <path d="M25,65 C35,68 50,69 75,65" />
            <path d="M30,68 C45,71 55,71 70,68" />
            <path d="M52,22 L55,25 L65,30 C72,34 78,42 80,50 L82,54 L75,54" />
            <path d="M52,22 C48,25 44,32 40,42 L38,48 L46,45 C50,42 54,34 52,22" />
            <path d="M36,45 Q40,38 42,42 L42,48 L35,48" />
            <path d="M46,48 Q49,42 51,46 L51,52 L45,52" />
          </svg>
        </div>
      );
    case 'youdao-intern':
      return (
        <div className="w-11 h-11 rounded-xl bg-[#E31D1A] flex items-center justify-center shadow-md select-none flex-shrink-0">
          <span className="text-white font-sans font-black text-xs tracking-wider">有道</span>
        </div>
      );
    default:
      return (
        <div className={`w-11 h-11 rounded-xl font-bold flex flex-shrink-0 items-center justify-center font-serif shadow-inner ${logoColor}`}>
          {company.substring(0, 1)}
        </div>
      );
  }
};

export const Experience: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'full-time' | 'internship'>('all');

  const filteredData = experienceData.filter(item => {
    if (filterType === 'all') return true;
    if (filterType === 'full-time') return item.type === '正式工作';
    if (filterType === 'internship') return item.type === '实习经历';
    return true;
  });

  return (
    <section id="experience" className="py-20 bg-moss-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-medium tracking-wide">
            <Briefcase className="w-3.5 h-3.5 text-moss-600" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight">升级打怪地图：副本进行时</h2>

        </div>

        {/* Dynamic Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: '全部经历' },
            { id: 'full-time', label: '正式工作（1年）' },
            { id: 'internship', label: '实习经历（2年+）' }
          ].map(tab => {
            const isActive = filterType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-moss-600 text-white shadow-sm'
                    : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical core line connected */}
          <div className="absolute left-[21px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-stone-150 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const isFullTime = item.type === '正式工作';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Centered dot indicator */}
                    <div className="absolute left-[21px] sm:left-1/2 top-5 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-moss-600 shadow-md z-10 hidden sm:block" />

                    {/* Left/Right space allocation for even/odd */}
                    <div className="w-full sm:w-1/2 px-4 sm:px-8">
                      <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative group overflow-hidden">
                        {/* Soft visual type tag */}
                        <div className={`absolute top-4 right-4 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded ${
                          isFullTime 
                            ? 'bg-red-50 text-red-800 border border-red-100'
                            : 'bg-moss-50 text-moss-800 border border-moss-100'
                        }`}>
                          {item.type}
                        </div>

                        {/* Head contents */}
                        <div className="flex items-center gap-3.5 mb-4">
                          {/* Circle Avatar badge representation for company logo */}
                          {getLogoComponent(item.id, item.company, item.logoColor)}

                          <div>
                            <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-moss-700 transition-colors duration-200">
                              {item.company}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                              <Calendar className="w-3.5 h-3.5 text-stone-400" />
                              <span>{item.period}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 border-t border-stone-150 pt-3">
                          <p className="font-sans font-semibold text-stone-800 text-sm sm:text-base flex items-center gap-1">
                            <span>{item.role}</span>
                            {item.department && (
                              <span className="text-xs text-stone-400 font-mono">（{item.department}）</span>
                            )}
                          </p>
                          <p 
                            className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br />') }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Timeline date shown opposite standard block on desktop */}
                    <div className={`hidden sm:flex w-1/2 px-8 py-4 justify-${isEven ? 'start' : 'end'} text-stone-400 font-mono text-xs items-center`}>
                      <span className={`px-3 py-1 bg-stone-50 border border-stone-150 rounded-full flex items-center gap-1.5 ${isFullTime ? 'text-red-700' : 'text-stone-600'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isFullTime ? 'bg-red-600' : 'bg-stone-400'}`} />
                        {item.period}
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <CozyBreeze className="max-w-xl mx-auto mt-16" />

      </div>
    </section>
  );
};
