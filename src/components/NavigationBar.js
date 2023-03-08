import React, { useContext } from "react";
import { AuthContext } from "../context/context";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
function NavigationBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const loggOutHandler = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(data);
        console.log(data);
      });
  };
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"feed"}>Feed</NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to={"signup"}>signup</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to={"login"}>login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li onClick={loggOutHandler}>
              <NavLink>logout</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
