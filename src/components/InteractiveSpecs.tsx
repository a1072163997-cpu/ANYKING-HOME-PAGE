import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTSPOTS, IMAGES } from '../data/productData';
import { Hotspot } from '../types';
import { Info, Sparkles, Tv, Zap, Layers, Feather, Volume2 } from 'lucide-react';

export const InteractiveSpecs: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section id="specs" className="py-24 px-6 md:px-12 bg-[#25282B] text-[#F6F4EF] relative overflow-hidden border-t border-[#C8CBCB]/30">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E6DDCE]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-[#E6DDCE]/20 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono font-bold rounded-full uppercase tracking-widest">
            3D HARDWARE DECOMPOSITION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F6F4EF] tracking-tight font-sans">
            精密工程，拆解每一个细节
          </h2>
          <p className="text-[#C8CBCB] text-base sm:text-lg font-light leading-relaxed">
            点击下方图像中的热点标示，深入了解 ANYKING 的黑科技架构。
          </p>
        </div>

        {/* Interactive Hotspot Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1E2022] border border-[#C8CBCB]/30 rounded-3xl p-6 sm:p-10 backdrop-blur shadow-2xl">
          
          {/* Left / Center Image Stage with Clickable Hotspots */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C8CBCB]/30 bg-black shadow-2xl">
            <img
              src={IMAGES.front}
              alt="ANYKING Hardware Layout"
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />

            {/* Hotspots Overlay */}
            {HOTSPOTS.map((spot) => {
              const isSelected = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none cursor-pointer"
                  title={spot.title}
                >
                  <div className="relative flex items-center justify-center">
                    <span className={`absolute w-8 h-8 rounded-full animate-ping opacity-75 ${isSelected ? 'bg-[#E6DDCE]' : 'bg-white/40'}`}></span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition duration-300 ${
                      isSelected
                        ? 'bg-[#E6DDCE] text-[#25282B] scale-125 ring-4 ring-[#E6DDCE]/40'
                        : 'bg-[#F6F4EF] text-[#25282B] hover:scale-110'
                    }`}>
                      +
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHotspot.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#25282B] border border-[#C8CBCB]/30 p-6 rounded-2xl space-y-4 shadow-2xl"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#E6DDCE] tracking-widest uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>FEATURE HIGHLIGHT</span>
                </div>

                <h3 className="text-2xl font-bold text-[#F6F4EF] tracking-wide font-sans">
                  {selectedHotspot.title}
                </h3>

                <p className="text-[#C8CBCB] text-sm leading-relaxed font-light">
                  {selectedHotspot.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#C8CBCB]/70 border-t border-[#C8CBCB]/20 font-mono">
                  <Info className="w-4 h-4 text-[#E6DDCE]" />
                  <span>点击左侧定位节点查看其他说明</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Spec List */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="bg-[#25282B] p-3.5 rounded-xl border border-[#C8CBCB]/30">
                <span className="text-[#C8CBCB] block text-[10px] uppercase tracking-widest">PANEL TYPE</span>
                <span className="text-[#F6F4EF] font-bold tracking-wide">4K OLED HDR 1000</span>
              </div>
              <div className="bg-[#25282B] p-3.5 rounded-xl border border-[#C8CBCB]/30">
                <span className="text-[#C8CBCB] block text-[10px] uppercase tracking-widest">WEIGHT & THICKNESS</span>
                <span className="text-[#E6DDCE] font-bold tracking-wide">490g / 4.9mm</span>
              </div>
              <div className="bg-[#25282B] p-3.5 rounded-xl border border-[#C8CBCB]/30">
                <span className="text-[#C8CBCB] block text-[10px] uppercase tracking-widest">INPUT PORTS</span>
                <span className="text-[#F6F4EF] font-bold tracking-wide">Type-C ×2 / Mini HDMI</span>
              </div>
              <div className="bg-[#25282B] p-3.5 rounded-xl border border-[#C8CBCB]/30">
                <span className="text-[#C8CBCB] block text-[10px] uppercase tracking-widest">COMPATIBILITY</span>
                <span className="text-[#F6F4EF] font-bold tracking-wide">Mac / Win / Switch / PS5</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
