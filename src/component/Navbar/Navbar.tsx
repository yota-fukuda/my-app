import React from 'react';
import Burger from './burger';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    background-color: green;

    .logo {
        padding: 15px;
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