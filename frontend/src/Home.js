import React from "react";
import './CalendarApp';
import MyCalendar from "./CalendarApp";
import './Home.css'


export default function(){
    return (
        <div id="homePage">
        <h1>Home</h1>
        <h2>Today's Events:</h2>
        <p id= "Event">Smash Bros @ 5:30PM - Room 206</p>
        <br></br>
        <br></br>
        <h2>Upcoming Events:</h2>
        <p id= "Event">Chillin' with the boys @ Saturday, 6:00PM - Kaleb's House</p>
        <br></br>
        <br></br>
        <h2>Announcements:</h2>
        <p id="Announcment">Today Jazz Club will be meeting @ 7:30PM in the Lounge. There will be snacks and fun to be had!</p>
        <p>Email jazzguy@kent.edu for more info or join the Jazz Club <a href="/">Here.</a></p>
        </div>
    );
}