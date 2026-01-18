import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, Search, User } from "lucide-react";
const NavBar = () => {
  return (
    <div className=" bg-slate-800 p-6 text-white flex justify-between items-center fixed left-0 right-0 top-0 z-10">
      <h2 className="text-3xl font-bold">Cyber Davinci</h2>

      <div className="flex items-center justify-between bg-gray-600 px-5 py-2 rounded-full w-1/2 gap-3">
  <Input
    className="flex-1 bg-transparent border-none outline-none focus:ring-0 focus:outline-none placeholder:text-gray-300 text-white"
    placeholder="search...?"
  />
  <Search />
</div>
      <div className="flex gap-6">
        <div className=" relative">
          <Mail size={30} />
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-green-700 absolute top-[-10px] left-4">
            20+
          </Badge>
        </div>
        <div className=" relative">
          <Bell size={30} />
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-red-700 absolute top-[-10px] left-4">
            80+
          </Badge>
        </div>
        <User size={30} />
      </div>
    </div>
  );
};

export default NavBar;
