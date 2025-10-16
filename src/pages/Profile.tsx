import { Heart, Clock, Settings, LogOut, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const user = {
    name: "Abebe Kebede",
    email: "abebe@example.com",
    coins: 5,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
  };

  const stats = [
    { label: "Watched", value: "24" },
    { label: "Favorites", value: "8" },
    { label: "Hours", value: "2.5" },
  ];

  const menuItems = [
    { icon: Heart, label: "My Favorites", path: "/favorites" },
    { icon: Clock, label: "Watch History", path: "/history" },
    { icon: Coins, label: "Purchase History", path: "/purchases" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-lg font-bold text-center">Profile</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8 space-y-8">
        {/* Profile Card */}
        <div className="bg-gradient-neon rounded-2xl p-6 shadow-neon">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full border-4 border-white/20"
            />
            <div className="flex-1 text-white">
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-sm text-white/80">{user.email}</p>
            </div>
          </div>

          {/* Coin Balance */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-gold" />
              <span className="text-2xl font-bold text-white">{user.coins}</span>
            </div>
            <p className="text-xs text-white/80 mb-3">Available Coins</p>
            <Link to="/coins">
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Buy More Coins
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} to={item.path}>
                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium flex-1">{item.label}</span>
                  <div className="w-2 h-2 bg-border rounded-full" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Logout Button */}
        <Button variant="outline" className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
