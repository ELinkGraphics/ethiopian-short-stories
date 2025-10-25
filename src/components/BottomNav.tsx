import { Home, Compass, Coins, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Compass, label: "For You", path: "/for-you" },
    { icon: Coins, label: "Coins", path: "/coins" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex flex-col items-center justify-center flex-1 h-full transition-all tap-scale",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {/* Ripple effect background */}
              {isActive && (
                <div className="absolute inset-0 bg-primary/10 rounded-lg animate-pulse" />
              )}
              
              {/* Badge notification for For You */}
              {index === 1 && (
                <div className="absolute top-2 right-1/4 w-2 h-2 bg-destructive rounded-full animate-pulse" />
              )}
              
              <Icon className={cn("w-6 h-6 mb-1 relative z-10 transition-all", isActive && "scale-110")} />
              <span className={cn("text-xs relative z-10 font-medium", isActive && "font-bold")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
