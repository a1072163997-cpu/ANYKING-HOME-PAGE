import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShoppingBag, Sparkles, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { ShellColor, DisplaySize, PanelType, ProductConfig } from '../types';
import { SHELL_COLORS } from '../data/productData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [config, setConfig] = useState<ProductConfig>({
    size: '15.6',
    panel: '4K 60Hz OLED',
    color: 'lime',
    bundleTouchPen: true,
    bundlePowerBank: false,
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Price calculations
  const calculateTotal = () => {
    let base = 1899;
    if (config.panel === '2.5K 120Hz IPS') base = 1499;
    if (config.panel === '4K 120Hz OLED Touch') base = 2399;

    if (config.size === '14.0') base -= 100;
    if (config.size === '17.3') base += 300;

    if (config.bundleTouchPen) base += 199;
    if (config.bundlePowerBank) base += 149;

    return base;
  };

  const handleConfirmOrder = () => {
    setOrderSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#25282B] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#C8CBCB]/30 text-[#F6F4EF] my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-[#C8CBCB] hover:text-[#F6F4EF] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderSubmitted ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#E6DDCE] font-mono tracking-widest uppercase">
                <Sparkles className="w-4 h-4 text-[#E6DDCE]" />
                ANYKING PORTABLE CUSTOMIZER
              </div>
              <h2 className="text-2xl font-bold text-[#F6F4EF] tracking-tight mt-1 font-sans">
                定制你的专属便携屏
              </h2>
              <p className="text-xs text-[#C8CBCB] font-light">
                选择屏幕尺寸、显示面板与出厂皮肤色彩，打造独一无二的掌上工作站。
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#C8CBCB] block font-mono">
                1. 选择屏幕尺寸 Size
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: '14.0', title: '14.0 英寸', weight: '390g 超羽量' },
                  { id: '15.6', title: '15.6 英寸 (推荐)', weight: '490g 黄金比例' },
                  { id: '17.3', title: '17.3 英寸 Pro', weight: '680g 巨幕视界' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setConfig({ ...config, size: s.id as DisplaySize })}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      config.size === s.id
                        ? 'bg-[#E6DDCE] text-[#25282B] border-[#E6DDCE] shadow-lg font-bold'
                        : 'bg-white/5 hover:bg-white/10 border-[#C8CBCB]/20 text-[#F6F4EF]'
                    }`}
                  >
                    <div className="font-bold">{s.title}</div>
                    <div className={`text-[10px] mt-0.5 ${config.size === s.id ? 'text-[#25282B]/80' : 'text-[#C8CBCB]/70'}`}>
                      {s.weight}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Panel Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#C8CBCB] block font-mono">
                2. 选择面板规格 Panel Type
              </label>
              <div className="space-y-2 text-xs">
                {[
                  { id: '2.5K 120Hz IPS', title: '2.5K 120Hz IPS 竞技款', badge: '高刷流畅', price: '¥1,499起' },
                  { id: '4K 60Hz OLED', title: '4K 60Hz OLED 臻彩调色版 (原装爆款)', badge: '100% DCI-P3 广色域', price: '¥1,899起' },
                  { id: '4K 120Hz OLED Touch', title: '4K 120Hz OLED + 10点触控旗舰版', badge: '压感触控全能', price: '¥2,399起' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setConfig({ ...config, panel: p.id as PanelType })}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${
                      config.panel === p.id
                        ? 'bg-[#E6DDCE] text-[#25282B] border-[#E6DDCE] shadow-lg font-bold'
                        : 'bg-white/5 hover:bg-white/10 border-[#C8CBCB]/20 text-[#F6F4EF]'
                    }`}
                  >
                    <div>
                      <div className="font-bold flex items-center gap-2">
                        <span>{p.title}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                          config.panel === p.id ? 'bg-[#25282B] text-[#F6F4EF] font-semibold' : 'bg-white/10 text-[#C8CBCB]'
                        }`}>
                          {p.badge}
                        </span>
                      </div>
                    </div>
                    <span className={`font-mono font-bold ${config.panel === p.id ? 'text-[#25282B]' : 'text-[#E6DDCE]'}`}>
                      {p.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#C8CBCB] block font-mono">
                3. 选择壳体色彩 Shell Finish
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {(Object.keys(SHELL_COLORS) as ShellColor[]).map((key) => {
                  const item = SHELL_COLORS[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setConfig({ ...config, color: key })}
                      className={`p-2.5 rounded-xl border flex items-center gap-2 transition cursor-pointer ${
                        config.color === key
                          ? 'bg-[#E6DDCE] text-[#25282B] border-[#E6DDCE] shadow-lg font-bold'
                          : 'bg-white/5 hover:bg-white/10 border-[#C8CBCB]/20 text-[#F6F4EF]'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full border border-black/20 shrink-0" style={{ backgroundColor: item.hex }} />
                      <span className="font-semibold text-[11px] truncate">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accessories Checklist */}
            <div className="space-y-2 pt-2 border-t border-[#C8CBCB]/20">
              <label className="text-xs font-bold uppercase tracking-wider text-[#C8CBCB] block font-mono">
                4. 选配升级 Accessories Bundle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition ${
                  config.bundleTouchPen ? 'bg-white/10 border-[#E6DDCE] text-[#F6F4EF] font-semibold' : 'bg-white/5 border-[#C8CBCB]/20 text-[#C8CBCB]'
                }`}>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={config.bundleTouchPen}
                      onChange={(e) => setConfig({ ...config, bundleTouchPen: e.target.checked })}
                      className="rounded accent-[#E6DDCE]"
                    />
                    <span>4096 级压感磁吸触控笔</span>
                  </div>
                  <span className="font-mono text-[#E6DDCE]">+¥199</span>
                </label>

                <label className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition ${
                  config.bundlePowerBank ? 'bg-white/10 border-[#E6DDCE] text-[#F6F4EF] font-semibold' : 'bg-white/5 border-[#C8CBCB]/20 text-[#C8CBCB]'
                }`}>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={config.bundlePowerBank}
                      onChange={(e) => setConfig({ ...config, bundlePowerBank: e.target.checked })}
                      className="rounded accent-[#E6DDCE]"
                    />
                    <span>100W PD 氮化镓移动电源</span>
                  </div>
                  <span className="font-mono text-[#E6DDCE]">+¥149</span>
                </label>
              </div>
            </div>

            {/* Total Price & Checkout Action */}
            <div className="pt-4 border-t border-[#C8CBCB]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#C8CBCB] block font-mono">预估定制价格</span>
                <div className="text-3xl font-bold text-[#F6F4EF] font-mono">
                  ¥{calculateTotal()}
                </div>
              </div>

              <button
                onClick={handleConfirmOrder}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#E6DDCE] hover:bg-[#dfd3c0] text-[#25282B] font-bold rounded-xl shadow-xl transition flex items-center justify-center gap-2 group text-base cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>提交预订订单</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#E6DDCE]/20 border border-[#E6DDCE] text-[#E6DDCE] flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#F6F4EF] font-sans">预订已成功提交！</h3>
              <p className="text-xs text-[#C8CBCB] font-mono">
                订单号: ANYKING-202688921 · 顺丰特快免费送达
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-[#C8CBCB]/20 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#C8CBCB]/20 pb-2">
                <span className="text-[#C8CBCB]">定制规格:</span>
                <span className="font-bold text-[#F6F4EF]">{config.size}″ {config.panel}</span>
              </div>
              <div className="flex justify-between border-b border-[#C8CBCB]/20 pb-2">
                <span className="text-[#C8CBCB]">外壳色彩:</span>
                <span className="font-bold text-[#F6F4EF]">{SHELL_COLORS[config.color].name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#C8CBCB]">支付总额:</span>
                <span className="font-bold text-[#F6F4EF] font-mono">¥{calculateTotal()}</span>
              </div>
            </div>

            <p className="text-xs text-[#C8CBCB] max-w-md mx-auto font-light leading-relaxed">
              我们已将预订确认函及 30 天无忧试用保障卡发送至您的联系方式。顺丰包裹将于 24 小时内发出。
            </p>

            <button
              onClick={() => {
                setOrderSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#E6DDCE] text-[#25282B] font-bold text-xs rounded-xl shadow hover:bg-[#dfd3c0] transition cursor-pointer"
            >
              返回主页
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
