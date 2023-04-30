import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupCard from './GroupCard';
import BurgerMenu from './components/BurgerNav';
// imports


export default function Group(){

    return (
      <>
        <BurgerMenu /> {/*navbar*/}
        <div className="groups">
          <div className={"groupCards"}>
            <GroupCard /> {/*nesting group card component that will list groups*/}
          </div>
        </div>
      </>
    )
}