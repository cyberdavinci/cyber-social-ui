import Hero from "./components/Hero";
import Signin from "./components/Signin";
import { Routes, Route } from "react-router";

function App() {
  return (
    <main className=" bg-grey-900 h-screen w-full relative ">
      {/* overflow-y-hidden */}
      <Routes>
         <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </main>
  );
}

export default App;
