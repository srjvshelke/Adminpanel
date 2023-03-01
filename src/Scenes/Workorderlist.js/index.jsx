import { FormControl, InputLabel, NativeSelect, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import Filter from '../../Components/Filter';
import { tokens } from '../../theme';

function WorkOrderList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box display='flex' flexDirection='column'
      >
        <Box m="2%" display='flex' alignItems='center' flexDirection='row' sx={{
          width: '96%',
          minHeight: "10vh",
          backgroundColor: colors.grey[800],
        }} >
          <Typography m="2%" variant="h3" color={colors.grey[100]}>
            Filter By  :
          </Typography>
          <Filter Label = "Contractor"/>
          <Filter Label = "Area"/>
        </Box>


      </Box>
    </>
  )
}

export default WorkOrderList