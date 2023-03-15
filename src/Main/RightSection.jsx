import { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import TrendContainer from './TrendContainer';
import WhoToFollow from './WhoToFollow';

const Container = styled.div`
  flex: 0.4;
  max-height: 1500px;
  top: -1250px;
  position: sticky;

  @media (max-width: 1015px) {
    display: none;
  }

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
  z-index: 12;

  @media (max-width: 1161px) {
    width: calc(35% + 27px);
  }
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
  background: black;
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

const CopyrightContainer = styled.div`
  width: 80%;
  height: 80px;
  margin-top: 20px;
`;

const CopyrightUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const CopyrightLi = styled.li`
  color: #71767B;
  list-style: none;
  font-size: .9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
  line-height: 5px;
`;

const CopyrightText = styled.p`
  &:hover{
    text-decoration: underline;
  }
`;

const MoreThreeDot = styled.svg`
  fill: #71767B;
  width: 1rem;
`;

const CopyrightLastText = styled.p`
  color: #71767B;
  font-size: .9rem;
  margin-top: 10px;
`;

const MessageContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 28%;
  margin-left: 20px;
  height: 55px;
  background: black;
  box-shadow: 0 0 10px  #313b4592;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 0 15px;
  z-index: 11;

  ${props => props.active && css`
    height: 500px;
  `}

  @media (max-width: 1161px) {
    width: 33%;
  }
`;

const MessageTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    width: 100%
`;

const MessageContainerTitle = styled.h1`
  color: white;
  font-size: 1.28rem;
`;

const MessageIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MessagePlusSvg = styled.svg`
  fill: white;
  width: 1.4rem;
  cursor: pointer;
`;

const DoubleArrowUp = styled.svg`
  fill: white;
  width: 1.4rem;
  cursor: pointer;
`;

const DoubleArrowDown = styled.svg`
  fill: white;
  width: 1.4rem;
  cursor: pointer;
`;

const DisplayMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const DisplayMessageText = styled.p`
  color: white;
  font-size: 1.6rem;
`;

const RightSection = () => {
  const [showActive, setShowActive] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [showMessageDetails, setShowMessageDetails] = useState(false);
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
  }

  const handleShowMessageDetails = () => {
    setShowMessageDetails(true);
  }

  const handleHideMessageDetails = () => {
    setShowMessageDetails(false);
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
        <CopyrightContainer>
          <CopyrightUl>
            <CopyrightLi><CopyrightText>Terms of Service</CopyrightText></CopyrightLi>
            <CopyrightLi><CopyrightText>Privacy Policy</CopyrightText> </CopyrightLi>
            <CopyrightLi><CopyrightText>Cookie Policy</CopyrightText> </CopyrightLi>
            <CopyrightLi><CopyrightText>Accessibility</CopyrightText></CopyrightLi>
            <CopyrightLi><CopyrightText>Ads info</CopyrightText></CopyrightLi>
            <CopyrightLi><CopyrightText>More</CopyrightText><MoreThreeDot viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g>
            </MoreThreeDot></CopyrightLi>
          </CopyrightUl>
          <CopyrightLastText>© 2023 Twitter, Inc.</CopyrightLastText>
        </CopyrightContainer>
      </MainWrapper>
      <MessageContainer active = {showMessageDetails}>
        <MessageTitleWrapper>
          <MessageContainerTitle>Messages</MessageContainerTitle>
          <MessageIconContainer>
            <MessagePlusSvg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path></g>
            </MessagePlusSvg>
            {!showMessageDetails ?
              <DoubleArrowUp onClick = {handleShowMessageDetails} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z"></path></g>
              </DoubleArrowUp>
              
              :
              <DoubleArrowDown onClick = {handleHideMessageDetails} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M12 11.59L3.96 3.54 2.54 4.96 12 14.41l9.46-9.45-1.42-1.42L12 11.59zm0 7l-8.04-8.05-1.42 1.42L12 21.41l9.46-9.45-1.42-1.42L12 18.59z"></path></g>
              </DoubleArrowDown>
            }
          </MessageIconContainer>
        </MessageTitleWrapper>
        <DisplayMessage>
          <DisplayMessageText>No Message(s) here.</DisplayMessageText>
        </DisplayMessage>
      </MessageContainer>
    </Container>
  )
}

export default RightSection;