import { ArrowRight, TrendingUp, MessageCircle, Share2, Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import trendingContent from "@/assets/trending-content.jpg";
import Footer from "@/components/Footer";

const HomePage = () => {
  const categories = [
    { name: "Memes", icon: "😂", emoji: "😂", color: "bg-yellow-100" },
    { name: "Gaming", icon: "🎮", emoji: "🎮", color: "bg-blue-100" },
    { name: "Animals", icon: "🐶", emoji: "🐶", color: "bg-green-100" },
    { name: "Art", icon: "🎨", emoji: "🎨", color: "bg-purple-100" },
    { name: "Food", icon: "🍕", emoji: "🍕", color: "bg-red-100" },
    { name: "Nature", icon: "🌿", emoji: "🌿", color: "bg-emerald-100" },
    { name: "Tech", icon: "💻", emoji: "💻", color: "bg-gray-100" },
    { name: "Random", icon: "🎲", emoji: "🎲", color: "bg-orange-100" },
  ];

  const trendingPosts = [
    {
      id: 1,
      title: "When you finally understand a programming joke",
      upvotes: 12500,
      comments: 342,
      image: trendingContent,
    },
    {
      id: 2,
      title: "My cat's reaction to the new food",
      upvotes: 8900,
      comments: 156,
      image: trendingContent,
    },
    {
      id: 3,
      title: "The evolution of my desk setup",
      upvotes: 6700,
      comments: 89,
      image: trendingContent,
    },
    {
      id: 4,
      title: "Found this gem in my old photo album",
      upvotes: 15200,
      comments: 423,
      image: trendingContent,
    },
    {
      id: 5,
      title: "This meme hits different at 3am",
      upvotes: 9800,
      comments: 267,
      image: trendingContent,
    },
    {
      id: 6,
      title: "DIY project gone wonderfully wrong",
      upvotes: 7300,
      comments: 134,
      image: trendingContent,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Quirky Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-orange/8 to-yellow-400/8 blur-3xl animate-blob-squish"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-l from-gray-200/10 to-brand-orange/6 blur-3xl animate-float-medium doodle-border"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-tr from-brand-orange/5 to-gray-100/8 blur-2xl animate-float-fast wavy-border"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-bl from-yellow-400/6 to-brand-orange/4 blur-2xl animate-float-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight chunky-text">
                  Share your{" "}
                  <span className="text-brand-orange relative inline-block">
                    weird
                    <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
                  </span>
                  , your{" "}
                  <span className="text-brand-orange relative inline-block">
                    memes
                    <div className="absolute -top-1 -right-3 text-xl animate-wiggle">😂</div>
                  </span>
                  , your{" "}
                  <span className="text-brand-orange">world</span>
                </h1>
                <div className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400 animate-spin">⭐</div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 text-pink-400 animate-bounce" style={{animationDelay: '0.5s'}}>💫</div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join the most playful community on the internet! Share your creativity, discover amazing content, 
                and connect with fellow weirdos who get it. 🌟
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/explore">
                  <Button 
                    variant="brand" 
                    size="lg" 
                    className="text-lg pill-button bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-brand-orange-hover hover:to-yellow-600 shadow-xl hover:shadow-brand-orange/30 interactive-glow"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Explore Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/upload">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg pill-button border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white interactive-glow emoji-burst"
                  >
                    Upload & Share
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="quirky-card overflow-hidden shadow-2xl quirky-shadow">
                <img
                  src={heroBanner}
                  alt="Community sharing content"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                🎉
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-3xl animate-wiggle">
                🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold chunky-text text-gray-900 mb-4">
              Dive into the fun! 🏊‍♀️
            </h2>
            <p className="text-lg text-gray-600">Pick your poison and explore what makes you laugh, cry, or go "wait, what?!"</p>
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <Link to="/explore" key={category.name}>
                <div className={`flex-shrink-0 pill-button bg-white border-2 border-brand-orange/30 hover:border-brand-orange hover:bg-brand-orange-light group cursor-pointer ${
                  index % 2 === 0 ? 'animate-tilt-left' : 'animate-tilt-right'
                }`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:animate-bounce">{category.emoji}</span>
                    <span className="font-bold text-gray-900 group-hover:text-brand-orange">{category.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/50 to-brand-orange-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold flex items-center chunky-text text-gray-900">
              <div className="mr-4 p-3 bg-brand-orange rounded-full animate-pulse">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              What's Hot Right Now 🔥
            </h2>
            <Link to="/explore">
              <Button variant="outline" className="pill-button border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white interactive-glow">
                See All the Chaos
              </Button>
            </Link>
          </div>
          
          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {trendingPosts.map((post, index) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <Card className={`break-inside-avoid mb-6 overflow-hidden group cursor-pointer transition-all duration-300 hover-pop ${
                  index % 3 === 0 ? 'blob-card' : index % 3 === 1 ? 'quirky-card' : 'imgur-card'
                } ${index % 2 === 0 ? 'animate-tilt-left' : 'animate-tilt-right'}`}>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        index % 4 === 0 ? 'h-64' : index % 4 === 1 ? 'h-48' : index % 4 === 2 ? 'h-72' : 'h-56'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-brand-orange">
                      HOT 🔥
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-brand-orange font-medium hover:animate-bounce-up">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.upvotes.toLocaleString()}
                        </span>
                        <span className="flex items-center text-gray-500 hover:text-brand-orange hover:animate-wiggle">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:animate-ripple">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-brand-orange via-yellow-500 to-brand-orange overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-blob-squish"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl font-bold text-white chunky-text">
              Ready to join the fun?
            </h2>
            <div className="absolute -top-4 -right-4 text-3xl animate-spin">🎪</div>
            <div className="absolute -bottom-2 -left-4 text-2xl animate-bounce">🎭</div>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Share your creativity, discover mind-blowing content, and connect with the most awesome community 
            of creators, dreamers, and professional weirdos on the planet! 🌎✨
          </p>
          <Link to="/auth">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-xl pill-button bg-white text-brand-orange hover:bg-gray-100 shadow-2xl hover:shadow-white/20 interactive-glow"
            >
              <Star className="w-6 h-6 mr-2" />
              Get Started Today
              <div className="ml-2 text-2xl animate-wiggle">🚀</div>
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;