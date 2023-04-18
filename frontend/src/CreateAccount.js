import React, {useState} from "react";
import './CalendarApp';
import MyCalendar from "./CalendarApp";
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {Button} from '@material-ui/core';


export default function(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [userName, setUserName] = useState("");

    
   let handleSubmit = (e) => {

    let res = fetch('http://127.0.0.1:8000/api/login', {

        method: "PUT",
        headers: {'Content-Type': 'multipart/form-data' },
        body : JSON.stringify({
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName" : lastName,
            "address": address,
            "phoneNumber": phoneNumber,
            "userName": userName,
        }),
        
    });
    res.then(response => response.text())   
    .catch(error => console.log("Error detected: " + error))
}
return (
    <>
        <BurgerMenu/>
        <Grid container spacing = {3} align="center" className="event-form">
            <Grid item xs={12} align="center">
            <TextField type="Email" label="Email" required="true" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
            <TextField type="text" label="Username" required="true" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="Password" type="password" required="true" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="First Name" value={firstName} required="true" onChange={(e) => setFirstName(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="Last Name" value={lastName} required="true" onChange={(e) => setLastName(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
                <TextField label="Address" value={address} required= "true" onChange={(e) => setAddress(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
                <TextField label="Phone Number" type="tel" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>Create Account</Button>
            </Grid>
        </Grid>
    </>
)}