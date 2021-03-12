import React from 'react';
import Logo from "./Images/logo.png"
import "./index.css"
const Header = () => {
  return (
  <>
  <div className = "header">
      <img src = {Logo} alt = "logo" width = "70px" height= "70px"/>
      <h1>Panda Keep</h1>
  </div>
  </>
  );
}
export default Header;
