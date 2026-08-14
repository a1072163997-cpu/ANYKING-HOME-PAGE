import React from 'react';
import { motion } from 'motion/react';

export const MediaLogosMarquee: React.FC = () => {
  // SVG representations for pixel-perfect reproduction matching screenshot
  const mediaLogos = [
    {
      name: 'ZDNet',
      component: (
        <div className="flex items-center gap-1.5 font-sans font-black tracking-tighter text-xl">
          <div className="bg-[#d9232a] text-white px-2 py-0.5 transform -skew-x-12 rounded-xs font-serif text-lg leading-none shadow-xs">
            ZD
          </div>
          <span className="text-[#1d1d1f] font-bold text-2xl tracking-tight -ml-0.5">Net</span>
        </div>
      )
    },
    {
      name: 'yahoo! finance',
      component: (
        <div className="flex flex-col items-center leading-none text-[#6001d2] font-black font-sans">
          <span className="text-2xl tracking-tighter lowercase">yahoo!</span>
          <span className="text-xs tracking-widest uppercase font-bold text-[#6001d2] -mt-1">finance</span>
        </div>
      )
    },
    {
      name: 'MARKETS INSIDER',
      component: (
        <div className="flex flex-col text-left leading-tight font-sans text-gray-900 tracking-wider">
          <span className="text-sm font-extrabold tracking-[0.2em]">MARKETS</span>
          <span className="text-sm font-extrabold tracking-[0.2em] -mt-1">INSIDER</span>
        </div>
      )
    },
    {
      name: 'AP',
      component: (
        <div className="flex flex-col items-center leading-none">
          <span className="text-3xl font-black text-[#1d1d1f] tracking-tighter font-serif">AP</span>
          <div className="w-full h-1 bg-[#ff2600] mt-0.5 rounded-full" />
        </div>
      )
    },
    {
      name: 'NOTEBOOK CHECK',
      component: (
        <div className="flex items-center gap-1.5 border border-gray-200 bg-[#d9232a] text-white p-1.5 rounded-lg shadow-xs">
          <div className="bg-white text-[#d9232a] font-black px-1.5 py-0.5 rounded text-xs font-mono">
            ✓
          </div>
          <div className="flex flex-col text-left leading-none font-mono">
            <span className="text-[9px] font-bold tracking-tight">NOTEBOOK</span>
            <span className="text-[9px] font-bold tracking-tight">CHECK</span>
          </div>
        </div>
      )
    },
    {
      name: 'MUO',
      component: (
        <div className="bg-[#cc0000] text-white px-3 py-1 rounded-l-2xl font-black text-xl tracking-widest font-mono flex items-center justify-center shadow-xs">
          MUO
        </div>
      )
    },
    {
      name: 'TechCrunch',
      component: (
        <div className="flex items-center gap-1 font-mono font-black text-2xl text-[#00a562] tracking-tighter">
          <span className="bg-[#00a562] text-white px-1.5 py-0.5 text-lg rounded-xs">TC</span>
          <span className="text-gray-900 font-bold text-lg font-sans">TechCrunch</span>
        </div>
      )
    },
    {
      name: 'WIRED',
      component: (
        <div className="border-2 border-black px-2.5 py-0.5 font-black text-xl tracking-[0.25em] text-black font-mono">
          WIRED
        </div>
      )
    },
    {
      name: 'Forbes',
      component: (
        <span className="font-serif font-black text-2xl text-gray-900 tracking-tight italic">
          Forbes
        </span>
      )
    }
  ];

  // Duplicate list for seamless infinite loop
  const duplicatedLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section className="w-full bg-[#F6F4EF] py-12 border-t border-b border-[#C8CBCB]/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#5E6265] uppercase">
          AS FEATURED IN GLOBAL PRESS & MEDIA
        </span>
      </div>

      {/* Ticker / Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Vignette Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F6F4EF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F6F4EF] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          className="flex items-center gap-12 sm:gap-20 w-max"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transform"
            >
              {logo.component}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
