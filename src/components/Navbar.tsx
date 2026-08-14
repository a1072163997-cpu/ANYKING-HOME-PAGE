import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, User, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface Props {
  onOpenCustomizer: () => void;
  onNavigate: (sectionId: string) => void;
  onTriggerUnfold?: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenCustomizer, onNavigate, onTriggerUnfold }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#25282B]/95 backdrop-blur-md border-b border-[#C8CBCB]/20 py-3.5 text-[#F6F4EF] shadow-xl'
          : 'bg-[#F6F4EF]/90 backdrop-blur-md border-b border-[#C8CBCB]/40 py-4 text-[#25282B] shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo with Country Flag */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 text-left group cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-black font-sans tracking-tight flex items-center gap-1.5">
            <span className="text-base sm:text-lg">🇺🇸</span>
            <span className={scrolled ? 'text-[#F6F4EF]' : 'text-[#25282B]'}>ANYKING</span>
            <span className="text-[#E6DDCE] font-mono text-sm font-bold">+</span>
          </span>
        </button>

        {/* Center: Clean Concise E-Commerce Nav Links */}
        <nav className={`hidden lg:flex items-center gap-6 xl:gap-8 text-xs sm:text-sm font-semibold tracking-wide ${
          scrolled ? 'text-[#F6F4EF]/85' : 'text-[#25282B]/90'
        }`}>
          <button
            onClick={() => handleNavClick('lineup')}
            className="flex items-center gap-1 hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            <span>Monitors</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            onClick={() => handleNavClick('newsletter')}
            className="flex items-center gap-1 hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            <span>New</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            onClick={() => handleNavClick('categories')}
            className="flex items-center gap-1 hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            <span>Others</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            Compare
          </button>

          <a
            href="https://amazon.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            Amazon
          </a>

          <button
            onClick={() => handleNavClick('influencers')}
            className="flex items-center gap-1 hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            <span>Reviews</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            onClick={() => handleNavClick('blog')}
            className="flex items-center gap-1 hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            <span>Explore</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="flex items-center gap-1 hover:text-[#E6DDCE] transition-colors cursor-pointer"
          >
            <span>Support</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </button>
        </nav>

        {/* Right Actions: Currency Selector + Icons (Search, User, Cart) */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-semibold">
          
          {/* Currency Pill */}
          <button className={`px-3 py-1.5 rounded-full border text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
            scrolled 
              ? 'bg-[#5E6265]/20 border-[#C8CBCB]/30 text-[#F6F4EF] hover:bg-[#5E6265]/40' 
              : 'bg-[#C8CBCB]/20 border-[#C8CBCB] text-[#25282B] hover:bg-[#C8CBCB]/30'
          }`}>
            <span>🇺🇸</span>
            <span>USD $</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </button>

          {/* Interactive 3D Unfold Trigger */}
          {onTriggerUnfold && (
            <button
              onClick={onTriggerUnfold}
              className="p-2 rounded-full hover:bg-[#E6DDCE]/20 transition-colors text-[#E6DDCE] cursor-pointer"
              title="Trigger 3D Unfold Animation"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}

          {/* Search Icon */}
          <button 
            onClick={() => handleNavClick('categories')}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              scrolled ? 'hover:bg-white/10 text-[#F6F4EF]' : 'hover:bg-black/5 text-[#25282B]'
            }`}
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* User Account Icon */}
          <button 
            onClick={onOpenCustomizer}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              scrolled ? 'hover:bg-white/10 text-[#F6F4EF]' : 'hover:bg-black/5 text-[#25282B]'
            }`}
            aria-label="User Account"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Shopping Cart Bag with Badge */}
          <button
            onClick={onOpenCustomizer}
            className={`p-2 rounded-full relative transition-colors cursor-pointer ${
              scrolled ? 'hover:bg-white/10 text-[#F6F4EF]' : 'hover:bg-black/5 text-[#25282B]'
            }`}
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E6DDCE]" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg ${
            scrolled ? 'text-white hover:bg-white/10' : 'text-[#1d1d1f] hover:bg-gray-100'
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0c] text-white border-b border-white/10 px-6 py-5 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <button className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono flex items-center gap-1">
              <span>🇺🇸 USD $</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-3">
              <Search className="w-4 h-4 text-white/70" />
              <User className="w-4 h-4 text-white/70" />
              <ShoppingBag className="w-4 h-4 text-white/70" />
            </div>
          </div>

          <button
            onClick={() => handleNavClick('lineup')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90 flex items-center justify-between"
          >
            <span>Monitors</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick('newsletter')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90 flex items-center justify-between"
          >
            <span>New</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick('categories')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90 flex items-center justify-between"
          >
            <span>Others</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90"
          >
            Compare
          </button>
          <button
            onClick={() => handleNavClick('influencers')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90 flex items-center justify-between"
          >
            <span>Reviews</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90 flex items-center justify-between"
          >
            <span>Explore</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 text-sm font-medium text-white/90 flex items-center justify-between"
          >
            <span>Support</span>
            <ChevronDown className="w-4 h-4 opacity-50" />
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCustomizer();
            }}
            className="w-full py-3 bg-[#0071e3] text-white font-bold text-xs tracking-widest uppercase text-center block rounded-xl mt-4"
          >
            Pre-Order 立即预订
          </button>
        </div>
      )}
    </header>
  );
};

