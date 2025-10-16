import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CoinPackage from "@/components/CoinPackage";
import BottomNav from "@/components/BottomNav";

const CoinsStore = () => {
  const packages = [
    { coins: 10, price: 10, popular: false },
    { coins: 30, price: 25, popular: true },
    { coins: 100, price: 70, popular: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold">Coin Store</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-neon rounded-full shadow-neon animate-glow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Get More Coins</h1>
            <p className="text-muted-foreground">
              Unlock premium episodes and enjoy unlimited entertainment
            </p>
          </div>
        </div>

        {/* Current Balance */}
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Current Balance</p>
          <p className="text-4xl font-bold">5 Coins</p>
        </div>

        {/* Packages */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Choose Your Package</h2>
          <div className="grid gap-4">
            {packages.map((pkg) => (
              <CoinPackage key={pkg.coins} {...pkg} />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="bg-secondary/50 border border-border rounded-xl p-4 space-y-2">
          <p className="text-sm font-medium">How it works:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Each premium episode costs 5 coins</li>
            <li>• Coins never expire</li>
            <li>• Secure payment via Chapa & Telebirr</li>
            <li>• Get 5 free coins on signup</li>
          </ul>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CoinsStore;
