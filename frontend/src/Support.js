import React from 'react';
import "./font/ChangaOne-Regular.ttf";
import BurgerMenu from './components/BurgerNav';
  // imports
const Support = () => {
  return (
    <>
    <BurgerMenu /> {/*navbar*/}
    <div style={{marginLeft: "1%"}}>   {/*styling*/}
    <h1 id="supportHeader">Support</h1>
    <div id="Support_mainContent">
    <h2>Frequently Asked Questions</h2>
    <p>Q: How do I create a Group?</p>
    <p>A: Navigate to the Groups page, and click "Create Group", you'll then imput the information of your new group.</p>
    <br></br>
    <br></br>
    <p>Q: What are "Messages"?</p>
    <p>A: Messages can be sent by clicking send message and entering another users email and then enter the content and hit send.
    </p>
    <br></br>
    <br></br>
    <p>Q: What are "Events"?</p>
    <p>A: Events can be created for just yourself or can be linked to a group. They then can be filtered on the calendar page.
    </p>
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