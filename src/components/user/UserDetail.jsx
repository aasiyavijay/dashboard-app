import { useState, useEffect } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  ArrowBackIos,
  AlternateEmail,
  EmailOutlined,
  PhoneOutlined,
  InsertLink,
  WorkOutline,
  LabelOutlined,
} from "@mui/icons-material";

import { red } from "@mui/material/colors";

import Loading from "../Loading";

export default function UserDetail() {
  let { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [id]);

  const avatarString =
    user !== null &&
    user.name
      .split(" ")
      .map((x) => x[0])
      .join("")
      .toUpperCase(); // to be done: exclude titles & initials

  const companyLabels = user !== null && user.company.bs.split(" ");

  const companylabelsComponent = companyLabels.length > 0 && (
    <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap">
      {companyLabels.map((label, index) => (
        <Chip
          label={label}
          size="small"
          variant="outlined"
          key={index}
          sx={{ textTransform: "capitalize" }}
        />
      ))}
    </Stack>
  );

  if (loading) return <Loading />;
  if (error)
    return <Typography color={red[500]}>Error: {error.message}</Typography>;

  return (
    <>
      <Button
        size="small"
        variant="outlined"
        startIcon={<ArrowBackIos />}
        sx={{ marginBottom: 4 }}
        component={RouterLink}
        to="/users"
      >
        Back
      </Button>

      <Paper elevation={2} sx={{ maxWidth: 500 }}>
        <Box padding={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar>{avatarString}</Avatar>
            <Typography
              variant="h5"
              component="h2"
              sx={{ marginLeft: 2, flexGrow: 1, display: "flex" }}
            >
              {user.name}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box padding={2}>
          <Typography variant="h6" component="h3">
            Personal
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <AlternateEmail />
              </ListItemIcon>
              <ListItemText primary={user.username} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <ListItemText primary={user.name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneOutlined />
              </ListItemIcon>
              <ListItemText primary={user.phone} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <InsertLink />
              </ListItemIcon>
              <ListItemText
                primary={user.website}
                component="link"
                href={user.website}
              />
            </ListItem>
          </List>
        </Box>

        <Divider />
        <Box padding={2}>
          <Typography variant="h6" component="h3">
            Company
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <WorkOutline />
              </ListItemIcon>
              <ListItemText
                primary={user.company.name}
                secondary={user.company.catchPhrase}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LabelOutlined />
              </ListItemIcon>
              <ListItemText primary={companylabelsComponent} />
            </ListItem>
          </List>
        </Box>
      </Paper>
    </>
  );
}
