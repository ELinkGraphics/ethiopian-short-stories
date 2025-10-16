import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DramaCard from "@/components/DramaCard";
import BottomNav from "@/components/BottomNav";

const Explore = () => {
  const categories = [
    { id: "urban", label: "Urban Love", color: "bg-primary" },
    { id: "comedy", label: "Comedy", color: "bg-accent" },
    { id: "drama", label: "Drama", color: "bg-gold" },
    { id: "thriller", label: "Mystery", color: "bg-destructive" },
  ];

  const trending = [
    {
      id: "4",
      title: "Office Chronicles",
      episode: 3,
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=700&fit=crop",
      likes: 3421,
      comments: 234,
      isLocked: false,
    },
    {
      id: "5",
      title: "Street Dreams",
      episode: 1,
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=700&fit=crop",
      likes: 2876,
      comments: 189,
      isLocked: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-lg font-bold mb-4">Explore</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search dramas..."
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* Categories */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Categories</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${cat.color} text-white hover:opacity-90 transition-opacity`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Trending Now</h2>
          <div className="space-y-6">
            {trending.map((drama) => (
              <DramaCard key={drama.id} {...drama} />
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Explore;
