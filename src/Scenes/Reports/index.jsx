import { Button, FormControl, InputLabel, NativeSelect, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import Filter from '../../Components/Filter';
import { tokens } from '../../theme';
import { Link } from "react-router-dom";
import Header from '../../Components/Header';

function Reports() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display='flex' flexDirection='column'
    >
      <Header title="REPORTS" subtitle="" />
      <Box m="5% 2%" display='flex' alignItems='center' flexDirection='row' flexWrap="wrap" sx={{
        width: '96%',
        minHeight: "10vh",
        backgroundColor: colors.blueAccent[700],
      }} >
        <Typography m="2%" variant="h4" color={colors.grey[100]}>
          Filter By  :
        </Typography>
        {/* <Filter Label="Date" /> */}
      </Box>


    </Box>
  )
}


export default Reports