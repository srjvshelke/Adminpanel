import { Button, FormControl, InputLabel, NativeSelect, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import Filter from '../../Components/Filter';
import { tokens } from '../../theme';
import { Link } from "react-router-dom";

function WorkOrderList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box display='flex' flexDirection='column'
      >

        <Box m="2%" display="flex" justifyContent="flex-end" alignItems="center">

          <Button
            component={Link}
            to="/AddWorkorder"
            sx={{
              // marginLeft: "20px",
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "1vw",
              fontWeight: "bold",
              padding: "1% 2%",
              width: '15%',
              height: '10%',
              justifyContent:"center",
              alignItems:"center"
              

            }}
          >
            ADD WORKORDER
          </Button>
        </Box>

        <Box m="2%" display='flex' alignItems='center' flexDirection='row' sx={{
          width: '96%',
          minHeight: "10vh",
          backgroundColor: colors.blueAccent[700],
        }} >
          <Typography m="2%" variant="h3" color={colors.grey[100]}>
            Filter By  :
          </Typography>
          <Filter Label="Contractor" />
          <Filter Label="Area" />
        </Box>


      </Box>
    </>
  )
}

export default WorkOrderList