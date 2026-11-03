import React from 'react';
import { motion } from 'motion/react';

// 1. Jumping Girl (Page 1) - Cheerful, jumping with arms raised, holding documents
export const JumpingGirl: React.FC<{ className?: string }> = ({ className = 'w-32 h-32' }) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Soft shadow background */}
        <circle cx="95" cy="220" rx="40" ry="10" fill="rgba(85,107,47,0.12)" />
        
        {/* Cute hand-drawn style outline */}
        <path
          d="M60,110 C50,90 40,70 30,50 C28,45 32,42 35,46 C45,58 55,72 65,85 C67,88 71,85 70,81 L55,50 C53,46 58,42 61,45 L75,78 C76,82 81,80 80,75 L70,38 C68,34 74,31 77,34 L88,70 C92,60 100,50 110,48 C120,45 125,55 120,65 C115,75 105,90 95,110"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Hair and Head */}
        <path
          d="M100,68 C102,60 108,58 112,65 C115,70 117,75 116,80 C114,83 111,85 108,82 Z"
          fill="#333333"
        />
        <path
          d="M98,72 C91,73 85,78 84,85 C83,92 88,96 94,95 C100,94 103,88 102,82"
          stroke="#333333"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M101,80 C101,84 98,88 95,88 C92,88 91,84 91,80 C91,76 95,73 101,80 Z"
          fill="#EBE6D3"
          stroke="#333333"
          strokeWidth="2"
        />

        {/* Outer sweater body (loosely fitting) */}
        <path
          d="M60,110 C70,115 85,116 95,110 C105,116 120,115 130,110 C140,120 150,140 148,160 C145,185 132,205 125,215 C110,210 95,212 85,215 C70,205 60,185 58,160 C55,140 50,120 60,110 Z"
          fill="#FDFBF7"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Loose flowing dark block of hair behind */}
        <path
          d="M80,85 C68,90 60,105 60,120 C60,135 68,142 66,155 C64,165 55,170 54,180 C53,190 62,192 65,182 L70,165 C72,160 75,135 76,120"
          fill="#333333"
          stroke="#333333"
          strokeWidth="2"
        />

        {/* Legs jumping */}
        {/* Left leg */}
        <path
          d="M80,212 C72,218 60,220 52,218 C48,217 46,215 48,210 C50,205 58,200 62,202 L70,206"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#292524"
        />
        {/* Right leg with high-heeled dark boot / sock */}
        <path
          d="M124,213 C128,225 132,240 136,245 C138,248 142,248 145,244 C148,240 148,235 142,226 L134,213"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#292524"
        />
        
        {/* Paper/document held in right hand */}
        <path
          d="M25,40 L45,35 L50,55 L30,60 Z"
          fill="#F4EFEB"
          stroke="#333333"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Paper held in left hand */}
        <path
          d="M128,30 L148,34 L142,52 L122,48 Z"
          fill="#F4EFEB"
          stroke="#333333"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

// 2. Writing/Reaching Girl (Page 2 & 7) - Elegant flowing hair, holds clipboard, looking up
export const WritingGirl: React.FC<{ className?: string }> = ({ className = 'w-36 h-36' }) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        y: [0, 8, 0],
        rotate: [0, -1.5, 1.5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        viewBox="0 0 180 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <circle cx="90" cy="225" rx="35" ry="8" fill="rgba(85,107,47,0.1)" />

        {/* Head & Neck */}
        <path
          d="M93,90 C93,98 90,105 84,105 C78,105 76,98 76,90 C76,82 82,78 88,78 C94,78 93,85 93,90 Z"
          fill="#FDFBF7"
          stroke="#333333"
          strokeWidth="3.5"
        />
        
        {/* Stylized massive flowing hair */}
        <path
          d="M80,78 C70,60 72,40 85,30 C98,20 115,25 125,45 C135,65 140,88 135,110 C130,130 115,140 120,165 C125,190 115,210 105,215 C95,220 88,210 92,192 C96,175 106,165 102,145 C98,125 80,115 80,95 L80,78 Z"
          fill="#333333"
          stroke="#333333"
          strokeWidth="1.5"
        />
        
        {/* Hand touching paper or raised holding a stylus */}
        <path
          d="M110,60 L122,25 M122,25 L124,15 M122,25 C125,26 128,24 127,21 L122,12 M122,25 L130,28"
          stroke="#333333"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Loose sweater body */}
        <path
          d="M75,122 C65,130 55,145 52,165 C48,185 58,205 68,210 C80,215 95,215 108,210 C120,200 125,180 122,160 C120,135 110,122 100,125 C92,128 82,128 75,122 Z"
          fill="#FDFBF7"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Flowing sleeve */}
        <path
          d="M52,165 C40,172 30,185 28,198 C26,204 31,210 38,205 C46,198 55,185 55,185"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FDFBF7"
        />

        {/* Shoes */}
        <path
          d="M62,210 L58,230 C57,235 62,238 66,234 L72,211 Z"
          fill="#292524"
          stroke="#333333"
          strokeWidth="3"
        />
        <path
          d="M93,211 L98,232 C99,237 104,236 106,231 L102,210 Z"
          fill="#292524"
          stroke="#333333"
          strokeWidth="3"
        />

        {/* Clipboard held in left hand */}
        <path
          d="M85,135 L120,110 L130,140 L95,160 Z"
          fill="#333333"
          stroke="#333333"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Soft paper inside clipboard */}
        <path
          d="M90,138 L115,116 L122,138 L98,154 Z"
          fill="#F4EFEB"
          strokeWidth="0"
        />
      </svg>
    </motion.div>
  );
};

// 3. Sitting/Laptop Girl (Page 4) - Working on a computer, highly professional and focused
export const LaptopGirl: React.FC<{ className?: string }> = ({ className = 'w-36 h-36' }) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        scale: [1, 1.02, 1],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <path d="M10,180 L170,180" stroke="rgba(85,107,47,0.2)" strokeWidth="4" strokeLinecap="round" />

        {/* Head/Face profile */}
        <path
          d="M110,65 C108,55 115,48 122,50 C128,51 131,58 130,64 C129,70 123,73 118,72 L110,74"
          stroke="#333333"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="#FDFBF7"
        />
        
        {/* Hair buns/ponytail */}
        <path
          d="M125,48 C128,35 142,35 145,45 C146,55 138,62 130,62 L125,48 Z"
          fill="#333333"
          stroke="#333333"
          strokeWidth="2"
        />
        <path
          d="M128,62 C135,68 140,84 135,105 C132,125 120,135 115,142"
          stroke="#333333"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Leaning body with long sleeves */}
        <path
          d="M60,140 C65,110 82,92 100,90 C115,88 125,102 120,125 C115,145 95,165 82,170 C72,172 62,158 60,140 Z"
          fill="#FDFBF7"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Hands typing */}
        <path
          d="M100,118 C88,118 70,120 58,124 L52,110 C58,106 70,105 82,106"
          stroke="#333333"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Laptop outline */}
        <path
          d="M15,130 C15,124 18,120 25,120 L50,120 L52,135 L12,135 Z"
          fill="#333333"
          stroke="#333333"
          strokeWidth="2"
        />
        <path
          d="M50,120 L75,75 C77,72 82,75 80,80 L62,120"
          stroke="#333333"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Legs crossed folded */}
        <path
          d="M82,170 C92,170 105,160 115,162 C122,164 125,170 118,175 C108,185 90,185 75,182 L42,172 C35,170 38,162 45,165 L65,170"
          stroke="#333333"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#EBE6D3"
        />
      </svg>
    </motion.div>
  );
};

// 4. Line Art Thumb Up (Page 4 Button Accent)
export const LineThumbsUp: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Circle backdrop */}
        <circle cx="32" cy="32" r="28" fill="rgba(85,107,47,0.1)" stroke="#556B2F" strokeWidth="2.5" strokeDasharray="3 3"/>
        {/* Hand drawn thumb */}
        <path
          d="M20,40 L16,40 C14,40 12,38 12,36 L12,24 C12,22 14,20 16,20 L24,20 C24,18 25,14 27,10 C29,6 32,4 34,4 C36,4 37,6 36,9 L34,18 L48,18 C51,18 53,20 52,23 L48,35 C47,38 44,40 40,40 L20,40 Z"
          stroke="#333333"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#FDFBF7"
        />
        {/* Knuckle folds */}
        <path d="M20,25 L20,35 M26,20 L26,40 M32,22 L32,40" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

// 5. Nature Breeze Leaf - cute falling leaf for decoration
export const BreezeLeaf: React.FC<{ className?: string; delay?: number }> = ({ className = 'w-8 h-8', delay = 0 }) => {
  return (
    <motion.div
      className={`absolute opacity-75 ${className}`}
      initial={{ y: -20, opacity: 0, rotate: 0 }}
      animate={{
        y: [0, 40, 80],
        x: [0, 15, -15, 0],
        rotate: [0, 45, 90, 135],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M2,22 C8,20 18,18 21,5 C18,8 14,11 7,12 C4,12.5 3,15 2,22 Z"
          fill="#556B2F"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M2,22 L11,14" stroke="#333333" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};

// 6. Natural Wind Swirl/Breeze line for transitions
export const CozyBreeze: React.FC<{ className?: string }> = ({ className = 'w-full h-12' }) => {
  return (
    <div className={`overflow-hidden flex items-center justify-center my-6 opacity-30 ${className}`}>
      <svg viewBox="0 0 600 40" fill="none" className="w-full h-full text-moss-600">
        <motion.path
          d="M10,20 C100,5 180,35 270,20 C360,5 440,35 530,20 C560,15 575,10 590,20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{ pathLength: 1, opacity: [0.1, 0.7, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M30,25 C120,12 195,40 290,25 C385,10 460,40 550,25"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};
