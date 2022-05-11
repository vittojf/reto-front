import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography
} from "@material-ui/core";
import LoginBanner from "../../components/Authentication/LoginBanner";

//import logo from '../../assets/images.png';

export default function Login() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        height: "80vh"
      }}
    >
      <Container maxWidth="sm" sx={{ py: "80px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 8
          }}
        >
          <RouterLink
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            {/* <Logo
                sx={{
                  height: 40,
                  width: 40
                }}
              /> */}
            {/* <img
                src={logo}
                alt="logo"
                style={{ width: '70%' }}
              /> */}
          </RouterLink>
        </Box>
        <Card sx={{ boxShadow: "unset", border: "1px solid #A8A8A8 " }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 4
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                mb: 3
              }}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h4">
                  Sign In
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              <LoginBanner />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3
              }}
            >
              <Link
                color="textSecondary"
                component={RouterLink}
                to="/sign-up"
                variant="body2"
              >
                Sign up
              </Link>
              <Link
                color="textSecondary"
                component={RouterLink}
                to="/change-password"
                variant="body2"
              >
                Forgot Password?
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
