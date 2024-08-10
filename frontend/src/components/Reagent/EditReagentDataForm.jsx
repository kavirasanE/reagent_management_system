import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { DataContext } from "../../DataContext/DataProvider";


const EditReagentDataForm = () => {
  const { ReagentTableRowNo, ReagentTableData } = useContext(DataContext);
  console.log(ReagentTableData);
  console.log(ReagentTableRowNo);

  let Rownumber = parseInt(ReagentTableRowNo.trim(), 10) - 1;
  console.log(Rownumber);

  const [reagentData, setReagentData] = useState({
    Reagent_Name: ReagentTableData[Rownumber].Reagent_Name,
    Lot_No: ReagentTableData[Rownumber].Lot_No,
    Expiry_Date: ReagentTableData[Rownumber].Expiry_Date,
    No_of_Available_Packs: ReagentTableData[Rownumber].No_of_Available_Packs,
    Stocks_Avaliable: ReagentTableData[Rownumber].Stocks_Avaliable,
    new_stock: ReagentTableData[Rownumber].new_stock,
    Technician_Name: ReagentTableData[Rownumber].Technician_Name,
  });

  const handleReagentDataChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value);
    setReagentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const options = ["Glucose", "analyte2", "analyte3", "analyte4"];

  const [inputValue, setInputValue] = useState(
    ReagentTableData[Rownumber].Analyte
  );

  // useEffect(() => {
  //   setReagentData((prev) => ({
  //     ...prev,
  //     ["Analyte"]: inputValue,
  //   }));
  // }, [inputValue]);

  const handleReagentSubmit = async (e) => {
    e.preventDefault();
    console.log(reagentData);
    try {
      const ReagentEditData = await axios.put(
        `http://localhost:9800/api/updatereagent/${Rownumber + 1}`,
        reagentData
      );
      if (ReagentEditData) {
        console.log("edited done");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p className="font-bold text-3xl text-center">Edit Reagent Form</p>
      <div className="grid md:grid-cols-2 justify-between items-center gap-10 p-4 ">
        <p className="flex justify-center items-center gap-4 ">
          <label className="text-ls font-bold uppercase w-20">Analyte</label>
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
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={ReagentTableData[Rownumber].Analyte}
              />
            )}
          />
        </p>
        <p className="flex justify-center items-center gap-4 ">
          <label className="text-ls font-bold uppercase w-20">
            Reagent Name
          </label>
          <TextField
            id="lot-no"
            type="text"
            label="Reagent Name"
            variant="outlined"
            className="w-80"
            name="Reagent_Name"
            value={reagentData.Reagent_Name}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-center items-center gap-4">
          <label className="text-ls font-bold uppercase w-24">Lot No</label>
          <TextField
            id="lot-no"
            type="number"
            label="Lot Number"
            variant="outlined"
            className="w-80"
            name="Lot_No"
            value={reagentData.Lot_No}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-center items-center gap-4">
          <label className="text-ls font-bold uppercase w-24">
            Expiry Date
          </label>
          <input
            type="date"
            name="Expiry_Date"
            className="w-60 h-14 p-2"
            value={reagentData.Expiry_Date}
            onChange={(date) => handleReagentDataChange(date)}
          />
        </p>
        <p className="flex justify-center items-center gap-4 ">
          <label className="text-ls font-bold uppercase w-20">
            No of Available Packs
          </label>
          <TextField
            id="available-packs"
            type="number"
            label="Available Packs"
            variant="outlined"
            className="w-80"
            name="No_of_Available_Packs"
            value={reagentData.No_of_Available_Packs}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-center items-center gap-4">
          <label className="text-ls font-bold uppercase w-24">
            Stocks Available
          </label>
          <TextField
            id="stocks-available"
            label="Stocks Available"
            type="number"
            variant="outlined"
            className="w-80"
            name="Stocks_Avaliable"
            value={reagentData.Stocks_Avaliable}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-center items-center gap-4">
          <label className="text-ls font-bold uppercase w-24">New Stock</label>
          <TextField
            id="new-stock"
            label="New Stock"
            type="number"
            variant="outlined"
            className="w-80"
            name="new_stock"
            value={reagentData.new_stock}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-center items-center gap-4">
          <label className="text-ls font-bold uppercase w-24">
            Technician Name
          </label>
          <TextField
            id="technician-name"
            label="Technician Name"
            variant="outlined"
            className="w-80"
            name="Technician_Name"
            value={reagentData.Technician_Name}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <button
          className="bg-red-500 text-white p-3 w-40 rounded-lg"
          onClick={handleReagentSubmit}
        >
          Edit Data
        </button>
      </div>
    </>
  );
};

export default EditReagentDataForm;
