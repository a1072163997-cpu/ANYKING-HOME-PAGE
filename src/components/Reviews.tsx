import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      name: '陈远 (Ken)',
      role: '全栈高级工程师 & 数字游民',
      avatar: 'https://picsum.photos/seed/user1/100/100',
      rating: 5,
      tag: '已购 ANYKING 15.6″ 4K OLED',
      text: '把之前的 16寸重型笔记本卖了，改用 Mac Mini + 这台 490g 的 ANYKING 便携屏。出差在咖啡馆或机场，单线直连秒变极简双屏工作站，代码效率爆表，朋友看到都来问链接！',
    },
    {
      name: '林雅姿 (Elena)',
      role: '独立摄影师 & 调色师',
      avatar: 'https://picsum.photos/seed/user2/100/100',
      rating: 5,
      tag: '已购曜石黑 4K 色彩校准版',
      text: '对画质色准要求极高。这块 OLED 屏实测 DCI-P3 色域达到 100%，纯黑无漏光，现场给客户看修图和样片特别方便，再也不用扛着几十斤的调色监视器了。',
    },
    {
      name: '张小豪 (Leo)',
      role: '硬核游戏玩家 & 科技博主',
      avatar: 'https://picsum.photos/seed/user3/100/100',
      rating: 5,
      tag: '已购星光银 120Hz 触控版',
      text: '配合 Switch 和 Steam Deck 简直是神仙组合！在高铁上或者酒店床上直接单线插上就能开玩，120Hz 刷新率一点不卡顿，自带的立体声扬声器效果出乎意料的好。',
    },
  ];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-[#25282B] text-[#F6F4EF] border-t border-[#C8CBCB]/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-[#E6DDCE]/20 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono font-bold rounded-full uppercase tracking-widest">
            REAL CUSTOMER REVIEWS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F6F4EF] tracking-tight font-sans">
            极客与创作者的真实口碑
          </h2>
          <p className="text-[#C8CBCB] text-base font-light leading-relaxed">
            已有超过 12,000+ 位创作者与极客使用 ANYKING 开启轻量化双屏生活。
          </p>
        </div>

        {/* Overall Rating Banner */}
        <div className="bg-[#1E2022] border border-[#C8CBCB]/30 text-[#F6F4EF] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold text-[#E6DDCE] font-mono">4.9</div>
            <div>
              <div className="flex items-center gap-1 text-[#E6DDCE] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E6DDCE] text-[#E6DDCE]" />
                ))}
              </div>
              <p className="text-xs text-[#C8CBCB] font-light">基于 1,420+ 条真实购买评价与媒体评测</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#F6F4EF]">
            <span className="px-3.5 py-1.5 bg-[#25282B] border border-[#C8CBCB]/30 rounded-full flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-4 h-4 text-[#E6DDCE]" /> 99.2% 好评率
            </span>
            <span className="px-3.5 py-1.5 bg-[#25282B] border border-[#C8CBCB]/30 rounded-full flex items-center gap-1.5 font-mono">
              <ThumbsUp className="w-4 h-4 text-[#E6DDCE]" /> 官方 30 天无理由退换
            </span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#1E2022] border border-[#C8CBCB]/30 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-[#E6DDCE]/50 transition shadow-2xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E6DDCE]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E6DDCE] text-[#E6DDCE]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 bg-[#25282B] text-[#E6DDCE] border border-[#C8CBCB]/30 rounded">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F6F4EF]/80 leading-relaxed font-light">
                  “{rev.text}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#C8CBCB]/20">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#C8CBCB]/40"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#F6F4EF]">{rev.name}</h4>
                  <p className="text-[11px] text-[#C8CBCB]">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
