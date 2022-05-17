import "./App.css";
import styled from "styled-components";
import MainHeader from "./header";

const MainContainer = styled.div`
  box-sizing: border-box;
`;

function App() {
  return (
    <MainContainer>
      <MainHeader />
    </MainContainer>
  );
}

export default App;
