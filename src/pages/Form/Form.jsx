import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ViewsDatePicker from "../../components/DatePicker/DatePicker";

export default function Form() {
  const [energyType, setEnergyType] = useState("");
  const [time, setTime] = useState(new Date());
  const [consumption, setConsumption] = useState("");

  const handleChangeSelect = (event) => {
    setEnergyType(event.target.value);
  };
  const handleChangeInput = (event) => {
    setConsumption(event.target.value);
  };

  const sendForm = () => {
    const values = {
      energyType,
      time,
      consumption
    };
    console.log(values);
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        border: "1px solid",
        padding: "16px",
        borderRadius: "4px",
        borderColor: "#A8A8A8",
        width: {
          xl: "408px",
          lg: "500px",
          md: "40%",
          sm: "60%",
          xs: "100%"
        }
      }}
    >
      <FormControl margin="dense" fullWidth>
        <ViewsDatePicker value={time} setValue={setTime} />
      </FormControl>

      <FormControl margin="normal" fullWidth>
        <InputLabel id="demo-simple-select-label">Energy Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={energyType}
          label="Energy Type"
          onChange={handleChangeSelect}
        >
          <MenuItem value={"Electricity(kw/h)"}>Electricity(kw/h)</MenuItem>
          <MenuItem value={"Water (m3)"}>Water (m3) </MenuItem>
          <MenuItem value={"Heating (kw/h)"}>Heating (kw/h)</MenuItem>
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField label="Consumption" onChange={handleChangeInput} />
      </FormControl>
      <Button
        sx={{ mt: 2 }}
        fullWidth
        variant="contained"
        size="large"
        onClick={sendForm}
      >
        Save
      </Button>
    </Box>
  );
}
