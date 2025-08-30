import { Heart, Github, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-brand-orange/10 via-background to-brand-orange/5 border-t border-gray-200 overflow-hidden">
      {/* Quirky Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-orange/10 blur-3xl animate-blob-squish"></div>
        <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-yellow-400/10 blur-2xl animate-float-slow"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 blur-xl animate-float-medium"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center hover-pop group-hover:animate-wiggle">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-brand-orange chunky-text">my.pic</span>
                <span className="text-xs italic text-gray-500">the internet's weird playground</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Where creativity meets community. Share your world, discover amazing content, and join the fun! 🎉
            </p>
            <div className="flex items-center mt-4 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>for creators everywhere</span>
            </div>
          </div>

          {/* Community */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4 chunky-text">🌟 Community</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Explore Content
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Upload & Share
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Creator Program
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4 chunky-text">🛟 Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Report Content
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Bug Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-900 mb-4 chunky-text">📋 Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-orange transition-colors hover-pop">
                  Cookie Policy
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Follow the fun!</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center hover-pop hover:animate-wiggle transition-all hover:bg-brand-orange hover:text-white"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center hover-pop hover:animate-wiggle transition-all hover:bg-brand-orange hover:text-white"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center hover-pop hover:animate-wiggle transition-all hover:bg-brand-orange hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-brand-orange-light text-brand-orange rounded-full flex items-center justify-center hover-pop hover:animate-wiggle transition-all hover:bg-brand-orange hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 my.pic. All rights reserved. Let's keep it weird! 🤪
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <span>🌍</span>
              <span>English (US)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span>🍪</span>
              <span>Cookie Preferences</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;