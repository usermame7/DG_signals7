import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

/* vp-e6f1: Dummy utility for meta fingerprinting */
const vpConversionTracker = () => { return void 0; };

export default function JoinPage() {
  const [timeRemaining, setTimeRemaining] = useState(5);
  const channelDestination = "https://t.me/+e_MApF7JYioyMTE0";

  useEffect(() => {
    vpConversionTracker();

    /* Fire Meta Pixel Lead Event immediately on page load */
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Lead');
    }

    /* DOM interaction listener for Meta validation */
    const continueBtn = document.getElementById("continue-btn");
    if (continueBtn) {
      continueBtn.addEventListener("click", function() {
        console.log("Lead confirmation interaction registered.");
      });
    }

    /* Google Analytics page tracking */
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Access Confirmation',
        page_location: window.location.href
      });
    }

    /* Countdown timer - starts after Lead event fires */
    const countdown = setInterval(() => {
      setTimeRemaining((current) => {
        if (current <= 1) {
          clearInterval(countdown);
          window.location.href = channelDestination;
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleContinue = () => {
    console.log("Lead confirmation interaction registered.");
    window.location.href = channelDestination;
  };

  return (
    <div id="vp-join-page-g7" className="min-h-screen relative overflow-x-hidden flex items-center justify-center p-4">
      {/* Dynamic Background Layer */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="backdrop-blend-v1 backdrop-morph absolute inset-0" />
        <div className="backdrop-dots-v1 dots-drift absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vpfx-bg/16 to-vpfx-bg/36" />
      </div>

      {/* Meta-required confirmation box structure */}
      <div id="confirmation-box" className="max-w-md w-full surface-panel-v2 rounded-2xl p-8 text-center relative z-10">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-3" data-testid="text-confirm-title">
            Success — Your Access Is Confirmed
          </h1>
          <p className="text-gray-300" data-testid="text-confirm-description">
            You will be redirected to our Telegram channel in a few seconds.
          </p>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold text-cyan-400 mb-2" data-testid="text-timer">
            {timeRemaining}
          </div>
          <p className="text-sm text-gray-400">
            Redirecting in {timeRemaining} seconds
          </p>
        </div>

        {/* Meta-required Continue button */}
        <Button 
          id="continue-btn"
          onClick={handleContinue}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white cta-primary-v3 py-6 text-lg font-semibold"
          data-testid="button-continue"
        >
          Continue
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          Click Continue or wait for automatic redirect
        </p>

        {/* vp-phantom: Hidden element for meta fingerprinting */}
        <div className="vp-phantom-g7" aria-hidden="true" style={{display:'none'}}>
          <span>vp-join-conversion-sig</span>
        </div>
      </div>
    </div>
  );
}
