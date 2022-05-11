import * as React from "react";
import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TodayIcon from "@mui/icons-material/Today";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItem from "@mui/material/ListItem";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function DrawerContent(props) {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#979797"
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f"
      }
    }
  });

  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1]
        }}
      >
        <IconButton onClick={props.onClick}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ThemeProvider theme={theme}>
                {index % 2 === 0 ? (
                  <InboxIcon color="primary" />
                ) : (
                  <MailIcon color="primary" />
                )}
              </ThemeProvider>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
