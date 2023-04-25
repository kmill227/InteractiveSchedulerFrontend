import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../images/long-logo.png';
// imports

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #1976d2;
  
  }
`
// the nav bar


const BurgerMenu = () => {
  return (
    <Nav>
        <img src={logo}></img>
      <div className="logo">
      </div>
      <Burger />
    </Nav>

  )
}
// the nav bar + burger menu
export default BurgerMenu