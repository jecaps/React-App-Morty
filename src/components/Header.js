import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <H1>React App Morty</H1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const H1 = styled.h1`
  margin: 0;
`;
