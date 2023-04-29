import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '@mui/material/Modal';
import { render } from "react-dom";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from '@mui/material/Button';
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import {Select, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';

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

  const cookieData = Cookies.get('userInfo');
  const studentid = JSON.parse(cookieData).studentid;
  const [data, setStudentData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [groups, setGroups] = useState([]);
  const [selectedOption, setSelectedOption] = useState('studentEvents');
  let eventUrl = 'http://127.0.0.1:8000/api/events';
  let groupUrl = `http://127.0.0.1:8000/api/groups?studentid=${studentid}`;
  let url = `http://127.0.0.1:8000/api/events?studentid=${studentid}`;

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = tomorrow.toISOString();
  

  const fetchGroups = async () => {
    try {
      const response = await fetch(groupUrl);
      const data = await response.json();
      setGroups(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const fetchData= async (url) => {
    try {
      url = `http://127.0.0.1:8000/api/events?studentid=${studentid}`;
      const response = await fetch(url);
      const data = await response.json();
      const events = data.map(event => ({
        title: event.title,
        start: parse(event.start, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'', new Date()),
        end: parse(event.end, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'', new Date()),
      }));
      setStudentData(events);
    } catch (error) {
      console.error('Error:', error);
    }
  };
   
  const handleGroupChange = (event) => {
    const value = event.target.value;
    setSelectedGroup(value);
    let groupid = value;
    const groupUrl = `http://127.0.0.1:8000/api/events?groupid=${groupid}`;
    fetch(groupUrl)
      .then(response => response.json())
      .then(data => {
        const events = data.map(event => ({
          title: event.title,
          start: parse(event.start, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'', new Date()),
          end: parse(event.end, 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'', new Date()),
        }));
        setStudentData(events);
      })
      .catch(error => console.error(error));
  };

 const handleOptionChange = (event) => {
  const value = event.target.value;
  setSelectedOption(value);
  if (value === 'groupEvents') {
    fetchGroups();
  } else {
    fetchData();
    setGroups([]);
    setSelectedGroup('');
  }
};

useEffect(() => {
  fetchGroups();
}, [selectedGroup]);

useEffect(() => {
  fetchData(url);
}, []);
  return (
    <>
      <BurgerMenu />
      <div>
        <div className="calendar">
          <div style={{marginBottom: "20px"}}>
            <p></p>
            <p></p>
            <Button style={{marginLeft: "20px"}}variant="contained" as={Link} to="/AddEvent">
              Add Event
            </Button>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="eventOptions" name="eventOptions" value={selectedOption} onChange={handleOptionChange}>
                <FormControlLabel value="studentEvents" control={<Radio />} label="Student Events" />
                <FormControlLabel value="groupEvents" control={<Radio />} label="Group Events" />
              </RadioGroup>
              {selectedOption === 'groupEvents' && (
                <Select style={{marginLeft: "20px"}} value={selectedGroup} onChange={handleGroupChange}>
                  {groups.map(group => (
                    <MenuItem key={group.groupid} value={group.groupid}>{group.name}</MenuItem>
                  ))}
                </Select>
              )}
            </FormControl>
          </div>
          <div>

				<Calendar
					events={data}
					localizer={localizer}
					defaultDate={new Date()}
					style={{ height: 700, fontFamily:"ChangaOne"	}}
				/>
			</div>
		</div>

        </div>
	</>
);
    };

    export default MyCalendar;
