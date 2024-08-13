import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { DataContext } from "../../DataContext/DataProvider";
import { useNavigate } from "react-router-dom";

const EditReagentDataForm = () => {
  const { ReagentTableRowNo, ReagentTableData } = useContext(DataContext);
  // console.log(ReagentTableData);
  // console.log(ReagentTableRowNo);
  const navigate = useNavigate();

  let Rownumber = parseInt(ReagentTableRowNo.trim(), 10) - 1;
  // console.log(ReagentTableData[Rownumber]);
  const options = ["Glucose", "analyte2", "analyte3", "analyte4"];

  // const [inputValue, setInputValue] = useState(
  //   ReagentTableData[Rownumber].Analyte
  // );

  const [reagentData, setReagentData] = useState({
    Analyte: ReagentTableData[Rownumber].Analyte,
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
    // console.log(value);
    setReagentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReagentSubmit = async (e) => {
    e.preventDefault();
    console.log(reagentData, "sdvlkjn");
    try {
      const ReagentEditData = await axios.put(
        `http://localhost:9800/api/updatereagent/${Rownumber + 1}`,
        reagentData
      );
      if (ReagentEditData) {
        navigate("/reagenttable");
        // console.log("edited done");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-3 rounded-xl">
      <p className="font-bold text-3xl text-center underline py-2">
        Edit Reagent Form
      </p>
      <div className="grid md:grid-cols-2 justify-between items-center gap-10 p-4 ">
        <p className="flex justify-between items-center gap-4 ">
          <label className="text-sm font-semibold uppercase ">Analyte</label>
          <Autocomplete
            onInputChange={(event, newInputValue) => {
              setReagentData((prev) => ({
                ...prev,
                Analyte: newInputValue,
              }));
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 220 }}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label={ReagentTableData[Rownumber].Analyte}
              />
            )}
          />
        </p>
        <p className="flex justify-between items-center gap-4 ">
          <label className="text-sm font-semibold uppercase ">
            Reagent Name
          </label>
          <TextField
            id="lot-no"
            type="text"
            label="Reagent Name"
            variant="outlined"
            size="small"
            className=""
            name="Reagent_Name"
            value={reagentData.Reagent_Name}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">Lot No</label>
          <TextField
            id="lot-no"
            type="text"
            label="Lot Number"
            variant="outlined"
            size="small"
            className=""
            name="Lot_No"
            value={reagentData.Lot_No}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">
            Expiry Date
          </label>
          <input
            type="date"
            name="Expiry_Date"
            className="w-56 p-1.5 border-black/30 rounded-md"
            value={reagentData.Expiry_Date}
            onChange={(date) => handleReagentDataChange(date)}
          />
        </p>
          {/* <p className="flex justify-between items-center gap-4 ">
            <label className="text-sm font-semibold uppercase ">
              No of Available Packs
            </label>
            <TextField
              id="available-packs"
              type="number"
              label="Available Packs"
              variant="outlined"
              size="small"
              className=""
              name="No_of_Available_Packs"
              value={reagentData.No_of_Available_Packs}
              onChange={(e) => handleReagentDataChange(e)}
            />
          </p> */}
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">
            Stocks Available
          </label>
          <TextField
            id="stocks-available"
            label="Stocks Available"
            type="number"
            variant="outlined"
            size="small"
            className=""
            name="Stocks_Avaliable"
            value={reagentData.Stocks_Avaliable}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">New Stock</label>
          <TextField
            id="new-stock"
            label="New Stock"
            type="number"
            variant="outlined"
            size="small"
            className=""
            name="new_stock"
            value={reagentData.new_stock}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">
            Technician Name
          </label>
          <TextField
            id="technician-name"
            label="Technician Name"
            variant="outlined"
            size="small"
            className=""
            name="Technician_Name"
            value={reagentData.Technician_Name}
            onChange={(e) => handleReagentDataChange(e)}
          />
        </p>
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">
           Current Date
          </label>
          <TextField
            disabled
            id="technician-name"
            label="TimeStamp"
            variant="outlined"
            size="small"
            className=""
            name="Technician_Name"
            value={new Date()}
          />
        </p>
      </div>
      <div className="flex items-center justify-center my-5">
        <button
          className="bg-blue-800 text-white p-2 w-40 rounded-lg"
          onClick={handleReagentSubmit}
        >
          Edit Data
        </button>
      </div>
    </div>
  );
};

export default EditReagentDataForm;
