import { User, MessageCircle, Heart, Share2, Calendar, MapPin, Link as LinkIcon, Star, Camera } from "lucide-react";
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
    {
      id: 4,
      title: "This meme speaks to my soul",
      upvotes: 3400,
      comments: 89,
      image: trendingContent,
      createdAt: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      
      {/* Quirky Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-orange/8 to-yellow-400/8 blur-3xl animate-blob-squish"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-gray-200/10 to-brand-orange/6 blur-3xl animate-float-medium doodle-border"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-tr from-brand-orange/5 to-gray-100/8 blur-2xl animate-float-fast wavy-border"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="blob-card p-8 mb-8 interactive-glow">
          <div className="relative">
            {/* Quirky Banner */}
            <div className="h-48 bg-gradient-to-br from-brand-orange via-yellow-400 to-pink-400 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="absolute top-4 left-4 text-4xl animate-float-slow">🌈</div>
              <div className="absolute top-8 right-8 text-3xl animate-wiggle">✨</div>
              <div className="absolute bottom-4 left-1/3 text-2xl animate-bounce">🎨</div>
              <div className="absolute bottom-8 right-1/4 text-3xl animate-float-medium">🚀</div>
            </div>
            
            {/* Profile Info */}
            <div className="relative -mt-20 flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full border-4 border-white shadow-xl flex items-center justify-center quirky-card group-hover:animate-wiggle">
                  <User className="w-16 h-16 text-brand-orange" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white animate-bounce">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative inline-block mb-2">
                  <h1 className="text-4xl font-bold text-gray-900 chunky-text">
                    CreativeUser42
                  </h1>
                  <div className="absolute -top-2 -right-4 text-2xl animate-wiggle">🎭</div>
                </div>
                <p className="text-gray-600 mb-4 max-w-md">
                  Digital artist and professional meme connoisseur. Sharing my daily adventures, 
                  creative explosions, and the occasional existential crisis through art! 🎨✨
                </p>
                
                <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center pill-button bg-gray-100">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined March 2023
                  </div>
                  <div className="flex items-center pill-button bg-gray-100">
                    <MapPin className="w-4 h-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center pill-button bg-gray-100 hover:bg-brand-orange-light hover:text-brand-orange cursor-pointer">
                    <LinkIcon className="w-4 h-4 mr-1" />
                    portfolio.com
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm mb-4">
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-gray-900 text-lg chunky-text group-hover:text-brand-orange">156</div>
                    <div className="text-gray-500">Posts</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-gray-900 text-lg chunky-text group-hover:text-brand-orange">2.4K</div>
                    <div className="text-gray-500">Followers</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="font-bold text-gray-900 text-lg chunky-text group-hover:text-brand-orange">892</div>
                    <div className="text-gray-500">Following</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="brand" className="pill-button interactive-glow">
                  <Star className="w-4 h-4 mr-2" />
                  Follow
                </Button>
                <Button variant="outline" className="pill-button border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white interactive-glow">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="posts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white border-2 border-brand-orange/20">
            <TabsTrigger value="posts" className="pill-button data-[state=active]:bg-brand-orange data-[state=active]:text-white">
              📸 Posts
            </TabsTrigger>
            <TabsTrigger value="favorites" className="pill-button data-[state=active]:bg-brand-orange data-[state=active]:text-white">
              ❤️ Favorites
            </TabsTrigger>
            <TabsTrigger value="comments" className="pill-button data-[state=active]:bg-brand-orange data-[state=active]:text-white">
              💬 Comments
            </TabsTrigger>
            <TabsTrigger value="about" className="pill-button data-[state=active]:bg-brand-orange data-[state=active]:text-white">
              ℹ️ About
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {userPosts.map((post, index) => (
                <Card key={post.id} className={`break-inside-avoid mb-6 overflow-hidden group cursor-pointer transition-all duration-300 hover-pop ${
                  index % 3 === 0 ? 'blob-card' : index % 3 === 1 ? 'quirky-card' : 'imgur-card'
                } ${index % 2 === 0 ? 'animate-tilt-left' : 'animate-tilt-right'}`}>
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        index % 4 === 0 ? 'h-48' : index % 4 === 1 ? 'h-64' : index % 4 === 2 ? 'h-56' : 'h-72'
                      }`}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-bold text-brand-orange">
                      YOURS 🎨
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="flex items-center">
                        <span className="mr-1">📅</span>
                        {post.createdAt}
                      </span>
                    </div>
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
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <Card className="blob-card p-12 text-center interactive-glow">
              <div className="relative inline-block mb-6">
                <Heart className="w-20 h-20 text-gray-300 mx-auto animate-pulse" />
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💫</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 chunky-text">No favorites yet!</h3>
              <p className="text-gray-600 mb-6">
                Start exploring and heart the content that makes you go "OMG YES!" 🤩
              </p>
              <Button variant="brand" className="pill-button interactive-glow">
                Explore Amazing Content
              </Button>
            </Card>
          </TabsContent>
          
          <TabsContent value="comments">
            <div className="space-y-6">
              <Card className="quirky-card p-6 interactive-glow">
                <div className="speech-bubble">
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 mb-2">
                        "This is absolutely MIND-BLOWING! 🤯 The attention to detail is incredible and the creativity is off the charts!"
                      </p>
                      <div className="text-sm text-gray-500">
                        on <span className="text-brand-orange font-medium">"Digital art masterpiece"</span> • 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="blob-card p-6 interactive-glow">
                <div className="speech-bubble">
                  <div className="flex space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-orange-light to-yellow-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 mb-2">
                        "HAHAHA this made my entire week! 😂 Sharing this with everyone I know!"
                      </p>
                      <div className="text-sm text-gray-500">
                        on <span className="text-brand-orange font-medium">"Epic meme compilation"</span> • 5 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="about">
            <Card className="quirky-card p-8 interactive-glow">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 chunky-text flex items-center">
                <span className="mr-3">🎨</span>
                About CreativeUser42
                <span className="ml-3">✨</span>
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 chunky-text">Bio</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Hey there, beautiful humans! 👋 I'm a passionate digital artist and content creator who believes 
                    that life is too short for boring art. I love sharing my work, connecting with fellow creatives, 
                    and finding inspiration in the weirdest places. When I'm not creating, you'll find me binge-watching 
                    meme compilations or having deep conversations with my houseplants. 🌱
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 chunky-text">Interests & Vibes</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Digital Art", "Photography", "Memes", "Design", "Gaming", "Nature", "Coffee", "Weird Art", "Space"].map((interest, index) => (
                      <span 
                        key={interest} 
                        className={`pill-button bg-gradient-to-r from-brand-orange-light to-yellow-100 text-brand-orange border-2 border-brand-orange/20 hover:border-brand-orange hover:scale-110 cursor-pointer ${
                          index % 2 === 0 ? 'animate-tilt-left' : 'animate-tilt-right'
                        }`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
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