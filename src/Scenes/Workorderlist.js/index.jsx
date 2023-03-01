import { FormControl, InputLabel, NativeSelect, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';

function WorkOrderList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box display='flex' flexDirection='column'
      >
        <Box m="2%" display='flex' alignItems='center' flexDirection='row' sx={{
          width:'96%',
          minHeight:"10vh",
           backgroundColor: colors.blueAccent[700],
        }} >
          <Typography variant="h3" color={colors.grey[100]}>
            Filter By :
          </Typography>
          <FormControl width="200px" >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Contractor
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
          <FormControl >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Area
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
          </Box>


      </Box>
    </>
  )
}

export default WorkOrderList