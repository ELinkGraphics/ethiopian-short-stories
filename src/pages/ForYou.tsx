import { useState, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import { Heart, Share2, PlayCircle, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

const ForYou = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentEpisode = {
    id: "1-1",
    seriesId: "1",
    title: "Watch Out, I'm The Lady Boss",
    episode: 1,
    subtitle: "CEO",
    views: "12.5M",
    likes: 234500,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  };

  const upcomingEpisodes = [
    { id: "1-2", episode: 2, thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=250&fit=crop", isLocked: false },
    { id: "1-3", episode: 3, thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=250&fit=crop", isLocked: true },
    { id: "1-4", episode: 4, thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=250&fit=crop", isLocked: true },
  ];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentEpisode.title,
          text: `Check out ${currentEpisode.title} - Episode ${currentEpisode.episode}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative">
      {/* Video Player */}
      <div className="absolute inset-0" onClick={handlePlayPause}>
        <video
          ref={videoRef}
          src={currentEpisode.videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Play/Pause overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-20 h-20 text-white/80" />
          </div>
        )}
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-24 left-0 right-0 px-4 z-10 pb-2">
        <h2 className="text-white text-xl font-bold mb-1">{currentEpisode.title}</h2>
        <p className="text-white/80 text-sm mb-3">Episode {currentEpisode.episode} • {currentEpisode.subtitle}</p>
        <p className="text-white/70 text-xs">{currentEpisode.views} views</p>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-32 z-20 flex flex-col gap-6 items-center">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-active:scale-90 transition-transform">
            <Heart
              className={cn(
                "w-7 h-7 transition-all",
                isLiked ? "fill-pink-500 text-pink-500 scale-110" : "text-white"
              )}
            />
          </div>
          <span className="text-white text-xs font-medium">
            {(currentEpisode.likes + (isLiked ? 1 : 0)).toLocaleString()}
          </span>
        </button>

        {/* Episodes List Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex flex-col items-center gap-1 group relative"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-active:scale-90 transition-transform">
            <div className="relative">
              <div className="w-7 h-7 flex flex-col gap-0.5">
                <div className="h-1 bg-white rounded" />
                <div className="h-1 bg-white rounded" />
                <div className="h-1 bg-white rounded" />
              </div>
            </div>
          </div>
          <span className="text-white text-xs font-medium">Episodes</span>
          
          {/* Episodes Popup */}
          <div className="absolute bottom-16 right-0 hidden group-active:flex flex-col gap-2 bg-black/90 backdrop-blur-md rounded-lg p-3 min-w-[140px]">
            <p className="text-white text-xs font-bold mb-1">Next Episodes</p>
            {upcomingEpisodes.map((ep) => (
              <div key={ep.id} className="relative">
                <img
                  src={ep.thumbnail}
                  alt={`Episode ${ep.episode}`}
                  className="w-full aspect-[9/16] rounded object-cover"
                />
                {ep.isLocked && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-xl mb-0.5">🔒</div>
                      <div className="text-[10px] text-white font-medium">5 Coins</div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-1 left-1 text-white text-[10px] font-bold drop-shadow">
                  EP {ep.episode}
                </div>
              </div>
            ))}
          </div>
        </button>

        {/* Share Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleShare();
          }}
          className="flex flex-col items-center gap-1 group"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-active:scale-90 transition-transform">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs font-medium">Share</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ForYou;
