import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  onOpenCustomizer: () => void;
  onTriggerUnfold?: () => void;
}

export const CollegeSortedHero: React.FC<Props> = ({ onOpenCustomizer, onTriggerUnfold }) => {
  return (
    <section className="relative w-full bg-[#F6F4EF] text-[#25282B] pt-28 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col items-center justify-between min-h-[92vh]">
      {/* Top Banner Text Block */}
      <div className="max-w-3xl mx-auto text-center space-y-3 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#25282B] leading-none font-sans"
        >
          College, sorted.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-xl md:text-2xl text-[#5E6265] max-w-2xl mx-auto font-normal leading-relaxed tracking-tight px-2"
        >
          Get a gift card from $100 to $150* when you buy Mac or iPad with education savings.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-2 flex items-center justify-center gap-3"
        >
          <button
            onClick={onOpenCustomizer}
            className="px-7 py-2.5 bg-[#25282B] hover:bg-black text-[#F6F4EF] text-sm font-bold rounded-full shadow-md transition-all cursor-pointer border border-[#25282B]"
          >
            Shop
          </button>

          {onTriggerUnfold && (
            <button
              onClick={onTriggerUnfold}
              className="px-5 py-2.5 bg-[#E6DDCE]/40 hover:bg-[#E6DDCE]/70 text-[#25282B] text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 border border-[#C8CBCB] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#25282B]" />
              <span>3D 三屏展开演示</span>
            </button>
          )}
        </motion.div>
      </div>

      {/* Center 3 Cutout Student Sticker Graphics matching Image 1 */}
      <div className="w-full max-w-6xl mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-end justify-center relative">
        
        {/* Figure 1: Female Student with Dark Hair & Laptop Box Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group flex flex-col items-center"
        >
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-visible p-2">
            {/* Sticker Accessories Overlay */}
            <div className="absolute -top-3 -left-2 z-20 bg-emerald-400 text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg border-2 border-white rotate-[-8deg]">
              STUDENT OFFER
            </div>

            {/* Camera & Skateboard Stickers */}
            <div className="absolute top-12 -left-4 z-20 w-16 h-16 bg-white p-1 rounded-2xl shadow-xl rotate-[-12deg] border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=200&q=80" 
                alt="Vintage Camera"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="absolute bottom-16 -right-3 z-20 w-20 h-10 bg-amber-300 rounded-full p-1 shadow-lg rotate-[15deg] border-2 border-white flex items-center justify-center font-mono text-[10px] font-black tracking-widest text-black">
              9:41 AM
            </div>

            {/* Cutout Container Card */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-purple-100 via-pink-50 to-white p-3 border-4 border-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                alt="Student holding MacBook Pro workstation"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* ANYKING / Mac Device Overlay inside box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-black/90 text-white p-3 rounded-xl border border-white/30 shadow-2xl backdrop-blur-md text-center">
                <div className="text-[10px] font-mono text-amber-400 tracking-wider">ANYKING TRIPLE OLED</div>
                <div className="text-xs font-serif font-bold tracking-widest">MacBook Pro + Tri-Display</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Figure 2: Male Student in Green Top holding MacBook Air Box Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group flex flex-col items-center"
        >
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-visible p-2">
            {/* Backpack & Sneakers Stickers */}
            <div className="absolute -top-4 -right-2 z-20 bg-yellow-400 text-black text-[11px] font-bold px-3 py-1 rounded-full shadow-xl border-2 border-white rotate-[10deg]">
              $150 GIFT CARD
            </div>

            <div className="absolute top-16 -right-4 z-20 w-16 h-16 bg-white p-1 rounded-2xl shadow-xl rotate-[18deg] border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80" 
                alt="Sneakers"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Cutout Container Card */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-blue-100 via-emerald-50 to-white p-3 border-4 border-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80" 
                alt="Student holding MacBook Air"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* ANYKING / Mac Device Overlay inside box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-black/90 text-white p-3 rounded-xl border border-white/30 shadow-2xl backdrop-blur-md text-center">
                <div className="text-[10px] font-mono text-emerald-400 tracking-wider">GO. UNFOLD.</div>
                <div className="text-xs font-serif font-bold tracking-widest">MacBook Air + ANYKING</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Figure 3: Female Student holding iPad / Portable Screen Box Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group flex flex-col items-center"
        >
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-visible p-2">
            {/* Plant & Cushion Stickers */}
            <div className="absolute top-8 -left-3 z-20 w-14 h-14 bg-white p-1 rounded-2xl shadow-xl rotate-[-15deg] border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80" 
                alt="Succulent Plant"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="absolute bottom-12 -right-3 z-20 bg-rose-500 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg border-2 border-white rotate-[8deg]">
              iPad Air + OLED
            </div>

            {/* Cutout Container Card */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-rose-100 via-purple-50 to-white p-3 border-4 border-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" 
                alt="Student holding iPad Pro workstation"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* ANYKING / iPad Device Overlay inside box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-black/90 text-white p-3 rounded-xl border border-white/30 shadow-2xl backdrop-blur-md text-center">
                <div className="text-[10px] font-mono text-purple-300 tracking-wider">ULTRA PORTABLE</div>
                <div className="text-xs font-serif font-bold tracking-widest">iPad Pro + ANYKING</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
