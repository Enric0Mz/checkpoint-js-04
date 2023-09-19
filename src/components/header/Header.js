import React from 'react';
import styled from 'styled-components';
import logoImage from '../../images/star-wars-logo-0.png'


const HeaderContainer = styled.header`
  background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

const Logo = styled.img`
  height: 100px; 
  margin-left: 20px; 
`;

const Navigation = styled.nav`
  text-align: right;
  margin-right: 20px; 
`;

const NavList = styled.ul`
    padding: 0.25em 1em;
    color: #4312AE; 
`;

const NavItem = styled.li`
  display: inline;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
`;


function Header() {
    return (
        <HeaderContainer>
            <Logo src={logoImage} alt="Your Logo" />
            <Navigation>
                <NavList>
                    <NavItem>Home</NavItem>
                    <NavItem>Sobre</NavItem>
                    <NavItem>Contato</NavItem>
                    <NavItem>Blog</NavItem>
                    <NavItem>FAQ</NavItem>
                </NavList>
            </Navigation>
        </HeaderContainer>
    );
};

export default Header;
