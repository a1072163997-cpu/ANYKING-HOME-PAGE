import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { IMAGES } from '../data/productData';

interface Props {
  onOpenCustomizer: () => void;
  onTriggerUnfold?: () => void;
}

export const CategoryGridSection: React.FC<Props> = ({ onOpenCustomizer, onTriggerUnfold }) => {
  const categories = [
    {
      id: 'triple',
      badge: 'FLAGSHIP SERIES',
      title: 'Triple Monitors',
      subtitle: 'Boost your productivity by 52%.',
      description: '三屏环抱式阵列，主副屏 4K OLED 同步呈现，多任务处理效率倍增。',
      isDark: true,
      bgClass: 'bg-[#25282B]',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80',
      specs: ['100% DCI-P3 广色域', '3屏即插即用', '零延迟共缆供电']
    },
    {
      id: 'dual',
      badge: 'PORTABLE ESSENTIAL',
      title: 'Dual Monitors',
      subtitle: 'Expand your view, elevate your flow.',
      description: '轻量化双屏翼型扩展，出差候机与咖啡厅协作的最佳高能便携搭档。',
      isDark: false,
      bgClass: 'bg-white',
      image: IMAGES.desk,
      specs: ['轻至 680g', '支持 0°-180° 无级悬停', '磁吸隐形保护壳']
    },
    {
      id: 'single',
      badge: 'ULTRA SLIM OLED',
      title: 'Single Monitors',
      subtitle: 'One screen, endless possibilities.',
      description: '4.9mm 极致纤薄 4K OLED 单屏，触控防眩光，背包随插即走。',
      isDark: false,
      bgClass: 'bg-white',
      image: IMAGES.slim,
      specs: ['4.9mm 极薄侧影', '10 点灵敏触控', '高色准校色认证']
    },
    {
      id: 'smart',
      badge: 'AI SMART DISPLAY',
      title: 'Smart Monitors',
      subtitle: 'Your all-in-one smart display.',
      description: '内置全能 SOC 芯片与无线极速投屏，无需依赖电脑即可独立运行。',
      isDark: true,
      bgClass: 'bg-[#25282B]',
      image: IMAGES.front,
      specs: ['内置无线低延迟投屏', '多端设备协同', 'HDR10+ 影院级视听']
    }
  ];

  return (
    <section className="w-full bg-[#F6F4EF] py-16 px-4 sm:px-6 md:px-12 border-t border-[#C8CBCB]/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#25282B] uppercase bg-[#E6DDCE]/50 px-3 py-1 rounded-full border border-[#C8CBCB]">
            PRODUCT CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#25282B] tracking-tight font-sans">
            按使用场景与大类目选购
          </h2>
          <p className="text-base sm:text-lg text-[#5E6265] font-normal">
            探索 ANYKING 全系多屏扩展产品，找到最适合您的移动办公形态。
          </p>
        </div>

        {/* 2x2 Category Grid matching user's screenshot reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 sm:p-10 ${item.bgClass} border ${
                item.isDark ? 'border-[#C8CBCB]/20' : 'border-[#C8CBCB]/40'
              } shadow-md flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-300 min-h-[520px]`}
            >
              {/* Card Text Content Header */}
              <div className="text-center space-y-3 z-10 max-w-md mx-auto">
                <span className={`text-[11px] font-mono font-bold tracking-widest uppercase block ${
                  item.isDark ? 'text-[#E6DDCE]' : 'text-[#5E6265]'
                }`}>
                  {item.badge}
                </span>

                <h3 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-sans ${
                  item.isDark ? 'text-[#F6F4EF]' : 'text-[#25282B]'
                }`}>
                  {item.title}
                </h3>

                <p className={`text-base sm:text-lg font-medium ${
                  item.isDark ? 'text-[#C8CBCB]' : 'text-[#5E6265]'
                }`}>
                  {item.subtitle}
                </p>

                {/* Learn More & Buy Now Pills matching Image & VI */}
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={onTriggerUnfold || onOpenCustomizer}
                    className={`px-5 py-2 text-xs font-semibold rounded-full shadow-xs hover:shadow transition-all cursor-pointer ${
                      item.isDark
                        ? 'bg-[#E6DDCE] hover:bg-[#dfd3c0] text-[#25282B]'
                        : 'bg-[#25282B] hover:bg-black text-[#F6F4EF]'
                    }`}
                  >
                    Learn More
                  </button>

                  <button
                    onClick={onOpenCustomizer}
                    className={`px-5 py-2 text-xs font-semibold rounded-full shadow-xs hover:shadow transition-all cursor-pointer ${
                      item.isDark
                        ? 'border border-[#E6DDCE] text-[#E6DDCE] hover:bg-[#E6DDCE]/15'
                        : 'border border-[#25282B] text-[#25282B] hover:bg-[#25282B]/10'
                    }`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Product Center Image Preview */}
              <div className={`relative mt-8 w-full h-[260px] sm:h-[300px] flex items-center justify-center overflow-hidden rounded-2xl p-4 shadow-inner group-hover:scale-[1.02] transition-transform duration-500 ${
                item.isDark ? 'bg-black/30 border border-white/10' : 'bg-[#F6F4EF]/80 border border-[#C8CBCB]/30'
              }`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />

                {/* Specs Floating Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 justify-center">
                  {item.specs.map((spec, sIdx) => (
                    <span 
                      key={sIdx}
                      className="bg-[#25282B]/90 backdrop-blur-md text-[#F6F4EF] text-[10px] font-mono px-2.5 py-1 rounded-full border border-[#C8CBCB]/30"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
