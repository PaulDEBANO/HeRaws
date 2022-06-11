import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  BlackLine,
} from './NavbarElements';
import BasicModal from "../Modal";
import logo from "../../assets/logo_heraws.png"

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt="HeRaws" width="250"/>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/simulator' activeStyle>
            Simulator
          </NavLink>
          <NavLink to='/about' activeStyle>
              About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <BasicModal></BasicModal>
        </NavBtn>
      </Nav>
      <BlackLine />
    </>
  );
};

export default Navbar;
