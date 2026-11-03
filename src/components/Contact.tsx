import React from 'react';
import { Mail, Phone, Heart } from 'lucide-react';
// @ts-ignore
import jiePortraitCutout from '../assets/images/regenerated_image_1780352328808.jpg';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-moss-50/40 relative overflow-hidden">
      {/* Decorative Warm Backlighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-moss-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Creative Image-inspired card with Inward shadow projection */}
        <div 
          id="thank-you-card" 
          className="max-w-4xl mx-auto rounded-[2.5rem] p-6 sm:p-12 md:p-16 shadow-[inset_0_4px_30px_rgba(0,0,0,0.08),_0_20px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group min-h-[580px] sm:min-h-[640px] flex flex-col justify-between bg-moss-50/40 border border-moss-200/30"
        >
          
          {/* 1. Thank You Headline (3D Paper-Cut Retro Effect) */}
          <div className="text-center mt-4 sm:mt-6 select-none relative z-10">
            <h2 
              className="font-sans font-black text-5xl sm:text-7xl md:text-8xl tracking-wider text-moss-800 uppercase"
              style={{
                textShadow: '4px 4px 0px #EDF1E5, 8px 8px 0px rgba(75, 94, 43, 0.15)',
                letterSpacing: '0.04em'
              }}
            >
              Thank You
            </h2>
          </div>

          {/* 2. Middle Row: Portrait Cutout on the Left/Center, TEL/Email labels on the Right */}
          <div className="relative z-30 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 xl:gap-24 my-6 sm:my-10 min-h-[18rem] md:min-h-[22rem]">
            {/* Left Element: Portrait container */}
            <div className="relative flex items-center justify-center h-64 sm:h-76 md:h-84">
              {/* Soft glowing ambient lighting effect behind her cutout */}
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 bg-moss-200/50 rounded-full blur-2xl -z-10 animate-pulse" />

              {/* Character Cutout with refined drop shadow */}
              <img
                src={jiePortraitCutout}
                alt="朱婕 - Portrait Cutout"
                className="h-full w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 select-none"
                referrerPolicy="no-referrer"
              />

              {/* Slanted "This is me @朱婕" badge with solid offset shadow and double styling */}
              <div 
                className="absolute -right-8 sm:-right-12 md:-right-16 top-[15%] transform -rotate-8 z-40 select-none hover:rotate-2 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <div className="bg-[#FFFFFE] border-[2.5px] border-stone-800 px-4 py-3 rounded-2xl shadow-[5px_5px_0px_#556B2F] flex flex-col items-center justify-center">
                  <span className="font-sans font-black text-xs sm:text-sm md:text-base text-stone-800 whitespace-nowrap px-1">
                    This is me @朱婕
                  </span>
                </div>
              </div>
            </div>

            {/* Right Element: Tape style TEL/Email items */}
            <div className="space-y-4 w-full md:w-auto flex flex-col items-center md:items-start md:pl-6">
              
              {/* Phone Tape Item */}
              <div className="w-fit flex items-center justify-center md:justify-start gap-4 select-none">
                <span 
                  className="font-sans font-black text-sm text-moss-800 tracking-wider uppercase select-none w-[50px] text-right"
                  style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.6)' }}
                >
                  TEL
                </span>
                <a 
                  href="tel:18801261647" 
                  className="bg-[#BA9875] hover:bg-[#C6A480] border-b-2 border-stone-800/30 px-5 py-2.5 rounded shadow-lg transform hover:-rotate-1 hover:-translate-y-0.5 active:scale-98 transition-all duration-150 inline-flex items-center justify-center text-[#2D1A13] font-mono font-bold text-sm sm:text-base tracking-wider cursor-pointer font-bold"
                  title="点击拨打电话"
                >
                  18801261647
                </a>
              </div>

              {/* Email Tape Item */}
              <div className="w-fit flex items-center justify-center md:justify-start gap-4 select-none">
                <span 
                  className="font-sans font-black text-sm text-moss-800 tracking-wider uppercase select-none w-[50px] text-right"
                  style={{ textShadow: '1px 1px 1px rgba(255,255,255,0.6)' }}
                >
                  Email
                </span>
                <a 
                  href="mailto:18801261647@139.com" 
                  className="bg-[#BA9875] hover:bg-[#C6A480] border-b-2 border-stone-800/30 px-5 py-2.5 rounded shadow-lg transform hover:rotate-1 hover:-translate-y-0.5 active:scale-98 transition-all duration-150 inline-flex items-center justify-center text-[#2D1A13] font-mono font-bold text-xs sm:text-sm md:text-base tracking-wide cursor-pointer font-bold"
                  title="点击发送邮件"
                >
                  18801261647@139.com
                </a>
              </div>

            </div>
          </div>

          {/* 3. Ragged White Torn Paper Strip Separator across container */}
          <div className="absolute left-0 right-0 bottom-[130px] sm:bottom-[150px] pointer-events-none overflow-hidden select-none z-10 h-8">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              {/* Complex aesthetic organic tear pattern */}
              <path d="M0,15 Q75,30 150,18 T300,28 T450,15 T600,25 T750,12 T900,22 T1050,15 T1200,20 L1200,45 Q1050,40 900,50 T750,42 T600,48 T450,38 T300,45 T150,35 T0,40 Z" />
            </svg>
          </div>

          {/* 4. Bottom Contents (Centered layout) */}
          <div className="relative pt-12 pb-4 flex justify-center text-center z-20">
            {/* Thank you note */}
            <div className="space-y-2 text-moss-900 max-w-sm">
              <p className="font-serif font-bold text-xl sm:text-2xl text-moss-950">
                谢谢你看到这儿！
              </p>
              <p className="text-moss-700 font-mono text-xs">
                Looking forward to amazing collaborations.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic footer copyright */}
        <div className="border-t border-stone-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 朱婕 Jie Zhu. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <span>中国传媒大学 · 品牌整合营销硕士</span>
            <span>|</span>
            <span>联系方式：18801261647</span>
          </div>
        </div>

      </div>
    </section>
  );
};
