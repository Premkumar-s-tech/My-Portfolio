import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
background.color
`
const Navbar = () => {
  return (
  <Nav>
    <NavContainer>
        <NavLogo>Logo</NavLogo>
        <MobileIcon></MobileIcon>
        <NavItem>
            <NavLink>Home</NavLink>
        </NavItem>
        <ButtonContainer>
            <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
    </NavContainer>

  </Nav>
  );
};

export default Navbar