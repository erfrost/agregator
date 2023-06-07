import React from "react";
import "./filter.css";
import { Button, TextField } from "@mui/material";

const FilterBox = () => {
  return (
    <div className="filter-box">
      <div className="filter-content">
        <Button variant="contained" className="filter-btn">
          Категории
        </Button>
        <TextField
          className="textField"
          id="outlined-basic"
          label="Поиск по названию"
          variant="filled"
          multiline
          inputProps={{ style: { color: "rgba(0, 0, 0, 0.6)" } }}
        />
      </div>
    </div>
  );
};

export default FilterBox;
