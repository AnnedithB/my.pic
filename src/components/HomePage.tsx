import { ArrowRight, TrendingUp, MessageCircle, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import trendingContent from "@/assets/trending-content.jpg";

const HomePage = () => {
  const categories = [
    { name: "Memes", icon: "😄", color: "bg-yellow-100" },
    { name: "Gaming", icon: "🎮", color: "bg-blue-100" },
    { name: "Animals", icon: "🐕", color: "bg-green-100" },
    { name: "Art", icon: "🎨", color: "bg-purple-100" },
    { name: "Food", icon: "🍕", color: "bg-red-100" },
    { name: "Nature", icon: "🌿", color: "bg-emerald-100" },
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
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-orange-light to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover the world's most{" "}
                <span className="text-brand-orange">entertaining</span> community
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join millions sharing memes, GIFs, and creativity daily. Express yourself,
                connect with others, and explore endless entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button variant="brand" size="lg" className="text-lg">
                    Sign Up Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="outline" size="lg" className="text-lg border-brand-orange text-brand-orange hover:bg-brand-orange-light">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroBanner}
                alt="Community sharing content"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link to="/explore" key={category.name}>
                <Card
                  className="imgur-card p-6 text-center cursor-pointer orange-glow group"
                >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold flex items-center">
              <TrendingUp className="w-8 h-8 text-brand-orange mr-3" />
              Trending Now
            </h2>
            <Link to="/explore">
              <Button variant="outline" className="border-brand-orange text-brand-orange">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPosts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <Card className="imgur-card overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-brand-orange">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.upvotes.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
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
      <section className="py-20 bg-brand-orange">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to join the fun?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Share your creativity, discover amazing content, and connect with a global community.
          </p>
          <Link to="/auth">
            <Button variant="secondary" size="lg" className="text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;