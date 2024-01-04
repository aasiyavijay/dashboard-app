import { useState, useEffect } from "react";
import axios from "axios";

import {
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { grey, red } from "@mui/material/colors";

import Loading from "./../Loading";
import UsersListCard from "./UsersListCard";
import UsersListTable from "./UsersListTable";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState(localStorage.getItem("view") || "table");
  // const ignore = useRef(null); //to run

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("view", view);
  }, [view]);

  const handleViewChange = (event, nextView) => {
    setView(nextView);
  };

  if (loading) return <Loading data-test="loading" />;
  if (error)
    return <Typography color={red[500]}>Error: {error.message}</Typography>;
  if (!loading && users.length === 0)
    return <Typography color={grey[500]}>No users found</Typography>;

  return (
    <>
      <Box
        sx={{
          marginBottom: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h2" variant="h5">
          List of Users
        </Typography>
        <ToggleButtonGroup
          value={view}
          color="primary"
          exclusive
          onChange={handleViewChange}
        >
          <ToggleButton value="table" aria-label="table">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="card" aria-label="card">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* switch views */}
      {view === "card" && <UsersListCard users={users} />}
      {view === "table" && <UsersListTable users={users} />}
    </>
  );
}
