import { Typography, Box, useTheme } from "@mui/material";
import { memo } from "react";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  console.log("header");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px"  display="flex" justifyContent="center" alignItems="center"
    flexDirection="column">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default memo(Header);
