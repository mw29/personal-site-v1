import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import './Layout.css';
const Layout = () => {
    return(
        <div >
            <div>
                <Header/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Layout;