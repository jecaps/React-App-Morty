import styled from "styled-components";

export default function Header() {
  return (
    <Footer>
      <Nav>
        <a href="/">Home</a>
        <a href="/random">Random</a>
        <a href="/favorites">Favorites</a>
        <a href="/creative">Get Creative</a>
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

  a {
    margin: 0;
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;
