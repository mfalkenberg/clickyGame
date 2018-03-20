import React from "react";
import "./Nav.css";


const Nav = props => 
		
	<nav>
    <ul>
      <li>
        <p>Clicky Game</p>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li>Current Score: {props.currentScore}</li>

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>


export default Nav;