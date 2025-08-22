import { ArrowUp, ArrowDown, MessageCircle, Share2, Flag, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";

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
      content: "This is so relatable! Just happened to me yesterday with a recursive function joke.",
      upvotes: 45,
      posted: "1 hour ago"
    },
    {
      id: 2,
      author: "WebDev2023",
      content: "The look on my face when I finally got the callback hell meme 😂",
      upvotes: 23,
      posted: "45 minutes ago"
    }
  ];

  const handleVote = (voteType: "up" | "down") => {
    setUserVote(userVote === voteType ? null : voteType);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Post Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">{post.author}</span>
              <span>{post.posted}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Flag className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Media Display */}
        <Card className="imgur-card mb-6 overflow-hidden">
          <div className="relative">
            {/* Placeholder for image */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image Content</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => handleVote("up")}
                  className={`flex items-center space-x-2 transition-colors ${
                    userVote === "up" 
                      ? "text-brand-orange" 
                      : "text-gray-500 hover:text-brand-orange"
                  }`}
                >
                  <ArrowUp className="w-6 h-6" />
                  <span className="font-medium">{post.upvotes.toLocaleString()}</span>
                </button>

                <button
                  onClick={() => handleVote("down")}
                  className={`transition-colors ${
                    userVote === "down" 
                      ? "text-red-500" 
                      : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  <ArrowDown className="w-6 h-6" />
                </button>

                <div className="flex items-center space-x-2 text-gray-500">
                  <MessageCircle className="w-6 h-6" />
                  <span>{post.comments}</span>
                </div>
              </div>

              <Button variant="ghost" className="text-gray-500 hover:text-brand-orange">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Comments Section */}
        <Card className="imgur-card">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6">Comments ({post.comments})</h3>
            
            {/* Add Comment */}
            <div className="mb-8 space-y-4">
              <Textarea
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[100px] focus:border-brand-orange focus:ring-brand-orange"
              />
              <div className="flex justify-end">
                <Button variant="brand">
                  Post Comment
                </Button>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {mockComments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">{comment.author}</span>
                      <span className="text-sm text-gray-500">{comment.posted}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-brand-orange">
                        <ArrowUp className="w-4 h-4" />
                      </button>
                      <span className="text-sm text-gray-500">{comment.upvotes}</span>
                      <button className="text-gray-400 hover:text-red-500">
                        <ArrowDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Post;