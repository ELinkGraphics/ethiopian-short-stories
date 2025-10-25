import { useState } from "react";
import { Gift, X } from "lucide-react";
import { Button } from "./ui/button";

const DailyReward = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <>
      {/* Daily Gift Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-50 w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center animate-pulse glow-primary"
      >
        <Gift className="w-6 h-6 text-white" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full border-2 border-background" />
      </button>

      {/* Reward Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass rounded-3xl p-8 max-w-sm w-full relative animate-scale-in">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {!claimed ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-neon rounded-full flex items-center justify-center animate-bounce">
                    <Gift className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Daily Reward!
                  </h3>
                  <p className="text-white/70 text-sm">
                    Claim your free coins to unlock more episodes
                  </p>
                </div>

                <div className="bg-background/50 rounded-2xl p-6 mb-6 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">+5</div>
                  <div className="text-white/90">Free Coins</div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6 text-sm text-white/60">
                  <span className="text-streak-fire text-xl">🔥</span>
                  <span>3 Day Streak</span>
                </div>

                <Button
                  onClick={handleClaim}
                  className="w-full bg-gradient-neon hover:opacity-90 text-white font-bold py-6 text-lg"
                >
                  Claim Reward
                </Button>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  +5 Coins Added!
                </h3>
                <p className="text-white/70">Come back tomorrow for more</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DailyReward;
