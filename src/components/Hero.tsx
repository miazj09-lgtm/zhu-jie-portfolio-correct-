import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Sparkles, Award, Compass, ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Keyword } from '../types';
import { keywordsData } from '../projectsData';
import { JumpingGirl, LaptopGirl, LineThumbsUp } from './LineArtTransitions';
// @ts-ignore
import jiePortrait from '../assets/images/regenerated_image_1779990011070.jpg';
// @ts-ignore
import jumpingGirlImg from '../assets/images/regenerated_image_1780045847616.png';

export const Hero: React.FC = () => {
  const [activeKeyword, setActiveKeyword] = useState<string>('in-house');

  const selectedKeyword = keywordsData.find(k => k.id === activeKeyword) || keywordsData[0];

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Absolute floating leaves/elements */}
      <div className="absolute top-1/4 right-[5%] -z-10 opacity-70 hidden md:block">
        <JumpingGirl className="w-40 h-40 opacity-40 hover:opacity-100 transition-all duration-300" />
      </div>
      <div className="absolute bottom-10 left-[5%] -z-10 opacity-70 hidden md:block">
        <LaptopGirl className="w-36 h-36 opacity-35 hover:opacity-100 transition-all duration-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Core Pitch and Portrait Card */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-moss-50 border border-moss-200 text-moss-800 text-xs font-mono tracking-wider uppercase self-start"
          >
            <Sparkles className="w-3 h-3 text-moss-600 animate-pulse" />
            <span>COMMUNICATION & BRAND MARKETING PORTFOLIO</span>
          </motion.div>

          <div className="space-y-2 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight"
            >
              Hey！这里是 <span className="text-moss-600 underline decoration-moss-200 decoration-wavy py-1">朱婕</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-base sm:text-lg text-stone-600 italic font-light animate-fade-in whitespace-pre-line leading-relaxed text-left"
            >
              擅长营销策划，希望做出有影响力的作品、成为业务和用户之间的桥梁。{"\n"}
              追求花小钱办大事，解决品牌声量、以及用户增长或生意转化的问题。{"\n"}
              是INTJ一枚～
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-stone-700 leading-relaxed text-sm sm:text-base space-y-4 max-w-xl text-left"
          >
            <p>
              主要聚焦互联网行业的品牌营销 and 种草投放方向，拥有<strong>正式工作 1 年 + 实习 2 年</strong>的项目积累，接触过品牌向的社区营销、也做过电商向的带货推广。
            </p>
            <div className="border-l-2 border-moss-600 pl-4 py-2 bg-moss-50/50 rounded-r-lg space-y-2.5 text-stone-700 text-xs sm:text-sm">
              <p className="leading-relaxed">
                • <strong>正式工作 1 年：</strong>一段媒介营销方向的工作经历（小红书社区线），以及一段电商营销方向的短期工作经历（字节 - 因业务线整体裁撤，故在4个月时离职）
              </p>
              <p className="leading-relaxed">
                • <strong>实习 2 年+：</strong>有 3 段互联网行业的品牌营销实习（美团校招提前实习、阿里闲鱼暑期实习、网易有道 AI 智能产品推广实习）+ 1 段快消branding实习（雀巢奶粉线）
              </p>
              <p className="leading-relaxed">
                • <strong>一个不会倒的flag：</strong>在排除不可抗力因素的情况下，<span className="font-bold bg-amber-100 text-amber-950 px-1.5 py-0.5 rounded border border-amber-200/60 shadow-sm inline mx-0.5">未来的career规划会坚定地追求长期主义。</span>
              </p>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-row flex-nowrap items-center gap-2.5 sm:gap-4 justify-start overflow-visible"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-moss-600 hover:bg-moss-700 active:bg-moss-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-200 shadow-md shadow-moss-900/10 cursor-pointer whitespace-nowrap"
            >
              <span>这一路的作品</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-500" />
              <span>来找我吧！😉</span>
            </a>
          </motion.div>

          {/* Portrait Self-Introduction Card - Aligned beautifully to the left block */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-stone-100 rounded-3xl p-6 border border-stone-200 shadow-lg relative overflow-hidden flex flex-col justify-between max-w-xl text-left mt-6"
          >
            {/* Background mossy accent blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-moss-100/40 rounded-full blur-2xl -z-10" />

            <div className="flex items-center gap-4 mb-6">
              {/* Photo Area with premium styling */}
              <div className="relative group flex-shrink-0">
                <div className="absolute inset-0 bg-moss-600 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-200 -z-10" />
                
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-moss-50 border-2 border-stone-800 overflow-hidden flex items-center justify-center relative shadow-md">
                  <img
                    src={jiePortrait}
                    alt="朱婕"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-stone-900 font-bold">朱婕 (Jie Zhu)</h3>
                <p className="text-stone-500 text-sm font-mono mt-0.5">Marketing Specialist & Planner</p>
                <div className="flex flex-col gap-1 mt-2 text-xs text-stone-600">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-moss-600" />
                    <span>18801261647@139.com</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-moss-600" />
                    <span>18801261647（同微信号）</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick overview bullet stats representing work history list */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200 text-xs sm:text-sm text-stone-600 space-y-2.5">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-moss-600 mt-0.5 flex-shrink-0" />
                <span><strong>1年正式工作经历：</strong>小红书市场部-媒介营销（完成马路生活节营销） ➡️ 字节（抖音自有文创品牌）-电商运营（完成哈基米系列等IP类文创品上新推广）</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-moss-600 mt-0.5 flex-shrink-0" />
                <span><strong>2年+品牌营销&投放实习：</strong>美团 & 阿里闲鱼 & 网易有道 & 雀巢</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-moss-600 mt-0.5 flex-shrink-0" />
                <span><strong>中国传媒大学：</strong> 硕士-新闻与传播（品牌营销方向）；本科-公共关系学</span>
              </div>
            </div>

            {/* Simulated Live status mimicking a clean, physical indicator */}
            <div className="flex items-center justify-between mt-6 text-xs text-stone-500 font-mono pt-4 border-t border-stone-200">
              <span className="flex items-center gap-1.5 text-moss-700">
                <span className="w-2 h-2 rounded-full bg-moss-600 animate-ping" />
                <span className="font-medium">Jie's Desk: Ready to Interview</span>
              </span>
              <span>EST. 2026</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Symmetrical Amplified Jumping Girl Illustration */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-transparent relative flex flex-col justify-center items-center w-full text-center"
          >
            {/* Symmetrical Jumping Girl Line Art Illustration - AMPLIFIED */}
            <div className="w-full flex-grow flex items-center justify-center p-2 relative">
              <img
                src={jumpingGirlImg}
                alt="活力放风系营销人"
                style={{ height: '900px', width: '406.695px' }}
                className="object-contain hover:scale-105 transition-transform duration-300 mix-blend-multiply max-w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Four Keywords Module - The "四大关键词" panel */}
      <div className="mt-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-10 px-4">
          <h2 className="font-serif text-3xl text-stone-900 tracking-tight mb-2">个人四大关键词</h2>
          
          <div className="font-mono text-xs font-semibold text-stone-400 tracking-widest uppercase mb-4">
            WHO AM I ？
          </div>
          
          <div className="space-y-4 text-stone-600 text-sm leading-relaxed max-w-2xl mx-auto">
            <p className="hover:text-stone-900 transition-colors">
              <span className="font-bold text-moss-700 bg-moss-50/70 px-1.5 py-0.5 rounded border border-moss-200/50 mr-1.5 inline-block my-0.5 shadow-sm">一份浅见</span>
              个人体感是做营销就得<span className="font-semibold text-stone-800 bg-amber-50 px-1 rounded">什么都会一点</span>，<span className="font-semibold text-stone-800 bg-teal-50 px-1 rounded">什么问题都要学着解决</span>。
            </p>
            <p className="hover:text-stone-900 transition-colors">
              <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/50 mr-1.5 inline-block my-0.5 shadow-sm">一个小目标</span>
              无论是做传统mkt、或是互联网里更靠近业务的运营，职业目标都是成为一名<span className="font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200/60 shadow-sm">六边形战士</span>（在练出一套skill set的基础上，再选中一个技能点努力练成<span className="font-normal text-stone-900">难以替代的必杀技</span>），每个时刻都能<span className="font-normal text-stone-900">顶上</span>。
            </p>
            <p className="hover:text-stone-900 transition-colors">
              <span className="font-bold text-stone-700 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200 mr-1.5 inline-block my-0.5 shadow-sm">一点愿景</span>
              希望自己一直拥有热情，做一颗科技大浪里<span className="font-bold text-stone-900 bg-yellow-50 px-1 py-0.5 rounded border border-yellow-200/60">淘不掉的沙砾</span>。
            </p>
          </div>
        </div>

        {/* Tab Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-6">
          {keywordsData.map(kw => {
            const isActive = kw.id === activeKeyword;
            return (
              <button
                key={kw.id}
                onClick={() => setActiveKeyword(kw.id)}
                className={`relative px-4 py-4 rounded-2xl text-center border transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-moss-600 border-moss-700 text-white shadow-md'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100 hover:border-stone-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeKeywordBg"
                    className="absolute inset-0 bg-moss-600 rounded-2xl -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="font-serif font-bold text-base sm:text-lg">{kw.title}</span>
                <span className={`text-[10px] font-mono tracking-wider ${isActive ? 'text-moss-100' : 'text-stone-400'}`}>
                  {kw.englishTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200 p-6 max-w-4xl mx-auto shadow-sm relative min-h-[180px]">
          {/* Subtle line art stamp icon based on keyword context */}
          <div className="absolute right-6 top-6 opacity-10 hidden sm:block">
            <LineThumbsUp className="w-14 h-14" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeKeyword}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-serif font-semibold text-xl text-stone-900">{selectedKeyword.title}</span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-moss-100 text-moss-800">
                  {selectedKeyword.englishTitle}
                </span>
                <span className="text-stone-400 font-serif text-sm">|</span>
                <span className="text-stone-600 text-sm font-semibold italic">{selectedKeyword.desc}</span>
              </div>

              <p className="text-stone-700 font-sans text-sm sm:text-base border-l-4 border-moss-400 pl-4 py-1">
                {selectedKeyword.highlight}
              </p>

              <div className="bg-white rounded-2xl p-4 border border-stone-150 space-y-3">
                <h4 className="text-stone-800 text-xs font-mono font-bold uppercase tracking-wider text-moss-700">
                  ACCOMPLISHMENTS & PROOFS:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 custom-bullet-list">
                  {selectedKeyword.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating scroll indicator at bottom */}
      <div className="flex justify-center mt-12">
        <motion.a
          href="#education"
          className="flex flex-col items-center gap-1.5 text-stone-400 hover:text-moss-600 text-xs font-mono transition-colors duration-200"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>教育背景</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};
