import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import CardList from "./CardList";

export default function Favorites() {
  const { characters } = useContext(CharacterContext);

  return (
    <CardList
      characters={characters.filter((character) => character.favorite === true)}
    />
  );
}
