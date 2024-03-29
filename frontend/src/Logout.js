import React, { useState } from "react";
import './CalendarApp';
import "./font/ChangaOne-Regular.ttf";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// imports

export default function Logout(){

    const navigate = useNavigate(); // navigate hook to redirect user
    const [logoutConfirmed, setLogoutConfirmed] = useState(false); //checking if logout is confirmed with state hook

    let handleLogout = () => {
        Cookies.remove('userInfo'); // remove the userInfo cookie
        navigate('/Login'); // redirect to the login page
    }
    let handleCancel = () => {
        navigate('/Home'); // redirect to the home page
    }

    //checks value of radio button and sets logout hook to true if yes is selected
    let handleRadioChange = (e) => { 
        if (e.target.value === "yes") {
            setLogoutConfirmed(true);
        } else {
            setLogoutConfirmed(false);
        }
    }

    return (
        <>
            {/*Render form to let user confirm logout or cancel*/}
            <br></br>
            <h2 style={{ textAlign: "center" }}>Logging Out</h2>
            <Grid sx={{ margin: 'auto' }} container spacing={3} align="center">
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="logout-confirmation" name="logout-confirmation" value={logoutConfirmed ? "yes" : "no"} onChange={handleRadioChange}>
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button type="submit" onClick={handleLogout} color="primary" variant='contained' disabled={!logoutConfirmed}>Logout</Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button type="submit" onClick={handleCancel} color="secondary" variant='contained'>Cancel</Button>
                </Grid>
            </Grid>
        </>
    )
}