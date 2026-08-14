import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DisplayMode } from '../types';
import { 
  Play, Pause, Terminal, Code2, Sliders, Image as ImageIcon, 
  Gamepad2, Cpu, Activity, Sparkles, Monitor, RefreshCw 
} from 'lucide-react';

interface Props {
  mode: DisplayMode;
  interactive?: boolean;
}

export const ScreenDisplaySimulator: React.FC<Props> = ({ mode, interactive = true }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [equalizerHeights, setEqualizerHeights] = useState<number[]>([60, 85, 45, 95, 70, 30, 80, 65, 90, 50, 75, 40]);
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'params'>('preview');

  // Animation effect for Motion Art mode
  useEffect(() => {
    if (mode !== 'motion_art' || !isPlaying) return;
    const interval = setInterval(() => {
      setEqualizerHeights(prev => prev.map(() => Math.floor(Math.random() * 65) + 30));
    }, 400);
    return () => clearInterval(interval);
  }, [mode, isPlaying]);

  return (
    <div className="w-full h-full bg-slate-950 text-white overflow-hidden relative font-sans flex flex-col select-none rounded-[3px]">
      {/* Top Status Bar inside screen */}
      <div className="h-6 bg-slate-900/80 backdrop-blur border-b border-white/10 px-3 flex items-center justify-between text-[10px] text-slate-400 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-emerald-400 font-semibold">ANYKING 15.6″ OLED</span>
          <span className="bg-white/10 px-1.5 py-0.5 rounded text-[9px]">USB-C 100W PD</span>
        </div>
        <div className="flex items-center gap-3 font-mono">
          <span>3840 × 2160 @ 120Hz</span>
          <span className="text-lime-400 font-bold">HDR 1000</span>
          <span>100% DCI-P3</span>
        </div>
      </div>

      {/* Screen Content Body */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {mode === 'motion_art' && (
            <motion.div 
              key="motion_art"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative bg-gradient-to-br from-slate-950 via-zinc-900 to-black p-4 flex flex-col justify-between overflow-hidden"
            >
              {/* Vibrant Ambient Glows */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#DFFF00]/20 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>

              {/* Header Info */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#DFFF00] font-mono tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive Motion Canvas
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-white mt-0.5">
                    Neon Pulse Art · 10-Bit Color Depth
                  </h3>
                </div>
                {interactive && (
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full text-white transition"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                )}
              </div>

              {/* Dynamic Equalizer / Floating Graphic Pillars (Mimicking Video Artwork) */}
              <div className="relative z-10 flex items-center justify-center gap-2 my-auto h-36">
                {equalizerHeights.map((height, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ height: `${height}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-5 rounded-full bg-gradient-to-t from-emerald-500 via-[#DFFF00] to-yellow-200 shadow-lg shadow-[#DFFF00]/20 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-2 bg-white/60 rounded-full"></div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Widget Overlay */}
              <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-3">
                <div className="flex gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[9px]">RESPONSE</span>
                    <span className="font-mono text-white font-bold">1ms GTG</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px]">CONTRAST</span>
                    <span className="font-mono text-lime-400 font-bold">100,000 : 1</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px]">PEAK LUMINANCE</span>
                    <span className="font-mono text-amber-300 font-bold">550 nits</span>
                  </div>
                </div>

                <div className="bg-[#DFFF00]/10 border border-[#DFFF00]/30 px-3 py-1 rounded text-xs text-[#DFFF00] font-mono flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-spin" />
                  Live Color Stream
                </div>
              </div>
            </motion.div>
          )}

          {mode === 'coding' && (
            <motion.div
              key="coding"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-[#1e1e2e] p-3 font-mono text-xs flex flex-col justify-between"
            >
              {/* Editor Tabs */}
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-2 mb-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="bg-[#2a2a3e] text-emerald-400 px-2 py-0.5 rounded flex items-center gap-1 text-[11px] border border-emerald-500/30">
                    <Code2 className="w-3 h-3" />
                    App.tsx — LuminaDualScreen
                  </span>
                  <span className="text-slate-500 text-[11px] hover:text-slate-300 cursor-pointer">server.ts</span>
                  <span className="text-slate-500 text-[11px] hover:text-slate-300 cursor-pointer">package.json</span>
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-2">
                  <span className="text-sky-400">TypeScript 5.8</span>
                  <span>UTF-8</span>
                </div>
              </div>

              {/* Code Lines */}
              <div className="flex-1 space-y-1 text-slate-300 leading-relaxed overflow-hidden text-[11px]">
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none w-4 text-right">1</span>
                  <span><span className="text-purple-400">import</span> &#123; <span className="text-yellow-300">LuminaScreen</span>, <span className="text-yellow-300">DualPipeline</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@lumina/display-sdk'</span>;</span>
                </div>
                <div className="flex gap-3 bg-white/5 py-0.5 border-l-2 border-[#DFFF00] pl-1">
                  <span className="text-slate-600 select-none w-4 text-right">2</span>
                  <span><span className="text-purple-400">const</span> <span className="text-sky-300">monitor</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">LuminaScreen</span>(&#123; <span className="text-orange-300">resolution</span>: <span className="text-emerald-300">'4K_OLED'</span>, <span className="text-orange-300">fps</span>: <span className="text-emerald-300">120</span> &#125;);</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none w-4 text-right">3</span>
                  <span className="text-slate-500">// Plug & Play single-cable connection via USB-C Alt Mode</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none w-4 text-right">4</span>
                  <span><span className="text-sky-300">monitor</span>.<span className="text-blue-400">onConnect</span>((<span className="text-orange-300">device</span>) =&gt; &#123;</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none w-4 text-right">5</span>
                  <span className="pl-4"><span className="text-sky-300">console</span>.<span className="text-blue-400">log</span>(<span className="text-emerald-300">`[Lumina] Screen Extended: ${'{'}device.name{'}'}`</span>);</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none w-4 text-right">6</span>
                  <span className="pl-4"><span className="text-sky-300">monitor</span>.<span className="text-blue-400">enableAutoPivot</span>(<span className="text-purple-400">true</span>);</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 select-none w-4 text-right">7</span>
                  <span>&#125;);</span>
                </div>
              </div>

              {/* Integrated Terminal */}
              <div className="mt-2 bg-[#141420] rounded border border-slate-700/50 p-2 text-[10px] text-slate-300">
                <div className="flex items-center justify-between text-slate-500 mb-1 border-b border-slate-800 pb-1">
                  <span className="flex items-center gap-1 font-bold text-slate-400">
                    <Terminal className="w-3 h-3 text-emerald-400" /> TERMINAL
                  </span>
                  <span className="text-emerald-400 font-mono">Build Success (21ms)</span>
                </div>
                <p className="text-emerald-400">✓ Compiled /src/main.tsx successfully in 18ms</p>
                <p className="text-slate-400">&gt; Lumina Air 15.6″ detected as Primary Companion Monitor [3840x2160 @ 120Hz]</p>
              </div>
            </motion.div>
          )}

          {mode === 'design' && (
            <motion.div
              key="design"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-zinc-900 p-3 flex flex-col justify-between"
            >
              {/* Photo & Color Studio Header */}
              <div className="flex items-center justify-between border-b border-zinc-700/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 border border-amber-500/30">
                    <Sliders className="w-3.5 h-3.5" />
                    Color Calibration · △E &lt; 1.0
                  </span>
                  <span className="text-xs text-zinc-400">Profile: DCI-P3 Cinema</span>
                </div>
                <div className="flex gap-1 text-xs">
                  <button className="px-2 py-0.5 bg-zinc-800 rounded hover:bg-zinc-700 text-zinc-300">100% Zoom</button>
                  <button className="px-2 py-0.5 bg-[#DFFF00] text-black font-semibold rounded">Split View</button>
                </div>
              </div>

              {/* Color Visualizer Canvas */}
              <div className="flex-1 my-2 grid grid-cols-3 gap-2 overflow-hidden">
                <div className="col-span-2 bg-slate-950 rounded border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-rose-900/30 to-amber-600/30"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-400/80 mx-auto flex items-center justify-center animate-spin" style={{ animationDuration: '12s' }}>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500"></div>
                    </div>
                    <p className="text-xs text-zinc-300 mt-2 font-mono">OLED Deep Black #000000</p>
                  </div>
                </div>

                {/* Histogram & Adjustments */}
                <div className="bg-zinc-950 rounded p-2 border border-zinc-800 flex flex-col justify-between text-[10px]">
                  <div>
                    <span className="text-zinc-400 block font-mono mb-1">COLOR HISTOGRAM</span>
                    <div className="h-16 bg-zinc-900 rounded p-1 flex items-end gap-1">
                      {[40, 65, 80, 95, 70, 50, 85, 90, 60, 45, 30].map((val, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 via-emerald-400 to-amber-300 rounded-t" style={{ height: `${val}%` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 mt-1 font-mono text-zinc-300">
                    <div className="flex justify-between">
                      <span>Brightness</span>
                      <span className="text-amber-400">100% (550nits)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gamut Coverage</span>
                      <span className="text-lime-400">100% DCI-P3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gamma</span>
                      <span className="text-sky-400">2.2 Standard</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1 border-t border-zinc-800">
                <span>Hardware Calibrated by X-Rite™</span>
                <span className="text-emerald-400 font-mono">10.7 Billion Colors (True 10-Bit)</span>
              </div>
            </motion.div>
          )}

          {mode === 'gaming' && (
            <motion.div
              key="gaming"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-gradient-to-tr from-slate-950 via-purple-950 to-slate-900 p-3 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Gaming HUD */}
              <div className="flex justify-between items-start relative z-10">
                <div className="bg-black/60 backdrop-blur px-2.5 py-1 rounded border border-purple-500/30 flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-purple-400 animate-bounce" />
                  <span className="font-bold text-xs text-purple-200">FreeSync Premium Pro</span>
                </div>
                <div className="bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/40 text-right font-mono">
                  <span className="text-xs text-slate-400 block text-[9px]">FRAME RATE</span>
                  <span className="text-sm font-black text-emerald-400">120.0 FPS</span>
                </div>
              </div>

              {/* Center Game Graphics Mockup */}
              <div className="relative z-10 text-center my-auto">
                <div className="inline-block relative">
                  <span className="text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                    ULTRA LOW LATENCY 1ms
                  </span>
                  <p className="text-xs text-cyan-200/80 font-mono mt-1">
                    Plug & Play for Nintendo Switch · Steam Deck · PS5 · Xbox
                  </p>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="relative z-10 flex justify-between items-end bg-black/40 backdrop-blur p-2 rounded border border-white/10 text-[10px]">
                <div>
                  <span className="text-slate-400 block text-[9px]">LATENCY</span>
                  <span className="text-lime-400 font-mono font-bold">1ms GTG</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">REFRESH RATE</span>
                  <span className="text-purple-300 font-mono font-bold">120Hz Variable</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">AUDIO OUTPUT</span>
                  <span className="text-sky-300 font-mono font-bold">3.5mm Headphone Jack</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
