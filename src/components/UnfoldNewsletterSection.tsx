import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Monitor, Layers, Laptop, Film, Users, AlertCircle, Wifi, BatteryCharging, Zap, Lock } from 'lucide-react';

interface Props {
  onExploreCommunity?: () => void;
  onWatchFilm?: () => void;
  onCheckLaptop?: () => void;
}

export const UnfoldNewsletterSection: React.FC<Props> = ({
  onExploreCommunity,
  onWatchFilm,
  onCheckLaptop
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this section
  // Triggers unfold early when section enters viewport and fully unfolds by the time section is centered
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 25%"]
  });

  // Map scroll progress to 3D unfold rotation angles
  // Left screen rotates from -130deg to 0deg early in scroll
  const leftRotateY = useTransform(scrollYProgress, [0.05, 0.45], [-130, 0]);
  // Right screen rotates from 130deg to 0deg right after
  const rightRotateY = useTransform(scrollYProgress, [0.25, 0.65], [130, 0]);
  // Screen display illumination (brightness 0.3 to 1)
  const screenOpacity = useTransform(scrollYProgress, [0.35, 0.7], [0.3, 1]);
  const centerScale = useTransform(scrollYProgress, [0.0, 0.5], [0.94, 1]);

  // Fallback / Manual force unfold state
  const [manualUnfold, setManualUnfold] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [audioPlayed, setAudioPlayed] = useState({ hinge1: false, hinge2: false, illuminate: false });

  // Web Audio API physical sound feedback
  const playSound = (type: 'hinge' | 'power' | 'success') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === 'hinge') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'power') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === 'success') {
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major Chord
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
          gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.07);
          osc.stop(ctx.currentTime + idx * 0.07 + 0.3);
        });
      }
    } catch {
      // Audio fallback silent
    }
  };

  // Listen to scroll thresholds to trigger tactile click sound
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.15 && !audioPlayed.hinge1) {
        playSound('hinge');
        setAudioPlayed(prev => ({ ...prev, hinge1: true }));
      }
      if (latest > 0.35 && !audioPlayed.hinge2) {
        playSound('hinge');
        setAudioPlayed(prev => ({ ...prev, hinge2: true }));
      }
      if (latest > 0.55 && !audioPlayed.illuminate) {
        playSound('power');
        setAudioPlayed(prev => ({ ...prev, illuminate: true }));
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, audioPlayed]);

  // Validation logic
  const hasInputChar = email.length > 0;
  const hasAtSymbol = email.includes('@');
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    if (!isValidEmail) {
      setErrorMessage("Let's try that email again.");
      playSound('hinge');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);
    playSound('power');

    setTimeout(() => {
      playSound('success');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section 
      ref={containerRef}
      id="newsletter" 
      className="w-full bg-[#F6F4EF] text-[#25282B] py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-[#E6DDCE]"
    >
      {/* Background Soft Grain & Subtle Ambient Lighting */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/70 via-[#F6F4EF] to-[#F6F4EF] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10 text-center">
        
        {/* Top Header Section */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25282B]/5 border border-[#25282B]/10 text-[#25282B] text-xs font-mono font-medium tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5E6265]" />
            <span>ANYKING · MOBILE WORK CULTURE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-[#25282B] leading-none"
          >
            {isSubmitted ? "YOU'RE IN." : "UNFOLD WHAT'S NEXT."}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg font-medium text-[#5E6265] max-w-xl mx-auto font-sans leading-relaxed"
          >
            {isSubmitted 
              ? "See you on the next unfold."
              : "New products. Better setups. Stories from people who work in motion."}
          </motion.p>

          {/* Scroll Hint Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 pt-2 text-xs font-mono text-[#5E6265] uppercase tracking-widest bg-white/80 px-4 py-1.5 rounded-full border border-[#C8CBCB]"
          >
            <span className="w-2 h-2 rounded-full bg-[#25282B] animate-ping" />
            <span>SCROLL TO UNFOLD PORTABLE TRI-SCREEN</span>
          </motion.div>
        </div>


        {/* MAIN 3D REALISTIC HARDWARE DISPLAY FRAME CONTAINER */}
        <div className="w-full flex flex-col items-center justify-center pt-6 pb-10">
          
          <motion.div 
            style={{ scale: centerScale }}
            className="w-full max-w-[1240px] perspective-1600 relative"
          >
            {/* REALISTIC TRI-DISPLAY HARDWARE ARRAY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 items-center justify-center relative z-10">
              
              {/* ======================================= */}
              {/* LEFT PHYSICAL DISPLAY SCREEN (SCREEN 01) */}
              {/* ======================================= */}
              <motion.div
                style={{ 
                  rotateY: manualUnfold ? 0 : leftRotateY,
                  transformOrigin: 'right center',
                  transformStyle: 'preserve-3d'
                }}
                className="relative rounded-[22px] p-2 bg-gradient-to-b from-[#3a3d40] via-[#25282B] to-[#181a1c] border-[5px] border-[#303336] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500 overflow-hidden"
              >
                {/* Physical CNC Metal Chamfer Edge Highlight */}
                <div className="absolute inset-0 rounded-[18px] border border-white/10 pointer-events-none" />

                {/* Left Hardware Hinge Connector (Attach to Center Screen) */}
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-20 bg-gradient-to-r from-[#4A4E51] via-[#8E9397] to-[#25282B] rounded-sm shadow-md border-y border-[#C8CBCB]/30 z-30">
                  <div className="w-full h-1 bg-[#1d1f21] my-4" />
                  <div className="w-full h-1 bg-[#1d1f21]" />
                </div>

                {/* Inner Bezel Frame */}
                <div className="bg-[#0b0c0e] rounded-[16px] p-5 sm:p-6 h-[320px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-left border border-black/80">
                  
                  {/* Display Glass Reflection & Anti-Glare Coating */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09] pointer-events-none z-20" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full pointer-events-none" />

                  {/* Top Bezel WebCam / Ambient Light Sensor Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#16181a] border border-[#303336] shadow-inner" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse" />
                  </div>

                  {/* OLED Screen Content Container */}
                  <motion.div 
                    style={{ opacity: manualUnfold ? 1 : screenOpacity }}
                    className="flex flex-col justify-between h-full z-10"
                  >
                    {/* Screen Status Bar */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#8a8f94] border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-1.5 font-bold text-[#E6DDCE]">
                        <Monitor className="w-3.5 h-3.5 text-[#0071e3]" />
                        <span>SCREEN 01 · 14.0" OLED</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${hasInputChar || isSubmitted ? 'bg-[#0071e3]/20 text-[#0071e3] border border-[#0071e3]/30' : 'bg-white/5 text-[#8a8f94]'}`}>
                          {isSubmitted ? 'COMMUNITY' : hasInputChar ? 'UNLOCKED' : 'STANDBY'}
                        </span>
                      </div>
                    </div>

                    {/* Middle Screen Card Content */}
                    <div className="my-auto space-y-3">
                      {isSubmitted ? (
                        <>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-max text-[#E6DDCE]">
                            <Users className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold font-sans text-white tracking-tight">
                            REAL SETUPS
                          </h3>
                          <p className="text-xs text-[#a0a5ab] leading-relaxed">
                            See how remote engineers & digital nomads deploy 3-screens worldwide.
                          </p>
                          <button
                            onClick={onExploreCommunity}
                            className="pt-2 text-xs font-bold text-[#0071e3] hover:text-white flex items-center gap-1.5 cursor-pointer group"
                          >
                            <span>Explore community</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-max text-[#E6DDCE]">
                            <Shield className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold font-sans text-white tracking-tight">
                            EARLY ACCESS
                          </h3>
                          <p className="text-xs text-[#a0a5ab] leading-relaxed">
                            New products before everyone else. Priority hardware drops & beta firmware.
                          </p>
                        </>
                      )}
                    </div>

                    {/* Screen Footer OS Telemetry */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6e7378] border-t border-white/10 pt-2.5">
                      <span>ANYKING NxtLED™</span>
                      <span>120Hz · 100% DCI-P3</span>
                    </div>
                  </motion.div>

                </div>
              </motion.div>


              {/* ========================================= */}
              {/* CENTER PHYSICAL DISPLAY SCREEN (MAIN PANEL) */}
              {/* ========================================= */}
              <motion.div
                className="relative rounded-[22px] p-2 bg-gradient-to-b from-[#404448] via-[#25282B] to-[#16181a] border-[5px] border-[#383b3e] shadow-[0_30px_70px_-10px_rgba(0,0,0,0.6)] z-20 overflow-hidden"
              >
                {/* Physical Metal Bezel Chamfer */}
                <div className="absolute inset-0 rounded-[18px] border border-white/15 pointer-events-none" />

                {/* Inner OLED Display Panel */}
                <div className="bg-[#08090a] rounded-[16px] p-5 sm:p-7 h-[350px] sm:h-[390px] flex flex-col justify-between relative overflow-hidden text-left border border-black/90">
                  
                  {/* Screen Glare Sheen & Status Halo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/60 pointer-events-none z-20" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#0071e3]/10 blur-3xl pointer-events-none" />

                  {/* Top WebCam & Dual Studio Microphone Array */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    <div className="w-1 h-1 rounded-full bg-[#303336]" />
                    <div className="w-2 h-2 rounded-full bg-[#111] border border-[#444] shadow-inner flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-blue-400" />
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#303336]" />
                  </div>

                  {/* Top OS System Header Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8a8f94] border-b border-white/10 pb-2.5 z-10">
                    <div className="flex items-center gap-1.5 font-bold text-[#E6DDCE]">
                      <Layers className="w-3.5 h-3.5 text-[#0071e3]" />
                      <span>CENTER DISPLAY · MAIN HUB</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 text-emerald-400" />
                      <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>

                  {/* Center Main Email Capture Interaction Body */}
                  <div className="my-auto space-y-4 z-10">
                    {isSubmitted ? (
                      <div className="space-y-4 text-center py-2">
                        <div className="w-12 h-12 rounded-full bg-[#0071e3]/20 border border-[#0071e3]/40 flex items-center justify-center mx-auto text-[#0071e3]">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black font-sans text-white tracking-tight">
                            YOU'RE IN.
                          </h3>
                          <p className="text-xs text-[#a0a5ab] mt-1 font-mono">
                            Welcome to the mobile work culture.
                          </p>
                        </div>
                        <button
                          onClick={onWatchFilm}
                          className="px-6 py-2.5 bg-[#E6DDCE] hover:bg-white text-[#25282B] rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2 group shadow-lg"
                        >
                          <Film className="w-3.5 h-3.5" />
                          <span>Watch the film</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleEmailSubmit} className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-[11px] font-mono font-bold tracking-widest text-[#E6DDCE] uppercase flex items-center gap-1.5">
                            <Lock className="w-3 h-3 text-[#0071e3]" />
                            <span>YOUR EMAIL ADDRESS</span>
                          </label>
                          <p className="text-xs text-[#a0a5ab]">
                            Unlock hardware drops, firmware & mobile setup guides.
                          </p>
                        </div>

                        {/* OLED Style Glossy Input Container */}
                        <div className="relative">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errorMessage) setErrorMessage(null);
                            }}
                            placeholder="you@email.com"
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-black/80 border border-[#3a3d40] focus:border-[#0071e3] rounded-xl text-sm font-mono text-white placeholder-[#5E6265] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/40 transition-all shadow-inner"
                          />
                        </div>

                        {/* Error Message Alert */}
                        {errorMessage && (
                          <div className="flex items-center gap-1.5 text-rose-400 text-xs font-mono">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errorMessage}</span>
                          </div>
                        )}

                        {/* CTA Button: GO. UNFOLD. */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-3.5 rounded-xl font-sans text-sm font-black tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer ${
                            isValidEmail
                              ? 'bg-[#E6DDCE] hover:bg-white text-[#25282B] shadow-2xl scale-[1.01]'
                              : 'bg-white/10 text-[#a0a5ab] hover:bg-white/20 hover:text-white border border-white/10'
                          }`}
                        >
                          {isSubmitting ? (
                            <span className="animate-pulse">CONNECTING DISPLAY...</span>
                          ) : (
                            <>
                              <span>GO. UNFOLD.</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Center Screen OS Status Line */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#6e7378] border-t border-white/10 pt-2.5 z-10">
                    <span>STATUS: {isValidEmail ? 'READY TO CONNECT' : 'ENTER EMAIL'}</span>
                    <span>ANYKING — GO. UNFOLD.</span>
                  </div>

                </div>
              </motion.div>


              {/* ======================================== */}
              {/* RIGHT PHYSICAL DISPLAY SCREEN (SCREEN 03) */}
              {/* ======================================== */}
              <motion.div
                style={{ 
                  rotateY: manualUnfold ? 0 : rightRotateY,
                  transformOrigin: 'left center',
                  transformStyle: 'preserve-3d'
                }}
                className="relative rounded-[22px] p-2 bg-gradient-to-b from-[#3a3d40] via-[#25282B] to-[#181a1c] border-[5px] border-[#303336] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500 overflow-hidden"
              >
                {/* Physical CNC Metal Chamfer Edge Highlight */}
                <div className="absolute inset-0 rounded-[18px] border border-white/10 pointer-events-none" />

                {/* Right Hardware Hinge Connector (Attach to Center Screen) */}
                <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-20 bg-gradient-to-r from-[#25282B] via-[#8E9397] to-[#4A4E51] rounded-sm shadow-md border-y border-[#C8CBCB]/30 z-30">
                  <div className="w-full h-1 bg-[#1d1f21] my-4" />
                  <div className="w-full h-1 bg-[#1d1f21]" />
                </div>

                {/* Inner Bezel Frame */}
                <div className="bg-[#0b0c0e] rounded-[16px] p-5 sm:p-6 h-[320px] sm:h-[360px] flex flex-col justify-between relative overflow-hidden text-left border border-black/80">
                  
                  {/* Display Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.04] to-white/[0.09] pointer-events-none z-20" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/5 blur-2xl rounded-full pointer-events-none" />

                  {/* Top Bezel WebCam / Sensor Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#16181a] border border-[#303336] shadow-inner" />
                  </div>

                  {/* OLED Screen Content Container */}
                  <motion.div 
                    style={{ opacity: manualUnfold ? 1 : screenOpacity }}
                    className="flex flex-col justify-between h-full z-10"
                  >
                    {/* Screen Status Bar */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#8a8f94] border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-1.5 font-bold text-[#E6DDCE]">
                        <Monitor className="w-3.5 h-3.5 text-[#0071e3]" />
                        <span>SCREEN 03 · 14.0" OLED</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isValidEmail || isSubmitted ? 'bg-[#0071e3]/20 text-[#0071e3] border border-[#0071e3]/30' : 'bg-white/5 text-[#8a8f94]'}`}>
                          {isSubmitted ? 'COMPATIBILITY' : isValidEmail ? 'UNLOCKED' : 'STANDBY'}
                        </span>
                      </div>
                    </div>

                    {/* Middle Screen Card Content */}
                    <div className="my-auto space-y-3">
                      {isSubmitted ? (
                        <>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-max text-[#E6DDCE]">
                            <Laptop className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold font-sans text-white tracking-tight">
                            COMPATIBILITY
                          </h3>
                          <p className="text-xs text-[#a0a5ab] leading-relaxed">
                            Verify single-cable Type-C DP Alt Mode for your MacBook or Windows PC.
                          </p>
                          <button
                            onClick={onCheckLaptop}
                            className="pt-2 text-xs font-bold text-[#0071e3] hover:text-white flex items-center gap-1.5 cursor-pointer group"
                          >
                            <span>Check your laptop</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-max text-[#E6DDCE]">
                            <Laptop className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold font-sans text-white tracking-tight">
                            WORK IN MOTION
                          </h3>
                          <p className="text-xs text-[#a0a5ab] leading-relaxed">
                            Setups, ideas & stories from anywhere. Built for digital nomads.
                          </p>
                        </>
                      )}
                    </div>

                    {/* Screen Footer OS Telemetry */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#6e7378] border-t border-white/10 pt-2.5">
                      <span>TYPE-C DP ALT</span>
                      <span>680G ULTRA-LIGHT</span>
                    </div>
                  </motion.div>

                </div>
              </motion.div>

            </div>

            {/* Realistic Tabletop Physical Cast Shadow */}
            <div className="w-full h-12 bg-gradient-to-b from-black/40 via-black/15 to-transparent blur-xl rounded-full mt-2 -z-10" />

            {/* Manual Unfold Trigger for Mobile / Instant View */}
            {!manualUnfold && (
              <div className="mt-6 md:hidden flex justify-center">
                <button
                  onClick={() => {
                    setManualUnfold(true);
                    playSound('power');
                  }}
                  className="px-6 py-2.5 bg-[#25282B] text-[#E6DDCE] rounded-full text-xs font-bold font-mono tracking-wider shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>TAP TO EXPAND HARDWARE</span>
                </button>
              </div>
            )}

          </motion.div>

        </div>

        {/* Footer Brand Signature */}
        <div className="pt-4 border-t border-[#E6DDCE]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5E6265]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#25282B]">ANYKING</span>
            <span>—</span>
            <span className="tracking-widest font-bold text-[#25282B]">GO. UNFOLD.</span>
          </div>
          <div>
            <span>DESIGNED FOR PEOPLE WHO WORK IN MOTION</span>
          </div>
        </div>

      </div>
    </section>
  );
};
