import React, { useEffect, useState } from 'react'
import Netflixlogo from "../assets/netflix-logo.png"
import Avatarlogo from "../assets/blank-avatar.jpg"

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll", null);
    };
  }, []); 
    

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img src={Netflixlogo} alt="netflix logo" className="nav__logo" />
        <img src={Avatarlogo} alt="avatar logo" className="nav__avatar" />
    </div>
  )
}

export default Nav