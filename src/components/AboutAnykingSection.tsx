import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Cpu, Award, Zap, Globe } from 'lucide-react';
import { IMAGES } from '../data/productData';

interface Props {
  onOpenCustomizer?: () => void;
  onTriggerUnfold?: () => void;
}

export const AboutAnykingSection: React.FC<Props> = ({ onOpenCustomizer, onTriggerUnfold }) => {
  const stats = [
    { value: '9+ Years', label: 'Experience' },
    { value: '5M+ Units', label: 'Delivered' },
    { value: '200+ Models', label: 'Available' },
    { value: 'Industry First', label: 'Innovation' },
    { value: 'NxtLED', label: 'Technology' },
  ];

  return (
    <section className="w-full bg-[#F6F4EF] text-[#25282B] py-20 px-4 sm:px-6 md:px-12 border-t border-[#C8CBCB]/40">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header Row matching Screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#C8CBCB]/40 pb-10">
          
          {/* Main Headline Left */}
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#25282B] uppercase bg-[#E6DDCE]/50 px-3 py-1 rounded-full border border-[#C8CBCB]">
              ABOUT ANYKING
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-[#25282B] leading-[1.05]">
              The Global Leader in Portable Monitors
            </h2>
          </div>

          {/* Stats Grid Right matching Screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 pt-4 lg:pt-0">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="space-y-1 text-left sm:text-center"
              >
                <div className="text-lg sm:text-xl font-extrabold font-sans text-[#25282B] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-[#5E6265] font-mono tracking-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Large Tech Banner Card with Robotic Precision & NxtLED Technology matching Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#060a12] via-[#0b1329] to-[#04060c] border border-gray-800 shadow-2xl min-h-[420px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-12 group"
        >
          {/* Cyberpunk Grid Background Overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 113, 227, 0.4) 0%, transparent 70%), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '100% 100%, 40px 40px, 40px 40px'
            }}
          />

          {/* Center Graphic: Glowing Tri-Display & Robotic Arm Visual */}
          <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
            <div className="relative w-full max-w-4xl h-[80%] flex items-center justify-center">
              
              {/* Center Tri-Display Floating Panel */}
              <div className="relative w-full max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80" 
                  alt="NxtLED Innovative Display Panel" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Neon Circuit Highlights */}
                <div className="absolute top-4 left-4 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span>NxtLED™ OLED Matrix</span>
                </div>
              </div>

              {/* Decorative Holographic Neon Glow Spheres */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-600/30 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-600/30 blur-3xl rounded-full" />
            </div>
          </div>

          {/* Top Pill Tag inside Banner */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>PRECISION ENGINEERING</span>
            </div>
          </div>

          {/* Bottom Title & Button matching Screenshot */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-12">
            
            {/* Title on Bottom Left */}
            <div className="space-y-2 max-w-lg">
              <h3 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight leading-tight">
                NxtLED Innovative Display Technology
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-normal">
                突破视界极限，结合微米级发光体控制与零延迟芯片组，打造世代级便携显示生态。
              </p>
            </div>

            {/* Button on Bottom Right matching Screenshot ("Know More ->") */}
            <div>
              <button
                onClick={onTriggerUnfold || onOpenCustomizer}
                className="px-7 py-3.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-bold rounded-full shadow-2xl transition-all cursor-pointer flex items-center gap-2 hover:gap-3 group/btn hover:scale-105"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-gray-900 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
