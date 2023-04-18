import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import BurgerMenu from './components/BurgerNav';
import { useNavigate } from 'react-router-dom';



    function CreateGroup() {
        let navigate = useNavigate();
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const studentid = 1;
        
       let handleSubmit = (e) => {

        let res = fetch('http://127.0.0.1:8000/api/groups', {
            method: "PUT",
            headers: {'Content-Type': 'multipart/form-data' },
            body : JSON.stringify({
                'name': name,
                'description' : description
            }),
            
        });
        res.then(response => response.text())   
        .catch(error => console.log("Error detected: " + error))

        alert("Group Added");
        navigate('/Groups');

    } 
        return (
            <>
            <BurgerMenu />
        <Grid container spacing = {3} align="center" className="event-form">
            <Grid item xs={12} align="center">
                <TextField label="Group Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
                <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                 <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>Create Group</Button>
            </Grid>
        </Grid>
        </>
    );
}
    
    export default CreateGroup;