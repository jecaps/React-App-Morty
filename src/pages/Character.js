import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import styled from "styled-components";

export default function Character() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { characters } = useContext(CharacterContext);

  const character = characters.filter((c) => c.id === Number(id));

  return (
    <Div>
      <img src={character[0]["image"]} alt="" />
      <h2>Name: {character[0]["name"]}</h2>
      <p>Gender: {character[0]["gender"]}</p>
      <p>Species: {character[0]["species"]}</p>
      <p>Origin: {character[0]["origin"]["name"]}</p>
      <p>Location: {character[0]["location"]["name"]}</p>
      <ul>
        <p>Episodes Appeared: </p>{" "}
        {character[0]["episode"]
          .map((ep) => <li key={ep}>{ep}</li>)
          .slice(0, 10)}
      </ul>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;

  h2,
  p {
    margin: 0;
    padding: 0.5rem;
  }

  button {
    width: 50%;
    align-self: center;
    padding: 0.5rem;
    margin: 0.25rem;
  }
`;
