import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Monitor, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Feather, Zap } from 'lucide-react';

export const LaptopComparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 px-6 md:px-12 bg-[#F6F4EF] text-[#25282B] border-t border-[#C8CBCB]/40">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-[#25282B]/5 border border-[#C8CBCB] text-[#25282B] text-xs font-mono font-bold rounded-full uppercase tracking-widest">
            WHY SWITCH TO ANYKING?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25282B] tracking-tight font-sans">
            从重型笔记本，到无界便携屏
          </h2>
          <p className="text-[#5E6265] text-base sm:text-lg font-light leading-relaxed">
            为什么越来越多创作者、极客与商务精英将“主屏+便携屏”作为首选？相比传统笔记本，它带来了翻倍的自由。
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Laptop Card */}
          <div className="bg-white border border-[#C8CBCB]/60 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#F6F4EF] border border-[#C8CBCB]/40 rounded-2xl text-[#5E6265]">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#25282B] tracking-wide">传统单笔记本方案</h3>
                <span className="text-xs text-[#5E6265] font-mono uppercase tracking-widest">Traditional Laptop Only</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-[#5E6265] font-light">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#25282B] font-semibold block">笨重难携，额外负担</strong>
                  主流性能笔记本重达 1.8kg – 2.5kg，加上电源适配器几乎占据整包。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#25282B] font-semibold block">单屏幕局限，频繁切窗</strong>
                  一边查资料一边写代码/文档时，需不停 Alt+Tab 切换窗口，效率受限。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#25282B] font-semibold block">跨设备拓展性极低</strong>
                  无法直接作为 Switch 或 PS5 的外接游戏屏，亦无法作为主主机的副屏。
                </div>
              </li>
            </ul>
          </div>

          {/* ANYKING Portable Screen Card */}
          <div className="bg-[#25282B] text-[#F6F4EF] border border-[#C8CBCB]/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-[#E6DDCE] text-[#25282B] font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl font-mono">
              RECOMMENDED
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#E6DDCE] text-[#25282B] rounded-2xl shadow-lg">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F6F4EF] tracking-wide">ANYKING 便携屏方案</h3>
                <span className="text-xs text-[#E6DDCE] font-mono tracking-widest uppercase">Portable Monitor Dual-Screen</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-[#F6F4EF]/80 font-light">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E6DDCE] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F6F4EF] font-semibold block">490g 极致羽量，无感随行</strong>
                  4.9mm 厚度比 iPad 还薄，轻松塞入任意手提包或公文夹。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E6DDCE] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F6F4EF] font-semibold block">一线直连，双屏效率倍增</strong>
                  单条 Type-C 缆线即可供电与传输信号，随时构建极速双屏工作站。
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E6DDCE] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F6F4EF] font-semibold block">万能兼容：Mac / PC / Switch / 手机</strong>
                  支持 Switch 掌机直连大屏游戏，纵向 90° 重力感应自动旋转看长代码。
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Highlight Stats Banner */}
        <div className="bg-[#25282B] p-6 rounded-2xl border border-[#C8CBCB]/30 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-[#F6F4EF]">
          <div>
            <div className="text-3xl font-bold text-[#E6DDCE] font-mono">200%</div>
            <div className="text-xs text-[#C8CBCB] mt-1 font-light">工作与多任务多窗口处理效率提升</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E6DDCE] font-mono">-65%</div>
            <div className="text-xs text-[#C8CBCB] mt-1 font-light">相比带两台笔记本的随行负重减轻</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#E6DDCE] font-mono">0.01s</div>
            <div className="text-xs text-[#C8CBCB] mt-1 font-light">一线即插即用响应时间</div>
          </div>
        </div>
      </div>
    </section>
  );
};
