import { Typography, Box, useTheme, InputLabel, NativeSelect,FormControl } from "@mui/material";
import { memo } from "react";
import { tokens } from "../theme";

const Filter = ({ title, Label }) => {
  console.log("Filter");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
     <FormControl  variant="standard" sx={{ m: "3%", minWidth: 120 }}>
            <InputLabel variant="standard" sx={{ fontSize:17 }} htmlFor="uncontrolled-native">
            {Label}
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
    </>
  );
};

export default memo(Filter);
