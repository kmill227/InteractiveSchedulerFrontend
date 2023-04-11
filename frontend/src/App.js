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
import Account from './Account';
import Notifications from './Notifications'
import CreateAccount from './CreateAccount';


function App() {
  return (
    <div>
      {<Router>
        <div className="main">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/Home' element={<Home/>} />
            <Route exact path='/Groups' element={<Groups/>} />
            <Route path='/CalendarApp' element={<MyCalendar/>} />
            <Route path='/Messages' element={<Messages/>} />
            <Route path='/Support' element={<Support/>} />
            <Route path='/AddEvent' element={<AddEvent/>} />
            <Route path='/Groups' element={<Groups/>} />
            <Route path='/CreateGroup' element={<CreateGroup/>} />
            <Route path='/Account' element={<Account/>} />
            <Route path='/Notifications' element={<Notifications/>} />
            <Route path='/CreateAccount' element={<CreateAccount/>} />
          </Routes>
        </div>
      </Router>
       }
      
      </div>
  );
  }
    
  export default App;
