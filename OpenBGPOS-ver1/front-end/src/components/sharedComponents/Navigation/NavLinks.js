import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          НАЧАЛО
        </NavLink>
      </li>
      <li>
        <NavLink to='/dop/info'>Допълнителна информация</NavLink>
      </li>
      <li>
        <NavLink to='/Login'>ВХОД</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
