import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

import Layout from "./components/Layout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Character from "./pages/Character";
import { CharacterContext } from "./context/CharacterContext";

export default function App() {
  const [data, setData] = useState([]);

  const [characters, setCharacters] = useState(
    loadFromLocal("saved characters") ?? data
  );

  useEffect(() => {
    saveToLocal("saved characters", characters);
  }, [characters]);

  useEffect(() => {
    async function getData() {
      const RES = await fetch("https://rickandmortyapi.com/api/character");
      const DATA = await RES.json();
      setData(DATA.results.map((result) => ({ ...result, favorite: false })));
    }
    getData();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            <Route index element={<Home />} />

            <Route path=":id/" element={<Character />} />
          </Route>

          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </CharacterContext.Provider>
  );
}
