import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomInputs from "../../components/CustomInputs/CustomInputs";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#000000"
    }
  }
});

export default function ChangePassword() {
  const [data, setData] = React.useState();

  const handleSubmit = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const items = [
    {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "Npassword",
      label: "New password",
      type: "password",
      id: "password",
      autoComplete: "current-password",
      value: data?.password,
      onChange: handleSubmit
    },
    {
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "Rpassword",
      label: "Repeat new password",
      type: "password",
      id: "repeatPassword",
      autoComplete: "current-password",
      value: data?.repeatPassword,
      onChange: handleSubmit
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          width: {
            xl: "408px",
            lg: "500px",
            md: "40%",
            sm: "60%",
            xs: "100%"
          }
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            border: "1px solid",
            width: "100%",
            padding: "16px",
            borderRadius: "4px",
            borderColor: "#A8A8A8"
          }}
        >
          <Typography component="h1" sx={{ textAlign: "left" }} variant="h5">
            Change Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CustomInputs items={items} />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="secondary"
              sx={{ mb: 2 }}
            >
              Cancel
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" style={{ marginRight: "5px" }} variant="body2">
                  Sing In
                </Link>
                <Link href="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
