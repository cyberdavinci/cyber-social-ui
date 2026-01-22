import Hero from "./components/Hero";
import Signin from "./components/Signin";
import Login from "./components/LogIn";
import { Routes, Route } from "react-router";

function App() {
  return (
    <main className=" bg-grey-900 h-screen w-full relative ">
      {/* overflow-y-hidden */}
      <Routes>
         <Route path="/" element={<Signin />} />
         <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Hero />} />
      </Routes>
    </main>
  );
}

export default App;
