import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Component } from "react";
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import BurgerMenu from './components/BurgerNav';
// imports


    function AddEvent() {
        const [title, setTitle] = useState("");
        const [starttime, setStartTime] = useState("");
        const [endtime, setEndTime] = useState("");
        const [accesslevel, setAccessLevel] = useState(1);
        const [alert, setAlert] = useState(1);

        
       let handleSubmit = (e) => {
            console.log({title});
            console.log({starttime});
            console.log({alert});
            console.log({accesslevel});
        let res = fetch('http://127.0.0.1:8000/api/events', {

            method: "PUT",
            headers: {'Content-Type': 'multipart/form-data' },
            body : JSON.stringify({
                "title": title,
                "starttime": starttime,
                "endtime" : endtime,
                "accesslevel": accesslevel,
                "alert": alert,
            }),
            
        });
        res.then(response => response.text())   
        .catch(error => console.log("Error detected: " + error))
    } 
        return (
            <>
            <BurgerMenu />
        <Grid container spacing = {3} align="center" className="event-form">
            <Grid item xs={12} align="center">
            <TextField label="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
            <TextField Label="Start 
            time" InputLabelProps={{shrink: true}} type="datetime-local" value={starttime} onChange={(e) => setStartTime(e.target.value)} />         
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="End Time" type="datetime-local" value={endtime} onChange={(e) => setEndTime(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Alert</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={alert}
                        onChange={(e) => setAlert(e.target.value)}
                    >
                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                        <FormControlLabel value={0} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <TextField label="Access Level" type="number" value={accesslevel} onChange={(e) => setAccessLevel(e.target.value)} InputProps={{ inputProps: { min: 0, max: 5 } }} />
            </Grid>
            <Grid item xs={12}>
                 <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>Add Event</Button>
            </Grid>
        </Grid>
        </>
    );
}
    
    export default AddEvent;