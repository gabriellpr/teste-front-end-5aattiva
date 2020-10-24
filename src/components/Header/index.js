import React from "react";

import "./styles.css";

//Logo marvel
import logo from "../../marvel-logo-7.png";

const Header = () => (
  <div className="header">
    <img className="logo" src={logo} />
  </div>
);

export default Header;
