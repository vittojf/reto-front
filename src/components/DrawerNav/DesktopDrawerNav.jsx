import { Drawer } from "@mui/material";
import * as React from "react";

export default function DesktopDrawerNav(props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          paddingLeft: 0.8,

          whiteSpace: "nowrap",
          width: props.drawerWidth,
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen
            }),
          boxSizing: "border-box",
          ...(!props.open && {
            overflowX: "hidden",
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
              }),
            width: (theme) => ({ xs: theme.spacing(7), sm: theme.spacing(9) })
          })
        }
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#121212",
          color: "white"
        }
      }}
      open={props.open}
    >
      {props.drawer}
    </Drawer>
  );
}
