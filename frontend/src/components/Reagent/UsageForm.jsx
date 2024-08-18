import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { DataContext } from "../../DataContext/DataProvider";
import { useNavigate } from "react-router-dom";

const UsageForm = () => {
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
    Stocks_Available: ReagentTableData[Rownumber].Total_Stocks,
    No_of_Packs_Needed: 0,
    Technician_Name: "",
  });

  const [noofpacksused,setnoofpacksused] = useState(ReagentTableData[Rownumber].No_of_Packs_Needed)

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
    console.log(reagentData);
    if (reagentData.No_of_Packs_Needed > reagentData.Stocks_Available) {
      alert("Packs is not Available in the inventory ");
      return;
    } else {
      reagentData.Stocks_Available =
        reagentData.Stocks_Available - reagentData.No_of_Packs_Needed;
        reagentData.No_of_Packs_Needed = Number(reagentData.No_of_Packs_Needed) + Number(noofpacksused)
    }
    try {
      const ReagentEditData = await axios.post(
        "http://localhost:9800/api/createusageform",
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
        Usage Form
      </p>
      <div className="grid md:grid-cols-2 justify-between items-center gap-10 p-4 ">
        <p className="flex justify-between items-center gap-4 ">
          <label className="text-sm font-semibold uppercase ">Analyte</label>
          <Autocomplete
            disabled
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
                disabled
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
            disabled
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
            disabled
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
        <p className="flex justify-between items-center gap-4 ">
          <label className="text-sm font-semibold uppercase ">
            Expiry Date
          </label>
          <input
            type="date"
            name="Expiry_Date"
            className="w-56 p-1.5 border-black/30 rounded-md "
            value={reagentData.Expiry_Date}
          />
        </p>

        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">
            Stocks Available
          </label>
          <TextField
            disabled
            id="stocks-available"
            label="Stocks Available"
            type="number"
            variant="outlined"
            size="small"
            name="Stocks_Available"
            value={reagentData.Stocks_Available}
          />
        </p>
        <p className="flex justify-between items-center gap-4">
          <label className="text-sm font-semibold uppercase ">
            No of Packs Needed
          </label>
          <TextField
            id="new-stock"
            label="No of Packs Needed"
            type="number"
            variant="outlined"
            size="small"
            className=""
            name="No_of_Packs_Needed"
            value={reagentData.No_of_Packs_Needed}
            onChange={(e) => {
              handleReagentDataChange(e);
            }}
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
          className="bg-red-800 text-white p-2 w-40 rounded-lg"
          onClick={handleReagentSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UsageForm;

// const UsageForm = () => {
//   const options = ["Glucose", "analyte2", "analyte3", "analyte4"];

//   const [inputValue, setInputValue] = useState(options[0]);

//   const [reagentData, setReagentData] = useState({
//     Reagent_Name: "",
//     Lot_No: "",
//     Expiry_Date: null,
//     No_of_Available_Packs: "",
//     Stocks_Available: "",
//     new_stock: "",
//     Technician_Name: "",
//   });

//   const handleReagentDataChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     console.log(e);
//     console.log(value);
//     setReagentData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // const handleReagentSubmit = async (e) => {
//   //   e.preventDefault();
//   //   console.log(reagentData);
//   //   console.log(inputValue);
//   //   // if (reagentData.Analyte == null) {
//   //   //   setReagentData((prev) => ({
//   //   //     ...prev,
//   //   //     ["Analyte"]: inputValue,
//   //   //   }));
//   //   // }

//   //   try {
//   //     await axios.post("http://localhost:9800/api/createreagent", reagentData);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // useEffect(() => {
//   //   setReagentData((prev) => ({
//   //     ...prev,
//   //     ["Analyte"]: inputValue,
//   //   }));
//   // }, [inputValue]);
//   return (
//     <>
//       <p className="text-3xl font-bold text-center p-2 underline">Usage Form</p>
//       <div className="grid md:grid-cols-2 justify-between items-center gap-10 p-4 ">
//         <p className="flex justify-between items-center  ">
//           <label className="font-semibold text-sm uppercase ">Analyte</label>
//           <Autocomplete
//             inputValue={inputValue}
//             onInputChange={(event, newInputValue) => {
//               setInputValue(newInputValue);
//               setReagentData((prev) => ({
//                 ...prev,
//                 ["Analyte"]: newInputValue,
//               }));
//             }}
//             id="controllable-states-demo"
//             size="small"
//             options={options}
//             sx={{ width: 220 }}
//             renderInput={(params) => (
//               <TextField    disabled {...params} label="Controllable" name="Analyte" />
//             )}
//           />
//         </p>
//         <p className="flex justify-between items-center gap-4 ">
//           <label className="font-semibold text-sm uppercase ">
//             Reagent Name
//           </label>
//           <TextField    disabled
//             id="lot-no"
//             type="text"
//             size="small"
//             label="Reagent Name"
//             variant="outlined"
//             name="Reagent_Name"
//             value={reagentData.Reagent_Name}
//             onChange={(e) => handleReagentDataChange(e)}
//           />
//         </p>
//         <p className="flex justify-between items-center gap-4">
//           <label className="font-semibold text-sm uppercase ">Lot No</label>
//           <TextField    disabled
//             id="lot-no"
//             type="number"
//             label="Lot Number"
//             variant="outlined"
//             size="small"
//             name="Lot_No"
//             value={reagentData.Lot_No}
//             onChange={(e) => handleReagentDataChange(e)}
//           />
//         </p>
//         <p className="flex justify-between items-center gap-4">
//           <label className="font-semibold text-sm uppercase ">
//             Expiry Date
//           </label>
//           <input
//             type="date"
//             name="Expiry_Date"
//             className="border border-black/30 rounded-md p-1.5 w-56"
//             value={reagentData.Expiry_Date}
//             onChange={(date) => handleReagentDataChange(date)}
//           />
//           {/* <DatePicker
//             label="Select your Date"
//             className="w-80"
//             name="Expiry_Date"
//             value={value}
//             onChange={(date) => handleExpiryDateChange(date)}
//           /> */}
//         </p>
//         <p className="flex justify-between items-center gap-4">
//           <label className="font-semibold text-sm uppercase ">
//             Stocks Available
//           </label>
//           <TextField    disabled
//             id="stocks-available"
//             label="Stocks Available"
//             size="small"
//             type="number"
//             variant="outlined"
//             name="Stocks_Available"
//             value={reagentData.Stocks_Available}
//             onChange={(e) => handleReagentDataChange(e)}
//           />
//         </p>
//         <p className="flex justify-between items-center gap-4 ">
//           <label className="font-semibold text-sm uppercase ">
//             No of Packs Needed
//           </label>
//           <TextField    disabled
//             id="available-packs"
//             type="number"
//             label="No of packs needed"
//             size="small"
//             variant="outlined"
//             name="No_of_Available_Packs"
//             value={reagentData.No_of_Available_Packs}
//             onChange={(e) => handleReagentDataChange(e)}
//           />
//         </p>

//         {/* <p className="flex justify-between items-center gap-4">
//           <label className="font-semibold text-sm uppercase ">New Stock</label>
//           <TextField    disabled
//             id="new-stock"
//             label="New Stock"
//             type="number"
//             size="small"
//             variant="outlined"
//             name="new_stock"
//             value={reagentData.new_stock}
//             onChange={(e) => handleReagentDataChange(e)}
//           />
//         </p> */}
//         <p className="flex justify-between items-center gap-4">
//           <label className="font-semibold text-sm uppercase ">
//             Technician Name
//           </label>
//           <TextField    disabled
//             id="technician-name"
//             label="Technician Name"
//             variant="outlined"
//             size="small"
//             name="Technician_Name"
//             value={reagentData.Technician_Name}
//             onChange={(e) => handleReagentDataChange(e)}
//           />
//         </p>
//         <p className="flex justify-between items-center gap-4">
//           <label className="font-semibold text-sm uppercase ">
//             Current Date
//           </label>
//           <TextField    disabled
//             disabled
//             id="technician-name"
//             label="Timestamp"
//             variant="outlined"
//             size="small"
//             name="Technician_Name"
//             value={new Date()}
//           />
//         </p>
//       </div>
//       <div className="flex items-center justify-center my-5">
//         <button className="bg-red-500 text-white p-2 w-40 rounded-lg hover:scale-95 transition-transform duration-100 ease-in-out">
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };

// export default UsageForm;
