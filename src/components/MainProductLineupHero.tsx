import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { IMAGES } from '../data/productData';

interface Props {
  onOpenCustomizer: () => void;
  onTriggerUnfold?: () => void;
}

interface CategoryRecommendation {
  id: string;
  categoryIndex: string;
  categoryName: string;
  categoryCn: string;
  badge: string;
  titlePrefix: string;
  titleEmphasized: string;
  titleSuffix: string;
  productName: string;
  sizesSummary: string;
  specsSummary: string;
  originalPrice: string;
  currentPrice: string;
  discountBadge: string;
  heroImage: string;
  thumbImage: string;
  tag: string;
}

const CATEGORY_RECOMMENDATIONS: CategoryRecommendation[] = [
  {
    id: 'triple-monitors',
    categoryIndex: '01',
    categoryName: 'TRIPLE MONITORS',
    categoryCn: '旗舰三屏折叠系列',
    badge: '✦ BEST SELLER',
    titlePrefix: 'Triple',
    titleEmphasized: 'Aero',
    titleSuffix: 'Pro Max',
    productName: 'ANYKING Triple Aero Pro Max',
    sizesSummary: 'Available in 3 sizes: 14″, 15.6″ and 18.5″',
    specsSummary: '— 4K OLED, 100% DCI-P3, 120Hz & 100W PD 一线通',
    originalPrice: '¥4,199',
    currentPrice: '¥3,299',
    discountBadge: '21% OFF',
    heroImage: IMAGES.heroTriple,
    thumbImage: IMAGES.front,
    tag: '旗舰推荐 · 4K OLED 三屏环抱',
  },
  {
    id: 'dual-monitors',
    categoryIndex: '02',
    categoryName: 'DUAL MONITORS',
    categoryCn: '便携双屏扩展系列',
    badge: '✦ TRAVEL FAVORITE',
    titlePrefix: 'Duo',
    titleEmphasized: 'Air',
    titleSuffix: 'Ultra Slim',
    productName: 'ANYKING Duo Air Ultra Slim',
    sizesSummary: 'Available in 2 sizes: 14″ and 15.6″',
    specsSummary: '— 2.5K 视网膜窄边框, 490g 极致羽量, 0°-180° 无级悬停',
    originalPrice: '¥2,399',
    currentPrice: '¥1,899',
    discountBadge: '20% OFF',
    heroImage: IMAGES.heroDual,
    thumbImage: IMAGES.desk,
    tag: '商旅便携 · 极轻双翼副屏',
  },
  {
    id: 'single-monitors',
    categoryIndex: '03',
    categoryName: 'SINGLE MONITORS',
    categoryCn: '超薄触控单屏系列',
    badge: '✦ CREATOR CHOICE',
    titlePrefix: 'Touch',
    titleEmphasized: 'Pro',
    titleSuffix: '4K Studio',
    productName: 'ANYKING Touch Pro 4K Studio',
    sizesSummary: 'Available in 2 sizes: 15.6″ and 16.0″',
    specsSummary: '— 4.9mm 刀锋超薄 CNC 机身, 10 点防眩光防指纹触控',
    originalPrice: '¥1,899',
    currentPrice: '¥1,499',
    discountBadge: '21% OFF',
    heroImage: IMAGES.heroSingle,
    thumbImage: IMAGES.slim,
    tag: '创作者首选 · 4.9mm 极薄触控',
  },
  {
    id: 'smart-monitors',
    categoryIndex: '04',
    categoryName: 'SMART MONITORS',
    categoryCn: '智能无线投屏系列',
    badge: '✦ WIRELESS HUB',
    titlePrefix: 'Smart',
    titleEmphasized: 'Hub',
    titleSuffix: 'Obsidian',
    productName: 'ANYKING Smart Hub Obsidian',
    sizesSummary: 'Available in 2 sizes: 15.6″ and 17.3″',
    specsSummary: '— 内置 Wi-Fi 6 低延迟投屏 SOC, 曜石背板, Hi-Res 立体声',
    originalPrice: '¥2,799',
    currentPrice: '¥2,199',
    discountBadge: '21% OFF',
    heroImage: IMAGES.heroSmart,
    thumbImage: IMAGES.back,
    tag: '智能互联 · 曜石极夜无线屏',
  },
];

export const MainProductLineupHero: React.FC<Props> = ({ onOpenCustomizer, onTriggerUnfold }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentItem = CATEGORY_RECOMMENDATIONS[currentIndex];

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CATEGORY_RECOMMENDATIONS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CATEGORY_RECOMMENDATIONS.length) % CATEGORY_RECOMMENDATIONS.length);
  }, []);

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Scroll active card into view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeCard = scrollContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeCard) {
        activeCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex]);

  return (
    <section 
      id="lineup"
      className="relative w-full bg-[#F6F4EF] text-[#25282B] py-16 sm:py-20 px-4 sm:px-6 lg:px-10 border-t border-[#C8CBCB]/40 overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto space-y-8 lg:space-y-10">
        
        {/* GRAND WIDE CINEMATIC HERO STAGE (Matching Reference Proportion) */}
        <div 
          className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-[#141518] text-[#F6F4EF] border border-white/10 shadow-2xl overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-between"
          style={{
            backgroundImage: `radial-gradient(circle at 82% 52%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 45%, transparent 75%)`,
          }}
        >
          {/* Main Stage Grid: Left Info & Right Visual */}
          <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-14 xl:p-16 gap-8 lg:gap-6">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-[46%] xl:w-[44%] flex flex-col justify-center space-y-6 sm:space-y-7 text-left z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-5 sm:space-y-6"
                >
                  {/* Top Badge */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm tracking-[0.22em] text-[#E6DDCE] font-mono font-bold uppercase flex items-center gap-1.5">
                      {currentItem.badge}
                    </span>
                    <span className="text-xs text-white/40 font-mono">
                      | CATEGORY {currentItem.categoryIndex}
                    </span>
                  </div>

                  {/* Gigantic Typographic Headline with Circled Word (As in Reference) */}
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
                    <span>{currentItem.titlePrefix}</span>{' '}
                    <span className="relative inline-flex items-center justify-center px-3.5 sm:px-5 py-0.5 sm:py-1 mx-1 sm:mx-1.5 border border-[#E6DDCE]/80 rounded-full font-serif italic text-white/95 font-normal shadow-[0_0_20px_rgba(230,221,206,0.15)]">
                      {currentItem.titleEmphasized}
                    </span>{' '}
                    <span className="block sm:inline">{currentItem.titleSuffix}</span>
                  </h2>

                  {/* Size & Spec Details */}
                  <div className="space-y-1.5 text-white/80 font-normal">
                    <p className="text-sm sm:text-base text-[#D1D5DB] font-medium">
                      {currentItem.sizesSummary}
                    </p>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                      {currentItem.specsSummary}
                    </p>
                  </div>

                  {/* Pricing Section */}
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs sm:text-sm text-[#9CA3AF] font-mono">From</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                        {currentItem.currentPrice}
                      </span>
                    </div>
                    <span className="text-sm sm:text-base text-[#6B7280] line-through font-mono">
                      {currentItem.originalPrice}
                    </span>
                    <span className="bg-white text-[#141518] text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md font-mono">
                      {currentItem.discountBadge}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenCustomizer}
                  className="px-7 sm:px-9 py-3.5 sm:py-4 bg-[#1D63ED] hover:bg-[#1550CA] text-white text-sm sm:text-base font-bold rounded-full shadow-xl hover:shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-2.5 hover:scale-105 active:scale-95 border border-blue-400/30"
                >
                  <span>Buy Now 立即订购</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {onTriggerUnfold && (
                  <button
                    onClick={onTriggerUnfold}
                    className="px-5 sm:px-6 py-3.5 sm:py-4 border border-white/20 hover:border-white/40 text-white/90 hover:text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#E6DDCE]" />
                    <span>3D 全景展开</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Visual Column: Grand Seamless Product Image */}
            <div className="w-full lg:w-[54%] xl:w-[56%] relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[500px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -direction * 50, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="w-full h-full flex items-center justify-center relative group"
                >
                  {/* High Quality Product Hero Render */}
                  <img
                    src={currentItem.heroImage}
                    alt={currentItem.productName}
                    className="w-full max-h-[460px] lg:max-h-[540px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows on Left & Right Margins */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#141518]/80 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous Category"
            title="上一个类目"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#141518]/80 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next Category"
            title="下一个类目"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Bottom Progress Bar in Dark Stage */}
          <div className="relative z-10 w-full px-6 sm:px-12 pb-6 flex items-center justify-between text-xs text-white/50 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentItem.categoryCn} · {currentItem.tag}</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-white text-sm">
              <span>0{currentIndex + 1}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">0{CATEGORY_RECOMMENDATIONS.length}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM 4-CATEGORY SELECTOR CARDS */}
        <div 
          ref={scrollContainerRef}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-1"
        >
          {CATEGORY_RECOMMENDATIONS.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={item.id}
                onClick={() => handleSelect(idx)}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between p-4 bg-white group ${
                  isActive
                    ? 'border-[#141518] ring-4 ring-[#E6DDCE] shadow-xl scale-[1.02]'
                    : 'border-[#C8CBCB]/60 hover:border-[#141518]/60 hover:shadow-md opacity-85 hover:opacity-100'
                }`}
              >
                {/* 16:10 Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#25282B]/5 border border-[#C8CBCB]/40 mb-3 shadow-inner">
                  <img
                    src={item.thumbImage}
                    alt={item.productName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Category Index */}
                  <div className={`absolute top-2.5 left-2.5 text-xs font-mono font-bold px-2.5 py-1 rounded-lg border backdrop-blur-md ${
                    isActive 
                      ? 'bg-[#141518] text-[#E6DDCE] border-[#141518]' 
                      : 'bg-[#141518]/80 text-[#F6F4EF] border-white/20'
                  }`}>
                    {item.categoryIndex}
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute top-2.5 right-2.5 bg-[#E6DDCE] text-[#141518] text-xs font-mono font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1 border border-[#C8CBCB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#141518]" />
                      <span>选中</span>
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="space-y-1.5 text-left px-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-[#5E6265] uppercase tracking-wide">
                      {item.categoryName}
                    </span>
                    <span className="font-extrabold text-[#141518] text-sm font-mono">
                      {item.currentPrice}
                    </span>
                  </div>

                  <h4 className={`text-base sm:text-lg font-extrabold font-sans tracking-tight leading-snug line-clamp-1 ${
                    isActive ? 'text-[#141518]' : 'text-[#141518]/90'
                  }`}>
                    {item.productName}
                  </h4>

                  <p className="text-xs text-[#5E6265] font-normal line-clamp-1">
                    {item.tag}
                  </p>
                </div>

                {/* Bottom Active Progress Line */}
                <div className="mt-3.5 w-full h-1 bg-[#F6F4EF] rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      isActive ? 'bg-[#141518] w-full' : 'bg-transparent w-0'
                    }`} 
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
