import React from "react";
import NavBar from "./NavBar";
import './Header.css';
import { BrowserRouter, Link, Route } from "react-router-dom";

function Header(){
    return(
        
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <h2>Test Header</h2>
                    </div>
                    <div className="col-6">
                        <NavBar/>
                    </div>

                </div>
            </div>
    );
}

export default Header;