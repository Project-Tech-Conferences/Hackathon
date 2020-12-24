import React, {useState, useEffect } from 'react';
import { FaBars, Fatimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () =>{
    return(
    <h1>
        <IconContext.Provider value={{color:"#141414"}}>
        <Nav active={scroll} click={click}>
        </h1>
    )
}

export default Navbar

