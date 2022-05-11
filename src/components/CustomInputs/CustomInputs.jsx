import React from "react";
import TextField from "@mui/material/TextField";
export default function CustomInputs({ items }) {
  return (
    <>
      {items.map((el, key) => {
        return <TextField key={key} {...el} />;
      })}
    </>
  );
}
