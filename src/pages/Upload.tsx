import { Upload as UploadIcon, Image, FileText, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Upload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Share your creativity</h1>
          <p className="text-xl text-gray-600">Upload images and GIFs to share with the community</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Area */}
          <Card className="imgur-card p-8">
            <div className="text-center">
              <div className="border-2 border-dashed border-brand-orange rounded-xl p-12 mb-6 hover:border-brand-orange-hover transition-colors cursor-pointer group">
                <UploadIcon className="w-16 h-16 text-brand-orange mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drag & drop images here
                </h3>
                <p className="text-gray-600 mb-4">or click to browse</p>
                <Button variant="brand" size="lg">
                  Choose Files
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Image className="w-4 h-4 mr-1" />
                  JPG, PNG, GIF
                </div>
                <span>•</span>
                <span>Max 20MB</span>
              </div>
            </div>
          </Card>

          {/* Upload Details */}
          <Card className="imgur-card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Post Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <Input
                  placeholder="Give your post a catchy title"
                  className="focus:border-brand-orange focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  placeholder="Tell the community about your post..."
                  className="h-24 focus:border-brand-orange focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <Input
                  placeholder="funny, meme, cat, relatable"
                  className="focus:border-brand-orange focus:ring-brand-orange"
                />
                <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Privacy
                </label>
                <Select>
                  <SelectTrigger className="focus:border-brand-orange focus:ring-brand-orange">
                    <SelectValue placeholder="Choose privacy setting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Public
                      </div>
                    </SelectItem>
                    <SelectItem value="private">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Private
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="brand" size="lg" className="w-full">
                <UploadIcon className="w-5 h-5 mr-2" />
                Upload to Community
              </Button>
            </div>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="imgur-card p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tips for great posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-brand-orange-light rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-brand-orange" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Clear titles</h4>
              <p className="text-sm text-gray-600">Make your title descriptive and engaging</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-orange-light rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Image className="w-6 h-6 text-brand-orange" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High quality</h4>
              <p className="text-sm text-gray-600">Upload clear, well-lit images for best results</p>
            </div>
            <div className="text-center">
              <div className="bg-brand-orange-light rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-brand-orange" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Community friendly</h4>
              <p className="text-sm text-gray-600">Follow community guidelines and be respectful</p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;