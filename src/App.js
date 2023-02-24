import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
// import Sidebar from "./Scenes/global/Sidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        {/* <Sidebar isSidebar={isSidebar} /> */}
        <main className="content">
          <Topbar/>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
