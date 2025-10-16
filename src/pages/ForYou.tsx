import BottomNav from "@/components/BottomNav";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const ForYou = () => {
  const series = [
    {
      id: "1",
      title: "Watch Out, I'm The Lady Boss",
      episodes: [
        { id: "1-1", episode: 1, thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=500&fit=crop", views: "12M", isLocked: false },
        { id: "1-2", episode: 2, thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=500&fit=crop", views: "11M", isLocked: false },
        { id: "1-3", episode: 3, thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=500&fit=crop", views: "10M", isLocked: true },
        { id: "1-4", episode: 4, thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=500&fit=crop", views: "9M", isLocked: true },
      ],
    },
    {
      id: "2",
      title: "Mafia's Good Girl",
      episodes: [
        { id: "2-1", episode: 1, thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=500&fit=crop", views: "45M", isLocked: false },
        { id: "2-2", episode: 2, thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=500&fit=crop", views: "43M", isLocked: false },
        { id: "2-3", episode: 3, thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=500&fit=crop", views: "41M", isLocked: true },
        { id: "2-4", episode: 4, thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=500&fit=crop", views: "39M", isLocked: true },
      ],
    },
    {
      id: "3",
      title: "From Cell to Crown",
      episodes: [
        { id: "3-1", episode: 1, thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=500&fit=crop", views: "2.1M", isLocked: false },
        { id: "3-2", episode: 2, thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=500&fit=crop", views: "1.9M", isLocked: true },
        { id: "3-3", episode: 3, thumbnail: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=300&h=500&fit=crop", views: "1.8M", isLocked: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">For You</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-8">
        {series.map((show) => (
          <div key={show.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">{show.title}</h2>
              <Link to={`/series/${show.id}`} className="text-sm text-primary">
                View All
              </Link>
            </div>
            
            {/* Horizontal scroll of episodes */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {show.episodes.map((ep) => (
                <Link
                  key={ep.id}
                  to={ep.isLocked ? `/series/${show.id}` : `/player/${show.id}/${ep.episode}`}
                  className="flex-shrink-0 w-32 group"
                >
                  <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-card mb-2">
                    <img
                      src={ep.thumbnail}
                      alt={`Episode ${ep.episode}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Lock overlay */}
                    {ep.isLocked && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-3xl mb-1">🔒</div>
                          <div className="text-xs text-white font-medium">5 Coins</div>
                        </div>
                      </div>
                    )}
                    {/* Views */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 text-white text-xs font-bold drop-shadow-lg">
                      <Play className="w-3 h-3 fill-white" />
                      {ep.views}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-center">Episode {ep.episode}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default ForYou;
