import { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import TrendContainer from './TrendContainer';
import WhoToFollow from './WhoToFollow';

const Container = styled.div`
  min-height: 100vh !important;
  width: 40%;
`;

const Navbar = styled.div`
  position: fixed;
  width: calc(30% + 12px);
  height: 55px;
  margin-right: 50px;
  background: black;
  display: flex;
  padding-top: 6px;
  padding-left: 25px;
`;

const InputWrapper = styled.div`
  width: 90%;
  height: 40px;
  background: #16181C;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;

  ${props => props.active && css`
    border: 1px solid #1D9BF0;
    background: black;
  `}
`;

const SearchIconWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const SearchIcon = styled.svg`
  width: 1.4rem;
  fill: #71767B;

  ${props => props.active && css`
    fill: #1D9BF0;
  `}
`;

const NavInput = styled.input`
  background: transparent;
  width: 100%;
  height: 100%;
  padding-right: 35px;
  outline: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 0;
  
  ${props => props.active && css`
    color: white;
  `}

`;

const CloseSpanContainer = styled.div`
  background: #1D9BF0;
  display: none;
  align-items: center;
  justify-content: center;
  width: 7%;
  right: 5px;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;

  ${props => props.active && css`
    display: flex;
  `}
`;

const SpanClose = styled.span`
  color: black;
`;

const ShowSearched = styled.div`
  width: 88%;
  height: 100px;
  box-shadow: 0 0 8px rgba(202, 202, 202, 0.779);
  position: absolute;
  top: 88%;
  border-radius: 10px;
  display: none;
  justify-content: center;
  padding-top: 30px;
  color: #71767B;

  ${props => props.active && css`
    display: flex;
  `}
`;

const MainWrapper = styled.div`
  background: black;
  height: 100%;
  margin-top: 55px;
  padding-top: 5px;
  padding-left: 25px;
`;

const RightSection = () => {
  const [showActive, setShowActive] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleShowActive = () => {
    setShowActive(true);
    setShowWhite(true);
    if (inputValue !== "") {
      setShowCloseIcon(true);
    }

    else {
      setShowCloseIcon(false);
    }
  }

  useEffect(() => {
    if (inputValue.length > 0) {
      setShowCloseIcon(true);
    }
    else {
      setShowCloseIcon(false);
    }
  }, [inputValue])
  
  const handleHideActive = () => {
    setShowActive(false)
    if (inputValue === "") {
      setShowWhite(false);
    }
    else {
      setShowWhite(true);
      setShowCloseIcon(false);
    }
  }

  const handleEmptyValue = () => {
    setShowWhite(true);
    setInputValue('');
    setShowActive(true);
    setIsFocus(true);

    console.log(inputValue);
  }

  return (
    <Container>
      <Navbar>
        <InputWrapper active = {showActive}>
          <SearchIconWrapper onClick = {() => setShowActive(true)}>
              <SearchIcon active = {showActive} viewBox="0 0 24 24" aria-hidden="true" className="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g>
            </SearchIcon>
          </SearchIconWrapper>
          <NavInput value = {inputValue} placeholder="Search Twitter" active={showWhite} onFocus={handleShowActive} onBlur={handleHideActive} autoFocus = {isFocus} onChange = {(e) => setInputValue(e.target.value)} />
          <CloseSpanContainer active={showCloseIcon} onClick = {handleEmptyValue}>
            <SpanClose className="material-symbols-outlined">
              close
            </SpanClose>
          </CloseSpanContainer>
        </InputWrapper>
        <ShowSearched active = {showWhite}>
          Try searching for people, topics, or keywords
        </ShowSearched>
      </Navbar>
      <MainWrapper>
        <TrendContainer />
        <WhoToFollow />
      </MainWrapper>
    </Container>
  )
}

export default RightSection;