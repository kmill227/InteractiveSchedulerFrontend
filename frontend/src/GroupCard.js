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
import BurgerMenu from './components/BurgerNav';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function GroupCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  
  const handleSearch = (e) => {
    const params = { name: nameSearch };
    let url = new URL('http://127.0.0.1:8000/api/groups');
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }

  const clearFilter = (e) => {
    let url = new URL('http://127.0.0.1:8000/api/groups');
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }

    let handleSubmit = (e) => {
    
      let res = fetch('http://127.0.0.1:8000/api/groups', {
          method: "PUT",
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

   let handleJoinGroup = (nameValue, descriptionValue) => {
    
    let res = fetch('http://127.0.0.1:8000/api/groups', {
        method: "PUT",
        headers: {'Content-Type': 'multipart/form-data' },
        body : JSON.stringify({
            'name': nameValue,
            'description' : descriptionValue,
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
    textAlign: 'center',
  };
    const [mydata, setMyData] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/groups')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    const apiUrl = 'http://127.0.0.1:8000/api/groups';
      const params = {studentid: 1};
      const url = new URL(apiUrl);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(mydata => setMyData(mydata));
      }, []);

      const handleGroup = () => {
        handleSubmit();
        handleOpen();
        
      }
  
    return (
      <div>
        <div className="groupHeader">
        <Grid
          container
          spacing={2}
          direction="row"
        >       
          
            <Grid item xs={6} sm={6}  className="searchGroup">
              <TextField className="SearchText" type="text" placeholder='Search Groups' variant="outlined" value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} size="small"/>
            </Grid>
            <Grid item xs={6} sm={6}  className="searchGroup">
              <Button className="groupButton" variant="contained" type="search" onClick={handleSearch}>Search</Button>
              <Button className="groupButton" variant="contained" type="submit" onClick={clearFilter} style={{ marginLeft: '1em' }}>Clear Filter</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button className="createGroup" variant="contained" type="button" as={Link} to="/CreateGroup">Create Group</Button>
            </Grid>
          </Grid>
        </div>
      <br/>
      <h3 id="groupTitle">My Groups</h3>
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
  <h3 id="groupTitle">All Groups</h3>
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
        <Button type="submit" size="small" onClick={() => handleJoinGroup(elem.name, elem.description)}>Join Group</Button>
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