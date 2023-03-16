import React, { useContext } from "react";
import { AuthContext } from "../context/context";
import { NavLink} from "react-router-dom";
import "./NavigationBar.css";
import { cookies } from "../App";
function NavigationBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const loggOutHandler = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
    })
    .then((response) => response.json())
    .then((data) => {
      setIsLoggedIn(data);
      cookies.remove("jwt")
      
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
            <li onClick={loggOutHandler}>
              <NavLink to={"/"}>logout</NavLink>
            </li>
          {/* {isLoggedIn && (
          )} */}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
