import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';


const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);
  const [userName, setUsername] = React.useState("");
  const [pwd, setPassword] = React.useState("");
  const [studentId, setStudentId] = React.useState(1);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let handleSubmit = (e) => {
    
      let res = fetch('http://127.0.0.1:8000/api/login', {
          method: "POST",
          headers: {'Content-Type': 'multipart/form-data' },
          body : JSON.stringify({
            "userName": userName,
            "pwd": pwd,
            "studentId": studentId,
      }),
    
});
res.then(response => response.text())   
.catch(error => console.log("Error detected: " + error))
}

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username" value={userName} onChange={(e) => setUsername(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} value={pwd} onChange={(e) => setPassword(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button component="a" href="/" fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;