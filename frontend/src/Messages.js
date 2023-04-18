import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from "@material-ui/core/TextField";
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import { useNavigate } from 'react-router-dom';
import "./font/Raleway-Regular.ttf";
import "./font/Raleway-VariableFont_wght.ttf"



export default function Messages() {
  let navigate = useNavigate();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const dataMsg = [
		{
			to: 1,
			from: "Kyle O",
      msgcontent: "Hello friend"
		},
		{
			to: 1,
			from: "Test Test",
      msgcontent: "testing"
		}
	]
  const encodedValue = encodeURIComponent(1);
  const [data,setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [to, setTo] = useState("");
  const [msgContent, setMsgContent] = useState("");
  const studentid = 1;

  let handleSubmit = (e) => {

    console.log({msgContent});
    let res = fetch('http://127.0.0.1:8000/api/messages', {
        mode: 'no-cors',
        method: "POST",
        headers: {'Content-Type': 'multipart/form-data' },
        body : JSON.stringify({
            'to': to,
            'msgcontent' : msgContent,
            'from' : studentid
        }),
        
    });
    res.then(response => response.text())   
    .catch(error => console.log("Error detected: " + error))

    alert("Message Sent");
    handleClose();
} 

let url = new URL('http://127.0.0.1:8000/api/messages');
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));

  return (
    <>
    <BurgerMenu />
    <div style={{marginLeft: "1%"}}>
    <h1 id="messageHeader">Messages</h1>
    <br/>
    <Grid item xs={12} sm={6} md={3} id="sendMessage">
            <Button className="sendMessage" variant="contained" type="button" onClick={handleOpen}>Send Message</Button>
    </Grid>
    <List sx={{ width: '100%' }}>
    <br/>
    {dataMsg.map(elem => (
      <div className="lineForMessage">
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText
        primaryTypographyProps={{fontFamily: "Raleway-Medium"}}
          primary = {elem.from}
          secondary={
            <React.Fragment>
              {elem.msgcontent}
            </React.Fragment>
            
          }
        />
      </ListItem>
      </div>))}
      </List>

      
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <Grid container spacing = {3} align="center" className="message-form">
            <Grid item xs={12} align="center">
                <TextField label="to" value={to} onChange={(e) => setTo(e.target.value)} />
            </Grid>
            <Grid item xs={12} align="center">
                <TextField label="msgcontent" value={msgContent} onChange={(e) => setMsgContent(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                 <Button type="submit" onClick={handleSubmit} color="primary" variant='contained'>Send</Button>
            </Grid>
        </Grid>
  </Box>
</Modal></div>
      </>
  )
        };
