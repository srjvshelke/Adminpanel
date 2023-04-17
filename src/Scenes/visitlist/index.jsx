import { Button, FormControl, InputLabel, NativeSelect, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import Filter from '../../Components/Filter';
import { tokens } from '../../theme';
import { memo, useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from '../../Components/Header';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
function VisitList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const header = useMemo(() => {
    return <Header
      title="VISIT LIST"
      // subtitle="List of Users"
    />
  }, [])
  var rowsdata = "";
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: "BPNumber",
      headerName: "BP Number",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "DRS",
      headerName: "DRS",
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "SAFESTATUS",
      headerName: "Safe Status",
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "BUTTON",
      headerName: "",
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },


  ];
  return (
    <Box display='flex' flexDirection='column'
    >
      {header}
      <Box m="5% 2%" display='flex' alignItems='center' flexDirection='row' flexWrap= "wrap" sx={{
        width: '96%',
        minHeight: "10vh",
        backgroundColor: colors.blueAccent[700],
      }} >
        <Typography m="2%" variant="h4" color={colors.grey[100]}>
          Filter By  :
        </Typography>
        {/* <Filter Label="Contractor" />
        <Filter Label="Visit Status" />
        <Filter Label="Location" />
        <Filter Label="Road Name" />
        <Filter Label="Colony" />
        <Filter Label="Society" />
        <Filter Label="Building Name" /> */}
      </Box>
      <Box m="2%"
          height="75vh"
          sx={{
            width: '96%',
            "& .MuiDataGrid-root": {
              border: "none",

            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
              fontSize: 17,

            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            // disableColumnFilter
            rows={rowsdata}
            columns={columns}
          // components={{ Toolbar: GridToolbar }}
          />
        </Box>


    </Box>
  )
}

export default VisitList