import * as React from "react";
import { createRoot } from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </Box>
    </ThemeProvider>
    ,
  </React.StrictMode>
);
