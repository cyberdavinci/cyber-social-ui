import React from "react";

import "./App.css";
import NavBar from "./components/nav-bar";
import SideBar from "./components/side-bar";
import Feed from "./components/feed";
import Aside from "./components/aside";
import Login from "./components/login";

function App() {
  

  return (
    <main className=" bg-grey-900 h-screen w-full relative ">
      {/* overflow-y-hidden */}
      <NavBar />
      
      <div className="flex gap-6 relative mt-32">
        <SideBar />
        <Feed />
        <Aside />
       
      </div>
       <Login/>
    </main>
  );
}

export default App;
