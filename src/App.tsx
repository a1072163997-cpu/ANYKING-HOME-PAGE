import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CollegeSortedHero } from './components/CollegeSortedHero';
import { MainProductLineupHero } from './components/MainProductLineupHero';
import { CategoryGridSection } from './components/CategoryGridSection';
import { UGCVoiceOfInfluencers } from './components/UGCVoiceOfInfluencers';
import { AboutAnykingSection } from './components/AboutAnykingSection';
import { MediaLogosMarquee } from './components/MediaLogosMarquee';
import { InteractiveBlogSection } from './components/InteractiveBlogSection';
import { UnfoldNewsletterSection } from './components/UnfoldNewsletterSection';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { UnfoldIntroOverlay } from './components/UnfoldIntroOverlay';

export default function App() {
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [unfoldIntroOpen, setUnfoldIntroOpen] = useState(true); // Open by default on homepage entry!

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero' || sectionId === 'college') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#25282B] font-sans antialiased selection:bg-[#25282B] selection:text-[#E6DDCE]">
      {/* GO UNFOLD Entry Animation Overlay */}
      <UnfoldIntroOverlay
        isOpen={unfoldIntroOpen}
        onClose={() => setUnfoldIntroOpen(false)}
      />

      {/* Fixed Top Navigation Bar */}
      <Navbar
        onOpenCustomizer={() => setCustomizerOpen(true)}
        onNavigate={scrollToSection}
        onTriggerUnfold={() => setUnfoldIntroOpen(true)}
      />

      {/* BLOCK 1: College, sorted. (Education Savings Hero Banner - Replicating Image 1) */}
      <div id="college">
        <CollegeSortedHero
          onOpenCustomizer={() => setCustomizerOpen(true)}
          onTriggerUnfold={() => setUnfoldIntroOpen(true)}
        />
      </div>

      {/* BLOCK 2: ANYKING Main Flagship Lineup (Replicating Image 2 with frame-by-frame image switching) */}
      <div id="lineup">
        <MainProductLineupHero
          onOpenCustomizer={() => setCustomizerOpen(true)}
          onTriggerUnfold={() => setUnfoldIntroOpen(true)}
        />
      </div>

      {/* BLOCK 2.5: Major Product Categories Grid (Replicating User's 2x2 Category Cards) */}
      <div id="categories">
        <CategoryGridSection
          onOpenCustomizer={() => setCustomizerOpen(true)}
          onTriggerUnfold={() => setUnfoldIntroOpen(true)}
        />
      </div>

      {/* BLOCK 2.6: UGC Voice of Influencers (Replicating User's Influencers & Creator Showcase) */}
      <div id="influencers">
        <UGCVoiceOfInfluencers />
      </div>

      {/* BLOCK 2.7: About ANYKING Section (Replicating Global Leader & NxtLED Technology Banner) */}
      <div id="about">
        <AboutAnykingSection
          onOpenCustomizer={() => setCustomizerOpen(true)}
          onTriggerUnfold={() => setUnfoldIntroOpen(true)}
        />
        <MediaLogosMarquee />
      </div>

      {/* BLOCK 2.8: Interactive Blog Section ("You Might Be Interested In") */}
      <div id="blog">
        <InteractiveBlogSection />
      </div>

      {/* BLOCK 2.9: Brand Interactive Newsletter ("UNFOLD WHAT'S NEXT.") */}
      <div id="newsletter">
        <UnfoldNewsletterSection
          onExploreCommunity={() => scrollToSection('influencers')}
          onWatchFilm={() => setUnfoldIntroOpen(true)}
          onCheckLaptop={() => scrollToSection('about')}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Customizer & Order Modal */}
      <CustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
      />
    </div>
  );
}
