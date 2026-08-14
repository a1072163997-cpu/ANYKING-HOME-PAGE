import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShellColor, DisplayMode, ViewPerspective } from '../types';
import { SHELL_COLORS, IMAGES } from '../data/productData';
import { ScreenDisplaySimulator } from './ScreenDisplaySimulator';
import { 
  RotateCw, Sparkles, Feather, Zap, Tv, Layers, Palette, 
  CheckCircle2, ArrowRight, Play, Pause, Hand, ShieldAlert
} from 'lucide-react';

interface Props {
  onOpenCustomizer: () => void;
  onTriggerUnfold?: () => void;
}

export const HeroReplication: React.FC<Props> = ({ onOpenCustomizer, onTriggerUnfold }) => {
  const [currentColor, setCurrentColor] = useState<ShellColor>('lime');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('motion_art');
  const [perspective, setPerspective] = useState<ViewPerspective>('back');
  const [isAutoFlipping, setIsAutoFlipping] = useState<boolean>(false);

  // Auto flip timer simulation matching the video rotation loop
  useEffect(() => {
    if (!isAutoFlipping) return;
    const interval = setInterval(() => {
      setPerspective(prev => (prev === 'back' ? 'front' : 'back'));
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoFlipping]);

  const colorConfig = SHELL_COLORS[currentColor];

  return (
    <section className="relative w-full min-h-[95vh] bg-[#050505] text-white pt-28 pb-16 px-6 md:px-12 overflow-hidden flex flex-col justify-between">
      {/* Dark Ambient Spotlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hero Headline Block */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4EF]/10 border border-[#F6F4EF]/20 text-[#E6DDCE] text-xs font-mono uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE]" />
            <span>ANYKING · TRI-SCREEN EXTENDER</span>
          </div>

          {onTriggerUnfold && (
            <button
              onClick={onTriggerUnfold}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F4EF] text-[#25282B] text-xs font-extrabold font-mono uppercase tracking-wider hover:bg-[#E6DDCE] transition shadow-lg cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-[#25282B]" />
              <span>GO. UNFOLD. 3D 动画</span>
            </button>
          )}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F6F4EF] leading-[1.15] font-serif"
        >
          GO. UNFOLD. 三屏即刻展开
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#C8CBCB]/80 max-w-2xl mx-auto font-light leading-relaxed tracking-wide font-sans"
        >
          Your workspace moves with you. 极致移动三屏拓展系统，配合精密双铰链旋转结构，随时随地开启全能移动生产力。
        </motion.p>
      </div>

      {/* Main Interactive Product Showcase Box */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Side: Perspective & Color Interactive Controller */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 space-y-5 order-2 lg:order-1"
        >
          {/* View Mode Tabs */}
          <div className="bg-[#0A0A0A] p-5 rounded-2xl border border-white/10 space-y-4 shadow-2xl">
            <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest flex items-center justify-between font-mono">
              <span>视角 Perspective</span>
              <button 
                onClick={() => setIsAutoFlipping(!isAutoFlipping)}
                className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded border transition ${
                  isAutoFlipping ? 'bg-lime-400 text-black border-lime-400 font-bold' : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                }`}
              >
                {isAutoFlipping ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                {isAutoFlipping ? '暂停翻转' : '自动翻转'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => { setPerspective('back'); setIsAutoFlipping(false); }}
                className={`p-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-1.5 border ${
                  perspective === 'back'
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Hand className="w-3.5 h-3.5" />
                背面壳体
              </button>

              <button
                onClick={() => { setPerspective('front'); setIsAutoFlipping(false); }}
                className={`p-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-1.5 border ${
                  perspective === 'front'
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                正面屏幕
              </button>

              <button
                onClick={() => { setPerspective('side'); setIsAutoFlipping(false); }}
                className={`p-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-1.5 border ${
                  perspective === 'side'
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Feather className="w-3.5 h-3.5" />
                4.9mm侧影
              </button>

              <button
                onClick={() => { setPerspective('desk'); setIsAutoFlipping(false); }}
                className={`p-2.5 rounded-xl font-semibold transition flex items-center justify-center gap-1.5 border ${
                  perspective === 'desk'
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                桌面双屏
              </button>
            </div>
          </div>

          {/* Color Switcher */}
          <div className="bg-[#0A0A0A] p-5 rounded-2xl border border-white/10 space-y-4 shadow-2xl">
            <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest flex items-center justify-between font-mono">
              <span>Shell Color</span>
              <span className="text-xs font-semibold text-white">{colorConfig.name}</span>
            </div>

            <div className="flex items-center justify-between gap-2">
              {(Object.keys(SHELL_COLORS) as ShellColor[]).map((key) => {
                const item = SHELL_COLORS[key];
                return (
                  <button
                    key={key}
                    onClick={() => setCurrentColor(key)}
                    className={`group relative flex-1 p-2 rounded-xl flex flex-col items-center gap-1.5 transition border ${
                      currentColor === key ? 'border-white bg-white/10' : 'border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <span 
                      className="w-6 h-6 rounded-full shadow-inner border border-white/20 transition group-hover:scale-110" 
                      style={{ backgroundColor: item.hex }}
                    />
                    <span className="text-[10px] text-white/70 font-mono">{item.name.slice(0, 2)}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-white/50 leading-normal">{colorConfig.description}</p>
          </div>
        </motion.div>

        {/* Center: Replicated Video Screen Stage */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px] md:min-h-[480px] order-1 lg:order-2">
          
          {/* Glowing Ambient Aura matching selected color */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-25 transition-all duration-700 -z-10"
            style={{ backgroundColor: colorConfig.hex }}
          />

          {/* Perspective Interactive Display Stage */}
          <div className="relative w-full max-w-[540px] aspect-[4/3] flex items-center justify-center perspective-1000">
            <AnimatePresence mode="wait">
              {perspective === 'back' && (
                <motion.div
                  key="perspective_back"
                  initial={{ rotateY: -90, opacity: 0, scale: 0.9 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#000]"
                >
                  <img
                    src={IMAGES.back}
                    alt="Portable Monitor Back View - Hands Holding"
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dynamic Neon Color Overlay on Shell if color changed */}
                  {currentColor !== 'lime' && (
                    <div 
                      className="absolute inset-0 mix-blend-color opacity-70 transition-colors duration-500 pointer-events-none"
                      style={{ backgroundColor: colorConfig.hex }}
                    />
                  )}

                  <div className="absolute top-4 left-4 bg-black/80 border border-white/20 text-white text-xs px-3 py-1.5 rounded-full font-mono flex items-center gap-2 backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    手持背面展示 Mode
                  </div>
                </motion.div>
              )}

              {perspective === 'front' && (
                <motion.div
                  key="perspective_front"
                  initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                  animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                  exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border-8 border-[#1a1a1a] bg-black flex flex-col"
                >
                  {/* Screen Content Simulator inside the portable screen! */}
                  <ScreenDisplaySimulator mode={displayMode} />

                  <div className="absolute bottom-3 left-3 bg-black/80 border border-white/20 backdrop-blur text-white text-[10px] px-2.5 py-1 rounded-full font-mono flex items-center gap-1.5 z-30">
                    <Sparkles className="w-3 h-3 text-lime-400" />
                    正面 4K OLED 交互演示
                  </div>
                </motion.div>
              )}

              {perspective === 'side' && (
                <motion.div
                  key="perspective_side"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black"
                >
                  <img
                    src={IMAGES.slim}
                    alt="Portable Monitor Ultra Thin Profile"
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 border border-white/20 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full font-mono">
                    4.9mm 极薄机身 & 磁吸皮套
                  </div>
                </motion.div>
              )}

              {perspective === 'desk' && (
                <motion.div
                  key="perspective_desk"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black"
                >
                  <img
                    src={IMAGES.desk}
                    alt="Laptop + Portable Monitor Desk Setup"
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 border border-white/20 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full font-mono">
                    笔记本 + 便携屏 双屏协作场景
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Flip Hint */}
          <div className="mt-5 flex items-center gap-3 text-xs text-white/40 font-mono">
            <button
              onClick={() => setPerspective(perspective === 'back' ? 'front' : 'back')}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center gap-2 transition"
            >
              <RotateCw className="w-3 h-3 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
              点击快速翻转 (Flip Device)
            </button>
            <span>切换视角与动态色系</span>
          </div>
        </div>

        {/* Right Side: Screen Content Selector & Key Specs */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 space-y-5 order-3"
        >
          {/* Display Mode Selectors */}
          <div className="bg-[#0A0A0A] p-5 rounded-2xl border border-white/10 space-y-4 shadow-2xl">
            <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest font-mono">
              屏幕内容 Display Mode
            </div>

            <div className="space-y-2 text-xs">
              {[
                { id: 'motion_art', label: '柠檬动态艺术 (原视频风格)', desc: '高帧率柱状音轨与视觉艺术' },
                { id: 'coding', label: '双屏代码协同 (VS Code)', desc: '横竖屏自动旋转与Terminal' },
                { id: 'design', label: '专业色彩修图 (DCI-P3)', desc: '100%色域与校色调色台' },
                { id: 'gaming', label: '4K 120Hz 低延迟游戏', desc: '支持Switch/SteamDeck/PS5' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setDisplayMode(item.id as DisplayMode);
                    if (perspective !== 'front') setPerspective('front');
                  }}
                  className={`w-full text-left p-3 rounded-xl transition border ${
                    displayMode === item.id && perspective === 'front'
                      ? 'bg-white text-black border-white shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                  }`}
                >
                  <div className="font-semibold flex items-center justify-between">
                    <span>{item.label}</span>
                    {displayMode === item.id && perspective === 'front' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                    )}
                  </div>
                  <div className={`text-[11px] mt-0.5 ${displayMode === item.id && perspective === 'front' ? 'text-black/60' : 'text-white/40'}`}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Buy & Specs Badge */}
          <div className="bg-[#121212] text-white p-6 rounded-2xl border border-white/20 shadow-2xl space-y-5">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-white/40 font-mono uppercase tracking-widest">Early Bird Special</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">¥1,899</span>
                <span className="text-xs text-white/40 line-through ml-2">¥2,499</span>
              </div>
            </div>

            <ul className="text-xs space-y-2 text-white/70 font-light">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                附赠磁吸无级支架皮套 + 编织双 C 缆线
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-400" />
                支持 30 天无理由退换，全国联保 2 年
              </li>
            </ul>

            <button
              onClick={onOpenCustomizer}
              className="w-full py-3.5 px-4 bg-white text-black font-bold tracking-widest uppercase rounded-none hover:bg-neutral-200 shadow-xl transition flex items-center justify-center gap-2 group text-xs border border-white"
            >
              <span>配置并立即订购</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Features Strip */}
      <div className="max-w-6xl mx-auto w-full pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-[#0A0A0A] rounded-xl border border-white/10 text-white">
            <Feather className="w-5 h-5 text-lime-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">490g 羽量化</div>
            <div className="text-xs text-white/40 font-light">薄至 4.9mm, 随手即入包</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-[#0A0A0A] rounded-xl border border-white/10 text-white">
            <Tv className="w-5 h-5 text-lime-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">4K OLED 臻彩屏</div>
            <div className="text-xs text-white/40 font-light">100% DCI-P3 广色域</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-[#0A0A0A] rounded-xl border border-white/10 text-white">
            <Zap className="w-5 h-5 text-lime-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">一线直连盲插</div>
            <div className="text-xs text-white/40 font-light">无需额外电源驱动</div>
          </div>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-[#0A0A0A] rounded-xl border border-white/10 text-white">
            <Layers className="w-5 h-5 text-lime-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">磁吸无级支架</div>
            <div className="text-xs text-white/40 font-light">支持 0-180° 横竖屏自适应</div>
          </div>
        </div>
      </div>
    </section>
  );
};
