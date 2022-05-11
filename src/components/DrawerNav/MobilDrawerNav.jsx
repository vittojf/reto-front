import { Drawer } from "@mui/material";
import * as React from "react";

export default function MobilDrawerNav(props) {
  return (
    <Drawer
      variant="temporary"
      container={props.container}
      open={props.open}
      onClose={props.onClose}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: props.drawerWidth
        }
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#121212",
          color: "white"
        }
      }}
    >
      {props.drawer}
    </Drawer>
  );
}
