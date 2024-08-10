import * as React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const ReagentFunctions = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-10 px-5">
        <TextField placeholder="Search for the Reagent " className="w-96" />
        <button className="bg-blue-700 text-white border-white border font-bold p-2 rounded-lg subpixel-antialiased">
          Usage Form
        </button>
        <Link to="/usagedetails">
          <button className=" text-black  border-blue-200 border font-bold p-2 rounded-lg subpixel-antialiased">
            Usage Details
          </button>
        </Link>
        <Link to="/editreagent">
          <button className="bg-orange-400 text-white font-bold p-2 px-4 rounded-lg subpixel-antialiased">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReagentFunctions;
