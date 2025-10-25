import { Heart, MessageCircle, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface DramaCardProps {
  id: string;
  title: string;
  episode: number;
  thumbnail: string;
  likes: number;
  comments: number;
  isLocked?: boolean;
}

const DramaCard = ({ id, title, episode, thumbnail, likes, comments, isLocked }: DramaCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Link to={`/series/${id}`} className="block group">
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden hover-lift tap-scale">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Stronger gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Lock overlay with animation */}
        {isLocked && (
          <div className="absolute inset-0 glass flex items-center justify-center">
            <div className="text-center animate-pulse">
              <div className="text-5xl mb-3 drop-shadow-lg animate-bounce">🔒</div>
              <div className="text-white text-sm font-bold mb-1">5 Coins</div>
              <div className="text-white/70 text-xs">(2 ETB)</div>
            </div>
          </div>
        )}
        
        {/* Bottom info with better shadows */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="text-white text-sm font-bold mb-1 line-clamp-2 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-white/90 text-xs mb-2 font-medium">Episode {episode}</p>
          
          {/* Interaction buttons with glow */}
          <div className="flex items-center gap-4 text-white">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className="flex items-center gap-1.5 text-xs font-medium transition-all hover:scale-110"
            >
              <Heart className={`w-4 h-4 transition-all ${isLiked ? 'fill-pink-500 text-pink-500 scale-125' : ''}`} />
              <span className={isLiked ? 'text-pink-500' : ''}>{(likes + (isLiked ? 1 : 0)).toLocaleString()}</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs font-medium">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DramaCard;
