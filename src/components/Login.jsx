import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
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
    // if (passwordRegex.test(password) === false) {
    //   toast.error("Please enter a valid email address");
    //   return;
    // }
    // if (emailRegex.test(email) === false) {
    //   toast.error(
    //     "Password must be at least 8 characters long and contain both letters and numbers",
    //   );
    //   return;
    // }
    // toast.error("Invalid email or password");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left lg:pr-8">
            <h1 className="text-blue-600 text-5xl lg:text-6xl font-bold mb-4">
              facebook
            </h1>
            <p className="text-2xl lg:text-3xl">
              Connect with friends and the world around you on Facebook.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 w-full max-w-md">
            {/* Login Box */}
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                {/* <Link to="/home"> */}
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md text-xl mt-4 transition-colors"
                  onClick={handleLogin}
                >
                  Log In
                </button>
                {/* </Link> */}

                <div className="text-center mb-4">
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="border-t border-gray-300 my-5"></div>
                <div className="text-center pb-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md text-lg transition-colors">
                    Create new account
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
