import styled from 'styled-components';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

const Container = styled.div`
  width: 77%;
  height: 100%;
  position: relative;
  left: 23%;
  display: flex;
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