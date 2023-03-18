import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import State, { GridList } from '@material-ui/core'
import { Component } from "react";
import FormLabel from '@mui/material/FormLabel';


/*
    const AddEvent = () => {
        const [description, setDescription] = useState('');
        const [time, setDate] = useState('');
        const [alert, setAlert] = useState('');
        const [accessLevel, setAccessLevel] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            fetch('localhost//3001', {
               method: 'POST',
               body: JSON.stringify({
                  description: description,
                  time: time,
                  alert: alert,
                  accessLevel: accessLevel
               }),
               headers: {
                  'Content-type': 'application/json; charset=UTF-8',
               },
            })
               .then((res) => res.json())
               .then((post) => {
                  setDescription('');
                  setDate('');
                  setAlert('');
                  setAccessLevel('');
               })
               .catch((err) => {
                  console.log(err.message);
               });
            };
    return (
      <>
       <Grid container spacing={1} >
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                    Add Event
                    </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField value = {description} label="Description" required={true} type="text"/>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <FormHelperText>
                        <div align="center">
                            Alert
                        </div>
                    </FormHelperText>
                    <RadioGroup row defaultValue={1}>
                        <FormControlLabel value= {1} control={<Radio/>} label="Yes" labelPlacement="bottom"/>
                        <FormControlLabel value= {0} control={<Radio/>} label="No" labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField value={accessLevel} label="Access Level" required={true} type="number"/>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField value={time} label="time" required={true} type="date"/>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <Button color="primary" type="submit" variant="contained">
                        Add Event
                    </Button>
                    <Button color="secondary" type="button" variant="contained">
                        Cancel
                    </Button>
                </FormControl>
            </Grid>
       </Grid>
       </>
    );
};

export default AddEvent;


function AddEvent() {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [accessLevel, setAccessLevel] = useState("");
  const [alert, setAlert] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
      let res = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          description: description,
          time: time,
          accessLevel: accessLevel,
          alert: alert,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setDescription("");
        setTime("");
        setAccessLevel("");
        setAlert("");
      }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={time}
          placeholder="Date"
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="number"
          value={accessLevel}
          placeholder="Access Level"
          onChange={(e) => setAccessLevel(e.target.value)}
        />
        <input
          type="number"
          value={alert}
          placeholder="Alert"
          onChange={(e) => setAlert(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEvent;
*/

    function AddEvent() {
        const [description, setDescription] = useState("");
        const [time, setTime] = useState("");
        const [accessLevel, setAccessLevel] = useState(1);
        const [alert, setAlert] = useState(1);
    
        let handleSubmit = (e) => {
            console.log({description});
            console.log({time});
            console.log({alert});
            console.log({accessLevel});
        let res = fetch("http://localhost:3001/API/Event", {
            method: "POST",
            body: JSON.stringify({
                description: description,
                time: time,
                accessLevel: accessLevel,
                alert: alert,
            }),
        });
    }
        return (
        <Grid container spacing = {3} align="center" className="event-form">
            <Grid item xs={12} align="center">
            <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="" type="datetime-local" value={time} onChange={(e) => setTime(e.target.value)} />
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
                <TextField label="Acces Level" type="number" value={accessLevel} onChange={(e) => setAccessLevel(e.target.value)} InputProps={{ inputProps: { min: 0, max: 5 } }} />
            </Grid>
            <Grid item xs={12}>
                 <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>AddEvent</Button>
            </Grid>
        </Grid>
    );
}
    
    export default AddEvent;