import styled from 'styled-components';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

const Container = styled.div`
  width: 77%;
  height: 100vh;
  position: relative;
  margin-bottom: 20px;
  left: 23%;
  display: flex;
  overflow-y: scroll;
  // background: blue;
  
  &::-webkit-scrollbar {
    display: none;
    }
`;

const Main = () => {
  return (
    <Container>
      <MiddleSection />
      <RightSection />
    </Container>
  )
}

export default Main