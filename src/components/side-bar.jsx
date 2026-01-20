import {
  Home,
  LucideListCheck,
  Settings,
  Store,
  UserCheck2Icon,
  UserCircle,
  Users,
} from "lucide-react";
import React, { useState } from "react";

const menus = [
  { id: 1, name: "Home", icon: <Home size={35} />, active: true },
  { id: 2, name: "Users", icon: <UserCheck2Icon size={35} />, active: false },
  { id: 3, name: "Groups", icon: <Users size={35} />, active: false },
  { id: 4, name: "Pages", icon: <LucideListCheck size={35} />, active: false },
  { id: 5, name: "Market Place", icon: <Store size={35} />, active: false },
  { id: 6, name: "Profile", icon: <UserCircle size={35} />, active: false },
  { id: 7, name: "Settings", icon: <Settings size={35} />, active: false },
];

const SideBar = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const handleActive = (menu) => {
    setCurrentActive(menu.id);
  };

  return (
    <div className="flex-1 flex flex-col gap-3 text-gray-300 px-6  bg-slate-800 py-3 rounded-tr-xl rounded-br-xl w-auto h-[80vh] overflow-y-auto  hover:bg-slate-800 ">
      {menus.map((menu) => (
        <div
          key={menu.id}
          className={`flex items-center gap-3 hover:bg-slate-600 p-3 rounded-4xl cursor-pointer ${
            currentActive == menu.id && "bg-slate-700 "
          }`}
          onClick={() => handleActive(menu)}
        >
          {menu.icon} <span>{menu.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
