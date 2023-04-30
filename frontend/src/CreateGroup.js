import React, { useState } from 'react';
//import Button from "@material-ui/core/Button";
//import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import BurgerMenu from './components/BurgerNav';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

// imports


    function CreateGroup() {
        //state hooks to set data
        let navigate = useNavigate();
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [open, setOpen] = useState(false);
        
       let handleSubmit = (e) => {
        // fetch request to send name and description for new group
        let res = fetch('http://127.0.0.1:8000/api/groups', {
            method: "PUT",
            headers: {'Content-Type': 'multipart/form-data' },
            body : JSON.stringify({
                'name': name,
                'description' : description
            }),
            
        });
        res.then(response => {
            if (response.ok) {
            setOpen(true); // open dialog box to let user know it was successful if response sends back ok 
          }
          else {
              alert("Group not added!");
          }
          return response.text();
        })
        .catch(error => console.log("Error detected: " + error)); // console any errors


    } 

    // redirects to groups page if cancelled
    let handleCancel = () => {
        navigate('/Groups'); // redirect to the group page
    }
        // rendering form to create group
        return (
            <>
            <BurgerMenu />
            <br></br>
            <h2 style={{ textAlign: "center" }}>Create Group</h2>
            <Grid container spacing = {3} align="center" className="event-form">
                <Grid item xs={12} align="center">
                    <TextField label="Group Name" value={name} required onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField label="Description" value={description} required onChange={(e) => setDescription(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" onClick={handleSubmit} color="primary" variant='contained' disabled = {!name || !description}>Create Group</Button>
                </Grid>
                <Grid item xs={12} align="center">
                        <Button type="submit" onClick={handleCancel} color="error" variant='contained'>Cancel</Button>
                </Grid>
            </Grid>
            {/*Rendering dialog to open after adding group */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Group Added</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your group has been added successfully.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate('/Groups')} color="primary" autoFocus>
                     OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
    
    export default CreateGroup;