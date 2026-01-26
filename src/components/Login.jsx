import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const router = useNavigate();
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password });

    if (email === "ebrimaa@gmail.com" && password === "12345") {
      router("/home");
    }
    
    if (passwordRegex.test(password) === false) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (emailRegex.test(email) === false) {
      toast.error(
        "Password must be at least 8 characters long and contain both letters and numbers",
      );
      return;
    }
    toast.error("Invalid email or password");
  };


  const handleRouting = () => {
    // 1. Validation (Optional but recommended)
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    router("/home"); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRouting();
    }
  }





  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left lg:pr-8 text-white">
            <h1 className="text-blue-600 text-5xl lg:text-6xl font-bold mb-4">
              facebook
            </h1>
            <p className="text-2xl lg:text-3xl">
              Connect with friends and the world around you on our App.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 w-full max-w-md">
            {/* Login Box */}
            <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                 
                  className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-full text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              
                    <div className="relative w-full">
                          <input 
                            type={showPassword ? "text" : "password"}
                             value={password}
                  onChange={(e) => setPassword(e.target.value)} // Switches between text and dots
                             className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-full text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                            placeholder="Confirm password" 
                           
                          />
                          
                          {/* The Eye Icon Button */}
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/3 -translate-y-1/2 text-gray-500"
                          >
                            {showPassword ? <HiOutlineEye size={20} /> : <HiOutlineEyeOff size={20} />}
                          </button>
                        </div>
               
                <button
                  className="w-full  bg-blue-800/30 hover:bg-blue-800/50 text-white font-bold py-3 px-4 rounded-full text-xl mt-4 transition-colors cursor-pointer" 
                 onClick={handleRouting}  
                 
                 >
                  Log In
                </button>
             

                <div className="text-center mt-4">
                  <a 
                    href="https://accounts.google.com/signin/recovery" 
                    target="_blank" 
                    className="text-sm text-blue-600 hover:underline"
                     >
                    Forgot password?
                  </a>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <div className="text-center pb-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full text-lg transition-colors">
                 <a 
      href="https://accounts.google.com/signup" 
      target="_blank" 
      rel="noopener noreferrer"
      
    >
      Create Google Account
    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
