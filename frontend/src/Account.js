import * as React from 'react';
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import Cookies from 'js-cookie';
// imports

export default function() {
    const cookieData = Cookies.get('userInfo');
    const student = JSON.parse(cookieData).userName;
    return (
        <>
        <BurgerMenu/>     
        <div style={{marginLeft: "1%"}}>
        <h2 id="accountHeader">Account Information</h2>
            Username: {student}
        </div>
        <br></br>
        <div style={{marginLeft: "1%"}}>
            <p>More Information Coming Soon</p>
        </div>
        </>
    )
}
// account page