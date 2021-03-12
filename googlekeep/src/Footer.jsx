import React from 'react';
import "./index.css"
const Footer = () => {
  const year = new Date().getFullYear();
  return (
  <>
  <footer>
      <p>
       <center>copyright © {year} </center>  
      </p>
  </footer>
  </>
  );
}
export default Footer;
