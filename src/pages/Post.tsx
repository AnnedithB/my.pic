import { ArrowUp, ArrowDown, MessageCircle, Share2, Flag, Bookmark, Heart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Post = () => {
  const { id } = useParams();
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);
  const [comment, setComment] = useState("");

  // Mock post data
  const post = {
    id: id,
    title: "When you finally understand a programming joke",
    author: "CodeMaster123",
    posted: "2 hours ago",
    upvotes: 12500,
    downvotes: 234,
    comments: 342,
    image: "/placeholder-image.jpg" // This would be a real image in production
  };

  const mockComments = [
    {
      id: 1,
      author: "DevUser456",
      content: "This is so relatable! Just happened to me yesterday with a recursive function joke. The feeling when it finally clicks is AMAZING! 🤯",
      upvotes: 45,
      posted: "1 hour ago"
    },
    {
      id: 2,
      author: "WebDev2023",
      content: "The look on my face when I finally got the callback hell meme 😂 Took me way too long but now I'm laughing at ALL the JavaScript jokes!",
      upvotes: 23,
      posted: "45 minutes ago"
    },
    {
      id: 3,
      author: "PythonLover",
      content: "Programming humor hits different when you're actually programming. This community gets it! 🐍✨",
      upvotes: 67,
      posted: "30 minutes ago"
    }
  ];

  const handleVote = (voteType: "up" | "down") => {
    setUserVote(userVote === voteType ? null : voteType);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Quirky Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-orange/8 to-yellow-400/8 blur-3xl animate-blob-squish"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-200/10 to-brand-orange/6 blur-3xl animate-float-medium doodle-border"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-tr from-brand-orange/5 to-gray-100/8 blur-2xl animate-float-fast wavy-border"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Post Header */}
        <div className="mb-8">
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl font-bold text-gray-900 chunky-text leading-tight">
              {post.title}
            </h1>
            <div className="absolute -top-2 -right-4 text-2xl animate-bounce">✨</div>
            <div className="absolute -bottom-2 -left-4 text-xl animate-wiggle">🔥</div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="font-bold text-gray-900 text-lg">{post.author}</span>
              <span className="pill-button bg-gray-100">{post.posted}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover-pop hover:animate-wiggle">
                <Flag className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover-pop hover:animate-wiggle">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Media Display with Quirky Frame */}
        <Card className="quirky-card mb-8 overflow-hidden interactive-glow">
          <div className="relative">
            {/* Quirky decorative frame */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg animate-bounce z-10">
              📸
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-sm animate-wiggle z-10">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-sm animate-spin z-10">
              🎨
            </div>
            
            {/* Placeholder for image */}
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-600 text-xl font-bold z-10">📱 Epic Content Here! 🚀</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-float-slow"></div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleVote("up")}
                  className={`flex items-center space-x-2 pill-button transition-all duration-300 ${
                    userVote === "up" 
                      ? "bg-brand-orange text-white animate-bounce-up" 
                      : "bg-gray-100 text-gray-600 hover:bg-brand-orange-light hover:text-brand-orange hover:animate-bounce-up"
                  }`}
                >
                  <ArrowUp className="w-6 h-6" />
                  <span className="font-bold text-lg">{post.upvotes.toLocaleString()}</span>
                </button>

                <button
                  onClick={() => handleVote("down")}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    userVote === "down" 
                      ? "bg-red-500 text-white animate-shake" 
                      : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-500 hover:animate-shake"
                  }`}
                >
                  <ArrowDown className="w-6 h-6" />
                </button>

                <div className="flex items-center space-x-2 pill-button bg-gray-100 text-gray-600 hover:bg-brand-orange-light hover:text-brand-orange cursor-pointer hover:animate-wiggle">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-medium">{post.comments}</span>
                </div>
              </div>

              <Button variant="ghost" className="pill-button text-gray-500 hover:text-brand-orange hover:bg-brand-orange-light hover:animate-ripple">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Comments Section */}
        <Card className="blob-card interactive-glow">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-8 chunky-text flex items-center">
              <span className="mr-3">💬</span>
              Comments ({post.comments})
              <span className="ml-3">🎭</span>
            </h3>
            
            {/* Add Comment */}
            <div className="mb-8 space-y-4">
              <Textarea
                placeholder="Drop your thoughts, reactions, or hot takes here... 🔥"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[120px] asymmetric-border focus:border-brand-orange focus:ring-brand-orange bg-gray-50 hover:bg-white transition-all"
              />
              <div className="flex justify-end">
                <Button 
                  variant="brand" 
                  className="pill-button bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-brand-orange-hover hover:to-yellow-600 shadow-lg hover:shadow-brand-orange/30 interactive-glow"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Post Comment
                  <div className="ml-2 text-lg animate-wiggle">🚀</div>
                </Button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {mockComments.map((comment, index) => (
                <div key={comment.id} className={`${index !== mockComments.length - 1 ? 'border-b border-gray-100 pb-6' : ''}`}>
                  <div className="speech-bubble relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full flex items-center justify-center asymmetric-border">
                          <span className="text-lg">{comment.author.charAt(0)}</span>
                        </div>
                        <div>
                          <span className="font-bold text-gray-900">{comment.author}</span>
                          <span className="text-sm text-gray-500 ml-2 pill-button bg-gray-100">
                            {comment.posted}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="pill-button bg-gray-100 text-gray-500 hover:bg-brand-orange-light hover:text-brand-orange hover:animate-bounce-up">
                          <ArrowUp className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{comment.upvotes}</span>
                        </button>
                        <button className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 hover:animate-shake">
                          <ArrowDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Comments */}
            <div className="text-center mt-8">
              <Button variant="outline" className="pill-button border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white interactive-glow">
                Load More Epic Comments 📚
              </Button>
            </div>
          </div>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Post;