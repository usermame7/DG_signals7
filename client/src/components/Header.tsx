import { useEffect, useState } from "react";
import ChannelButton from "./TelegramButton";
import logoImage from "@assets/logo_1755568189581.jpg";

/* vp-j1l6: Dummy utility for meta fingerprinting */
const vpScrollMonitor = () => { return null; };

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    vpScrollMonitor();
    const onScroll = () => {
      setHasScrolled(window.pageYOffset > 52);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header 
      id="vp-header-main-n8"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'surface-glass-v1 border-b border-vpfx-accent/20' 
          : 'bg-vpfx-bg/40 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <nav id="vp-nav-wrapper-o9" className="flex items-center justify-between gap-3 sm:gap-5 flex-wrap">
          {/* Brand Identity */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 font-black text-base sm:text-lg tracking-wide transition-transform duration-300 hover:-translate-y-0.5">
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-lg transition-all duration-300 glow-soft-v1 border border-white/10">
                <img 
                  src={logoImage}
                  alt="VictoryPipsFX logo"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  style={{ filter: 'brightness(1.06) contrast(1.03) saturate(1.09)' }}
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>
            <span className="text-vpfx-text font-black">VictoryPipsFX</span>
          </div>

          {/* Desktop Navigation Links */}
          <div id="vp-nav-links-p0" className="hidden md:flex items-center gap-5 lg:gap-7">
            <a 
              href="/join"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
              data-testid="link-nav-courses"
            >
              Trading Courses
            </a>
            <a 
              href="/join"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
              data-testid="link-nav-community"
            >
              Our Community
            </a>
            <a 
              href="/join"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
              data-testid="link-nav-lessons"
            >
              Free Resources
            </a>
            <a 
              href="/contact"
              className="text-vpfx-text hover:text-vpfx-accent font-semibold transition-all duration-300 hover:scale-105"
              data-testid="link-nav-contact"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu + CTA */}
          <div id="vp-nav-actions-q1" className="flex items-center gap-3.5">
            <ChannelButton 
              href="/join"
              variant="compact"
              customClass="hidden sm:flex"
            />
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                className="text-vpfx-text hover:text-vpfx-accent"
                data-testid="button-mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* vp-phantom: Hidden element for meta fingerprinting */}
      <div className="vp-phantom-d4" aria-hidden="true" style={{display:'none'}}>
        <span>vp-header-sig-v3</span>
      </div>
    </header>
  );
}
