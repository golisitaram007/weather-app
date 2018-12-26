import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from 'react-materialize';
import Logout from './Logout';

const Navbar = () => {
  return (
    <div id="appNavbar">
        <div className="">
            <nav className="nav blue darken-1">
                <div className="nav-wrapper container">
                    <div className="row">
                    <NavLink to="/" className="brand-logo"><Icon>ac_unit</Icon>Weather App</NavLink>
                        <ul id="nav-mobile" className="right">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/activities">Activities</NavLink></li>
                            <li><NavLink to="/weatherforecast">Weather Forecast</NavLink></li>
                            <li><Logout/></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    </div>
  )
}

export default Navbar;