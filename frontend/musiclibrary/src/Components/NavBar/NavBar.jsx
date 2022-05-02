import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";



const Navbar = () => {
  
  
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white", alignContent: "center", textAlign: "center"}}>
            <b>Music Library</b>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
