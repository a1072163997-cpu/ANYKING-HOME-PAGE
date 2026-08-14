import React from 'react';
import { Monitor, ShieldCheck, Truck, RotateCcw, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#25282B] text-[#F6F4EF] border-t border-[#C8CBCB]/30 pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Service Perks Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-[#C8CBCB]/20 text-xs text-[#C8CBCB]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-[#C8CBCB]/30 rounded-xl text-[#E6DDCE]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#F6F4EF] tracking-wide">全球包邮送达</div>
              <div className="text-[11px] text-[#C8CBCB]/70">极速顺丰 / DHL 航空件直达</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-[#C8CBCB]/30 rounded-xl text-[#E6DDCE]">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#F6F4EF] tracking-wide">30 天无忧免费试用</div>
              <div className="text-[11px] text-[#C8CBCB]/70">不满意全额退款及承担运费</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/5 border border-[#C8CBCB]/30 rounded-xl text-[#E6DDCE]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#F6F4EF] tracking-wide">2 年全球联保 & 以换代修</div>
              <div className="text-[11px] text-[#C8CBCB]/70">官方硬件质保保障</div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-[#C8CBCB]">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-lg text-[#F6F4EF] font-sans tracking-tight">
              <Monitor className="w-5 h-5 text-[#E6DDCE]" />
              <span>ANYKING</span>
            </div>
            <p className="leading-relaxed font-light text-[#C8CBCB]">
              Redefining Portable Workspaces with Ultra-Slim Tri-Display Technology.
            </p>
            <div className="text-[10px] text-[#C8CBCB]/60 font-mono uppercase tracking-widest">
              © 2026 ANYKING Display Tech Inc. All Rights Reserved.
            </div>
          </div>

          {/* Column 1 */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#F6F4EF] uppercase tracking-widest text-[11px] font-mono">便携屏系列</h4>
            <ul className="space-y-1.5 font-light">
              <li><a href="#lineup" className="hover:text-[#E6DDCE] transition">ANYKING Tri-Display OLED</a></li>
              <li><a href="#lineup" className="hover:text-[#E6DDCE] transition">ANYKING Slim Dual-Screen</a></li>
              <li><a href="#lineup" className="hover:text-[#E6DDCE] transition">ANYKING Smart AI Display</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#F6F4EF] uppercase tracking-widest text-[11px] font-mono">适配设备与场景</h4>
            <ul className="space-y-1.5 font-light">
              <li><a href="#categories" className="hover:text-[#E6DDCE] transition">MacBook / Windows 多屏工作站</a></li>
              <li><a href="#categories" className="hover:text-[#E6DDCE] transition">Nintendo Switch 2 单线直连</a></li>
              <li><a href="#categories" className="hover:text-[#E6DDCE] transition">PS5 / Steam Deck 掌机影音</a></li>
              <li><a href="#categories" className="hover:text-[#E6DDCE] transition">移动编程与多任务办公</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#F6F4EF] uppercase tracking-widest text-[11px] font-mono">客户支持</h4>
            <ul className="space-y-1.5 font-light">
              <li><a href="#blog" className="hover:text-[#E6DDCE] transition">固件下载与 NxtLED 指南</a></li>
              <li><a href="#influencers" className="hover:text-[#E6DDCE] transition">Voice of Influencers 真实测评</a></li>
              <li><a href="#about" className="hover:text-[#E6DDCE] transition">关于 ANYKING 品牌</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
