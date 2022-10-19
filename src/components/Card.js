import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Card({ character }) {
  const { characters, setCharacters } = useContext(CharacterContext);

  function toggleFavorite() {
    setCharacters(
      characters.map((char) =>
        character.id === char.id ? { ...char, favorite: !char.favorite } : char
      )
    );
  }

  return (
    <StyledCard>
      <Img src={character.image} alt="" />
      <Name>{character.name}</Name>
      <p>Gender: {character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <NavLink to={`/${character.id}`}>Show More</NavLink>
      <Button
        type="button"
        onClick={toggleFavorite}
        isFavorite={character.favorite}
      ></Button>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  margin: 10px auto;
  border: 1px solid black;
  width: 70%;
  text-align: center;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0.5rem;
`;

const Button = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${({ isFavorite }) => (isFavorite ? "green" : "lightgray")};
  position: absolute;
  top: -10px;
  right: 0;
`;
