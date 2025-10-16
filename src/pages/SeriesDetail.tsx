import { ArrowLeft, Play, Lock, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const SeriesDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock series data
  const series = {
    id,
    title: "Addis Romance",
    description: "A modern love story set in the heart of Addis Ababa, following young professionals navigating relationships in the city.",
    totalEpisodes: 12,
    category: "Urban Love",
    episodes: [
      { id: 1, title: "First Meeting", isLocked: false, thumbnail: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=300&h=500&fit=crop" },
      { id: 2, title: "Coffee Date", isLocked: false, thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=500&fit=crop" },
      { id: 3, title: "Misunderstanding", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=500&fit=crop" },
      { id: 4, title: "Make Up", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=500&fit=crop" },
      { id: 5, title: "Family Meets", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=500&fit=crop" },
      { id: 6, title: "Truth Revealed", isLocked: true, thumbnail: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&h=500&fit=crop" },
    ],
  };

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
          <h1 className="text-lg font-bold">Series Details</h1>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={isFavorite ? "fill-primary text-primary" : ""} />
          </Button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Hero Section */}
        <div className="relative h-96">
          <img
            src={series.episodes[0].thumbnail}
            alt={series.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Info Section */}
        <div className="px-4 -mt-32 relative z-10 space-y-6">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
              {series.category}
            </div>
            <h1 className="text-3xl font-bold">{series.title}</h1>
            <p className="text-muted-foreground">{series.description}</p>
            <p className="text-sm text-muted-foreground">
              {series.totalEpisodes} Episodes
            </p>
          </div>

          {/* Episodes Grid */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Episodes</h2>
            <div className="grid grid-cols-2 gap-4">
              {series.episodes.map((episode) => (
                <Link
                  key={episode.id}
                  to={episode.isLocked ? "#" : `/player/${series.id}/${episode.id}`}
                  className="group"
                >
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Lock/Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {episode.isLocked ? (
                        <div className="bg-accent/90 backdrop-blur-sm rounded-full p-3">
                          <Lock className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                      )}
                    </div>
                    
                    {/* Episode Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-xs font-medium mb-1">Episode {episode.id}</p>
                      <p className="text-xs text-muted-foreground truncate">{episode.title}</p>
                      {episode.isLocked && (
                        <p className="text-xs text-accent mt-1">🔒 5 Coins</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Buy Coins CTA */}
          <div className="p-4 bg-gradient-neon rounded-2xl shadow-neon">
            <div className="text-center space-y-2">
              <p className="text-sm text-white/90">Want to watch more episodes?</p>
              <Link to="/coins">
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Buy Coins
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SeriesDetail;
