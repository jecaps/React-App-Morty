import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import CardList from "./CardList";

export default function Home() {
  const { characters } = useContext(CharacterContext);

  return <CardList characters={characters} />;
}
