import { Upload as UploadIcon, Image, FileText, Globe, Lock, Sparkles, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Upload = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Quirky Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-orange/8 to-yellow-400/8 blur-3xl animate-blob-squish"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-200/10 to-brand-orange/6 blur-3xl animate-float-medium doodle-border"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-tr from-brand-orange/5 to-gray-100/8 blur-2xl animate-float-fast wavy-border"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 chunky-text">
              Share your creativity! 
            </h1>
            <div className="absolute -top-2 -right-4 text-3xl animate-bounce">🎨</div>
            <div className="absolute -bottom-2 -left-4 text-2xl animate-wiggle">✨</div>
          </div>
          <p className="text-xl text-gray-600">
            Upload your weirdest, funniest, most amazing content and let the community go wild! 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <Card className="blob-card p-8 interactive-glow">
            <div className="text-center">
              <div className="relative group">
                {/* Quirky blob-shaped upload zone */}
                <div className="border-4 border-dashed border-brand-orange p-12 mb-6 cursor-pointer group transition-all duration-500 hover:border-brand-orange-hover doodle-border bg-gradient-to-br from-brand-orange-light/30 to-yellow-100/20">
                  <div className="relative">
                    <UploadIcon className="w-20 h-20 text-brand-orange mx-auto mb-4 group-hover:animate-bounce transition-transform" />
                    <div className="absolute -top-2 -right-2 text-2xl animate-wiggle">📸</div>
                    <div className="absolute -bottom-2 -left-2 text-xl animate-bounce" style={{animationDelay: '0.5s'}}>🎬</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 chunky-text">
                    Drop your magic here!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Drag & drop images, GIFs, or click to browse
                  </p>
                  <Button 
                    variant="brand" 
                    size="lg" 
                    className="pill-button interactive-glow"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Choose Files
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center pill-button bg-gray-100">
                  <Image className="w-4 h-4 mr-1" />
                  JPG, PNG, GIF
                </div>
                <span className="text-brand-orange font-bold">•</span>
                <div className="pill-button bg-gray-100">
                  Max 20MB
                </div>
              </div>
            </div>
          </Card>

          {/* Upload Details */}
          <Card className="quirky-card p-8 interactive-glow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 chunky-text flex items-center">
              <span className="mr-2">📝</span>
              Post Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Title *
                </label>
                <Input
                  placeholder="Give your post a catchy, weird, amazing title..."
                  className="asymmetric-border focus:border-brand-orange focus:ring-brand-orange bg-gray-50 hover:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  placeholder="Tell the world about your masterpiece! What's the story? 📖"
                  className="h-24 asymmetric-border focus:border-brand-orange focus:ring-brand-orange bg-gray-50 hover:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tags
                </label>
                <Input
                  placeholder="funny, meme, cat, relatable, weird, awesome"
                  className="asymmetric-border focus:border-brand-orange focus:ring-brand-orange bg-gray-50 hover:bg-white transition-all"
                />
                <p className="text-sm text-gray-500 mt-1 flex items-center">
                  <span className="mr-1">🏷️</span>
                  Separate tags with commas to help people find your content!
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Privacy
                </label>
                <Select>
                  <SelectTrigger className="asymmetric-border focus:border-brand-orange focus:ring-brand-orange bg-gray-50 hover:bg-white transition-all">
                    <SelectValue placeholder="Choose privacy setting" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-brand-orange/20">
                    <SelectItem value="public">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        <span>Public - Let everyone see this awesomeness!</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="private">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        <span>Private - Just for me (for now)</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                variant="brand" 
                size="lg" 
                className="w-full pill-button bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-brand-orange-hover hover:to-yellow-600 shadow-xl hover:shadow-brand-orange/30 interactive-glow"
              >
                <UploadIcon className="w-5 h-5 mr-2" />
                Share with the World!
                <div className="ml-2 text-xl animate-wiggle">🚀</div>
              </Button>
            </div>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="blob-card p-8 mt-8 interactive-glow">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 chunky-text flex items-center justify-center">
            <span className="mr-2">💡</span>
            Tips for Creating Viral Content
            <span className="ml-2">🔥</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 quirky-card group-hover:animate-bounce">
                <FileText className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 chunky-text">Clear & Catchy Titles</h4>
              <p className="text-sm text-gray-600">
                Make your title pop! Think "This cat broke the internet" not "My pet"
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 quirky-card group-hover:animate-bounce" style={{animationDelay: '0.1s'}}>
                <Image className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 chunky-text">High Quality Visuals</h4>
              <p className="text-sm text-gray-600">
                Clear, well-lit images get more love. Blurry pics make people sad 😢
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 quirky-card group-hover:animate-bounce" style={{animationDelay: '0.2s'}}>
                <Globe className="w-8 h-8 text-brand-orange" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 chunky-text">Community Love</h4>
              <p className="text-sm text-gray-600">
                Keep it fun, respectful, and engaging. We're all here for good vibes! ✨
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;