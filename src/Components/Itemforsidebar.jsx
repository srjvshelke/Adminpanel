import { Typography, Box, useTheme, InputLabel, NativeSelect,FormControl } from "@mui/material";
import { memo } from "react";
import { tokens } from "../theme";

const Itemforsidebar = ({ title, Label }) => {
  console.log("Filter");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>

    </>
  );
};

export default memo(Itemforsidebar);
