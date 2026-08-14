import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, Gamepad2, Palette, Code2, Check, ArrowRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/productData';

export const ScenarioShowcase: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: 'office',
      title: '移动双屏工作站',
      subtitle: 'Laptop Dual-Screen Workflow',
      icon: Laptop,
      badge: '办公效率提升 200%',
      description: '将 ANYKING 置于笔记本侧边，单线连接。左屏编辑 Word 或写代码，右屏查看参考资料、网课或 Slack，告别频繁切换窗口。',
      highlights: [
        '单条 USB-C 缆线同步供电与 4K 信号',
        '磁吸折叠皮套 0-180° 无级视角调节',
        '眼部舒适防眩光低蓝光莱茵认证',
      ],
      image: IMAGES.desk,
    },
    {
      id: 'gaming',
      title: '掌机与主机移动大屏',
      subtitle: 'Switch & Steam Deck Portable Gaming',
      icon: Gamepad2,
      badge: '120Hz 1ms 广色域',
      description: '出差或旅行时，无需携带重型电视。将 Switch 或 Steam Deck 直接插上 ANYKING，即刻在酒店或高铁上畅享 15.6 英寸 4K OLED 极速大屏。',
      highlights: [
        'Switch 掌机底座模式直连，无需原装底座',
        '120Hz 高刷新率，FreeSync 抗画面撕裂',
        '内置双腔体立体声扬声器，沉浸音效',
      ],
      image: IMAGES.front,
    },
    {
      id: 'creative',
      title: '专业设计与影视调色',
      subtitle: 'Creative & Color Critical Design',
      icon: Palette,
      badge: '100% DCI-P3 / △E < 1.0',
      description: '为摄影师、设计师与剪辑师打造。每一个屏幕出厂前均经过逐台 X-Rite™ 硬件级色彩校准，精准呈现每一个真实色彩细节。',
      highlights: [
        '4K OLED 100,000:1 纯黑对比度',
        '真正的 10-Bit 10.7 亿色臻彩显示',
        '可选配 10 点电容触控与 4096 级压感笔',
      ],
      image: IMAGES.slim,
    },
    {
      id: 'coding',
      title: '纵向重力感应代码阅读',
      subtitle: 'Vertical Auto-Pivot Reading Mode',
      icon: Code2,
      badge: '重力感应 90° 旋转',
      description: '内置重力传感器，将屏幕竖立放置时，画面自动重载为 90° 纵向视图。一屏显示上百行代码或整篇论文文献，无需上下频繁滚动。',
      highlights: [
        '智能 G-Sensor 重力感应自动旋转',
        '纵向浏览上百行代码与 PDF 文档',
        '搭配超窄边框，极佳视域阅读体验',
      ],
      image: IMAGES.back,
    },
  ];

  const current = scenarios[activeScenario];

  return (
    <section id="scenarios" className="py-24 px-6 md:px-12 bg-[#F6F4EF] text-[#25282B] border-t border-[#C8CBCB]/40">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-[#25282B]/5 border border-[#C8CBCB] text-[#25282B] text-xs font-mono font-bold rounded-full uppercase tracking-widest">
            VERSATILE SCENARIOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25282B] tracking-tight font-sans">
            一屏多用，覆盖全部生活场景
          </h2>
          <p className="text-[#5E6265] text-base sm:text-lg font-light leading-relaxed">
            从出差办公、掌机游戏，到摄影调色与长代码阅读，ANYKING 无缝适配你的每一步需求。
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {scenarios.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeScenario === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScenario(index)}
                className={`p-4 rounded-2xl text-left transition flex flex-col justify-between border cursor-pointer ${
                  isActive
                    ? 'bg-[#25282B] text-[#F6F4EF] border-[#25282B] shadow-2xl scale-105 font-semibold'
                    : 'bg-white hover:bg-white/80 text-[#5E6265] border-[#C8CBCB]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-[#E6DDCE] text-[#25282B]' : 'bg-[#F6F4EF] text-[#25282B]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isActive && <Sparkles className="w-4 h-4 text-[#E6DDCE]" />}
                </div>
                <div>
                  <h4 className={`font-bold text-sm tracking-wide ${isActive ? 'text-[#F6F4EF]' : 'text-[#25282B]'}`}>{item.title}</h4>
                  <span className={`text-[10px] uppercase font-mono block mt-0.5 ${isActive ? 'text-[#C8CBCB]' : 'text-[#5E6265]'}`}>
                    {item.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card Display */}
        <div className="bg-[#25282B] text-[#F6F4EF] rounded-3xl border border-[#C8CBCB]/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#E6DDCE]/20 border border-[#E6DDCE]/30 text-[#E6DDCE] font-mono text-xs font-bold rounded-full uppercase tracking-wider">
              {current.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F6F4EF] tracking-tight font-sans">
              {current.title}
            </h3>

            <p className="text-[#C8CBCB] text-sm sm:text-base leading-relaxed font-light">
              {current.description}
            </p>

            <ul className="space-y-3 text-sm text-[#F6F4EF]/80 font-light">
              {current.highlights.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E6DDCE] text-[#25282B] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C8CBCB]/30 shadow-2xl group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105 opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25282B] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4 text-[#F6F4EF]">
              <span className="text-xs font-mono text-[#E6DDCE] block uppercase tracking-widest">Scenario Preview</span>
              <span className="text-sm font-bold tracking-wide">{current.title} 实拍案例</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
