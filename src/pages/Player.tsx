import { ArrowLeft, Heart, MessageCircle, Share2, Lock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Player = () => {
  const { seriesId, episodeId } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // Mock data
  const episode = {
    id: episodeId,
    title: "First Meeting",
    seriesTitle: "Addis Romance",
    videoUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=400&h=700&fit=crop",
    likes: 1243,
    comments: 89,
    hasNextEpisode: true,
    nextEpisodeLocked: true,
  };

  return (
    <div className="fixed inset-0 bg-background flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Link to={`/series/${seriesId}`}>
            <Button variant="ghost" size="icon" className="rounded-full bg-black/40 backdrop-blur-sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1 ml-4">
            <p className="text-sm text-white/80">{episode.seriesTitle}</p>
            <p className="text-xs text-white/60">Episode {episode.id}</p>
          </div>
        </div>
      </header>

      {/* Video Player - Mock */}
      <div className="flex-1 relative bg-black">
        <img
          src={episode.videoUrl}
          alt={episode.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-background border-t border-border">
        <div className="max-w-md mx-auto px-4 py-6 space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-xl font-bold mb-1">{episode.title}</h1>
            <p className="text-sm text-muted-foreground">Episode {episode.id}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
            >
              <div className="p-3 bg-card rounded-full">
                <Heart className={`w-6 h-6 ${isLiked ? "fill-primary text-primary" : ""}`} />
              </div>
              <span className="text-xs text-muted-foreground">
                {episode.likes + (isLiked ? 1 : 0)}
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
              <div className="p-3 bg-card rounded-full">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground">{episode.comments}</span>
            </button>

            <button className="flex flex-col items-center gap-1 transition-transform hover:scale-110">
              <div className="p-3 bg-card rounded-full">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="text-xs text-muted-foreground">Share</span>
            </button>
          </div>

          {/* Next Episode */}
          {episode.hasNextEpisode && (
            <div className="space-y-3">
              {episode.nextEpisodeLocked ? (
                <div className="p-4 bg-gradient-neon rounded-2xl shadow-neon text-center">
                  <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-medium mb-1">Next Episode Locked</p>
                  <p className="text-sm text-white/80 mb-3">Unlock with 5 coins</p>
                  <Link to="/coins">
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Buy Coins
                    </Button>
                  </Link>
                </div>
              ) : (
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Play Next Episode
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
