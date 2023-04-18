import { Button, FormControl, InputLabel, NativeSelect, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { memo, useEffect, useState, useMemo, useCallback } from "react";
import Filter from '../../Components/Filter';
import { tokens } from '../../theme';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customemanagementfilter } from '../../Filter/CustomerManagementfilter';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useAlert } from "react-alert";
import Header from '../../Components/Header';
import { geAllworkorder } from '../../Redux/Action/Addworkorder';
import LoadingScreen from '../../Components/Loaderscreen/LoadingScreen';
function WorkOrderList() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [Contractorfilter, setContractorfilter] = useState('');
  const [Areafilter, setAreafilter] = useState('');
  const dispatch = new useDispatch();
  const alert = useAlert();
  const { error, AllAddworkorders, loading } = useSelector((state) => state.getallworkorders);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, headerAlign: 'center', align: 'center', FontSize: "60" },

    {
      field: "WorkOrderID",
      headerName: "Work Order ID",
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: "Title",
      headerName: "Title",
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

  ];
  const rowsdata = AllAddworkorders != undefined && AllAddworkorders.length != 0 ? AllAddworkorders.map((row, index) => ({
    id: row.ID,
    WorkOrderID: row.WorkorderID,
    Title: row.Title,
    DRS: row.AssignTo,
  })) : [];
  const header = useMemo(() => {
    return <Header
      title="WORK ORDER LIST"
      // subtitle="List of Work Order"
    />
  }, []);


  useEffect(() => {
    dispatch(geAllworkorder());
  }, [dispatch]);

  return (
    <>
  { loading ? <LoadingScreen /> :
      <Box display='flex' flexDirection='column'
      >

        {header}
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
              justifyContent: "center",
              alignItems: "center"


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
          <Filter Label="Contractor" options={["All", "Area Managers", "Contractor", "Technician"]} value={Contractorfilter} setvalue={setContractorfilter} />
          <Filter Label="Area" options={["Safe", "Unsafe", "Unknown"]} value={Areafilter} setvalue={setAreafilter} />
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

      </Box>}
    </>
  )
}

export default WorkOrderList