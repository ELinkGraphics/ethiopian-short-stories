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
    <Link to={`/series/${id}`}>
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-dark shadow-card hover:shadow-neon transition-all duration-300 group">
        {/* Thumbnail */}
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        {/* Lock Badge */}
        {isLocked && (
          <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-full p-3 shadow-neon">
            <Lock className="w-5 h-5 text-accent-foreground" />
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">Episode {episode}</p>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className="flex items-center gap-2 transition-transform hover:scale-110"
            >
              <Heart className={cn("w-5 h-5", isLiked && "fill-primary text-primary")} />
              <span className="text-sm font-medium">{likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DramaCard;
