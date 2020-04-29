import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import MenuCloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
//import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const NavigationBar = () => {
    var menuOpen = false;
    function toggleMenu() {
        const menu = document.getElementById('menu-window');
        const menuButton = document.getElementById('menu-button');
        if(menu.classList.contains("menu-closed")){
            menu.classList.remove("menu-closed");
            menuOpen = true;
        } else {
            menu.classList.add("menu-closed");
            menuOpen = false;
        }
    }
    return ([
        <nav>
            <Link id="menu-button" onClick={toggleMenu.bind(this)}>
                {menuOpen ? <MenuCloseIcon /> : <MenuIcon />}
            </Link>
            <Link id="profile-button" to="profile"><PersonIcon /></Link>
        </nav>,
        <div id="menu-window" class="menu-window menu-closed">
            <Link to="/">Home</Link>
            <Link to="/recipes/Starters">Starters</Link>
            <Link to="/recipes/Main dishes">Main dishes</Link>
            <Link to="/recipes/Desserts">Desserts</Link>
        </div>
    ]);
  }

  export default NavigationBar;