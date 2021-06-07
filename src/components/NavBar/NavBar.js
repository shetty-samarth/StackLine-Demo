import React from 'react'
import icon from '../../data/stackline-logo.png'
import styled from 'styled-components'

const Nav = styled.nav`
padding: 0 0.5rem;
display:flex;
background: #052849;
height:3rem;
zindex:1;
`;

const Img = styled.img`
margin-bottom:0.2rem;
`;

const NavBar = () =>{
    return(
        <Nav>
            <Img src={icon} alt="Stackline Logo"></Img>
        </Nav>
    )
}

export default NavBar;