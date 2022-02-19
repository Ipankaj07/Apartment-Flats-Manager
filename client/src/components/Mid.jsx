// import React from "react";
import "./mid.css";

import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 54,
    padding: "0 40px",
  },
});

/* function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
} */

const Mid = () => {
  const classes = useStyles();

  return (
    <section className="mid-section">
      <div className="mid-container">
        <div className="mid-text">
          <div className="large-text">Welcome back.</div>
          <div className="small-text">Search for your perfect home.</div>
        </div>
        <div className="mid-bar">
          <Box component="form" noValidate autoComplete="off">
            <FormControl sx={{ width: "40ch" }}>
              <OutlinedInput placeholder="Find apartments here..." />
              {/* <MyFormHelperText /> */}
            </FormControl>

            <Button className={classes.root} variant="contained" size="large">
              Search
            </Button>
          </Box>
        </div>
      </div>
    </section>
  );
};

export { Mid };


