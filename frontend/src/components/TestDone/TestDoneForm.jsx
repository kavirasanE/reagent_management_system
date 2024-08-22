import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px",
  boxShadow: 24,
  px: 2,
};

export default function TestDoneForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [TestDonedata, setTestDonedata] = useState({
    CurrentDate: Date(),
    Analyte_Name: "",
    TestDoneCount: 0,
  });

  const handleTestDoneChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(value);
    setTestDonedata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTestDoneFormSubmit = () => {
    // const colDate = TestDonedata.CurrentDate;
    // const colNo = colDate.split("-");
    // console.log(colDate.split("-"));
    // setTestDonedata((prev) => ({
    //   ...prev,
    //   [colNo[2]]: parseInt(TestDonedata.TestDoneCount),
    //   ["Month"]: parseInt(colNo[1]),
    // }));
    // console.log(TestDonedata);
    try {
     
      const sendTestDone = axios.post(
        "http://localhost:9800/testdone/testDoneform",
        TestDonedata
      );
      if (sendTestDone) {
        console.log("message successfully send");
        setOpen(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>Test Done Form</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-center font-bold mt-4 text-xl underline">
            Test Done Form
          </p>
          <p className=" flex gap-10 items-center justify-center my-10">
            <label className="font-semibold text-sm text-nowrap ">
              Select the Date
            </label>
            <input
              type="date"
              name="CurrentDate"
              value={TestDonedata.CurrentDate}
              onChange={(e) => handleTestDoneChange(e)}
              className="border border-black/30 rounded-md p-1.5 w-56"
            />
          </p>
          <p className=" flex gap-10 items-center justify-center my-10">
            <label className="font-semibold text-sm text-nowrap ">
              Analyte Name
            </label>
            <TextField
              id="lot-no"
              type="string"
              label="Enter the Analyte"
              variant="outlined"
              size="small"
              value={TestDonedata.Analyte_Name}
              name="Analyte_Name"
              onChange={(e) => handleTestDoneChange(e)}
            />
          </p>
          <p className=" flex gap-6 items-center justify-center my-10">
            <label className="font-semibold text-sm text-nowrap ">
              No Of test Done
            </label>
            <TextField
              id="lot-no"
              type="number"
              label="No of Test Done"
              variant="outlined"
              size="small"
              name="TestDoneCount"
              value={TestDonedata.TestDoneCount}
              onChange={(e) => handleTestDoneChange(e)}
            />
          </p>
          {/* <p className=" flex gap-6 items-center justify-center my-10">
            <label className="font-semibold text-sm text-nowrap ">
              Technician Name
            </label>
            <TextField
              id="lot-no"
              type="number"
              label="Enter your  Name"
              variant="outlined"
              size="small"
            />
          </p> */}
          <p className="flex justify-center p-5 ">
            <button
              className="bg-gray-500 text-white font-semibold p-2 px-4 rounded-md"
              onClick={handleTestDoneFormSubmit}
            >
              Submit
            </button>
          </p>
        </Box>
      </Modal>
    </div>
  );
}
