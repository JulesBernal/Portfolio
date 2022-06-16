import React from "react";
import { NavLink} from "react-router-dom";
import './Navbar.scss';
export default function Navbar(){

    let activeStyle={
        textDecoration:"underline",
        background:"#00ffff",
        color:"#5600ef"
    };

    return(
        <header id="navHeader">
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            style={({ isActive })=>
                                isActive ? activeStyle:undefined}
                            >Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about"
                            style={({ isActive })=>
                                isActive ? activeStyle:undefined}
                            >About</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/project_pd"
                            style={({ isActive })=>
                                isActive ? activeStyle:undefined}
                            >PD</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/project_code"
                            style={({ isActive })=>
                                isActive ? activeStyle:undefined}
                            >Code</NavLink>
                    </li>
                    {/* <li>
                        <NavLink 
                            to="/contact"
                            style={({ isActive })=>
                                isActive ? activeStyle:undefined}
                            >Contact</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}