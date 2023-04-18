import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@mui/material/Modal';
import { render } from "react-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import GroupCard from './GroupCard';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import BurgerMenu from './components/BurgerNav';



export default function Group(){
  const [name,setName] = useState('');
  const [data, setData] = useState([]);
  let handleSubmit = (e) => {

    let resp = fetch('http://127.0.0.1:8000/api/groups', {
        method: "GET",  
    });
    resp.then(response => response.json())
    .then(data => setData(data))
    .catch(error => {
      console.error('Error:', error);
    });

} 
    return (
      <>
      <BurgerMenu />
      <div className="groups">
        
      <div className={"groupCards"}>
            <GroupCard />
        </div>
        </div>
        </>
    )

}