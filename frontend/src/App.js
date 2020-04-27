import React from 'react';
import logo from './logo.svg';

//material icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import './App.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <a id="menu-button" href="index.html"><MenuIcon /></a>
        <a id="profile-button" href="profile.html"><PersonIcon /></a>
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

export default App;
