import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
//import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const NavigationBar = () => {
    return (
        <nav>
            <Link id="menu-button" to="/recipes"><MenuIcon /></Link>
            <Link id="profile-button" to="profile"><PersonIcon /></Link>
        </nav>
    );
  }

  export default NavigationBar;