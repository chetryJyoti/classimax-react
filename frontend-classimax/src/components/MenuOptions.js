import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
const MenuOptions = ({ options }) => {
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
            <Link to={option?.loc} style={{ textDecoration: 'none', color: 'inherit' }} >{option.name}</Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MenuOptions;
