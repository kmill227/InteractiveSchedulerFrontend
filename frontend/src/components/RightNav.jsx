import React from 'react';
import styled from 'styled-components';
import './RightNav.css';
import "../font/Raleway-Regular.ttf";
// imports

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #1976d2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 19;
    li {
      color: #fff;
    }
  }
`;
// when the bar drops


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="../Home" id="link">Home</a></li>
      <li><a href="../Groups" id="link">Groups</a></li>
      <li><a href="../CalendarApp" id="link">Calendar</a></li>
      <li><a href="../Messages" id="link">Messages</a></li>
      <li><a href="../Notifications" id="link">Notifications</a></li>
      <li><a href="../Account" id="link">Account</a></li>
      <li><a href="../Support" id="link">Support</a></li>
      <li><a href="../" id="link">Logout</a></li>
    </Ul>
  )
}
// just the links

export default RightNav