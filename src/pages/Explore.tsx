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
    { id: "all", name: "All", emoji: "🌟", active: true },
    { id: "memes", name: "Memes", emoji: "😂" },
    { id: "gaming", name: "Gaming", emoji: "🎮" },
    { id: "animals", name: "Animals", emoji: "🐶" },
    { id: "art", name: "Art", emoji: "🎨" },
    { id: "tech", name: "Tech", emoji: "💻" },
    { id: "random", name: "Random", emoji: "🎲" },
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-orange/8 to-yellow-400/8 blur-3xl animate-blob-squish"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-200/15 to-brand-orange/8 blur-3xl animate-float-medium blob-shape"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-tr from-brand-orange/6 to-gray-100/8 blur-2xl animate-float-fast blob-shape"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-bl from-brand-orange/4 to-gray-300/6 blur-3xl animate-blob-squish blob-shape" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Categories Section */}
      <div className="relative z-10 bg-background/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 chunky-text">Explore Categories</h2>
            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-brand-orange hover-pop">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex overflow-x-auto space-x-3 scrollbar-hide pb-2">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-110 hover-pop relative ${
                  selectedCategory === category.id 
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30 animate-ripple" 
                    : "bg-white text-brand-orange border-2 border-brand-orange/30 hover:bg-brand-orange-light hover:shadow-md hover:border-brand-orange/50"
                } ${index % 2 === 0 ? 'animate-tilt-left' : 'animate-tilt-right'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <span className="text-lg">{category.emoji}</span>
                <span>{category.name}</span>
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
              {posts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className={`imgur-card break-inside-avoid mb-6 overflow-hidden group hover-pop hover:animate-ripple transition-all duration-300 ${
                    index % 3 === 0 ? 'animate-tilt-left' : index % 3 === 1 ? 'animate-tilt-right' : ''
                  }`}
                >
                  {/* Placeholder Media */}
                  <Link to={`/post/${post.id}`}>
                    <div className="relative cursor-pointer overflow-hidden">
                      <div className={`w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-500 ${post.height} ${
                        index % 4 === 0 ? 'blob-shape' : 'rounded-t-xl'
                      }`}>
                        <span className="text-gray-600 text-sm font-medium">📸 Media Content</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>

                  {/* Title Bar */}
                  <div className="p-3 bg-gray-50 border-b border-gray-100">
                    <Link to={`/post/${post.id}`}>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight cursor-pointer hover:text-brand-orange transition-colors chunky-text">
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
                          className={`flex items-center space-x-1 transition-all duration-200 hover:scale-110 ${
                            post.userVote === "up" 
                              ? "text-brand-orange animate-bounce-up" 
                              : "text-gray-500 hover:text-brand-orange hover:animate-bounce-up"
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
                          className={`transition-all duration-200 hover:scale-110 ${
                            post.userVote === "down" 
                              ? "text-red-500 animate-shake" 
                              : "text-gray-500 hover:text-red-500 hover:animate-shake"
                          }`}
                        >
                          <ArrowDown className="w-5 h-5" />
                        </button>

                        {/* Comments */}
                        <Link to={`/post/${post.id}`}>
                          <div className="flex items-center space-x-1 text-gray-500 hover:text-brand-orange transition-all cursor-pointer hover:scale-110 hover:animate-wiggle">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm">{post.comments}</span>
                          </div>
                        </Link>
                      </div>

                      {/* Share */}
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-brand-orange hover-pop hover:animate-wiggle">
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
          className="fixed bottom-6 right-6 md:hidden w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all animate-wiggle hover:animate-bounce-up z-50"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
};

export default Explore;