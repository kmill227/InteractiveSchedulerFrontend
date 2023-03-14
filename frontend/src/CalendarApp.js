import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { render } from "react-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEvent from './AddEvent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


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

 const MyCalendar = () => {
    return(
	<>
    <div>
        
		<div className="calendar">
            <div style={{marginBottom: "20px"}}>
        <Button style={{marginLeft: "20px"}}variant="contained" as={Link} to="/AddEvent">
            Add Event
        </Button>
        </div>
			<div>
				<Calendar
					localizer={localizer}
					defaultDate={new Date()}
					style={{ height: 700 }}
				/>
			</div>
		</div>
        </div>
	</>
);
    };

    export default MyCalendar;
