import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



export default function() {

    {/*const [data,setData] = useState([]);*/}
    const data = [
		{
            notificationcontent: "New meeting"
		},
		{
            notificationcontent: "Meeting Canceled"
		}
	]
    {/*useEffect(() => {
        fetch('http://127.0.0.1:8000/api/notifications')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);*/}

    return (
        <>
            <Navbar />
            <div style={{marginLeft:10}}>
                <h1>Notifications</h1>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {data.map(elem => (
                        <ListItem alignItems="flex-start">
                            <ListItemIcon>
                                <NotificationsActiveIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary = {elem.notificationcontent}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </>
    )
}