import * as React from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home';
import MyCalendar from './CalendarApp';
import Messages from './Messages';
import Support from './Support';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/CalendarApp' element={<MyCalendar/>} />
          <Route path='/Messages' element={<Messages/>} />
          <Route path='/Support' element={<Support/>} />
          <Route path='/Login' element={<Login/>} />
      </Routes>
      </Router>
  );
  }
    
  export default App;
