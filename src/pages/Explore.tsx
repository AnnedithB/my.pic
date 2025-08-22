import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown, MessageCircle, Share2, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
      upvotes: 12500,
      downvotes: 234,
      comments: 342,
      userVote: null,
      height: "h-80",
    },
    {
      id: 2,
      title: "Epic gaming moment compilation",
      upvotes: 8900,
      downvotes: 156,
      comments: 189,
      userVote: null,
      height: "h-64",
    },
    {
      id: 3,
      title: "Adorable animals being adorable",
      upvotes: 15200,
      downvotes: 89,
      comments: 423,
      userVote: null,
      height: "h-96",
    },
    {
      id: 4,
      title: "Digital art that will blow your mind",
      upvotes: 6700,
      downvotes: 123,
      comments: 156,
      userVote: null,
      height: "h-72",
    },
    {
      id: 5,
      title: "This meme hits different",
      upvotes: 9800,
      downvotes: 234,
      comments: 278,
      userVote: null,
      height: "h-56",
    },
    {
      id: 6,
      title: "Random internet gold",
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-orange/5 to-yellow-400/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-200/10 to-brand-orange/5 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-tr from-brand-orange/3 to-gray-100/5 rounded-full blur-2xl animate-float-fast"></div>
      </div>
      
      {/* Categories Section */}
      <div className="relative z-10 bg-background/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-brand-orange">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25" 
                    : "bg-white text-brand-orange border border-brand-orange/20 hover:bg-brand-orange-light hover:shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Masonry Grid */}
          <div className="flex-1">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {posts.map((post) => (
                <Card 
                  key={post.id} 
                  className="imgur-card break-inside-avoid mb-6 overflow-hidden group orange-glow"
                >
                  {/* Placeholder Media */}
                  <Link to={`/post/${post.id}`}>
                    <div className="relative cursor-pointer">
                      <div className={`w-full bg-gray-300 flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300 ${post.height}`}>
                        <span className="text-gray-600 text-sm">Media Content</span>
                      </div>
                    </div>
                  </Link>

                  {/* Title Bar */}
                  <div className="p-3 bg-gray-100">
                    <Link to={`/post/${post.id}`}>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight cursor-pointer hover:text-brand-orange transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Interaction Bar */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {/* Upvote */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleVote(post.id, "up");
                          }}
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
                          onClick={(e) => {
                            e.preventDefault();
                            handleVote(post.id, "down");
                          }}
                          className={`transition-colors ${
                            post.userVote === "down" 
                              ? "text-red-500" 
                              : "text-gray-500 hover:text-red-500"
                          }`}
                        >
                          <ArrowDown className="w-5 h-5" />
                        </button>

                        {/* Comments */}
                        <Link to={`/post/${post.id}`}>
                          <div className="flex items-center space-x-1 text-gray-500 hover:text-brand-orange transition-colors cursor-pointer">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm">{post.comments}</span>
                          </div>
                        </Link>
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