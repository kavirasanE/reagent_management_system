import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddStocksForm = () => {
  const options = [
    "Glucose",
    "Cholesterol",
    "Triglycerides",
    "Urea",
    "Creatinine",
    "Bilirubin",
    "Albumin",
    "Total Protein",
    "Calcium",
    "Sodium",
  ];

  const [inputValue, setInputValue] = useState(options[0]);
  let currentData = new Date();
  const navigate = useNavigate();

  const [reagentData, setReagentData] = useState({
    Reagent_Name: "",
    Lot_No: "",
    Expiry_Date: "",
    Stocks_Avaliable: 0,
    new_stock: 0,
    Technician_Name: "",
  });

  const handleReagentDataChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(e);
    console.log(value);
    setReagentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReagentSubmit = async (e) => {
    e.preventDefault();
      reagentData.Stocks_Avaliable = reagentData.new_stock

    
    console.log(reagentData);
    console.log(inputValue);
    // setReagentData({
    //   ...reagentData,
    //   [reagentData.Stocks_Avaliable]: reagentData.new_stock,
    // });

    try {
      await axios.post("http://localhost:9800/api/createreagent", reagentData);
      if (reagentData) {
        navigate("/reagenttable");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   setReagentData((prev) => ({
  //     ...prev,
  //     ["Analyte"]: inputValue,
  //   }));
  // }, [inputValue]);
  return (
    <>
      <div className="grid md:grid-cols-2 justify-between items-center gap-10 p-4 ">
        <div className="flex justify-between items-center  ">
          <label className="font-semibold text-sm uppercase ">Analyte</label>
          <Autocomplete
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              setReagentData((prev) => ({
                ...prev,
                ["Analyte"]: newInputValue,
              }));
            }}
            id="controllable-states-demo"
            size="small"
            options={options}
            sx={{ width: 220 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select the Reagent"
                name="Analyte"
              />
            )}
          />
        </div>
        <div className="flex justify-between items-center gap-4 ">
          <label className="font-semibold text-sm uppercase ">
            Reagent Name
          </label>
          <TextField
            id="lot-no"
            type="text"
            size="small"
            label="Reagent Name"
            variant="outlined"
            name="Reagent_Name"
            value={reagentData.Reagent_Name}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <label className="font-semibold text-sm uppercase ">Lot No</label>
          <TextField
            id="lot-no"
            type="text"
            label="Lot Number"
            variant="outlined"
            size="small"
            name="Lot_No"
            value={reagentData.Lot_No}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <label className="font-semibold text-sm uppercase ">
            Expiry Date
          </label>
          <input
            type="date"
            name="Expiry_Date"
            className="border border-black/30 rounded-md p-1.5 w-56"
            value={reagentData.Expiry_Date}
            onChange={(date) => handleReagentDataChange(date)}
          />
          {/* <DatePicker
            label="Select your Date"
            className="w-80" 
            name="Expiry_Date"
            value={value}
            onChange={(date) => handleExpiryDateChange(date)}
          /> */}
        </div>
        {/* <div className="flex justify-between items-center gap-4">
          <label className="font-semibold text-sm uppercase ">
            Stocks Available
          </label>
          <TextField
            id="stocks-available"
            label="Stocks Available"
            size="small"
            type="number"
            variant="outlined"
            name="Stocks_Avaliable"
            value={reagentData.Stocks_Avaliable}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </div> */}

        <div className="flex justify-between items-center gap-4">
          <label className="font-semibold text-sm uppercase ">New Stock</label>
          <TextField
            id="new-stock"
            label="New Stock"
            type="number"
            size="small"
            variant="outlined"
            name="new_stock"
            value={reagentData.new_stock}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <label className="font-semibold text-sm uppercase ">
            Technician Name
          </label>
          <TextField
            id="technician-name"
            label="Technician Name"
            variant="outlined"
            size="small"
            name="Technician_Name"
            value={reagentData.Technician_Name}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <label className="font-semibold text-sm uppercase ">
            Current Date
          </label>
          <TextField
            disabled
            id="filled-disabled"
            label="TimeStamp"
            size="small"
            defaultValue={currentData}
            variant="filled"
          />
        </div>
      </div>
      <div className="flex items-center justify-center my-5">
        <button
          onClick={handleReagentSubmit}
          className="bg-green-500 text-white p-2 w-40 rounded-lg hover:scale-95 transition-transform duration-100 ease-in-out"
        >
          Add to Inventory
        </button>
      </div>
    </>
  );
};

export default AddStocksForm;

{
  /* <div className="flex justify-between items-center gap-4 ">
<label className="font-semibold text-sm uppercase ">
  No of Available Packs
</label>
<TextField
  id="available-packs"
  type="number"
  label="Available Packs"
  size="small"
  variant="outlined"
  name="No_of_Available_Packs"
  value={reagentData.No_of_Available_Packs}
  onChange={(e) => handleReagentDataChange(e)}
/>
</div> */
}
