import { HashRouter, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import BasicAppBar from "./components/BasicAppBar";
import Dashboard from "./components/dashboard/Dashboard";
import UsersList from "./components/user/UsersList";
import UserDetail from "./components/user/UserDetail";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <BasicAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="users/:id" element={<UserDetail />} />
          </Routes>
        </Container>
      </Box>
    </HashRouter>
  );
}

export default App;
