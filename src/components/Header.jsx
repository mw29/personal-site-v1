import React from "react";
import NavBar from "./NavBar";
import './Header.css';

function Header(){
    return(
        <div className="header-container">
            <h2>Header Test</h2>
            <NavBar/>
        </div >
    );
}

export default Header;