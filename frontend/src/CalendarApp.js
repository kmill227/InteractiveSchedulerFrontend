import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@mui/material/Modal';
import { render } from "react-dom";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEvent from './AddEvent';
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import State, { GridList } from '@material-ui/core'
import { Component } from "react";
import FormLabel from '@mui/material/FormLabel';
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
// imports


 const MyCalendar = () => {
	const locales = {
		"en-US": require("date-fns")
	};

	const localizer = dateFnsLocalizer({
		format,
		parse,
		startOfWeek,
		getDay,
		locales
	});
	const myevents = [
		{
			id: 0,
			title: "training",
			start: new Date(2023, 3, 27, 12, 0, 0),
			end: new Date(2023, 3, 27, 13, 0, 0),
			resourceId: 1
		},
		{
			id: 1,
			title: "late lunch",
			start: new Date(2023, 4, 25, 14, 0, 0),
			end: new Date(2023, 4, 25, 16, 30, 0),
			resourceId: 2
		}
	]
	
	const [data, setData] = useState([]);
	const apiUrl = 'http://127.0.0.1:8000/api/events';
    let today = new Date();
	let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    tomorrow = tomorrow.toISOString();
	const params = {studentid: 1};
    let url = new URL(apiUrl);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

	useEffect(() => {
		let resp = fetch(url, {
		  method: 'GET',
		  headers: {
			'Content-Type': 'multipart/form-data',
		  },
		});
	
		resp
		  .then((response) => response.json())
		  .then((data) => setData(data))
		  .catch((error) => {
			console.error('Error:', error);
		  });
	  }, [url]);
	  
    return(
	<>
	<BurgerMenu /> {/*navbar*/}
    <div>
        
		<div className="calendar">
            <div style={{marginBottom: "20px"}}>
				<p></p>
				<p></p>
        <Button style={{marginLeft: "20px"}}variant="contained" as={Link} to="/AddEvent">
            Add Event
        </Button>
        </div>
			<div>
				<Calendar
					events={data}
					localizer={localizer}
					defaultDate={new Date()}
					style={{ height: 700, fontFamily:"ChangaOne"	}
				}
				/>
			</div>
		</div>

        </div>
	</>
);
    };

    export default MyCalendar;
