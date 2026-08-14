import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, BookOpen, Clock, Share2, Sparkles, X, ChevronRight, Bookmark, Eye } from 'lucide-react';

interface BlogPost {
  id: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'oled-burn-in',
    date: 'July 28, 2026',
    readTime: '5 min read',
    category: 'Tech Deep-Dive',
    title: 'OLED Burn-In: Causes, Prevention & Complete Protection Guide',
    excerpt: 'Is OLED Monitor Burn-In Risk Still Real in 2026? Unfortunately, yes, OLED monitor burn-in issues in 2026 are still possible even on the latest models. Here is how our NxtLED protective firmware prevents image retention.',
    fullContent: `OLED display technology has reached extraordinary milestones in 2026, delivering 1,000,000:1 contrast ratios and 100% DCI-P3 color fidelity in portable form factors. However, subpixel degradation remains a physical characteristic of organic light-emitting diodes.

### Key Protection Features in ANYKING NxtLED™
1. **Pixel Shift Technology**: Subtle 2-pixel micro-movements every 60 seconds that are completely imperceptible to the human eye, ensuring static UI elements like taskbars do not stay locked on a single subpixel.
2. **Auto Brightness Dimming (ABL)**: Intelligent sensor algorithm dims static windows after 3 minutes of inactivity.
3. **Subpixel Refresh Cycle**: Built-in automated 5-minute cleaning sweep executed when the display enters standby mode.

By following these simple firmware settings and avoiding fixed max-brightness HDR on static documents for 8+ hours, your OLED portable monitor will maintain peak brilliance for years to come.`,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Dr. Evan Chen',
      role: 'Principal Display Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['OLED', 'Hardware Protection', 'Firmware', 'Display Guide']
  },
  {
    id: 'switch-2-firmware',
    date: 'June 10, 2026',
    readTime: '4 min read',
    category: 'Guides & How-To',
    title: 'How to Upgrade Some Portable Monitor Firmware for Switch 2 via USB-C Connection',
    excerpt: 'Due to version limitations, Switch 2 may not be able to connect directly to portable monitors via a USB-C cable. To address this issue, we have updated the firmware for certain portable monitors, enabling them to work properly with single-cable DP Alt Mode.',
    fullContent: `With the release of Nintendo Switch 2, the DisplayPort Alternative Mode handshake protocol received strict handshake updates requiring custom power negotiation (PD 3.1 15V/3A).

### Step-by-Step Firmware Update
- **Step 1**: Download the ANYKING Switch 2 Firmware Updater (v2.4.1) on your Windows PC or Mac.
- **Step 2**: Connect your ANYKING monitor via the primary USB-C port (Port 1) using the included 100W braided cable.
- **Step 3**: Hold down the Menu Dial for 3 seconds until the status LED flashes Amber.
- **Step 4**: Click "Flash Firmware" in the utility. Update completes in under 30 seconds.

Once updated, your ANYKING monitor will support full 1080p 120Hz & 4K 60Hz single-cable gaming directly from Nintendo Switch 2 without requiring an external dock!`,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Marcus Vance',
      role: 'Gaming Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Nintendo Switch 2', 'USB-C', 'Firmware', 'Gaming']
  },
  {
    id: 'world-cup-gift-ideas',
    date: 'June 1, 2026',
    readTime: '6 min read',
    category: 'Lifestyle & Gift',
    title: 'Best World Cup Gift Ideas for Football Fans in 2026!',
    excerpt: 'Whether you are shopping for casual weekend players, die-hard match fans, or dedicated soccer athletes, picking out an ideal football-themed gift is both exciting and challenging. Discover why portable tri-screens are the #1 fan favorite this season.',
    fullContent: `The 2026 FIFA World Cup is setting new records in global viewership and multi-match broadcasting. Football enthusiasts are no longer content watching just one match at a time when key group stage fixtures overlap.

### Why Multi-Screen Portable Setup is the Ultimate Gift
- **Multi-Angle Match View**: Watch the main match broadcast on Screen 1, real-time tactical camera tracking on Screen 2, and live fantasy scores or Twitter banter on Screen 3.
- **Outdoor Tailgating**: Powered by a standard 20,000mAh power bank, you can set up a 3-screen stadium experience anywhere in the park or backyard BBQ.
- **Compact & Travel-Ready**: Folds into a sleek laptop sleeve so fans can take their tournament setup on flights or road trips.`,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sofia Rodriguez',
      role: 'Lifestyle & Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['World Cup 2026', 'Gift Guide', 'Multi-Screen', 'Sports']
  },
  {
    id: 'world-cup-guide-2026',
    date: 'May 26, 2026',
    readTime: '8 min read',
    category: 'Special Feature',
    title: 'World Cup 2026 Guide for Experienced Fans: How to Plan, Watch Smarter and Maximize the Experience',
    excerpt: 'World Cup 2026 is merely weeks away, and most are already getting into the vibe. But for veteran fans, you have gotta get ready starting now if you are planning to watch live matches or simply want a more optimized viewing experience.',
    fullContent: `With 48 teams competing across 16 host cities in North America, FIFA World Cup 2026 offers more simultaneous fixtures than any tournament in history. 

### Professional Watching Checklist
1. **Set Up Multi-Screen Broadcast Hub**: Avoid switching tabs mid-play. Having a dedicated 3-monitor array allows uncompromised 4K streaming alongside live statistical telemetry.
2. **Optimize Audio Feeds**: Route stadium crowd noise to external speakers while keeping commentary audio isolated on headphones.
3. **Synchronize Match Calendars**: Export automatic calendar syncs for time-zone offsets to ensure you never miss kick-off.`,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Liam Gallagher',
      role: 'Sports Broadcast Producer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['FIFA 2026', 'Productivity', 'Streaming Setup', 'Travel']
  }
];

export const InteractiveBlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Tech Deep-Dive', 'Guides & How-To', 'Special Feature'];

  const filteredPosts = activeFilter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeFilter);

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-[#F6F4EF] text-[#25282B] py-20 px-4 sm:px-6 md:px-12 border-t border-[#C8CBCB]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header matching Screenshot: "You Might Be Interested In" */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-[#25282B]">
            You Might Be Interested In
          </h2>

          {/* View All Pill Button matching Screenshot */}
          <div className="flex justify-center items-center gap-3 pt-1">
            <button
              onClick={() => setActiveFilter('All')}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#25282B] text-[#25282B] hover:bg-[#25282B] hover:text-[#F6F4EF] transition-all duration-300 font-semibold text-xs sm:text-sm shadow-xs cursor-pointer group"
            >
              <BookOpen className="w-4 h-4 text-[#25282B] group-hover:text-[#F6F4EF] transition-colors" />
              <span>View all</span>
            </button>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#25282B] text-[#F6F4EF] shadow-md scale-105'
                    : 'bg-[#F6F4EF] text-[#5E6265] hover:bg-[#E6DDCE]/30 border border-[#C8CBCB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid with 3D Mouse Tilt & Interactive Dynamic Spotlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <CardWith3DTilt 
              key={post.id} 
              post={post} 
              isBookmarked={!!bookmarked[post.id]}
              onToggleBookmark={(e) => toggleBookmark(e, post.id)}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>

      </div>

      {/* Interactive Article Reading Drawer / Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Sticky Close Bar */}
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#C8CBCB]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#25282B] bg-[#E6DDCE]/60 px-3 py-1 rounded-full border border-[#C8CBCB]">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs font-mono text-[#5E6265]">· {selectedPost.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-8 h-8 rounded-full bg-[#F6F4EF] hover:bg-[#E6DDCE]/40 text-[#25282B] flex items-center justify-center transition-colors cursor-pointer border border-[#C8CBCB]/40"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Hero Image in Article Modal */}
              <div className="w-full h-[260px] sm:h-[320px] relative overflow-hidden bg-gray-900">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-sans leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Article Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Author Info Card */}
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedPost.author.avatar} 
                      alt={selectedPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <span className="text-sm font-bold text-gray-900 block">{selectedPost.author.name}</span>
                      <span className="text-xs text-gray-500 block">{selectedPost.author.role}</span>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => toggleBookmark(e, selectedPost.id)}
                    className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                      bookmarked[selectedPost.id] 
                        ? 'bg-amber-50 border-amber-300 text-amber-600' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Article Markdown Text */}
                <div className="prose max-w-none text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {selectedPost.fullContent}
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-xs font-mono px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Sub-component for 3D Tilt + Mouse Light Spotlight on hover
const CardWith3DTilt: React.FC<{
  post: BlogPost;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent) => void;
  onClick: () => void;
}> = ({ post, isBookmarked, onToggleBookmark, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate mouse position relative to center (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Gentle 3D Tilt calculation (max 8 degrees)
    setRotateX(-normY * 8);
    setRotateY(normX * 8);

    // Spotlight gradient percentage
    setSpotlightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="bg-white rounded-3xl overflow-hidden border border-[#C8CBCB]/60 shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col justify-between h-full relative group"
      >
        {/* Dynamic Mouse Spotlight Glow Layer */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(230,221,206,0.4), transparent 80%)`,
            }}
          />
        )}

        <div>
          {/* Card Top Thumbnail Image */}
          <div className="w-full aspect-[16/10] relative overflow-hidden bg-[#F6F4EF] rounded-2xl p-1">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Bookmark Floating Icon Button */}
            <button
              onClick={onToggleBookmark}
              className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                isBookmarked 
                  ? 'bg-[#25282B] text-[#E6DDCE] border-[#C8CBCB] shadow-md' 
                  : 'bg-[#25282B]/60 text-[#F6F4EF] border-white/20 hover:bg-[#25282B]'
              }`}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Category Tag Overlay */}
            <div className="absolute bottom-3 left-3 bg-[#25282B]/80 backdrop-blur-md text-[#F6F4EF] text-[10px] font-mono px-2.5 py-1 rounded-full border border-[#C8CBCB]/30">
              {post.category}
            </div>
          </div>

          {/* Card Meta Date & Title */}
          <div className="p-5 space-y-3 text-left">
            <div className="flex items-center gap-1.5 text-xs text-[#5E6265] font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#5E6265]" />
              <span>{post.date}</span>
            </div>

            <h3 className="text-lg font-bold text-[#25282B] font-sans tracking-tight leading-snug line-clamp-2">
              {post.title}
            </h3>

            <p className="text-xs text-[#5E6265] leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Card Bottom Link: "Read more" with Hover Arrow animation */}
        <div className="px-5 pb-5 pt-1 text-left">
          <span className="text-xs font-semibold text-[#25282B] underline underline-offset-4 decoration-[#C8CBCB] group-hover:decoration-[#25282B] transition-all inline-flex items-center gap-1">
            <span>Read more</span>
            <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </motion.div>
    </div>
  );
};
