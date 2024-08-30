import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="  ">
      <div className="flex flex-col justify-center items-center gap-5 my-20 border-2 border-black/20 shadow-2xl rounded-xl  md:mx-40 p-5 md:py-10">
        <p className="font-bold text-2xl ">Sign In</p>
        <p className="font-light text-sm">
          Welcome user,please sigin to continue
        </p>
        <TextField
          required
          id="outlined-required"
          label="Enter your Email Address"
          className="w-96"
        />
        <TextField
          required
          id="outlined-required"
          label="Enter your Password"
          className="w-96"
        />
        <p className="flex flex-row items-center ">
          <Checkbox /> <span>Remember me !</span>
        </p>
        <button className="bg-blue-500 text-xl font-bold  text-white  p-2 px-6 rounded-lg  subpixel-antialiased">Sign In</button>
        <p> Don't have an account? <Link className="underline">SignUp</Link> </p>
      </div>
    </div>
  );
};

export default Login;
