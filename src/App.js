import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebarr from "./Scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./Scenes/dashboard";
import UserManagement from "./Scenes/UserManagement/index";
import Adduser from "./Components/Adduser";
import CustomerManagement from "./Scenes/Customermanagement/CustomerManagement";
import WorkOrderList from "./Scenes/Workorderlist.js";
import VisitList from "./Scenes/visitlist";
import Reports from "./Scenes/Reports";
import AddWorkorder from "./Scenes/Workorderlist.js/AddWorkorder";
import LoadingScreen from "./Components/Loaderscreen/LoadingScreen";
import Login from "./Scenes/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import store from "./Redux/store";
import { loadUser } from "./Redux/Action/Login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());

  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {
        isAuthenticated ?
        <div className="app">
          <Sidebarr isSidebar={isSidebar} />

          <main className="content">

            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/Login" element={<Login />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/usermanagement" element={<UserManagement />} />
              <Route path="/Adduser" element={<Adduser />} />
              <Route path="/CustomerManagement" element={<CustomerManagement />} />
              <Route path="/WorkOrderList" element={<WorkOrderList />} />
              <Route path="/VisitList" element={<VisitList />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/AddWorkorder" element={<AddWorkorder />} />
              <Route path="/LoadingScreen" element={<LoadingScreen />} />
            </Routes>
          </main>
        </div>

        :

        <Login />

        }

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
