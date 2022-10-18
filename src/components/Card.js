import styled from "styled-components";

export default function Card() {
  return (
    <StyledCard>
      <Img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt=""
      />
      <H2>Morty Smith</H2>
    </StyledCard>
  );
}

const StyledCard = styled.article`
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
