import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"Amanda"}
        fotoUsuario={"https://picsum.photos/50/80"}
        fotoPost={"https://picsum.photos/200/170"}
      />
      <Post
        nomeUsuario={"Anielly"}
        fotoUsuario={"https://picsum.photos/50/90"}
        fotoPost={"https://picsum.photos/200/190"}
      />
    </MainContainer>
  );
}

export default App;
