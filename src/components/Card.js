import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Card({ id, name, image, gender, status, species }) {
  return (
    <StyledCard>
      <Img src={image} alt="" />
      <Name>{name}</Name>
      <p>Gender: {gender}</p>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <NavLink to={`/${id}`}>Show More</NavLink>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  margin: 10px auto;
  border: 1px solid black;
  width: 70%;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
`;

const Name = styled.h2`
  margin: 0;
  padding: 0.5rem;
`;
