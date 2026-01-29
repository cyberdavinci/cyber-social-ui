
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, MapPin, Users } from "lucide-react";


// NewPost Dialog Component
const NewPost = ({ open, handleOpen, userName = "Cyber", userAvatar = null, onPostCreate }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const imagePromises = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(imagePromises).then((images) => {
        setSelectedImages((prev) => [...prev, ...images].slice(0, 10)); // Max 10 images
      });
    }
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePost = () => {
    if (postContent.trim() || selectedImages.length > 0) {
      const newPost = {
        id: Date.now(),
        userName,
        userAvatar,
        content: postContent,
        images: selectedImages,
        timestamp: new Date(),
        likes: 256,
        comments: 0,
        shares: 0,
      };
      
      onPostCreate(newPost);
      setPostContent("");
      setSelectedImages([]);
      handleOpen(false);
    }
  };

  const getUserInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="sm:max-w-[525px] bg-slate-800 border-none shadow-lg text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Create Post</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-3 mb-4">
          {userAvatar ? (
            <img
              src={userAvatar}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold">
              {getUserInitials(userName)}
            </div>
          )}
          <div>
            <p className="font-semibold">{userName}</p>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Users className="w-3 h-3" />
              <span>Friends</span>
            </div>
          </div>
        </div>

        <Textarea
          placeholder={`What's on your mind, ${userName}?`}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-white min-h-[120px] placeholder:text-gray-400 text-lg"
        />

        {selectedImages.length > 0 && (
          <div className="grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden border border-gray-700">
                <img
                  src={image}
                  alt={`Selected ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-gray-900 bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center text-white transition-all text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="border border-gray-700 rounded-lg p-3">
          <p className="text-sm mb-3">Add to your post</p>
          <div className="flex gap-2">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
            >
              <Image className="w-5 h-5 text-green-500" />
            </label>
            <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Users className="w-5 h-5 text-blue-500" />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Smile className="w-5 h-5 text-yellow-500" />
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <MapPin className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            onClick={handlePost}
            disabled={!postContent.trim() && selectedImages.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
          >
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;