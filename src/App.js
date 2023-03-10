import styled from 'styled-components';
import LeftSection from "./LeftSection/LeftSection";
import Main from './Main/Main';

const AppContainer = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-item: center;
`

function App() {
  return (
    <AppContainer>
      <LeftSection />
      <Main />
    </AppContainer>
  );
}

export default App;
