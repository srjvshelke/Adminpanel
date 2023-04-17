import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Filter from '../../Components/Filter';
import { memo, useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallcustomerdata } from "../../Redux/Action/Customerdata";
import { useAlert } from "react-alert";
import LoadingScreen from "../../Components/Loaderscreen/LoadingScreen";
const CustomerManagement = () => {
  console.log("CustomerManagement");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = new useDispatch();
  const alert = useAlert();
  const { error, customers, loading } = useSelector((state) => state.Customers);
  const [customerAreafilter, setcustomerfilterArea] = useState('');
  const [customerSafetyfilter, setcustomerfilterSafety] = useState('');
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

  ];

  const header = useMemo(() => {
    return <Header
      title="CUSTOMER MANAGEMENT"
      subtitle="List of Users"
    />
  }, [])
  const rowsdata  =customers !=undefined && customers.length != 0 ? customers.map((row, index) => ({
    name: row.name,
    BPNumber: row.CONTRACTACCOUNT,
    DRS: row.DRSNO,
  })):[];

  useEffect(()=>{
    dispatch(getallcustomerdata());
  },[dispatch])
  return (
    loading ? <LoadingScreen /> :
    <Box >
    {header}

      <Box m="2%" display='flex' alignItems='center' flexDirection='row' sx={{
        width: '96%',
        minHeight: "10vh",
        backgroundColor: colors.blueAccent[700],
      }} >
        <Typography m="2%" variant="h3" color={colors.grey[100]}>
          Filter By  :
        </Typography>
        <Filter Label="Area" options={["All", "Area Managers", "Contractor", "Technician"]} value={customerAreafilter} setvalue={setcustomerfilterArea} />
        <Filter Label="Safety Status" options={["Safe","Unsafe","Unknown"]} value={customerSafetyfilter} setvalue={setcustomerfilterSafety} />
        {/* <Filter Label="Area" />
        <Filter Label="Safety Status"  /> */}
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
  );
};

export default memo(CustomerManagement);
