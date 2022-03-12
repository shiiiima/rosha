import React from "react";
import TextField from "@mui/material/TextField";
function Formonline() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
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
  return (
    <TextField
      id="filled-select-currency-native"
      select
      label="Native select"
      value={currency}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      helperText="دینک باختنا ار رظن دروم تمدخ"
      variant="filled"
    >
      {currencies.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}
export default Formonline;
