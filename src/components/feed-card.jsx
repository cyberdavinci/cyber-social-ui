import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  ForwardIcon,
  MessageCircle,
  MoreHorizontal,
  ThumbsUp,
  X,
  UserCircle2
} from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Button } from "./ui/button";
// import { is } from "date-fns/locale/is";

export const FeedCard = () => {
  const [cardImages, setCardImages] = useState([
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const postDescription =
    "Exploring the serene beauty of nature! 🌿✨ #NatureLover #PeacefulMoments, there's nothing quite like disconnecting from the hustle and bustle to reconnect with the earth. Every sunset, every mountain peak, every forest trail reminds me of how lucky we are to live on this incredible planet. 🌍💚 Taking time to appreciate these moments keeps me grounded and grateful. What's your favorite place to find peace in nature? Drop a comment below! 👇 #NaturePhotography #OutdoorAdventures #Wanderlust #TravelDiaries #EarthDay #NatureLovers #ExploreMore";

  const readMore = () => {
    setIsExpanded(!isExpanded);
  };

  // toggle follow button
  const toggleFollow = () => {
    setIsFollowed(!isFollowed);
  };

// toggle like button
const toggleLike = () => {
  setIsLiked(!isLiked);
};


  // face book style card design
  return (
    <Card className="w-full  mx-auto mb-6 bg-gray-800 text-white rounded-md border-none shadow-xl p-0">
      <CardHeader className={"pt-6"}>
        <div className=" flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="">
              <div className="flex items-center justify-center gap-2 ml-4">
                <CardTitle className="text-lg font-semibold">
                  John Doe
                </CardTitle>
                <div className="w-[5px] h-[5px] rounded-full bg-amber-50"></div>
                <Button
                  variant={"link"}
                  className=" text-blue-500 cursor-pointer font-semibold w-fit p-0 m-0 h-auto "
               onClick={toggleFollow} >
                  {isFollowed ? "Following" : "Follow"}
                </Button>
              </div>

              <div className="ml-4 text-sm text-slate-400">2 hrs ago</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MoreHorizontal />
            <X />
          </div>
        </div>
      </CardHeader>

      <CardContent className={"p-0 "}>
        <CardDescription className={"p-5 text-gray-300"}>
          {isExpanded
            ? postDescription
            : postDescription?.split(" ")?.slice(0, 15).join(" ").concat("...")}
          {isExpanded ? (
            <span
              onClick={readMore}
              className=" text-blue-500 font-semibold pl-2.5 cursor-pointer"
            >
              see less
            </span>
          ) : (
            <span
              onClick={readMore}
              className="text-blue-500 font-semibold pl-2.5 cursor-pointer"
            >
              see more
            </span>
          )}
        </CardDescription>

        {/* Single Image - Full Width */}
        {cardImages.length === 1 && (
          <div className="w-full">
            <img
              src={cardImages[0]}
              alt="Post image"
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        )}

        {/* Two Images - Side by Side */}
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

        {/* Three Images - First Large, Two Stacked */}
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

        {/* Four Images - 2x2 Grid */}
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

        {/* Five or More Images - 2x2 with Overlay */}
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

      <CardFooter className={"px-5 flex flex-col w-full gap-4"}>
        <div className="flex items-center justify-between text-gray-300 w-full">
          <p className="flex items-center gap-2">
            <div class="flex -space-x-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
              <img
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="inline-block size-6 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
              />
            </div>
            <span>Kemo Dibassy, Malick Bah and 256 others</span>
          </p>
          <div>
            <span>234 Comments</span> . <span>45 Shares</span>
          </div>
        </div>
        <div className="flex justify-around text-gray-300 items-center w-full pb-5">
          <div className="flex items-center gap-1 font-semibold cursor-pointer">
            <ThumbsUp onClick={toggleLike} className={isLiked ? "fill-blue-500" : ""} /> <span>{isLiked ? "Unlike" : "Like"}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold cursor-pointer">
            <MessageCircle /> <span>Comment</span>
          </div>
          <div className="flex items-center gap-1 font-semibold cursor-pointer">
            <ForwardIcon /> <span>Share</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
