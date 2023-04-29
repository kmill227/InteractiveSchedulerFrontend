import React, { useState, useEffect } from "react";
import './CalendarApp';
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@material-ui/core';
import Burger from "./components/Burger";
import Cookies from 'js-cookie';

export default function(){
    const cookieData = Cookies.get('userInfo');
    const studentid = JSON.parse(cookieData).studentid;
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

    const params = {studentid: studentid, starttimelt: tomorrow, starttimegt: yesterday};
    let url = new URL(apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => new Date(a.start) - new Date(b.start));
                resolve(data);})
            .catch(error => reject(error));
        });
    }

    const paramsWeek = {studentid: studentid, starttimelt: nextWeek, starttimegt: yesterday};
    let urlWeek = new URL(apiUrl);
    Object.keys(paramsWeek).forEach(key => urlWeek.searchParams.append(key, paramsWeek[key]));

    const fetchWeekData = () => {
        return new Promise((resolve, reject) => {
            fetch(urlWeek, {
                method: 'GET',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => new Date(a.start) - new Date(b.start));
                resolve(data);})
            .catch(error => reject(error));
        });
    }

    useEffect(() => {
        fetchData()
        .then(data => setData(data))
        .catch(error => {
            console.error('Error:', error);
        });

        fetchWeekData()
        .then(weekData => setWeekData(weekData))
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

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
                <List sx={{ width: '100%', maxWidth: 360,}}> {/*styling*/}
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
