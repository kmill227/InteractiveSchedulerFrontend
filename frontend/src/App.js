import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home';
import MyCalendar from './CalendarApp';
import Messages from './Messages';
import Support from './Support';
import Login from './Login';
import AddEvent from './AddEvent';
import Groups from './Groups';
import CreateGroup from './CreateGroup';
import CreateAccount from './CreateAccount';
import Account from './Account';
import Notifications from './Notifications'
import "./font/ChangaOne-Regular.ttf";
import "./font/Raleway-Regular.ttf";
// imports
function App() {
  return (
    <div>
      {<Router>
        <div className="main">
          <Routes>
            <Route exact path='/' element={<Login/>} />   {/*login page */}
            <Route exact path='/Home' element={<Home/>} /> {/*home page */}
            <Route exact path='/Groups' element={<Groups/>} /> {/*groups page */}
            <Route path='/CalendarApp' element={<MyCalendar/>} /> {/*calendar page */}
            <Route path='/Messages' element={<Messages/>} />{/*messages page */}
            <Route path='/Support' element={<Support/>} />{/*support page */}
            <Route path='/AddEvent' element={<AddEvent/>} />{/*add an event*/}
            <Route path='/Groups' element={<Groups/>} /> {/*groups page */}
            <Route path='/CreateGroup' element={<CreateGroup/>} /> {/*create a group */}
            <Route path='/Account' element={<Account/>} /> {/*account page */}
            <Route path='/Notifications' element={<Notifications/>} /> {/*notfications page */}
            <Route path='/CreateAccount' element={<CreateAccount/>} /> {/*create an account */}
          </Routes>
        </div>
      </Router>
       }
      
      </div>
  );
  }
    
  export default App;
