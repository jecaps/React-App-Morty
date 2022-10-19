import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Footer>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/random">Random</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        <StyledNavLink to="/creative">Get Creative</StyledNavLink>
      </Nav>
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: darkgray;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0;
  padding: 1rem;
`;
