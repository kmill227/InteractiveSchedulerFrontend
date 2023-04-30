import * as React from 'react';
import BurgerMenu from './components/BurgerNav';
import "./font/ChangaOne-Regular.ttf";
import Cookies from 'js-cookie';
// imports

export default function() {
    const cookieData = Cookies.get('userInfo'); //get cookie date
    const student = JSON.parse(cookieData).userName; // get username from cookie data
    return (
        <>
        <BurgerMenu/>     
        <div style={{marginLeft: "1%"}}>
        <h2 id="accountHeader">Account Information</h2>
            Username: {student} {/*Render username */}
        </div>
        <br></br>
        <div style={{marginLeft: "1%"}}>
            <p>More Information Coming Soon</p>
        </div>
        </>
    )
}
// account page