
import React from 'react';
import { FaGift, FaSearch, FaEllipsisH, } from 'react-icons/fa';
import { MessageCircle, PlusCircle ,UserCircle2 } from "lucide-react";


const communitys = [

{ id: 1, name: "ADB Internship !!!!! Paid Int USA, Canada Scholarships & Fellows... ", icon: <MessageCircle size={75} /> },
{ id: 2, name: "Everything cybersecurit Cybersecurity Free Training Beginne...", icon: <MessageCircle size={75} />  }
]

const groupChat = [
    { id: 1, name: "live Chat Girl 417", time: "20h", icon: '' },
    { id: 2, name: "Facebook user, Duston and 6 others", time: "48w",icon: ''  }, 
{ id: 3, name: "Create group chat.", icon: < PlusCircle size={30} />  }
]

// 1. Sponsored Ad Component
const SponsoredAd = ({ image, title, domain }) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-[#3a3b3c] rounded-lg cursor-pointer transition-all">
    <img src={image} className="rounded-lg w-[110px] h-[110px] object-cover" alt={title} />
    <div className="flex flex-col space-y-1">
      <h4 className="text-[15px] font-semibold  text-gray-300 dark:text-[#e4e6eb] leading-tight line-clamp-2">
        {title}
      </h4>
      <p className="text-[13px]  text-gray-300 dark:text-[#b0b3b8]">{domain}</p>
    </div>
  </div>
);




// 2 Individual Contact Component (with Online Dot)
const Contact = ({ name, src, online }) => (
  <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-[#3a3b3c] rounded-lg cursor-pointer transition-all relative">
    <div className="relative">
      <img src={src} className="rounded-full w-9 h-9 object-cover" alt={name} />
      {online && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#18191a] rounded-full"></div>
      )}
    </div>
    <p className="font-medium text-[15px] text-gray-300 dark:text-[#e4e6eb]">{name}</p>
  </div>
);



const aside = () => {
  return (
    <aside className="hidden xl:flex flex-col w-[340px] text-gray-300 p-2 mt-4 sticky top-[56px] h-[calc(80vh-56px)] overflow-y-auto custom-scrollbarbg-slate-800" >
      
      {/* --- SPONSORED SECTION --- */}
      <div className="mb-4 px-2">
        <h3 className="text-[#65676b] dark:text-[#b0b3b8] font-semibold text-[17px] mb-2">Sponsored</h3>
        <SponsoredAd 
          image="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200" 
          title="Unleash Your Angel Allies" 
          domain="gamehollywood.com"
        />
        <SponsoredAd 
          image="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=200" 
          title="No bank transfers, no waiting. Use..." 
          domain="chicksx.com"
        />
      </div>
      <hr className="border-gray-300 dark:border-gray-600 mx-2 my-2" />

      {/* --- BIRTHDAYS SECTION --- */}
      <div className="px-2 py-2  text-gray-30">
        <h3 className=" text-gray-30 dark:text-[#b0b3b8] font-semibold text-[17px] mb-2">Birthdays</h3>
        <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-[#3a3b3c] rounded-lg cursor-pointer transition-all">
          <FaGift className="text-[#1877f2] text-3xl shrink-0" />
          <p className="text-[15px]  text-gray-30 dark:text-[#e4e6eb]">
            <span className="font-bold">Modou L Sonko</span> and <span className="font-bold">4 others</span> have birthdays today.
          </p>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 mx-2 my-2" />

     {/* Contacts List */}
      <div className="px-2 text-gray-300">
        <div className="flex justify-between items-center mb-2 px-2">
          <h3 className=" text-gray-300 dark:text-[#b0b3b8] font-semibold text-[17px]">Contacts</h3>
          <div className="flex space-x-2  text-gray-300 dark:text-[#b0b3b8]">
            <div className="p-2 hover:bg-gray-200 dark:hover:bg-[#3a3b3c] rounded-full cursor-pointer"><FaSearch size={14}/></div>
            <div className="p-2 hover:bg-gray-200 dark:hover:bg-[#3a3b3c] rounded-full cursor-pointer"><FaEllipsisH size={14}/></div>
          </div>
        </div>

        {/* Contacts List */}
        
        <Contact  online name="Abdou Rahman" src="https://i.pravatar.cc/150?u=1"  />
        <Contact  name="Lamin Jallow" src="https://i.pravatar.cc/150?u=2" />
        <Contact online name="Fatou Sarr" src="https://i.pravatar.cc/150?u=3" />
        <Contact name="Ebrima Faye" src="https://i.pravatar.cc/150?u=4" />
        <Contact online name="Mariama Touray" src="https://i.pravatar.cc/150?u=5" />
      </div>

         {/* SECTION 3: Community Chats */}
        <div className="px-2 mb-4">
          <h3 className="   text-gray-300 font-semibold text-[17px] mb-2">Community chats</h3>
          
      
             <div className="flex-1 flex flex-col gap-2 text-gray-300 px-2bg-slate-800 py-4 rounded-tr-xl rounded-br-xl w-auto  overflow-y-auto">
      {communitys.map((communitys) => (
        <div
          key={communitys.id}
          className='flex items-center gap-3 hover:bg-gray-100 p-4 rounded-4xl cursor-pointer font-semibold '>
          {communitys.icon}  <span>{communitys.name}</span>
        </div>
      ))}
    </div>
    </div>
        <hr className="border-gray-300 dark:border-gray-600 mx-2 mb-4" />

        {/* SECTION 4: Group Chats */}
        <div className="px-2 mb-4 flex-row">
          <h3 className=" text-gray-300 dark:text-[#b0b3b8] font-semibold text-[17px] mb-2">Group chats</h3>
         <div className="flex-1 flex flex-col gap-2 text-gray-300 px-2bg-slate-800 py-4 rounded-tr-xl rounded-br-xl w-auto  overflow-y-auto">
      {groupChat.map((groupChat) => (
        <div
        
          key={groupChat.id}
          className='flex items-center gap-3 hover:bg-gray-100 p-4 rounded-4xl cursor-pointer font-semibold '>
            <img src="https://i.pravatar.cc/150?u=1" alt=""  className='rounded-full w-10'/>
          {groupChat.icon}  <span>{groupChat.name}</span>
        </div>
      ))}
    </div>
         



         
        </div>
     

    
    </aside>
  );
};

export default aside;





















































// import React from "react";

// const Aside = () => {
//   return (
//     <div className="flex-1 bg-slate-800  right-0 top-32 rounded-2xl p-4">
//       Aside
//     </div>
//   );
// };

// export default Aside;
