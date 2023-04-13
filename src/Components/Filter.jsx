import { Typography, Box, useTheme, InputLabel,Select, FormControl, MenuItem } from "@mui/material";
import { memo } from "react";
import { tokens } from "../theme";

const Filter = ({ Label, options, value,setvalue }) => {
  const selectedmenu = (e) => {
    console.log(e.target.value);
    setvalue(e.target.value)
  }
  // console.log("Filter");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <FormControl variant="standard" sx={{ m: "3%", minWidth: "12vmax" }}>
        <InputLabel variant="standard" sx={{ fontSize: 17 }} htmlFor="uncontrolled-native">
          {Label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={Label}
          onChange={selectedmenu}
        >
          {
            options.map(e =>
              <MenuItem value={e}>{e}</MenuItem>
            )
          }

        </Select>
      </FormControl>
    </>
  );
};

export default memo(Filter);
