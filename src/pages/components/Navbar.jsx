import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import LogoImage from "../../assets/logo.png"
import "../../App.css"
const NavBar = () => {
  return (
    <Navbar className='navbar' variant="dark" fixed="top">
      <div className="logo"  >
        <div >
          <img
            src={LogoImage} // Replace with the actual path to your logo image
            alt="Logo"
            style={{ width: "100%",objectFit:"contain", display: "inline", padding: 0 }}
            className=""
          />
        </div>
        {/* <span className="logo-text fs-20 " style={{ display: 'inline', fontWeight: '700', marginLeft: "5px" }}></span> */}
      </div>

      <Button variant="dark" className=" login_btn">
        Player login
      </Button>


    </Navbar>
  );
};

export default NavBar;
