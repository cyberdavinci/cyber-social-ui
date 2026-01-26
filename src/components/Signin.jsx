
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FacebookProvider, Login } from 'react-facebook';
import { Link } from "react-router";




const GOOGLE_CLIENT_ID = "347541415893-mjgvspqnsi6com56jfsrcm2nf1ud8a9m.apps.googleusercontent.com";
const FACEBOOK_APP_ID = "1243636141060539"

function Signin(){

 const navigate = useNavigate();

  const handleSuccess = (response, provider) => {
    console.log(`${provider} login worked:`, response);
    
    navigate("/home"); 
  };

const [email, setEmail] = useState("");
 

  const handleRouting = () => {
    // 1. Validation (Optional but recommended)
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    // 2. The Navigation Action
    // This is the manual way to change the URL without a Link tag
    navigate("/home"); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRouting();
    }
  }


 const [showPassword, setShowPassword] = useState(false);


 
    return(



<div className=" bg-gray-800 h-screen flex items-center justify-center">

<form  className=" bg-gray-900 flex flex-col gap-3 w-125 h-auto  m-auto rounded-lg shadow-2xl"> 
<div className="m-5 flex flex-col gap-2 pl-2">

<input 
      type="email"
        placeholder="Enter email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
className= " bg-transparent pl-2 border-2 rounded-full text-white outline-none focus:ring-0 focus:outline-none h-10 "

/>

<div className="relative w-full">
      <input 
        type={showPassword ? "text" : "password"} // Switches between text and dots
        className="w-full bg-transparent pl-2 pr-10 border-2 rounded-full text-white outline-none h-10" 
        placeholder="Creat password"
      
      />
      
      {/* The Eye Icon Button */}
      <button 
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <HiOutlineEye size={20} /> : <HiOutlineEyeOff size={20} />}
      </button>
    </div>

<div className="relative w-full">
      <input 
        type={showPassword ? "text" : "password"} // Switches between text and dots
        className="w-full bg-transparent pl-2 pr-10 border-2 rounded-full text-white outline-none h-10" 
        placeholder="Confirm password" 
      />
      
      {/* The Eye Icon Button */}
      <button 
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <HiOutlineEye size={20} /> : <HiOutlineEyeOff size={20} />}
      </button>
    </div>


<button className=" bg-blue-800/30 hover:bg-blue-800/50 rounded-full h-10 pt-2 cursor-pointer text-white text-center font-semibold"
onClick={handleRouting}
>
  Submit
</button>


<p className="text-center text-white">Already have an account? 
    <Link className="text-blue-600" to="/login">Login</Link>
    
    </p>

<div className="flex text-center justify-center ">

    <span className="flex items-center justify-center">
   <hr className="border-gray-300 dark:border-gray-600 mx-2 my-2  w-100 " />
<p className="text-gray-600">Or</p>
<hr className="border-gray-300 dark:border-gray-600 mx-2 my-2 w-[100%]" />
    </span>
</div>

{/* login with facebook */}

<div className="rounded-full">
   <FacebookProvider appId={'1243636141060539'}>
  <Login
    onSuccess={(res) => handleSuccess(res, "Facebook")}
    onError={(error) => console.log(error)}>

    {({ onClick, isLoading }) => (
      <button 
        type="button" 
        onClick={onClick} 
        className="bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 text-white w-full py-2 font-bold flex items-center justify-center gap-2"
      >
        {isLoading ? 'Connecting...' : 'Login with Facebook'}
      </button>
    )}
  </Login>
</FacebookProvider>
</div>

{/* login with Google */}

<div  className="rounded-full">
   <GoogleOAuthProvider clientId="347541415893-mjgvspqnsi6com56jfsrcm2nf1ud8a9m.apps.googleusercontent.com">
      <GoogleLogin
       onSuccess={(res) => handleSuccess(res, "Google")}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  
</div>


</div>

</form>

</div>
    )
}


export default Signin;