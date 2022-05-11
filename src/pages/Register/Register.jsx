import React from "react";
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
import RegisterJWT from "../../components/Authentication/RegisterBanner";

//import Logo from '../../components/Logo';

export default function Register() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <Container maxWidth="sm" sx={{ py: "80px" }}>
          <Box
            sx={{
              mb: 8,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <RouterLink to="/">
              {/* <Logo
                sx={{
                  height: 40,
                  width: 40
                }}
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
                    Register
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3
                }}
              >
                <RegisterJWT />
              </Box>
              <Divider sx={{ my: 3 }} />
              <Link
                color="textSecondary"
                component={RouterLink}
                to="/sign-in"
                variant="body2"
              >
                Having an account
              </Link>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}
