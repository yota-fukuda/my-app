import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
}

const Ul = styled.ul<{ open: boolean }>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    
    
    li {
        padding: 0 20px;
        a {
            color: #fff;
        }
            a: hover {
                color: red;
            }
    }
    
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #C0C0C0;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        margin-top: 0px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        
        li {
            color: #fff;
            font-size: 20px;
            margin-bottom: 15px;
        }
    }
`;

const RightNav = (props: Props) => {
  return (
      <Ul 
        open={props.open}
        onClick={() => props.setOpen(!props.open)}
        >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Products">Products</Link>
            </li>
            <li>
                <Link to="/Contacts">Contacts</Link>
            </li>
      </Ul>
      
  );
}

export default RightNav;