import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #096F7D;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;

const PageNotFound404 = () => {
    return (
        <>
            <div className="container text-center mt-24 xl:w-1/2 md:w-3/5 w-4/5">
                <h1 Style="font-size: 48px; font-weight: bold;">Sorry</h1>
                <p Style="font-size: 36px; font-weight: bold;">That page cannot be found</p>
                <div Style="color: #fff;
                              font-size: 12em;
                              font-weight: bold;
                              font-family: Helvetica;
                              text-shadow:
                                0 1px 0 #ccc,
                                0 2px 0 #c9c9c9,
                                0 3px 0 #bbb,
                                0 4px 0 #b9b9b9,
                                0 5px 0 #aaa,
                                0 6px 1px rgba(0,0,0,.1),
                                0 0 5px rgba(0,0,0,.1),
                                0 1px 3px rgba(0,0,0,.3),
                                0 3px 5px rgba(0,0,0,.2),
                                0 5px 10px rgba(0,0,0,.25),
                                0 10px 10px rgba(0,0,0,.2),
                                0 20px 20px rgba(0,0,0,.15);"
                > 404
                </div>
                <NavBtnLink to="/">Home page</NavBtnLink>
            </div>
        </>
    );
};

export default PageNotFound404;