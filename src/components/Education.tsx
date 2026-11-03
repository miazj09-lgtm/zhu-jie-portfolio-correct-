import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, BrainCircuit, Globe, Landmark } from 'lucide-react';
import { educationData } from '../projectsData';
import { CozyBreeze, WritingGirl } from './LineArtTransitions';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-moss-50/40 relative-overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Floating background illustration */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
          <WritingGirl className="w-48 h-48" />
        </div>

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-moss-100 text-moss-800 text-xs font-mono font-medium tracking-wide">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 tracking-tight">大学新手村已通关</h2>

        </div>

        <CozyBreeze className="max-w-xl mx-auto mb-12" />

        {/* CUC Logo Mock & Timelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => {
            const isUndergrad = edu.degree === '本科';
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm relative group hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Degree indicator badge */}
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium font-serif flex items-center gap-1 ${
                  isUndergrad 
                    ? 'bg-amber-50 text-amber-900 border border-amber-200'
                    : 'bg-moss-50 text-moss-900 border border-moss-200'
                }`}>
                  <BookOpen className="w-3 h-3" />
                  <span>{edu.degree}（{edu.period}）</span>
                </div>

                <div className="space-y-6">
                  {/* Brand emblem of CUC (Simulated elegant school icon) */}
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-stone-900 font-bold group-hover:text-moss-700 transition-colors duration-200">
                        {edu.school}
                      </h3>
                      <p className="text-stone-500 text-xs sm:text-sm font-sans mt-0.5">{edu.major}</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-5 space-y-4">
                    {/* Undergraduate achievements detail */}
                    {isUndergrad ? (
                      <div className="space-y-3">
                        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 list-none">
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-500 font-bold">★</span>
                            <span><strong>综合测评专业第 4 / 48</strong>，以3.8/4.0的绩点保研直升。</span>
                          </li>
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-500 font-bold">★</span>
                            <span><strong>干部经历：</strong> 曾任分团委/学生会行政部负责人，统筹多项全国志愿服务的大型执行与跨校联络活动。</span>
                          </li>
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-500 font-bold">★</span>
                            <span><strong>商科/传播竞赛：</strong> 荣获“互联网+”大学生创新创业大赛<strong>国家级铜奖</strong>、中国大学生公共关系策划大赛<strong>全国一等奖</strong>。</span>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      // Graduate/Master Achievements detail
                      <div className="space-y-3">
                        <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 list-none">
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-moss-600 font-bold">◆</span>
                            <span><strong>品牌大模型AI项目实践：</strong>协助导师参与“国家广告研究院”的AI项目，孵化<strong>中国品牌AI大模型</strong>，帮助大模型做品牌营销领域的<strong>文本训练</strong>。</span>
                          </li>
                          <li className="flex items-start gap-2 leading-relaxed">
                            <span className="text-moss-600 font-bold">◆</span>
                            <span><strong>业界AI合作：</strong>与业界项目合作、探索用AI产出保险等多行业的品牌研究报告。</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>Communication University of China</span>
                  </span>
                  <span>北京 · 朝阳区</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
