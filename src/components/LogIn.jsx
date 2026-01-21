
import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FacebookProvider, Login } from 'react-facebook';
import { Link } from "react-router";




const GOOGLE_CLIENT_ID = "347541415893-mjgvspqnsi6com56jfsrcm2nf1ud8a9m.apps.googleusercontent.com";
const FACEBOOK_APP_ID = "1243636141060539"

function LogIn(){


const [showPassword, setShowPassword] = useState(false);




    return(



<>

<form  className="bg-white flex flex-col gap-3 w-[500px] h-[60vh] rounded-2xl "> 
<div className="m-5 flex flex-col gap-2 pl-2">
<input type="email" name="email" id="" className= " bg-transparent pl-2 border-2 rounded outline-none focus:ring-0 focus:outline-none h-[6vh] " placeholder="Enter your email"/>

{/* <input className=" bg-transparent border-2 pl-2 rounded outline-none focus:ring-0 focus:outline-none " type="password" name="password" id= "" placeholder="Create password" /> */}

<input type="text" name="text" id="" className=" bg-transparent border-2 pl-2 rounded outline-none focus:ring-0 focus:outline-none h-[6vh] "  placeholder="Create password" />

<div className="relative w-full">
      <input 
        type={showPassword ? "text" : "password"} // Switches between text and dots
        className="w-full bg-transparent pl-2 pr-10 border-2 rounded outline-none h-10" 
        placeholder="Confirm password" 
      />
      
      {/* The Eye Icon Button */}
      <button 
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
      </button>
    </div>

<Link className="bg-blue-500 rounded text-white text-center font-semibold" to="/home">
<button>
  Submit
</button>
</Link>

<p className="text-center">Already have an account? 
    <a href="" className="text-blue-600">Login</a>
    
    </p>

<div className="flex text-center justify-center ">

    <span className="flex items-center justify-center">
   <hr className="border-gray-300 dark:border-gray-600 mx-2 my-2  w-100 " />
<p className="text-gray-600">Or</p>
<hr className="border-gray-300 dark:border-gray-600 mx-2 my-2 w-[100%]" />
    </span>
</div>

{/* login with facebook */}

<div>
   <FacebookProvider appId={1243636141060539}>
  <Login
    onSuccess={(response) => console.log(response)}
    onError={(error) => console.log(error)}

  >
    {({ onClick, isLoading }) => (
      <button 
        type="button" 
        onClick={onClick} 
        className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded font-bold flex items-center justify-center gap-2"
      >
        {isLoading ? 'Connecting...' : 'Login with Facebook'}
      </button>
    )}
  </Login>
</FacebookProvider>
</div>

{/* login with Google */}

<div  className="">
   <GoogleOAuthProvider clientId="347541415893-mjgvspqnsi6com56jfsrcm2nf1ud8a9m.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={credentialResponse => console.log(credentialResponse)}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  
</div>


</div>

</form>

</>
    )
}


export default LogIn;