import React, { useState, useEffect } from 'react';
import {
    Grid,
    TextField,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Button,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material';
import BurgerMenu from './components/BurgerNav';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// imports


    function AddEvent() {
        const cookieData = Cookies.get('userInfo'); // getting cookie data which contains student id
        const studentid = JSON.parse(cookieData).studentid; // getting student id from cookie
        const [title, setTitle] = useState(""); // using state hooks to assign form values and change values when selecting radio buttons and group dropdown
        const [start, setStartTime] = useState("");
        const [end, setEndTime] = useState("");
        const [accesslevel, setAccessLevel] = useState(1);
        const [alert, setAlert] = useState(0);
        const [data, setStudentData] = useState([]);
        const [selectedGroup, setSelectedGroup] = useState(''); 
        const [groups, setGroups] = useState([]);
        const [selectedOption, setSelectedOption] = useState(null);
        const [requestBody, setRequestBody] = useState({});
        const url = `http://127.0.0.1:8000/api/events`; //setting up API endpoint url to events
        const groupUrl = `http://127.0.0.1:8000/api/groups?studentid=${studentid}`; // API endpoint for group dropdown
        const navigate = useNavigate();  // navigate hook to redirect user
        const [open, setOpen] = useState(false);

        const fetchGroups = async () => { //function to fetch the groups for a student and using hook to set the groups 
            try {
              const response = await fetch(groupUrl);
              const data = await response.json();
              setGroups(data);
            } catch (error) {
              console.error('Error:', error);
            }
          }
       
        let handleSubmit = (e) => { // handle submit function
            
            if (selectedOption === "studentEvents"){ // sets request body for student event creation
                setRequestBody({
                    "title": title,
                    "start": start,
                    "end" : end,
                    "accesslevel": accesslevel,
                    "alert": alert,
                    "studentid": studentid,
               })
            }
            else if (selectedOption === "groupEvents"){ // sets request body for group events creation
                setRequestBody({
                    "title": title,
                    "start": start,
                    "end" : end,
                    "accesslevel": accesslevel,
                    "alert": alert,
                    "groupid": selectedGroup,
                    "studentid": studentid,
               })

            }
            /* Now will call fetch request to add event information using request body
            */
            let res = fetch('http://127.0.0.1:8000/api/events', {
            method: "PUT",
            headers: {'Content-Type': 'application/json' },
            body : JSON.stringify(requestBody),
            
        });
        res.then(response => {
            if (response.ok) {
              setOpen(true); // open dialog box to let user know it was successful if response sends back ok 
            }
            else {
                alert("Event not added!");
            }
            return response.text();
          })
          .catch(error => console.log("Error detected: " + error)); // console any errors
    } 

      // Set the request body with the form data
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

    // Update the request body with the selected group
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
            "studentid": studentid
        });  
    };
    
    // Update the selected option and fetch the list of groups if necessary
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

    // Navigate back to the home page when the cancel button is clicked
    let handleCancel = () => {
        navigate('/Home'); 
    }
        return (
            <>
            {/*Render the Burger menu  */}
            <BurgerMenu />
            <br></br>
            <h2 style={{ textAlign: "center" }}>Create Event</h2>
            <Grid container spacing = {3} align="center" className="event-form">
                {/*Render the title input field and set value */}
                <Grid item xs={12} align="center" className="eventTitle">
                    <TextField 
                        label="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Grid>
                {/*Render the start time input field  and set value*/}
                <Grid item xs={12} align="center">
                    <TextField
                        id="date"
                        label="Start Time"
                        type="datetime-local"
                        color="secondary" 
                        value={start} 
                        onChange={(e) => setStartTime(e.target.value)}  
                        InputLabelProps={{ shrink: true }} 
                        required
                    />
                </Grid>
                {/*Render the end time input field and set the value */}
                <Grid item xs={12} align="center" alignItems="flex-start">
                    <TextField id="date"
                        label="End Time"
                        type="datetime-local"
                        color="secondary"  
                        value={end} 
                        onChange={(e) => setEndTime(e.target.value)} 
                        InputLabelProps={{ shrink: true }} 
                        required
                    />
                </Grid>
                {/*Render the alert radio buttons and set the value */}
                <Grid item xs={6} align="right">
                    <FormControl>
                        <FormLabel sx={{ textAlign: "center" }} id="demo-controlled-radio-buttons-group">Alert</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={alert}
                            onChange={(e) => setAlert(parseInt(e.target.value))}
                            >
                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                            <FormControlLabel value={0} control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                {/*Render the access level input field and set the value */}
                <Grid item xs={1} align="center" sx={{ textAlign: "left" }}>
                    <TextField label="Access Level" type="number" value={accesslevel} onChange={(e) => setAccessLevel(e.target.value)} InputProps={{ inputProps: { min: 0, max: 5 } }} sx={{ width: "100%" }}/>
                </Grid>
                {/*Render the event type radio buttons and set the value */}
                <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                <RadioGroup row aria-label="eventOptions" name="eventOptions" value={selectedOption} onChange={handleOptionChange}>
                    <FormControlLabel value="studentEvents" control={<Radio checked={selectedOption === 'studentEvents' ? true : false} />} label="Student Event" />
                    <FormControlLabel value="groupEvents" control={<Radio checked={selectedOption === 'groupEvents' ? true : false} />} label="Group Event" />
                </RadioGroup>
                {selectedOption === 'groupEvents' && (
                    <Select style={{marginLeft: "20px"}} value={selectedGroup} onChange={handleGroupChange}>
                    {groups.map(group => (
                        <MenuItem key={group.groupid} value={group.groupid}>{group.name}</MenuItem> // sets selected group value based on groupid
                    ))}
                    </Select>
                )}
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                    {/*Disable submit button until title, start, end, and selected option are entered */}
                    <Button type="submit" onClick={handleSubmit} color="primary" variant='contained' disabled={!title || !start || !end || !selectedOption}>Add Event</Button>
                </Grid>
                {/*Cancel button will call handle cancel function on click */}
                <Grid item xs={12} align="center">
                    <Button type="submit" onClick={handleCancel} color="error" variant='contained'>Cancel</Button>
            </Grid>
            </Grid>
            {/*Open dialog box when set to open is true which happens on successful submission of form*/}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Event Added</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your event has been added successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate('/CalendarApp')} color="primary" autoFocus>
                     OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
    
    export default AddEvent;