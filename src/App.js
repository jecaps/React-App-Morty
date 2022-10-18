import styled from "styled-components";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Card />
      </Main>
      <Nav />
    </>
  );
}

const Main = styled.main`
  margin: 5rem auto;
  width: 500px;
`;
