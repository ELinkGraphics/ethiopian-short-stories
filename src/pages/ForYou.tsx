import { useState, useRef, useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import { Heart, Share2, PlayCircle, MessageCircle, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

const ForYou = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showEpisodes, setShowEpisodes] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastTap = useRef<number>(0);

  const currentEpisode = {
    id: "1-1",
    seriesId: "1",
    title: "Watch Out, I'm The Lady Boss",
    episode: 1,
    totalEpisodes: 12,
    subtitle: "CEO • Romance",
    views: "12.5M",
    likes: 234500,
    comments: 12300,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    creator: {
      name: "Eyeta Studios",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
    },
    quality: "HD"
  };

  const upcomingEpisodes = [
    { id: "1-2", episode: 2, thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=250&fit=crop", isLocked: false },
    { id: "1-3", episode: 3, thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=250&fit=crop", isLocked: true },
    { id: "1-4", episode: 4, thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=250&fit=crop", isLocked: true },
  ];

  // Video progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

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

  // Double tap to like
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTap.current < DOUBLE_TAP_DELAY) {
      setIsLiked(true);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 1000);
    } else {
      handlePlayPause();
    }

    lastTap.current = now;
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
      {/* Video Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-50">
        <div 
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Quality Badge */}
      <div className="absolute top-12 right-4 z-40 px-2 py-1 rounded glass text-white text-xs font-bold">
        {currentEpisode.quality}
      </div>

      {/* Episode Counter */}
      <div className="absolute top-12 left-4 z-40 px-3 py-1 rounded-full glass text-white text-xs font-bold">
        Ep {currentEpisode.episode}/{currentEpisode.totalEpisodes}
      </div>

      {/* Video Player */}
      <div className="absolute inset-0" onClick={handleDoubleTap}>
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        
        {/* Double-tap heart animation */}
        {showHeart && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Heart className="w-32 h-32 text-pink-500 fill-pink-500 animate-ping" />
          </div>
        )}
        
        {/* Play/Pause overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <PlayCircle className="w-24 h-24 text-white/90 animate-pulse" />
          </div>
        )}
      </div>

      {/* Creator Info & Bottom Info */}
      <div className="absolute bottom-24 left-0 right-16 px-4 z-10 pb-2">
        {/* Creator Avatar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <img
              src={currentEpisode.creator.avatar}
              alt={currentEpisode.creator.name}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-black">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
          <div>
            <p className="text-white font-bold text-sm">{currentEpisode.creator.name}</p>
            <p className="text-white/70 text-xs">Official Creator</p>
          </div>
        </div>

        <h2 className="text-white text-xl font-bold mb-1.5 drop-shadow-lg leading-tight">
          {currentEpisode.title}
        </h2>
        <p className="text-white/90 text-sm mb-2 font-medium">{currentEpisode.subtitle}</p>
        <div className="flex items-center gap-3 text-white/80 text-xs">
          <span>👁️ {currentEpisode.views}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="text-live-indicator">●</span> 234K watching
          </span>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-32 z-20 flex flex-col gap-5 items-center">
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="flex flex-col items-center gap-1.5 group tap-scale"
        >
          <div className={cn(
            "w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-all",
            isLiked ? "bg-pink-500/30 glow-pink scale-110" : "glass"
          )}>
            <Heart
              className={cn(
                "w-7 h-7 transition-all",
                isLiked ? "fill-pink-500 text-pink-500 animate-pulse" : "text-white"
              )}
            />
          </div>
          <span className={cn(
            "text-xs font-bold drop-shadow-lg",
            isLiked ? "text-pink-500" : "text-white"
          )}>
            {(currentEpisode.likes + (isLiked ? 1 : 0)).toLocaleString()}
          </span>
        </button>

        {/* Comments Button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center gap-1.5 group tap-scale"
        >
          <div className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all hover:bg-white/20">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-lg">
            {currentEpisode.comments.toLocaleString()}
          </span>
        </button>

        {/* Save Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className="flex flex-col items-center gap-1.5 group tap-scale"
        >
          <div className={cn(
            "w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-all",
            isSaved ? "bg-gold/30 scale-110" : "glass"
          )}>
            <Bookmark
              className={cn(
                "w-6 h-6 transition-all",
                isSaved ? "fill-gold text-gold" : "text-white"
              )}
            />
          </div>
          <span className={cn(
            "text-xs font-bold drop-shadow-lg",
            isSaved ? "text-gold" : "text-white"
          )}>
            Save
          </span>
        </button>

        {/* Episodes List Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowEpisodes(!showEpisodes);
          }}
          className="flex flex-col items-center gap-1.5 group tap-scale relative"
        >
          <div className={cn(
            "w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-all",
            showEpisodes ? "bg-primary/30 glow-primary scale-110" : "glass"
          )}>
            <div className="w-7 h-7 flex flex-col gap-1 justify-center">
              <div className={cn("h-0.5 rounded transition-all", showEpisodes ? "bg-primary" : "bg-white")} />
              <div className={cn("h-0.5 rounded transition-all", showEpisodes ? "bg-primary" : "bg-white")} />
              <div className={cn("h-0.5 rounded transition-all", showEpisodes ? "bg-primary" : "bg-white")} />
            </div>
          </div>
          <span className={cn(
            "text-xs font-bold drop-shadow-lg",
            showEpisodes ? "text-primary" : "text-white"
          )}>
            {currentEpisode.totalEpisodes}
          </span>
        </button>

        {/* Share Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleShare();
          }}
          className="flex flex-col items-center gap-1.5 group tap-scale"
        >
          <div className="w-14 h-14 rounded-full glass flex items-center justify-center transition-all hover:bg-white/20">
            <Share2 className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-lg">Share</span>
        </button>
      </div>

      {/* Episodes Drawer */}
      {showEpisodes && (
        <div 
          className="absolute bottom-0 left-0 right-0 max-h-[60vh] glass border-t border-white/10 rounded-t-3xl z-30 p-6 overflow-y-auto animate-slide-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-4" />
          <h3 className="text-white text-lg font-bold mb-4">All Episodes</h3>
          <div className="grid grid-cols-3 gap-3">
            {upcomingEpisodes.map((ep) => (
              <div key={ep.id} className="relative group">
                <img
                  src={ep.thumbnail}
                  alt={`Episode ${ep.episode}`}
                  className="w-full aspect-[9/16] rounded-xl object-cover hover-lift"
                />
                {ep.isLocked && (
                  <div className="absolute inset-0 glass rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-1 animate-pulse">🔒</div>
                      <div className="text-white text-xs font-bold">5 Coins</div>
                      <div className="text-white/70 text-[10px]">(2 ETB)</div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full glass text-white text-xs font-bold">
                  EP {ep.episode}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default ForYou;
