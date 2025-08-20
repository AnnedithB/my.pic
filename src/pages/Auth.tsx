import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Abstract Orange Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-bl from-brand-orange via-yellow-400 to-transparent rounded-full transform rotate-12 scale-150"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange to-transparent rounded-full transform -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <Card className="imgur-card w-full max-w-md p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold text-brand-orange">
              imgur
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignUp ? "Join the community" : "Welcome back"}
            </h1>
            <p className="text-gray-600">
              {isSignUp 
                ? "Create an account to join millions of users" 
                : "Sign in to discover, share, and explore"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Username/Email Field */}
            <div>
              <Input
                type="email"
                placeholder={isSignUp ? "Email address" : "Username or email"}
                className="h-12 focus:border-brand-orange focus:ring-brand-orange"
              />
            </div>

            {/* Username Field (Sign Up only) */}
            {isSignUp && (
              <div>
                <Input
                  type="text"
                  placeholder="Choose a username"
                  className="h-12 focus:border-brand-orange focus:ring-brand-orange"
                />
              </div>
            )}

            {/* Password Field */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 pr-12 focus:border-brand-orange focus:ring-brand-orange"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Confirm Password Field (Sign Up only) */}
            {isSignUp && (
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="h-12 pr-12 focus:border-brand-orange focus:ring-brand-orange"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            )}

            {/* Terms (Sign Up only) */}
            {isSignUp && (
              <div className="text-sm text-gray-600">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-brand-orange hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-brand-orange hover:underline">Privacy Policy</a>
              </div>
            )}

            {/* Submit Button */}
            <Button 
              variant="brand" 
              size="lg" 
              className="w-full h-12 text-lg hover:scale-[1.02] transition-transform"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            {/* Forgot Password (Sign In only) */}
            {!isSignUp && (
              <div className="text-center">
                <a href="#" className="text-sm text-gray-500 hover:text-brand-orange transition-colors">
                  Forgot your password?
                </a>
              </div>
            )}
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-4 text-sm text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Auth */}
          <div className="grid grid-cols-3 gap-3">
            <Button 
              variant="outline" 
              className="h-12 border-gray-200 hover:border-brand-orange hover:text-brand-orange"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              className="h-12 border-gray-200 hover:border-brand-orange hover:text-brand-orange"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.369 18.641.001.012.001z"/>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              className="h-12 border-gray-200 hover:border-brand-orange hover:text-brand-orange"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Button>
          </div>

          {/* Toggle Form */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-brand-orange hover:underline font-medium"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;