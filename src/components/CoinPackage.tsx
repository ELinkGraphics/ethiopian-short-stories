import { Coins } from "lucide-react";
import { Button } from "./ui/button";

interface CoinPackageProps {
  coins: number;
  price: number;
  popular?: boolean;
}

const CoinPackage = ({ coins, price, popular }: CoinPackageProps) => {
  return (
    <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
      popular 
        ? "bg-gradient-neon border-transparent shadow-neon" 
        : "bg-card border-border hover:border-primary/50"
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 rounded-full text-xs font-bold">
          POPULAR
        </div>
      )}
      
      <div className="flex flex-col items-center gap-4">
        <div className={`p-4 rounded-full ${popular ? "bg-white/20" : "bg-primary/20"}`}>
          <Coins className={`w-10 h-10 ${popular ? "text-white" : "text-primary"}`} />
        </div>
        
        <div className="text-center">
          <p className={`text-4xl font-bold mb-1 ${popular ? "text-white" : "text-foreground"}`}>
            {coins}
          </p>
          <p className={`text-sm ${popular ? "text-white/80" : "text-muted-foreground"}`}>
            Coins
          </p>
        </div>
        
        <div className="text-center">
          <p className={`text-2xl font-bold ${popular ? "text-white" : "text-foreground"}`}>
            {price} ETB
          </p>
        </div>
        
        <Button 
          className={`w-full ${
            popular 
              ? "bg-white text-primary hover:bg-white/90" 
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default CoinPackage;
