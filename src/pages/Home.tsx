import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import { Search, Bell, Play, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import HeroCarousel from "@/components/HeroCarousel";
import DailyReward from "@/components/DailyReward";

const Home = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const tabs = ["Popular", "New", "Rankings", "Categories"];

  const dramas = [
    {
      id: "1",
      title: "Watch Out, I'm The Lady Boss",
      subtitle: "CEO",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
      views: "77.9M",
      badge: "Following",
      badgeColor: "bg-blue-600",
    },
    {
      id: "2",
      title: "Mafia's Good Girl",
      subtitle: "Hidden Identity",
      thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
      views: "188M",
      badge: "Following",
      badgeColor: "bg-blue-600",
    },
    {
      id: "3",
      title: "Pucked by My Brother's Rival",
      subtitle: "Young Adult",
      thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
      views: "34M",
      badge: "Hot",
      badgeColor: "bg-pink-600",
    },
    {
      id: "4",
      title: "Move to Countryside, Marry a Billionaire",
      subtitle: "Flash Marriage",
      thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
      views: "81.5M",
      badge: "Hot",
      badgeColor: "bg-pink-600",
    },
    {
      id: "5",
      title: "From Cell to Crown, Lady Kingsley is Back",
      subtitle: "Revenge",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      views: "2.1M",
      badge: "New",
      badgeColor: "bg-blue-500",
    },
    {
      id: "6",
      title: "My Sugar Baby Turns Out to be LA's Richest Man",
      subtitle: "Contract Lover",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
      views: "4M",
    },
    {
      id: "7",
      title: "Got Pregnant by Billionaire Brothers",
      subtitle: "Romance",
      thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop",
      views: "5.9M",
    },
    {
      id: "8",
      title: "Divorced, Now a Lycan Princess",
      subtitle: "Fantasy",
      thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
      views: "29.5M",
      badge: "Hot",
      badgeColor: "bg-pink-600",
    },
    {
      id: "9",
      title: "Stuck with the Spoiled Heiress",
      subtitle: "Romance",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
      views: "9M",
      badge: "Exclusive",
      badgeColor: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <DailyReward />
      
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-border/50">
        <div className="max-w-md mx-auto px-4 py-3">
          {/* Search bar and icons */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search dramas..."
                className="w-full glass border border-border/50 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              {/* Coin Balance */}
              <Link to="/coins" className="flex items-center gap-1.5 bg-gold/20 text-gold px-3 py-1.5 rounded-full font-bold text-sm hover-lift tap-scale">
                <Coins className="w-4 h-4" />
                <span>125</span>
              </Link>
              <button className="relative p-2 tap-scale">
                <Bell className="w-6 h-6 text-foreground" />
                <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">3</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={cn(
                  "pb-2 text-base font-medium whitespace-nowrap transition-colors relative",
                  activeTab === tab.toLowerCase()
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-md mx-auto px-4 py-4">
        {/* Hero Carousel */}
        <HeroCarousel />
        
        {/* Live Watching Counter */}
        <div className="flex items-center justify-center gap-2 mb-6 glass rounded-full px-4 py-2 w-fit mx-auto animate-pulse">
          <div className="w-2 h-2 bg-live-indicator rounded-full animate-ping" />
          <span className="text-sm font-medium text-white">234K watching now</span>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {dramas.map((drama) => (
            <Link key={drama.id} to={`/series/${drama.id}`} className="group">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-card mb-2 hover-lift tap-scale">
                <img
                  src={drama.thumbnail}
                  alt={drama.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Stronger gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Badge with glow */}
                {drama.badge && (
                  <div className={cn(
                    "absolute top-2 right-2 px-2.5 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm shadow-lg",
                    drama.badge === "Following" && "bg-primary/90 glow-primary",
                    drama.badge === "Hot" && "bg-destructive/90 animate-pulse",
                    drama.badge === "New" && "bg-gold/90",
                    drama.badge === "Exclusive" && "bg-accent/90 glow-pink"
                  )}>
                    {drama.badge}
                  </div>
                )}
                {/* Views */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1 glass px-2 py-1 rounded-full text-white text-xs font-bold">
                  <Play className="w-3 h-3 fill-white" />
                  {drama.views}
                </div>
              </div>
              <h3 className="text-sm font-bold line-clamp-2 mb-0.5 leading-tight">{drama.title}</h3>
              <p className="text-xs text-muted-foreground font-medium">{drama.subtitle}</p>
            </Link>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
