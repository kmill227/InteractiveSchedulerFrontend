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
import Navbar from './Navbar';



export default function Group(){

    return (
      <>
      <Navbar />
      <div className="groups">
        <div className="groupHeader">
        <Grid
          container
          spacing={2}
          direction="row"
        >       
          <Grid item xs={12} sm={6} md={3}>
            <Button className="createGroup" variant="contained" type="button" as={Link} to="/CreateGroup">Create Group</Button>
          </Grid>
            <Grid item xs={6} sm={6}  className="searchGroup">
              <TextField type="text" placeholder='Search Groups' variant="outlined" size="small"/>
              <Button className="groupButton" variant="contained" type="search">Search</Button>
            </Grid>
        </Grid>
      </div>
      <div className={"groupCards"}>
            <GroupCard />
        </div>
        </div>
        </>
    )

}