import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Award, FileText, ArrowRight, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: '我是谁？' },
    { id: 'education', label: '大学新手村已通关' },
    { id: 'experience', label: '打工副本进行时' },
    { id: 'portfolio', label: '副本成就积累中（作品showcase）' },
    { id: 'contact', label: '来找我吧😉' }
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      isOpen 
        ? 'bg-[#EDF1E5]/95 backdrop-blur-md border-b border-moss-200/50 shadow-sm py-3.5'
        : scrolled 
          ? 'bg-apricot-50/80 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3.5' 
          : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo title */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-moss-600 flex items-center justify-center text-white font-serif font-black text-sm transition-transform duration-350 group-hover:rotate-12">
            朱
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-stone-900 text-sm tracking-tight">朱婕 Jie Zhu</span>
            <span className="text-[9px] font-mono tracking-wider text-moss-700 font-bold uppercase">Marketing Portfolio</span>
          </div>
        </a>

        {/* Desktop Navbar menu */}
        <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm font-semibold text-stone-700">
          {navLinks.map((link, idx) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-3 py-1.5 rounded-lg text-stone-800 transition-all duration-300 hover:scale-[1.03] active:scale-95 group/nav cursor-pointer"
            >
              <span className="relative z-10 font-sans tracking-wide">{link.label}</span>
              {/* Highlight background effect */}
              <span className="absolute inset-x-1.5 bottom-1.5 h-2 bg-amber-200/60 rounded-xs -rotate-1 origin-left transition-all duration-300 group-hover/nav:h-5/6 group-hover/nav:bg-amber-200/85 z-0" />
            </a>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg border border-moss-300/60 hover:bg-moss-100/40 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5 text-moss-800" /> : <Menu className="w-5 h-5 text-moss-800" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer expansion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#EDF1E5]/98 border-b border-moss-200/50 shadow-inner"
          >
            <div className="px-4 py-5 space-y-4 text-sm font-bold text-stone-850">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="relative inline-block py-1 px-2.5 text-stone-800 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer group/mob"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-1 bottom-1 h-2 bg-amber-200/50 rounded-xs -rotate-0.5 origin-left transition-all duration-300 group-hover/mob:h-5/6 group-hover/mob:bg-amber-200/80 z-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
