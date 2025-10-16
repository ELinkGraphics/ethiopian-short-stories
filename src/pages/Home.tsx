import { useState } from "react";
import DramaCard from "@/components/DramaCard";
import BottomNav from "@/components/BottomNav";
import { Sparkles } from "lucide-react";

const Home = () => {
  // Mock data - will be replaced with real data later
  const dramas = [
    {
      id: "1",
      title: "Addis Romance",
      episode: 1,
      thumbnail: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=400&h=700&fit=crop",
      likes: 1243,
      comments: 89,
      isLocked: false,
    },
    {
      id: "2",
      title: "City Lights",
      episode: 2,
      thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=700&fit=crop",
      likes: 2156,
      comments: 156,
      isLocked: true,
    },
    {
      id: "3",
      title: "Coffee Chronicles",
      episode: 1,
      thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=700&fit=crop",
      likes: 987,
      comments: 67,
      isLocked: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Eyeta
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="text-sm font-medium">5 Coins</span>
          </div>
        </div>
      </header>

      {/* Feed */}
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="space-y-6">
          {dramas.map((drama, index) => (
            <div 
              key={drama.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DramaCard {...drama} />
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
