import { useEffect, useState } from "react";

import styled from "styled-components";

import Header from "./components/Header";
import Card from "./components/Card";
import Nav from "./components/Nav";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      const RES = await fetch("https://rickandmortyapi.com/api/character");
      const DATA = await RES.json();
      setCharacters(DATA.results);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <CardsList>
          {characters.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </CardsList>
      </Main>
      <Nav />
    </>
  );
}

const Main = styled.main`
  margin: 5rem auto;
  width: 500px;
`;

const CardsList = styled.ul`
  padding: 0;
  gap: 5px;
  list-style: none;
`;
