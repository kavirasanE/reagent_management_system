import React, { useState ,useContext} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UsageDetails from "../Reagent/UsageDetails";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext/DataProvider";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReagentFunctions = () => {
  const [open, setOpen] = useState(false);
  const { ReagentTableRowNo } = useContext(DataContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-10 px-5">
        <TextField placeholder="Search for the Reagent " className="w-96" />
        {ReagentTableRowNo.length === 1 && (
          <>
            <Link to="/usageform">
              <button className="bg-blue-700 text-white border-white border font-bold p-2 rounded-lg subpixel-antialiased">
                Usage Form
              </button>
            </Link>

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
            <button
              className="bg-red-500 text-white font-bold p-2 px-4 rounded-lg subpixel-antialiased"
              onClick={handleClickOpen}
            >
              Delete
            </button>
            <React.Fragment>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>
                  {"Alert: Once Deleting the data cannot be retrived"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    <UsageDetails />
                  </DialogContentText>
                </DialogContent>
                <DialogActions className="m-2">
                  <button
                    onClick={handleClose}
                    className="bg-white border border-black p-2 px-4 rounded-xl"
                  >
                    Disagree
                  </button>
                  <button
                    onClick={handleClose}
                    className="bg-red-600 text-white p-2 px-4 rounded-xl"
                  >
                    Agree
                  </button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          </>
        )}
      </div>
    </div>
  );
};

export default ReagentFunctions;
