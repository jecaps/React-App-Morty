import styled from "styled-components";

export default function Card({ name, image }) {
  return (
    <StyledCard>
      <Img src={image} alt="" />
      <H2>{name}</H2>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  margin: 10px auto;
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
