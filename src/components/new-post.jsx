import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NewPost = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent className="sm:max-w-[525px] bg-slate-800 border-none   shadow-lg text-white">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <Textarea
          placeholder="What's on your mind Cyber?"
          className=" resize-none border-none focus:ring-0 focus:border-none bg-gray-800 text-white min-h-[150px] "
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewPost;
