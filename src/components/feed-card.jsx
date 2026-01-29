import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ForwardIcon,
  MessageCircle,
  MoreHorizontal,
  ThumbsUp,
  X,
} from "lucide-react";


const FeedCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const readMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFollow = () => {
    setIsFollowed(!isFollowed);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

 const getTimeAgo = (timestamp) => {
  const now = new Date();
  const postDate = typeof timestamp === 'string' ? new Date(timestamp) : new Date(timestamp);
  const diff = Math.floor((now - postDate) / 1000);
  
  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

  const cardImages = post.images || [];

  return (
    <Card className="w-full mx-auto mb-6 bg-gray-800 text-white rounded-md border-none shadow-xl p-0">
      <CardHeader className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage src={post.userAvatar} alt={post.userName} />
              <AvatarFallback>{post.userName?.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
              <div className="flex items-center justify-center gap-2 ml-4">
                <CardTitle className="text-lg font-semibold">
                  {post.userName}
                </CardTitle>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-50"></div>
                <Button
                  variant="link"
                  className="text-blue-500 cursor-pointer font-semibold w-fit p-0 m-0 h-auto"
                  onClick={toggleFollow}
                >
                  {isFollowed ? "Following" : "Follow"}
                </Button>
              </div>
              <div className="ml-4 text-sm text-slate-400">
                {getTimeAgo(post.timestamp)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MoreHorizontal className="cursor-pointer" />
            <X className="cursor-pointer" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {post.content && (
          <CardDescription className="p-5 text-gray-300">
            {isExpanded
              ? post.content
              : post.content.split(" ").slice(0, 15).join(" ") + (post.content.split(" ").length > 15 ? "..." : "")}
            {post.content.split(" ").length > 15 && (
              <span
                onClick={readMore}
                className="text-blue-500 font-semibold pl-2.5 cursor-pointer"
              >
                {isExpanded ? "see less" : "see more"}
              </span>
            )}
          </CardDescription>
        )}

        {/* Single Image */}
        {cardImages.length === 1 && (
          <div className="w-full">
            <img
              src={cardImages[0]}
              alt="Post image"
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        )}

        {/* Two Images */}
        {cardImages.length === 2 && (
          <div className="grid grid-cols-2 gap-0.5">
            {cardImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-[300px] object-cover"
              />
            ))}
          </div>
        )}

        {/* Three Images */}
        {cardImages.length === 3 && (
          <div className="grid grid-cols-2 gap-0.5">
            <img
              src={cardImages[0]}
              alt="Post image 1"
              className="w-full h-full row-span-2 object-cover"
            />
            <img
              src={cardImages[1]}
              alt="Post image 2"
              className="w-full h-[149.5px] object-cover"
            />
            <img
              src={cardImages[2]}
              alt="Post image 3"
              className="w-full h-[149.5px] object-cover"
            />
          </div>
        )}

        {/* Four Images */}
        {cardImages.length === 4 && (
          <div className="grid grid-cols-2 gap-0.5">
            {cardImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-[200px] object-cover"
              />
            ))}
          </div>
        )}

        {/* Five or More Images */}
        {cardImages.length >= 5 && (
          <div className="grid grid-cols-2 gap-0.5">
            {cardImages.slice(0, 4).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-[200px] object-cover"
                />
                {index === 3 && cardImages.length > 4 && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">
                      +{cardImages.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-5 flex flex-col w-full gap-4">
        <div className="flex items-center justify-between text-gray-300 w-full">
          <p className="flex items-center gap-2">
            {likes > 0 && (
              <>
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                </div>
                <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
              </>
            )}
          </p>
          <div>
            <span>{post.comments || 0} Comments</span> . <span>{post.shares || 0} Shares</span>
          </div>
        </div>
        <div className="flex justify-around text-gray-300 items-center w-full pb-5">
          <div
            className="flex items-center gap-1 font-semibold cursor-pointer hover:text-blue-400 transition-colors"
            onClick={toggleLike}
          >
            <ThumbsUp className={isLiked ? "fill-blue-500 text-blue-500" : ""} />
            <span>{isLiked ? "Unlike" : "Like"}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold cursor-pointer hover:text-blue-400 transition-colors">
            <MessageCircle /> <span>Comment</span>
          </div>
          <div className="flex items-center gap-1 font-semibold cursor-pointer hover:text-blue-400 transition-colors">
            <ForwardIcon /> <span>Share</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedCard;