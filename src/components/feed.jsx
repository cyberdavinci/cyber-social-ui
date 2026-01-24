import React from "react";
import { FeedCard } from "./feed-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { LucideImages, SmileIcon, Video } from "lucide-react";
import NewPost from "./new-post";
const Feed = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex-2 w-[600px] mx-auto overflow-y-scroll h-[80vh] px-6 pt-4 feed">
      <div className=" bg-blue-800/20 p-3 rounded-4xl mb-3 flex items-center gap-4 ">
        {/* <div className="flex-1"> */}
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/* </div> */}

        <Button
          className="flex-3 text-left bg-gray-700/50 hover:bg-gray-700/70 rounded-4xl px-4 py-2 text-gray-300 font-normal justify-start cursor-pointer"
          onClick={handleOpen}
        >
          Whats on your mind today cyber?
        </Button>
        <div className="flex-1 flex items-center gap-3 justify-end ">
          <Video size={45} className=" text-red-400" />
          <LucideImages size={40} className=" text-green-400" />
          <SmileIcon size={40} className=" text-yellow-400" />
        </div>
      </div>
      <FeedCard />
      <FeedCard />
      <FeedCard />

      <NewPost open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Feed;
