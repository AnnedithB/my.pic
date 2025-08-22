import { Search, Bell, MessageCircle, Upload, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`sticky top-0 z-50 ${isHomePage ? 'bg-background border-b border-border' : 'bg-brand-orange'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">
                <span className={isHomePage ? "text-brand-orange" : "text-white"}>my.pic</span>
              </Link>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isHomePage ? 'text-gray-400' : 'text-white/70'}`} />
              <Input
                type="text"
                placeholder="Search photos, memes, videos…"
                className={`pl-10 ${
                  isHomePage 
                    ? 'bg-gray-50 border-gray-200 focus:bg-background focus:border-brand-orange focus:ring-brand-orange' 
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white focus:ring-white'
                }`}
              />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/upload">
              <Button variant={isHomePage ? "brand" : "secondary"} size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </Link>

            {isSignedIn ? (
              <>
                <Button variant="ghost" size="sm" className={isHomePage ? "" : "text-white hover:bg-white/10"}>
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className={isHomePage ? "" : "text-white hover:bg-white/10"}>
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className={isHomePage ? "" : "text-white hover:bg-white/10"}>
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link to="/auth">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={isHomePage ? "text-brand-orange hover:text-brand-orange-hover" : "text-white hover:bg-white/10"}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant={isHomePage ? "brand" : "secondary"} size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className={`md:hidden ${isHomePage ? "" : "text-white hover:bg-white/10"}`}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;