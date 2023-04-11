import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CardHeader } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from 'react';


export default function GroupCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
        const [description, setDescription] = useState("");
  
    let handleSubmit = (e) => {

    console.log({name});
    let res = fetch('http://127.0.0.1:8000/api/groups', {
        mode: 'no-cors',
        method: "POST",
        headers: {'Content-Type': 'multipart/form-data' },
        body : JSON.stringify({
            'name': name,
            'description' : description,
            'studentid': 1
        }),
        
    });
    res.then(response => response.text())   
    .catch(error => console.log("Error detected: " + error))
} 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
    const [mydata, setMyData] = useState([]);
    const [data, setData] = useState([]);
    const studentid = 5;
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/groups')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/groups')
        .then(response => response.json())
        .then(mydata => setMyData(mydata));
    }, []);
  
    return (
      <div>
      <br/>
      <h3>My Groups</h3>
      <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
  >
      {mydata.map(myelem => (
          <Grid item xs={12} sm={6} md={3} key={mydata.indexOf(myelem)}>
              <Card>
                  <CardHeader
                      title={`${myelem.name}`} variant="h5"
                  />
                  <CardContent>
                    {myelem.description}
                  </CardContent>
      <CardActions className={"cardButton"}>
        <Button type="submit" onSubmit={handleSubmit} size="small" onClick={handleOpen}>Join Group</Button>
      </CardActions>
              </Card>
              <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
       Joined Group!!
      </Typography>
      <Button type="button" onClick={handleClose} variant="contained">Close</Button>
    </Box>
  </Modal>
           </Grid>
      ))}
  </Grid>
  <br/>
  <h3>All Groups</h3>
  <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
  >
      {data.map(elem => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
              <Card>
                  <CardHeader
                      title={`${elem.name}`} variant="h5"
                  />
                  <CardContent>
                    {elem.description}
                  </CardContent>
      <CardActions className={"cardButton"}>
        <Button type="submit" onSubmit={handleSubmit} size="small" onClick={handleOpen}>Join Group</Button>
      </CardActions>
              </Card>
              <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
       Joined Group!!
      </Typography>
      <Button type="button" onClick={handleClose} variant="contained">Close</Button>
    </Box>
  </Modal>
           </Grid>
      ))}
  </Grid>
  </div>
    );
}