import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
const TestDoneForm = () => {
  const [age, setAge] = React.useState("");
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  
  return (
    <div>
      <FormControl fullWidth>
        <p className="text-center text-purple-700 font-bold text-xl p-4">
          TEST DATA FORM
        </p>

        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select your reagent"
            defaultValue="EUR"
            className="w-full m-2"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="flex flex-col gap-y-4 my-4 ">
          <TextField
            id="outlined-number"
            // label="No of test Done Today"
            type="number"
            placeholder="No of test Done Today"
            InputLabelProps={{
              shrink: true,
            }}
            className="w-full "
          />
          <TextField
            id="outlined-number"
            // label="No of test Done Today"
            type="number"
            placeholder="No of Pack Used"
            InputLabelProps={{
              shrink: true,
            }}
            className="w-full "
          />
          <TextField
            id="outlined-number"
            // label="No of test Done Today"
            type="number"
            placeholder="No of test/pack"
            InputLabelProps={{
              shrink: true,
            }}
            className="w-full "
          />
          <button
            className="border-2 border-black/20 
          bg-purple-600 p-2 mx-20 rounded-xl text-white 
          hover:scale-90 transition-transform duration-400"
          >
            Submit Data
          </button>
        </div>
      </FormControl>
    </div>
  );
};


export default TestDoneForm;
