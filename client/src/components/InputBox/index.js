import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputBox({
  onChange,
  label,
  type,
  InputProps,
  name,
  value,
}) {
  const classes = useStyles();

  return (
    <TextField
      value={value}
      name={name}
      className={classes.margin}
      type={type}
      id="input-with-icon-textfield"
      label={label}
      InputProps={InputProps}
      onChange={onChange}
    />
  );
}
// startAdornment: (
//   <InputAdornment position="start">
//     <AccountCircle />
//   </InputAdornment>
// ),
