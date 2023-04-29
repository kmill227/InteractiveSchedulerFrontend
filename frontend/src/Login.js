import React, {useState} from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

// imports

const LoginPage = () => {

  const [checked, setChecked] = useState(true);
  const [userName, setUserName] = useState("");
  const [pwd, setPassword] = useState("");
  const [studentId, setStudentId] = useState(1);
  const [emailError, setEmailError] = useState('');

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/login', {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body : JSON.stringify({
          "userName": userName,
          "pwd": pwd,
    }),
  })
    .then(response => {
      if (response.status === 202) {
        response.json().then(data => {
          // Create a cookie that expires in 1 day
          const expires = new Date(Date.now() + 3600000 * 24);
          Cookies.set('userInfo', JSON.stringify(data), { expires });
          setTimeout(() => {
            const cookieData = Cookies.get('userInfo');
            // Redirect the user to the home page
            window.location.href = "/Home";
          }, 100); // wait 100ms before retrieving cookie data
        });
  } else {
        console.log("Authentication failed");
        alert('Invalid Email or password combination');
      }
    })
    .catch(error => console.log("Error detected: " + error));

}

  return (
    <div className='loginpage' style={{ padding: 30}}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <br></br>
          <h3>Sign In</h3>
          <Grid item xs={12}>
            <TextField label="Username" required ={true} value={userName} onChange={(e) => setUserName(e.target.value)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" required ={true} type='password' value={pwd} onChange={(e) => setPassword(e.target.value)} InputProps={{
    maxLength: 10,
  }}></TextField>
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
            <Button type="submit" onClick={handleSubmit} fullWidth> Login </Button>
          </Grid>
          <Grid item xs={12}>
            <Button component={Link} to="/CreateAccount" fullWidth>
              Create Account
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;