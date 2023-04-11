import React from "react";
import './CalendarApp';
import MyCalendar from "./CalendarApp";
import './Home.css'
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import { useState, useEffect } from 'react';


export default function(){
    const [data, setData] = useState([]);
    const [weekData, setWeekData] = useState([]);
    const apiUrl = 'http://127.0.0.1:8000/api/events';
    let today = new Date();
    let tomorrow = new Date(today);
    let nextWeek = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    nextWeek.setDate(nextWeek.getDate() + 7);
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    tomorrow = tomorrow.toISOString();
    today = today.toISOString();
    yesterday = yesterday.toISOString();
    nextWeek = nextWeek.toISOString();

    const params = {studentid: 1, timelt: tomorrow, timegt: yesterday};
    let url = new URL(apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    let resp = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    resp.then(response => response.json())
    .then(data => setData(data))
    .catch(error => {
      console.error('Error:', error);
    });

    let urlWeek = new URL(apiUrl);
    const paramsWeek = {studentid: 1, timelt: nextWeek, timegt: yesterday};
    Object.keys(paramsWeek).forEach(key => url.searchParams.append(key, paramsWeek[key]));

    let respWeek = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    respWeek.then(response => response.json())
    .then(weekData => setWeekData(weekData))
    .catch(error => {
      console.error('Error:', error);
    });

    return (
        <div id="backgroundColor">
        <BurgerMenu/>
        <div id="homePage" style={{marginLeft: 10}}>
        <h1 id="homeHeader">Home</h1>
        <div id="Home_mainContent">
        <h2>Today's Events:</h2>
        <p>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <br/>
    
    {data.map(elem => (
      <ListItem alignItems="flex-start">
        <ListItemText
          primary = {elem.description}
          secondary = {elem.time}
        />
      </ListItem>
      ))}
      </List>
        </p>
        <br></br>
        <br></br>
        <h2>Upcoming Events:</h2>
        <p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <br/>
                {weekData.map(elemWeek => (
                    <ListItem alignItems="flex-start">
                        <ListItemText
                        primary = {elemWeek.description}
                        secondary = {elemWeek.time}
                        />
                    </ListItem>
                ))}
                </List>
        </p>
        <br></br>
        <br></br>
        <h2>Announcements:</h2>
        <p id="Announcment">Today Jazz Club will be meeting @ 7:30PM in the Lounge. There will be snacks and fun to be had!</p>
        <p>Email jazzguy@kent.edu for more info.</p>
        </div>
        </div>
        </div>
    );
}