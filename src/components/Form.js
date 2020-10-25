import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Switch from "@material-ui/core/Switch";
import { Container, Button } from "@material-ui/core";

const Form = () => {
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" component="label">
              Change Picture
              <input type="file" style={{ display: "none" }} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="Birth Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={toggleChecked} />}
              label="Display Email"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              error={false}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Form;
