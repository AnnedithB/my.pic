import { Search, Bell, MessageCircle, Upload, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">
                <span className="text-brand-orange">imgur</span>
              </Link>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for images, memes, and communities"
                className="pl-10 bg-gray-50 border-gray-200 focus:bg-background focus:border-brand-orange focus:ring-brand-orange"
              />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/upload">
              <Button variant="brand" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </Link>

            {isSignedIn ? (
              <>
                <Button variant="ghost" size="sm">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-brand-orange hover:text-brand-orange-hover">
                  Sign In
                </Button>
                <Button variant="brand" size="sm">
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;