import { Typography, Box, useTheme, InputLabel, NativeSelect, FormControl } from "@mui/material";
import { memo } from "react";
import { tokens } from "../theme";

const Filter = ({ Label, options }) => {
  console.log("Filter");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <FormControl variant="standard" sx={{ m: "3%", minWidth: "12vmax" }}>
        <InputLabel variant="standard" sx={{ fontSize: 17 }} htmlFor="uncontrolled-native">
          {Label}
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: { Label },
            id: 'uncontrolled-native',
          }}
        >
          {
            options.map((email) => {
              <option value={10}>{e}</option>
            })

          }
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default memo(Filter);
