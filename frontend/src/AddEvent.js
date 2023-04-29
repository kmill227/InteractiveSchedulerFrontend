import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@mui/material/FormLabel';
import BurgerMenu from './components/BurgerNav';
import {Select, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';
// imports


    function AddEvent() {
        const [title, setTitle] = useState("");
        const [start, setStartTime] = useState("");
        const [end, setEndTime] = useState("");
        const [accesslevel, setAccessLevel] = useState(1);
        const [alert, setAlert] = useState(1);
        const cookieData = Cookies.get('userInfo');
        const studentid = JSON.parse(cookieData).studentid;
        const [data, setStudentData] = useState([]);
        const [selectedGroup, setSelectedGroup] = useState('');
        const [groups, setGroups] = useState([]);
        const [selectedOption, setSelectedOption] = useState(null);
        const [requestBody, setRequestBody] = useState({});
        const url = `http://127.0.0.1:8000/api/events`;
        const groupUrl = `http://127.0.0.1:8000/api/groups?studentid=${studentid}`;


        const fetchGroups = async () => {
            try {
              const response = await fetch(groupUrl);
              const data = await response.json();
              setGroups(data);
            } catch (error) {
              console.error('Error:', error);
            }
          }
       
        let handleSubmit = (e) => {
            if (selectedOption === "studentEvents"){
                setRequestBody({
                    "title": title,
                    "start": start,
                    "end" : end,
                    "accesslevel": accesslevel,
                    "alert": alert,
                    "studentid": studentid,
               })
            }
            console.log(requestBody);
            let res = fetch('http://127.0.0.1:8000/api/events', {

            method: "PUT",
            headers: {'Content-Type': 'application/json' },
            body : JSON.stringify(requestBody),
            
        });
        res.then(response => response.text())   
        .catch(error => console.log("Error detected: " + error))
    } 

    const fetchData= async () => {
       setRequestBody({
            "title": title,
            "start": start,
            "end" : end,
            "accesslevel": accesslevel,
            "alert": alert,
            "studentid": studentid,
       });
      };

    const handleGroupChange = (event) => {
        const value = event.target.value;
        setSelectedGroup(value);
        let groupid = value
        setRequestBody({
            "title": title,
            "start": start,
            "end" : end,
            "accesslevel": accesslevel,
            "alert": alert,
            "groupid": groupid,
        });  
      };
    
     const handleOptionChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      if (value === 'groupEvents') {
        fetchGroups();
      } else {
        fetchData();
        setGroups([]);
        setSelectedGroup('');
      }
    };


        return (
            <>
            <BurgerMenu />
        <Grid container spacing = {3} align="center" className="event-form">
            <Grid item xs={12} align="center" className="eventTitle">
            <TextField label="title" value={title} onChange={(e) => setTitle(e.target.value)} variant="outlined"/>
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="Start 
            Time" type="datetime-local" value={start} onChange={(e) => setStartTime(e.target.value)} variant="outlined"/>         
            </Grid>
            <Grid item xs={12} align="center">
            <TextField label="End Time" type="datetime-local" value={end} onChange={(e) => setEndTime(e.target.value)} variant="outlined"/>
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
            <Grid item xs={12} align="center">
            <FormControl component="fieldset">
              <RadioGroup row aria-label="eventOptions" name="eventOptions" value={selectedOption} onChange={handleOptionChange}>
                <FormControlLabel value="studentEvents" control={<Radio checked={selectedOption === 'studentEvents' ? true : false} />} label="Student Event" />
                <FormControlLabel value="groupEvents" control={<Radio checked={selectedOption === 'groupEvents' ? true : false} />} label="Group Event" />
              </RadioGroup>
              {selectedOption === 'groupEvents' && (
                <Select style={{marginLeft: "20px"}} value={selectedGroup} onChange={handleGroupChange}>
                  {groups.map(group => (
                    <MenuItem key={group.groupid} value={group.groupid}>{group.name}</MenuItem>
                  ))}
                </Select>
              )}
            </FormControl>
            </Grid>
            <Grid item xs={12}>
                 <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>Add Event</Button>
            </Grid>
        </Grid>
        </>
    );
}
    
    export default AddEvent;