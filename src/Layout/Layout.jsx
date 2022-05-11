import * as React from "react";
import { Box } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import DesktopDrawerNav from "../components/DrawerNav/DesktopDrawerNav";
import DrawerContent from "../components/DrawerNav/DrawerContent";
import MobilDrawerNav from "../components/DrawerNav/MobilDrawerNav";
import MainAppBar from "../components/MainAppBar/MainAppBar";
import "./style.css";

const drawerWidth = 240;
export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(!open);
  const drawer = <DrawerContent onClick={toggleDrawer} />;

  const location = useLocation();

  return (
    <>
      {location.pathname === "/sign-in" ||
      location.pathname === "/change-password" ||
      location.pathname === "/sign-up" ? (
        <div className="view-form-login">{children}</div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <MainAppBar open={open} onClick={toggleDrawer} />

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <MobilDrawerNav
              open={open}
              drawerWidth={drawerWidth}
              onClose={toggleDrawer}
              drawer={drawer}
            />
            <DesktopDrawerNav
              open={open}
              drawerWidth={drawerWidth}
              drawer={drawer}
            />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pt: 10,
              width: `calc( 100% - ${drawerWidth}px )`,
              pl: { xs: "9px" },
              display: "flex",
              ml: { md: "-10%" },
              justifyContent: "center"
            }}
          >
            <Box>

            {children}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
