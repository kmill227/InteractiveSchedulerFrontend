import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";


    function CreateGroup() {
        const [name, setName] = useState("");

        
       let handleSubmit = (e) => {

        console.log({name});
        let res = fetch('http://127.0.0.1:8000/api/groups', {
            mode: 'no-cors',
            method: "POST",
            headers: {'Content-Type': 'multipart/form-data' },
            body : JSON.stringify({
                'name': name,
            }),
            
        });
        res.then(response => response.text())   
        .catch(error => console.log("Error detected: " + error))
    } 
        return (
        <Grid container spacing = {3} align="center" className="event-form">
            <Grid item xs={12} align="center">
                <TextField label="Group Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                 <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>Create Group</Button>
            </Grid>
        </Grid>
    );
}
    
    export default CreateGroup;