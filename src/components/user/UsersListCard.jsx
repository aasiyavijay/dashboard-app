import { Link as RouterLink } from "react-router-dom";

import { grey } from "@mui/material/colors";

import {
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { AlternateEmail, WorkOutline } from "@mui/icons-material";

export default function UsersListCard({ users = [] }) {
  return (
    <Grid container spacing={3}>
      {users.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card elevation={2}>
            <CardActionArea component={RouterLink} to={`/users/${user.id}`}>
              <CardContent>
                <Typography component="h3" variant="h6">
                  {user.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 0.75,
                  }}
                >
                  <AlternateEmail fontSize="small" sx={{ color: grey[500] }} />
                  <Typography component="p" variant="body2" marginLeft={2}>
                    {user.username}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WorkOutline fontSize="small" sx={{ color: grey[500] }} />
                  <Typography component="p" variant="body2" marginLeft={2}>
                    {user.company.name}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
