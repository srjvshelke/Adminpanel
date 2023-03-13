import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../Components/Header";
import { useTheme } from "@mui/material";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getallusers } from "../../Redux/Action/Adduser";
import LoadingScreen from "../../Components/Loaderscreen/LoadingScreen";

const UserManagement = () => {
 
  const dispatch = new useDispatch();
  const theme = useTheme();
  const alert = useAlert();
  const colors = tokens(theme.palette.mode);
  const {error, users,loading} = useSelector((state) => state.allusers);

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


 const rowsdata = users  ? users.map((row,index)=>({
    id:row.ID,
    name: row.firstname + " " + row.lastname,
    employeeid:row.employeeid ,
    contact:row.contact,
    email:row.emailid,
    role:row.type,
  })) : [];
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
      dispatch(getallusers());
   
  }, []);


  return (
    loading? <LoadingScreen/>: <Box m="20px">
      <Header
        title="USER MANAGEMENT"
        subtitle="List of Users"
      />
      <Box display="flex" justifyContent="flex-end" alignItems="center">

        <Button
          component={Link}
          to="/Adduser"
          sx={{
            marginLeft: "20px",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "8px 17px",
            width: '100px',
            height: '40px'

          }}
        >
          ADD USER
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
          rows={rowsdata}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default memo(UserManagement);
