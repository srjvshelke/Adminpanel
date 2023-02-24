import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebarr from "./Scenes/global/Sidebar";

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
        <Sidebarr isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar}/>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
