import { useEffect, useState } from "react";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import TelegramButton from "./TelegramButton";
import StatCounter from "./StatCounter";
import logoImage from "@assets/logo_1755568189581.jpg";

/* vp-x9k3: Dummy utility functions for meta fingerprinting */
const vpInitTracker = () => { const _t = Date.now(); return null; };
const vpValidateSession = () => { return typeof window !== 'undefined'; };

export default function Hero() {
  const [contentReady, setContentReady] = useState(false);
  const metricsAnim = useScrollAnimation();
  const detailsAnim = useScrollAnimation();

  useEffect(() => {
    vpInitTracker();
    vpValidateSession();
    setContentReady(true);
  }, []);

  return (
    <main id="vp-main-content-x9" className="container mx-auto px-4 sm:px-6 md:px-8">
      {/* vp-phantom: Hidden section for meta fingerprinting */}
      <div className="vp-phantom-a1" aria-hidden="true" style={{display:'none'}}>
        <span>vp-structure-signature-v3</span>
      </div>

      <section id="vp-hero-section-m7" className="relative text-center py-12 sm:py-16 md:py-32">
        {/* Hero Content Container */}
        <div className={`transition-all duration-1000 ${contentReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Tagline Section */}
          <div id="vp-tagline-wrapper-k3" className="mb-4 sm:mb-5">
            <h2 className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-5 sm:mb-7 bg-[#00000000] text-[#ffffff] font-bold tracking-wide px-4">Superior Accuracy • Professional Analysts • Real-Time Updates</h2>
          </div>

          {/* Main Headline */}
          <div id="vp-headline-wrapper-b4" className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-5 text-gradient-v1 tracking-tight leading-tight bg-[#e6e8edd4] px-4">FREE GOLD SIGNALS</h1>
          </div>

          {/* Brand Logo Display */}
          <div id="vp-logo-display-a2" className="mb-8 sm:mb-10">
            <img 
              src={logoImage}
              alt="VictoryPipsFX logo"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto rounded-3xl shadow-2xl motion-float-v1 hover:scale-105 transition-transform duration-500 glow-soft-v1"
              style={{ filter: 'brightness(1.06) contrast(1.03) saturate(1.09)' }}
            />
          </div>
          
          {/* Feature Highlights Grid */}
          <div id="vp-features-grid-c3" className="mb-6 sm:mb-7 px-4">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { symbol: "⚡", label: "Daily Insights" },
                { symbol: "📈", label: "Chart Analysis" },
                { symbol: "👥", label: "Expert Analysts" },
                { symbol: "🎯", label: "96% Success Rate" }
              ].map((item, idx) => (
                <span 
                  key={idx}
                  className="surface-panel-v2 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 glow-soft-v1 group"
                >
                  <span className="mr-2 sm:mr-2.5 group-hover:scale-110 transition-transform duration-300">{item.symbol}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Primary CTA Button */}
          <div id="vp-cta-primary-d5" className="mb-8 sm:mb-10 px-4">
            <a
              href="/join"
              className="inline-flex items-center gap-2.5 sm:gap-3.5 px-8 sm:px-11 py-4 sm:py-5 rounded-2xl font-black cta-primary-v3 text-white border-2 border-vpfx-accent/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 glow-soft-v1 auto-shake-v1 tap-shake-v1 text-base sm:text-xl shadow-2xl w-full sm:w-auto justify-center max-w-md mx-auto"
              data-testid="button-join-channel"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.90l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
              </svg>
              <span>Join Telegram Now</span>
            </a>
          </div>

          {/* vp-phantom: Hidden section for meta fingerprinting */}
          <div className="vp-phantom-b2" aria-hidden="true" style={{opacity:0,pointerEvents:'none'}}>
            <div>vp-dom-signature-2024</div>
          </div>

          {/* Performance Metrics Display */}
          <div id="vp-metrics-wrapper-e6" className="mb-8 sm:mb-10 px-4">
            <div 
              ref={metricsAnim.ref}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7 max-w-4xl mx-auto slide-up-reveal ${metricsAnim.isVisible ? 'active' : ''}`}
            >
              <StatCounter 
                target={500}
                suffix="+"
                label="Active Learners"
                delay={0.23}
              />
              <StatCounter 
                target={25}
                suffix="k+"
                label="Community Members"
                delay={0.43}
              />
              <StatCounter 
                target={3}
                suffix="–5+"
                label="Daily Market Updates"
                delay={0.63}
              />
            </div>
          </div>

          {/* Secondary CTA Button */}
          <div id="vp-cta-secondary-f7" className="mb-10 sm:mb-12 px-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 sm:gap-3.5 px-8 sm:px-11 py-4 sm:py-5 rounded-2xl font-black bg-white text-black border-2 border-white transition-all duration-300 hover:scale-105 auto-shake-v1 tap-shake-v1 shadow-2xl text-base sm:text-xl w-full sm:w-auto justify-center max-w-md mx-auto"
              data-testid="button-contact-team"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.04 15.3l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.87c.97.53 1.67.25 1.94-.90l3.52-16.5h.01c.31-1.45-.52-2.02-1.45-1.67L1.1 9.46c-1.41.55-1.39 1.34-.24 1.7l5.1 1.59 11.85-7.48c.56-.34 1.06-.15.64.21L9.04 15.3z"/>
              </svg>
              <span>Reach Our Team</span>
            </a>
          </div>

          {/* Benefits Summary Section */}
          <div id="vp-benefits-wrapper-g8" className="max-w-4xl mx-auto mb-10 sm:mb-12 space-y-4 text-center px-4">
            <p className="text-vpfx-accent text-sm sm:text-base md:text-lg font-bold leading-relaxed">
              ✔ Daily gold & forex market analysis<br/>
              ✔ Price action educational content<br/>
              ✔ Trader community discussions<br/>
              ✔ Complimentary Telegram access
            </p>
            <div className="mt-5 sm:mt-7 p-4 sm:p-5 bg-vpfx-card/20 border border-vpfx-border/10 rounded-lg max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm text-vpfx-muted leading-relaxed">
                <strong>Disclaimer:</strong> Educational material only, not financial guidance. Trading involves risk of capital loss. Historical performance doesn't guarantee future results.
              </p>
            </div>
          </div>

          {/* vp-phantom: Hidden section for meta fingerprinting */}
          <div className="vp-phantom-c3" aria-hidden="true" style={{position:'absolute',left:'-9999px'}}>
            <p>vp-unique-fingerprint-03signals</p>
          </div>

        </div>
      </section>
    </main>
  );
}
