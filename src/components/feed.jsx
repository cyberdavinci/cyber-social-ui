import React, { useState } from "react";
import FeedCard from "./feed-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { LucideImages, SmileIcon, Video } from "lucide-react";
import NewPost from "./new-post";

const Feed = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      userName: "John Doe",
      userAvatar: "https://github.com/shadcn.png",
      content: "Exploring the serene beauty of nature! 🌿✨ #NatureLover #PeacefulMoments, there's nothing quite like disconnecting from the hustle and bustle to reconnect with the earth.",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      ],
     timestamp: new Date(Date.now()).toISOString(), // 2 hours ago
      likes: 256,
      comments: 234,
      shares: 45,
    },
  ]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handlePostCreate = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="flex-2 w-[600px] mx-auto overflow-y-scroll h-[80vh] px-6 pt-4 feed">
      <div className="bg-blue-800/20 p-3 rounded-4xl mb-3 flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Button
          className="flex-3 text-left bg-gray-700/50 hover:bg-gray-700/70 rounded-4xl px-4 py-2 text-gray-300 font-normal justify-start cursor-pointer"
          onClick={handleOpen}
        >
          What's on your mind today cyber?
        </Button>
        <div className="flex-1 flex items-center gap-3 justify-end">
          <Video size={45} className="text-red-400 cursor-pointer hover:opacity-80" />
          <LucideImages 
            size={40} 
            className="text-green-400 cursor-pointer hover:opacity-80" 
            onClick={handleOpen}
          />
          <SmileIcon size={40} className="text-yellow-400 cursor-pointer hover:opacity-80" />
        </div>
      </div>

      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}

      <NewPost
        open={open}
        handleOpen={handleOpen}
        userName="Cyber"
        userAvatar="https://github.com/shadcn.png"
        onPostCreate={handlePostCreate}
      />
    </div>
  );
};

export default Feed;