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

        <div >
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

        <div className="my-4 ">
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
        </div>
      </FormControl>
    </div>
  );
};

export default TestDoneForm;
