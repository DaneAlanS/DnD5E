import React, { useState, useEffect } from "react";

function App() {
  const [menuState, setMenuState] = useState(0);

  function menuClick() {
    if (menuState == 0) {
      document.getElementsByClassName("selection")[0].style.visibility =
        "visible";
      setMenuState(1);
    } else {
      setMenuState(0);
      document.getElementsByClassName("selection")[0].style.visibility =
        "hidden";
    }
  }

  return (
    <div className="app">
      <div className="side-bar">
        <i className="fas fa-bars" onClick={menuClick}></i>
        <ul className="selection">
          <li>Classes</li>
          <li>Races</li>
          <li>Equipment</li>
          <li>Spells</li>
          <li>Monsters</li>
          <li>Game Mechanics</li>
        </ul>
        <span className="logo"></span>
      </div>
      <div className="search-bar"></div>
      <div className="content-wrapper"></div>
    </div>
  );
}

export default App;
