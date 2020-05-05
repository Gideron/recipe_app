import React from 'react';
import {Link} from "react-router-dom";

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import MenuCloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost"

const ALL_CATEGORIES = gql`
  {
    getCategories{
        id
        title
    }
  }
`;

const NavigationBar = () => {
    const { loading, error, data } = useQuery(ALL_CATEGORIES);
  
    var categories = null;
    if (data) categories = data.getCategories;
    
    var loggedin = false;
    var menuOpen = false;
    function toggleMenu() {
        const menu = document.getElementById('menu-window');
        if(menu.classList.contains("menu-closed")){
            menu.classList.remove("menu-closed");
            menuOpen = true;
        } else {
            menu.classList.add("menu-closed");
            menuOpen = false;
        }
    }
    function closeMenu() {
        const menu = document.getElementById('menu-window');
        menu.classList.add("menu-closed");
        menuOpen = false;
    }
    return ([
        <nav key="navkey">
            <button id="menu-button" onClick={toggleMenu.bind(this)}>
                {menuOpen ? <MenuCloseIcon /> : <MenuIcon />}
            </button>
            <Link id="profile-button" to={loggedin ?  "/profile" : "/login"} onClick={closeMenu.bind(this)}>{loggedin ?  <PersonIcon /> : <PersonOutlineIcon />}</Link>
        </nav>,
        <div id="menu-window" className="menu-window menu-closed" key="menukey">
            <Link to="/" onClick={closeMenu.bind(this)}>Home</Link>
            {categories ? categories.map(cat =>(<Link to={"/recipes/"+cat.title} onClick={closeMenu.bind(this)}>{cat.title}</Link>)) : <p>No categories</p>}
        </div>
    ]);
}

  export default NavigationBar;