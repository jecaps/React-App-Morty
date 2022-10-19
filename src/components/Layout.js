import { Outlet } from "react-router-dom";

import styled from "styled-components";

import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Nav />
    </>
  );
}

const Main = styled.main`
  margin: 5rem auto;
  width: 500px;
`;
