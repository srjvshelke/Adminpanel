import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../Components/Header";
import { useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import { memo } from "react";

const CustomerManagement = () => {
  console.log("CustomerManagement");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, headerAlign: 'center', align: 'center', FontSize: "60" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: 'center',
      headerAlign: 'center',

    },
    { field: "employeeid", flex: 1, headerName: "Employee ID", align: 'center', headerAlign: 'center' },

    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: "email",
      headerName: "Email ID",
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      align: 'center',
      headerAlign: 'center'
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Customer MANAGEMENT"
        subtitle="List of Customer"
      />
      <Box display="flex" justifyContent="flex-end" alignItems="center">
      
        <Button 
        component={Link}
          to="/AddWorkorder"
          sx={{
            marginLeft:"20px",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "8px 17px",
            width: '100px',
             height: '40px'

          }}
        >
         ADD Customer
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
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

          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default memo(CustomerManagement);
