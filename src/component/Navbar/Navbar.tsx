import React from 'react';
import Burger from './burger';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    background-color: #000;

    .logo {
        color: #fff;
        padding: 15px;
        font-size: 20px;
        font-weight: bold;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                Portfolio
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar;