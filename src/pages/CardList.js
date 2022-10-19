import Card from "../components/Card";
import styled from "styled-components";

export default function CardList({ characters }) {
  return (
    <StyledCardsList>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </StyledCardsList>
  );
}

const StyledCardsList = styled.ul`
  padding: 0;
  gap: 5px;
  list-style: none;
`;
