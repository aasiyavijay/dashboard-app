import { useNavigate } from "react-router-dom";

import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";

export default function UsersListTable({ users = [] }) {
  let navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              hover={true}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/users/${user.id}`)}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.company.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
