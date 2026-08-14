import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ChevronLeft, ChevronRight, Heart, ExternalLink, Sparkles, X, MessageSquare } from 'lucide-react';
import { IMAGES } from '../data/productData';

interface UGCItem {
  id: string;
  handle: string;
  followerCount: string;
  image: string;
  productBadge: string;
  productImg: string;
  caption: string;
  likes: string;
  location: string;
  category: string;
}

const UGC_POSTS: UGCItem[] = [
  {
    id: '1',
    handle: '@tech_nomad_sam',
    followerCount: '240K',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    productBadge: 'ANYKING Triple OLED',
    productImg: IMAGES.front,
    caption: 'Unfolding my 3-screen setup in an airport lounge in Tokyo. ZERO lag with one Type-C cable! 🛫💻',
    likes: '14.2K',
    location: 'Haneda Airport Lounge, Tokyo',
    category: 'Digital Nomad'
  },
  {
    id: '2',
    handle: '@minimal_desk_setup',
    followerCount: '580K',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=800&q=80',
    productBadge: 'ANYKING Dual Wing',
    productImg: IMAGES.desk,
    caption: 'Vertical stack orientation is a game changer for coding + previewing UI simultaneously. ☕✨',
    likes: '28.9K',
    location: 'Cozy Loft Studio',
    category: 'Workspace Aesthetics'
  },
  {
    id: '3',
    handle: '@unboxing_tech_daily',
    followerCount: '1.2M',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    productBadge: '4.9mm Ultra Slim',
    productImg: IMAGES.slim,
    caption: 'The magnetic hinge resistance on the ANYKING feels like a high-end luxury watch bezel. 🔥',
    likes: '42.1K',
    location: 'Tech Unboxing Lab',
    category: 'Hardware Review'
  },
  {
    id: '4',
    handle: '@lisa_ui_design',
    followerCount: '185K',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    productBadge: '4K OLED Display',
    productImg: IMAGES.front,
    caption: 'Color precision certified 100% DCI-P3. Grading photos on the go has never been this accurate. 🎨',
    likes: '9.8K',
    location: 'Coffee & Code Cafe',
    category: 'UI/UX & Creative'
  },
  {
    id: '5',
    handle: '@alex_finance_trader',
    followerCount: '310K',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    productBadge: 'ANYKING Tri-Screen',
    productImg: IMAGES.back,
    caption: 'Trading charts on screen 1, Bloomberg Terminal on screen 2, Discord on screen 3. Pure speed.',
    likes: '19.4K',
    location: 'Financial District',
    category: 'Fintech & Trading'
  },
  {
    id: '6',
    handle: '@travel_vlog_marco',
    followerCount: '450K',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    productBadge: 'Portable Workstation',
    productImg: IMAGES.desk,
    caption: 'Editing 4K timeline on a hotel desk in Bali. Super lightweight at 680g! 🌴🎥',
    likes: '31.5K',
    location: 'Ubud, Bali',
    category: 'Travel Video'
  }
];

export const UGCVoiceOfInfluencers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPost, setSelectedPost] = useState<UGCItem | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#F6F4EF] text-[#25282B] py-20 px-4 sm:px-6 md:px-12 border-t border-[#C8CBCB]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header matching Screenshot */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-[#25282B]">
            Voice of Influencers
          </h2>

          <p className="text-base sm:text-xl font-medium text-[#5E6265] font-mono tracking-tight">
            @ANYKINGMonitor
          </p>

          {/* Follow Us Pill Button */}
          <div className="pt-1 flex justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#25282B] text-[#25282B] hover:bg-[#25282B]/10 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#25282B]" />
              <span>Follow Us</span>
            </a>
          </div>

          {/* Banner text moved directly below Voice of Influencers header */}
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-black font-sans text-[#25282B] tracking-tight pt-4"
          >
            <span className="text-[#25282B] italic underline decoration-[#E6DDCE] decoration-wavy">1000K+</span> have chosen ANYKING to Redefine Portable Workspaces
          </motion.h3>
        </div>

        {/* Carousel Container with Controls */}
        <div className="relative group/carousel">
          
          {/* Scroll Left Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute -left-3 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-gray-800 shadow-xl border border-gray-200 flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute -right-3 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-gray-800 shadow-xl border border-gray-200 flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Horizontally Scrollable Cards Row */}
          <div 
            ref={scrollRef}
            className="flex items-center gap-5 overflow-x-auto scrollbar-none py-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {UGC_POSTS.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex-none w-[280px] sm:w-[310px] aspect-[4/5] rounded-3xl overflow-hidden bg-gray-900 border border-gray-200/80 shadow-md relative group cursor-pointer snap-start"
                onClick={() => setSelectedPost(post)}
              >
                {/* Background Image */}
                <img 
                  src={post.image} 
                  alt={post.handle} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Right Instagram Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                  <Instagram className="w-4 h-4" />
                </div>

                {/* Top Left Creator Handle */}
                <div className="absolute top-3.5 left-3.5 z-10 bg-black/50 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/20">
                  {post.handle}
                </div>

                {/* Center Hover Action Button ("Get Inspired" matching Screenshot) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/30 backdrop-blur-xs p-4">
                  <span className="px-6 py-2.5 bg-white text-gray-900 font-bold text-xs rounded-full shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Get Inspired</span>
                  </span>
                </div>

                {/* Bottom Product Thumbnail Badge matching Screenshot */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 pr-3 rounded-2xl border border-white/40 shadow-lg max-w-[85%]">
                    <img 
                      src={post.productImg} 
                      alt={post.productBadge} 
                      className="w-7 h-7 rounded-xl object-cover bg-black"
                    />
                    <div className="truncate">
                      <span className="text-[10px] font-mono font-bold text-gray-900 block truncate">
                        {post.productBadge}
                      </span>
                      <span className="text-[9px] text-gray-500 block font-mono">
                        ♥ {post.likes}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* Modal View for Detailed Influencer Review */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 relative grid grid-cols-1 md:grid-cols-2 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Image */}
                <div className="h-[280px] md:h-full relative bg-black">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.handle} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/20">
                    📍 {selectedPost.location}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 p-0.5 text-white flex items-center justify-center font-bold text-xs">
                          <Instagram className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold font-mono text-gray-900 block">{selectedPost.handle}</span>
                          <span className="text-[10px] text-gray-500 font-mono block">{selectedPost.followerCount} Followers</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-[#0071e3] bg-[#0071e3]/10 px-2 py-0.5 rounded-full">
                        {selectedPost.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal pt-2">
                      "{selectedPost.caption}"
                    </p>
                  </div>

                  {/* Product Details Pill inside Modal */}
                  <div className="pt-2 border-t border-gray-100 space-y-2">
                    <div className="text-[10px] font-mono font-bold text-gray-400 uppercase">Featured Equipment</div>
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl border border-gray-200/60">
                      <div className="flex items-center gap-2">
                        <img 
                          src={selectedPost.productImg} 
                          alt={selectedPost.productBadge} 
                          className="w-9 h-9 rounded-lg object-cover bg-black"
                        />
                        <div>
                          <span className="text-xs font-bold text-gray-900 block">{selectedPost.productBadge}</span>
                          <span className="text-[10px] text-emerald-600 font-semibold block">In Stock · Ready to Ship</span>
                        </div>
                      </div>
                      <a
                        href="#specs"
                        onClick={() => setSelectedPost(null)}
                        className="px-3 py-1 bg-[#0071e3] text-white text-xs font-semibold rounded-full hover:bg-[#0077ed] transition-colors"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>



      </div>
    </section>
  );
};
