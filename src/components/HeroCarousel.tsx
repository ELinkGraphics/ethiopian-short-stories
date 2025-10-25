import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featured = [
    {
      id: "1",
      title: "Watch Out, I'm The Lady Boss",
      subtitle: "CEO Romance • 12 Episodes",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop",
      views: "15.2M",
      badge: "🔥 Trending"
    },
    {
      id: "2",
      title: "Streets to Success",
      subtitle: "Inspirational • 8 Episodes",
      thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop",
      views: "8.5M",
      badge: "⭐ New"
    },
    {
      id: "3",
      title: "Addis Hearts",
      subtitle: "Urban Romance • 10 Episodes",
      thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop",
      views: "12.1M",
      badge: "👑 Exclusive"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
      {featured.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
            <div className="inline-block px-3 py-1 rounded-full glass text-xs font-bold mb-3 animate-pulse">
              {item.badge}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
              {item.title}
            </h2>
            <p className="text-white/90 text-sm mb-1">{item.subtitle}</p>
            <p className="text-white/70 text-xs mb-4">{item.views} views</p>
            
            <Link
              to={`/series/${item.id}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 glow-primary"
            >
              <Play className="w-5 h-5" fill="white" />
              Watch Now
            </Link>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {featured.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-1 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
