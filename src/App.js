import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Card from "./components/Card";
import Character from "./pages/Character";
import Layout from "./components/Layout";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route
              index
              element={
                <CardsList>
                  {characters.map((character) => (
                    <Card
                      key={character.id}
                      id={character.id}
                      name={character.name}
                      image={character.image}
                      gender={character.gender}
                      status={character.status}
                      species={character.species}
                    />
                  ))}
                </CardsList>
              }
            />

            <Route
              path=":id/"
              element={<Character characters={characters} />}
            />
          </Route>

          <Route
            path="favorites"
            element={
              <CardsList>
                {characters.map((character) => (
                  <Card
                    key={character.id}
                    name={character.name}
                    image={character.image}
                  />
                ))}
              </CardsList>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
const CardsList = styled.ul`
  padding: 0;
  gap: 5px;
  list-style: none;
`;
