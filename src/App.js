import styled from 'styled-components';
import LeftSection from "./LeftSection/LeftSection";
import Main from './Main/Main';
import MiddleSection from './Main/MiddleSection';
import RightSection from './Main/RightSection';

const AppContainer = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: auto;
  display: flex;
  align-item: center;
  justify-content: space-between;
`

function App() {
  return (
    <AppContainer>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </AppContainer>
  );
}

export default App;
