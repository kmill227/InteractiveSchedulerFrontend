import React, { useState, useEffect } from "react";
import './CalendarApp';
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Cookies from 'js-cookie';

// imports
const apiUrl = 'http://127.0.0.1:8000/api/events'; // event API endpoint

export default function Home() {
  const cookieData = Cookies.get('userInfo'); // cookie data
  const studentid = JSON.parse(cookieData).studentid; // getting student id from cookie data

  const [data, setData] = useState([]); // state hooks for day data
  const [weekData, setWeekData] = useState([]); // state hook for week data

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0); // sets start of day variable
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59); // sets end of day variable
        const paramsToday = { // sets parameters to pass for today query
          studentid: studentid,
          starttimegt: startOfDay.toISOString(),
          starttimelt: endOfDay.toISOString()
        };
        const urlToday = new URL(apiUrl);
        //adds the parameters for today to query
        Object.keys(paramsToday).forEach((key) =>
          urlToday.searchParams.append(key, paramsToday[key])
        );

        const paramsWeek = { // sets parameters for week query
          studentid: studentid,
          starttimelt: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), // week ahead from now
          starttimegt: startOfDay.toISOString(),
        };
        const urlWeek = new URL(apiUrl);
        // adds parameters to query
        Object.keys(paramsWeek).forEach((key) =>
          urlWeek.searchParams.append(key, paramsWeek[key])
        );

        // fetches week and today data using query strings set earlier
        const [todayEvents, weekEvents] = await Promise.all([
          fetch(urlToday).then((res) => res.json()),
          fetch(urlWeek).then((res) => res.json())
        ]);

        //sorts events based on start time
        todayEvents.sort((a, b) => new Date(a.start) - new Date(b.start)); 
        weekEvents.sort((a, b) => new Date(a.start) - new Date(b.start));

        //sets data using state hooks
        setData(todayEvents);
        setWeekData(weekEvents);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEvents(); // fetches events 
  }, [studentid]);

    // redners the list of events for today and week by mapping them from the set data
    return (
        <>
        <div id="backgroundColor">
        <BurgerMenu/>                   {/*navbar*/}
        <h1 id="homeHeader">Home</h1>
        <div id="Home_mainContent">
            <h2>Today's Events:</h2>
            <List sx={{ width: '100%', maxWidth: 360,}}>   {/*styling*/}
             <br/>
                {data.map(elem => (
                        <ListItem 
                        alignItems="flex-start"
                        sx={{ border: '1px solid gray', borderRadius: '5px', mb: 2 }}>
                            <ListItemText
                                primary = {<h3>{elem.title}</h3>}
                                secondary = {new Date(elem.start).toLocaleString('en-US')}
                                sx={{ fontSize: '3rem' }}
                            />
                        </ListItem>
                ))}
            </List>
            <h2>Upcoming Events:</h2>
                <List sx={{ width: '100%', maxWidth: 360}}> {/*styling*/}
                <br/>
                    {weekData.map(elemWeek => (
                        <ListItem 
                        alignItems="flex-start"
                        sx={{ border: '1px solid gray', borderRadius: '5px', mb: 2 }}>
                            <ListItemText
                            primary = {<h3>{elemWeek.title}</h3>}
                            secondary = {new Date(elemWeek.start).toLocaleString('en-US')}
                            sx={{ fontSize: '3rem' }}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
        </>
    );
}
