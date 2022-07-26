import React from "react";
import {slide as Menu} from "react-burger-menu";
import {Link} from "react-router-dom";
import "./SideBar.css";

export default props => {
    return (
        <Menu right {...props}>
            <Link className="menu-item" to="/">About</Link>
            <Link className="menu-item" to="/Research">Research</Link>
            <Link className="menu-item" to="/Research">Projects</Link>
            <Link className="menu-item" to="/Research">Contact</Link>
        </Menu>
    )
}