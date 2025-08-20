import { User, MessageCircle, Heart, Share2, Calendar, MapPin, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import trendingContent from "@/assets/trending-content.jpg";

const Profile = () => {
  const userPosts = [
    {
      id: 1,
      title: "My morning coffee ritual",
      upvotes: 1250,
      comments: 45,
      image: trendingContent,
      createdAt: "2 days ago",
    },
    {
      id: 2,
      title: "Weekend project completed!",
      upvotes: 890,
      comments: 23,
      image: trendingContent,
      createdAt: "5 days ago",
    },
    {
      id: 3,
      title: "Found this cute street art",
      upvotes: 2100,
      comments: 67,
      image: trendingContent,
      createdAt: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="imgur-card p-8 mb-8">
          <div className="relative">
            {/* Banner */}
            <div className="h-48 bg-gradient-to-r from-brand-orange to-yellow-400 rounded-xl mb-6"></div>
            
            {/* Profile Info */}
            <div className="relative -mt-20 flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">CreativeUser42</h1>
                <p className="text-gray-600 mb-4">
                  Digital artist and meme enthusiast. Sharing my daily adventures and creative projects.
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined March 2023
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="w-4 h-4 mr-1" />
                    portfolio.com
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">156</div>
                    <div className="text-gray-500">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">2.4K</div>
                    <div className="text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">892</div>
                    <div className="text-gray-500">Following</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="brand">Follow</Button>
                <Button variant="outline" className="border-brand-orange text-brand-orange">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="posts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPosts.map((post) => (
                <Card key={post.id} className="imgur-card overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.createdAt}</span>
                    </div>
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
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
              <p className="text-gray-600">Start exploring and heart posts you love!</p>
            </div>
          </TabsContent>
          
          <TabsContent value="comments">
            <div className="space-y-6">
              <Card className="imgur-card p-6">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 mb-2">
                      "This is absolutely amazing! The attention to detail is incredible."
                    </p>
                    <div className="text-sm text-gray-500">
                      on <span className="text-brand-orange">"Digital art masterpiece"</span> • 2 days ago
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="about">
            <Card className="imgur-card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">About CreativeUser42</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                  <p className="text-gray-600">
                    Passionate digital artist and content creator. I love sharing my work and connecting with 
                    fellow creatives. Always looking for inspiration in everyday moments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Art", "Photography", "Memes", "Design", "Gaming", "Nature"].map((interest) => (
                      <span key={interest} className="px-3 py-1 bg-brand-orange-light text-brand-orange rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;