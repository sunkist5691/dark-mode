import React, { useState } from 'react';
import useDarkMode from './hooks/useDarkMode'

const Navbar = (props) => {
  // const [darkMode, setDark] = useDarkMode('dark', false)

  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode); // 이걸 통해서 class 를 바꿔줘야하는데, 그러면 어떻게 하면 클래스를 바꿀수 있을까?
    // props.setDarkMode(!props.darkMode)
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
