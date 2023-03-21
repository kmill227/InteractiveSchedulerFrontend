import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home';
import MyCalendar from './CalendarApp';
import Messages from './Messages';
import Support from './Support';
import Login from './Login';
import Navbar from './Navbar';
import AddEvent from './AddEvent';
import Groups from './Groups';
import CreateGroup from './CreateGroup';

function App() {
  return (
      <Router>
      <Navbar />
      <div id="main" className="main">
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Groups' element={<Groups/>} />
          <Route path='/CalendarApp' element={<MyCalendar/>} />
          <Route path='/Messages' element={<Messages/>} />
          <Route path='/Support' element={<Support/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/AddEvent' element={<AddEvent/>} />
          <Route path='/Groups' element={<Groups/>} />
          <Route path='/CreateGroup' element={<CreateGroup/>} />
      </Routes>
      </div>
      </Router>
  );
  }
    
  export default App;
