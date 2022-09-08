import React from "react";
import NavBar from "../NavBar/NavBar";
import './Header.css';
import StockTicker from "../stockTicker/stock-ticker";
import SideBar from "../sidebar/SideBar";

function Header() {
    return (
        <div>
            <div className="header-container">

                <div className="container-fluid">
                    
                    <div className="row justify-content-between ">
                        <div className="col">
                            <h2 className="header-title">Madeline Watts</h2>
                        </div>
                        <div className="col-3">
                            <NavBar />
                        </div>

                    </div>
    
                </div>
            </div>
        </div>
    );
}

export default Header;