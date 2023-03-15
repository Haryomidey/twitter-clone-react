import styled from 'styled-components';
import LeftSection from "./LeftSection/LeftSection";
import MiddleSection from './Main/MiddleSection';
import RightSection from './Main/RightSection';

import { useState, useEffect } from 'react';

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

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const [direction, setDirection] = useState('left');


  const handleHomeButtonClicked = () => {
    setDirection('right');
  }

  const bodyClicked = () => {
    setDirection('left');
  }

  function handleMouseDown(event) {
    if (event.button === 0) {
      setIsDragging(true);
      setStartX(event.clientX);
      setDeltaX(0);
    }
  }

  function handleMouseMove(event) {
    if (isDragging) {
      setDeltaX(event.clientX - startX);
      setDirection(deltaX < 0 ? 'left' : 'right');
    }
  }

  function handleMouseUp(event) {
    if (event.button === 0) {
      setIsDragging(false);
      setDeltaX(0);
    }
  }

  return (
    <AppContainer onMouseDown = {handleMouseDown} onMouseMove = {handleMouseMove} onMouseUp = {handleMouseUp}>
      <LeftSection direction={direction} />
      <MiddleSection handleHomeButtonClicked = {handleHomeButtonClicked} bodyClicked = {bodyClicked} />
      <RightSection />
    </AppContainer>
  );
}

export default App;
