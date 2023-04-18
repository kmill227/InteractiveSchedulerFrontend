import React from 'react';
import "./font/ChangaOne-Regular.ttf";
import BurgerMenu from './components/BurgerNav';
  
const Support = () => {
  return (
    <>
    <BurgerMenu />
    <div style={{marginLeft: 10}}>
    <h1 id="supportHeader">Support</h1>
    <div id="Support_mainContent">
    <h2>Frequently Asked Questions</h2>
    <p>Q: How do I create a Group?</p>
    <p>A: Navigate to the Groups page, and click "Create Group", you'll then imput the information of your new group.</p>
    <br></br>
    <br></br>
    <p>Q: What are "Announcements"?</p>
    <p>A: Announcements are given to us from group leaders who wish for others to come check out their groups!, contact us if you wish
      to put an announcment on the Home page!
    </p>
    <br></br>
    <br></br>
    <p>Q:...........</p>
    <p>A:...........</p>
    <br></br>
    <br></br>
    <h2>Need more help?</h2>
    <p>Contact us at: FlashFriendsHelp@gmail.com</p>
    </div>
    </div>
    </>
  );
};
  
export default Support;