import React from "react";

import "./App.css";
import NavBar from "./components/nav-bar";
import SideBar from "./components/side-bar";
import Feed from "./components/feed";
import Aside from "./components/aside";

function App() {
  

  return (
    <main className=" bg-grey-900 h-screen w-full relative overflow-y-hidden">
      <NavBar />
      <div className="flex gap-6 relative mt-32">
        <SideBar />
        <Feed />
        <Aside />
      </div>
    </main>
  );
}

export default App;
