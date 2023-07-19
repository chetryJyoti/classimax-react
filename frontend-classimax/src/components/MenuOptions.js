import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import useStyles from "./NavStyles";

const MenuOptions = ({ options }) => {
  const classes = useStyles();
  const [link, setLink] = useState(options[0].value);

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <Select
        variant="standard"
        disableUnderline={true}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={link}
        label="Dashboard"
        onChange={handleChange}
        defaultValue={options[0].value}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MenuOptions;
