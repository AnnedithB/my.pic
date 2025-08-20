import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, MessageCircle, Share2, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import meme1 from "@/assets/meme-1.jpg";
import gaming1 from "@/assets/gaming-1.jpg";
import animals1 from "@/assets/animals-1.jpg";
import art1 from "@/assets/art-1.jpg";
import trendingContent from "@/assets/trending-content.jpg";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: "all", name: "All", active: true },
    { id: "memes", name: "Memes" },
    { id: "gaming", name: "Gaming" },
    { id: "animals", name: "Animals" },
    { id: "art", name: "Art" },
    { id: "tech", name: "Tech" },
    { id: "random", name: "Random" },
  ];

  const mockPosts = [
    {
      id: 1,
      title: "When you finally understand a programming joke",
      image: meme1,
      upvotes: 12500,
      downvotes: 234,
      comments: 342,
      userVote: null,
      height: "h-80",
    },
    {
      id: 2,
      title: "Epic gaming moment compilation",
      image: gaming1,
      upvotes: 8900,
      downvotes: 156,
      comments: 189,
      userVote: null,
      height: "h-64",
    },
    {
      id: 3,
      title: "Adorable animals being adorable",
      image: animals1,
      upvotes: 15200,
      downvotes: 89,
      comments: 423,
      userVote: null,
      height: "h-96",
    },
    {
      id: 4,
      title: "Digital art that will blow your mind",
      image: art1,
      upvotes: 6700,
      downvotes: 123,
      comments: 156,
      userVote: null,
      height: "h-72",
    },
    {
      id: 5,
      title: "This meme hits different",
      image: trendingContent,
      upvotes: 9800,
      downvotes: 234,
      comments: 278,
      userVote: null,
      height: "h-56",
    },
    {
      id: 6,
      title: "Random internet gold",
      image: trendingContent,
      upvotes: 4500,
      downvotes: 167,
      comments: 89,
      userVote: null,
      height: "h-68",
    },
  ];

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const handleVote = (postId, voteType) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newVote = post.userVote === voteType ? null : voteType;
        let newUpvotes = post.upvotes;
        let newDownvotes = post.downvotes;

        // Remove previous vote
        if (post.userVote === "up") newUpvotes--;
        if (post.userVote === "down") newDownvotes--;

        // Add new vote
        if (newVote === "up") newUpvotes++;
        if (newVote === "down") newDownvotes++;

        return {
          ...post,
          userVote: newVote,
          upvotes: newUpvotes,
          downvotes: newDownvotes,
        };
      }
      return post;
    }));
  };

  const loadMorePosts = () => {
    setLoading(true);
    // Simulate loading more posts
    setTimeout(() => {
      const newPosts = mockPosts.map(post => ({
        ...post,
        id: post.id + posts.length,
        upvotes: Math.floor(Math.random() * 20000),
        comments: Math.floor(Math.random() * 500),
      }));
      setPosts([...posts, ...newPosts]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        if (!loading) {
          loadMorePosts();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, posts]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-xl font-bold text-white">
                imgur
              </Link>
              <h1 className="text-lg font-semibold text-white">Explore Now</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select defaultValue="trending">
                <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="fresh">Fresh</SelectItem>
                  <SelectItem value="viral">Most Viral</SelectItem>
                  <SelectItem value="top">Top</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Side Filters (Desktop) */}
          <div className="hidden lg:block w-64 space-y-4">
            <div className="sticky top-20">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "brand" : "outline"}
                    className={`w-full justify-start ${
                      selectedCategory === category.id 
                        ? "bg-brand-orange text-white" 
                        : "border-brand-orange text-brand-orange hover:bg-brand-orange-light"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="flex-1">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {posts.map((post) => (
                <Card 
                  key={post.id} 
                  className="imgur-card break-inside-avoid mb-6 overflow-hidden group cursor-pointer orange-glow"
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${post.height}`}
                    />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="font-bold text-white text-sm leading-tight">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  {/* Interaction Bar */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Upvote */}
                        <button
                          onClick={() => handleVote(post.id, "up")}
                          className={`flex items-center space-x-1 transition-colors ${
                            post.userVote === "up" 
                              ? "text-brand-orange" 
                              : "text-gray-500 hover:text-brand-orange"
                          }`}
                        >
                          <ArrowUp className="w-5 h-5" />
                          <span className="text-sm font-medium">
                            {post.upvotes.toLocaleString()}
                          </span>
                        </button>

                        {/* Downvote */}
                        <button
                          onClick={() => handleVote(post.id, "down")}
                          className={`transition-colors ${
                            post.userVote === "down" 
                              ? "text-red-500" 
                              : "text-gray-500 hover:text-red-500"
                          }`}
                        >
                          <ArrowDown className="w-5 h-5" />
                        </button>

                        {/* Comments */}
                        <div className="flex items-center space-x-1 text-gray-500">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>

                      {/* Share */}
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-brand-orange">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Loading Indicator */}
            {loading && (
              <div className="flex justify-center py-8">
                <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Upload Button (Mobile) */}
      <Link to="/upload">
        <Button
          variant="brand"
          size="lg"
          className="fixed bottom-6 right-6 md:hidden w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
};

export default Explore;