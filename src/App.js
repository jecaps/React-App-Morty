import styled from "styled-components";

export default function App() {
  return (
    <>
      <Header>
        <H1>React App Morty</H1>
      </Header>

      <Main>
        <Card>
          <Img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt=""
          />
          <H2>Morty Smith</H2>
        </Card>
      </Main>

      <Footer>
        <Nav>
          <a href="/">Home</a>
          <a href="/random">Random</a>
          <a href="/favorites">Favorites</a>
          <a href="/creative">Get Creative</a>
        </Nav>
      </Footer>
    </>
  );
}

const Header = styled.header`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Main = styled.main`
  margin: 5rem auto;
  width: 500px;
`;

const Card = styled.article`
  margin: auto;
  border: 1px solid black;
  width: 70%;
`;

const Img = styled.img`
  width: 100%;
`;

const H2 = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0.5rem;
`;

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
