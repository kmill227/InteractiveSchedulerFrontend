import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { render } from "react-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
		<div className="calendar">
			<div>
				<h1>calendar1</h1>
				<Calendar
					localizer={localizer}
					defaultDate={new Date()}
					style={{ height: 700 }}
				/>
			</div>
		</div>
	</>
);
    };

    export default MyCalendar;
