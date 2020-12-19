import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

interface Props {
    open: boolean;
}

const Ul = styled.ul<Props>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    
    
    li {
        padding: 0 20px;

            a: hover {
                color: red;
            }
    }
    
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        
        li {
            color: #fff;
            font-size: 20px;
        }
    }
`;

const RightNav = ( ) => {
    const [open, setOpen] = useState<boolean>(false)
  return (
      <Ul open={open}>
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