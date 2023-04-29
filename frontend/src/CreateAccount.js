import React, {useState} from "react";
import './CalendarApp';
import "./font/ChangaOne-Regular.ttf";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// imports

export default function(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    
   let handleSubmit = (e) => {

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        else {
            let res = fetch('http://127.0.0.1:8000/api/login', {

                method: "PUT",
                headers: {'Content-Type': 'application/json' },
                body : JSON.stringify({
                    "email": email,
                    "password": password,
                    "firstname": firstName,
                    "lastname" : lastName,
                    "address": address,
                    "phonenumber": phoneNumber,
                    "userName": userName,
                }),
                
            });
            res.then(response => response.text())   
            .catch(error => console.log("Error detected: " + error))
    
            alert("User created succesfully!");
            navigate('/Login'); // redirect to the login page  
        }

}
return (
    <>
    <br></br>
    <h2 style={{ textAlign: "center" }}>Create Account</h2>
        <Grid sx={{ margin: 'auto' }} container spacing = {3} align="center">
            <Grid item xs={4} align="right">
                <TextField type="Email" label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="center">
                <TextField type="text" label="Username" required value={userName} onChange={(e) => setUserName(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="left">
                <TextField label="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="right">
                <TextField label="Confirm Password" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="center">
                <TextField label="First Name" value={firstName} required onChange={(e) => setFirstName(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="left">
                <TextField label="Last Name" value={lastName} required onChange={(e) => setLastName(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="right">
                <TextField label="Address" value={address} required onChange={(e) => setAddress(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={4} align="center">
                <TextField label="Phone Number" type="tel" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} variant="filled"/>
            </Grid>
            <Grid item xs={12} align="center">
                <Button type="submit" onClick={() => {handleSubmit()}} color="primary" variant='contained' disabled={!email || !password || !confirmPassword || !firstName || !lastName || !address || !phoneNumber || !userName}>Create Account</Button>
            </Grid>
        </Grid>
    </>
)}