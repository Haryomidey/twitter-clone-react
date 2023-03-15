import styled, {css} from 'styled-components';
import { BookmarkIcon, Communities, Explore, HomeIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, ThreeDot, TweetsIcon, TwitterBlueIcon, TwitterLogo } from '../TweetIcons';

import { useState, useEffect } from 'react';

import MyPhoto from '../images/profileImage/My_profile.jpg';

const Container = styled.div`
  color: #E7E9EA;
  border-right: 1px solid #71767b6c;
  width: 23%;
  height: 100%;
  background: transparent;
  position: fixed;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1161px) {
    width: 6%;
    overflow-x: hidden;
  }

   @media (max-width: 1015px) {
    width: 8%;
  }

  @media (max-width: 730px) {
    position: fixed;
    top: 0;
    // left: -100%;
    left: ${props => props.active === "left" ? `${100}%` : props.active ===  'right' ? `${0}%` : ''};
    bottom: 0;
    width: 40%;
    min-width: 200px;
    height: 100%;
    background: black;
    z-index: 11;
  }

`;

const TwitterIcon = styled.h1`
  margin-left: 20%;
  margin-top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover{
    background: #0A171F;
  }

  @media (max-width: 1161px) {
    margin-left: 10%;
  }
`;

const Ulcontainer = styled.ul`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  gap: 2px;

  @media (max-width: 1161px) {
    padding-left: 0;
  }

  @media (max-width: 730px) {
    padding-left: 5%;
  }
`;

const LiContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: fit-content;
  padding: 10px 18px;
  font-size: 1.3rem;
  border-radius: 40px;
  transition: background 0.3s ease;

  &:hover{
    background: #181818;
  }

  @media (max-width: 1161px) {
    gap: 40px;

    &:hover{
      background: 0;
    }
  }

  @media (max-width: 730px) {
    gap: 10px;

    &:hover{
      background: #181818;
    }
  }
`;

const LiText = styled.h2`
  color: white;
  font-weight: 300;

  @media (max-width: 1161px) {
    &:hover{
      background: 0;
    }
  }

`;

const Bold = styled.p`
  font-weight: 600;
`;


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;

  @media (max-width: 730px){
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  background: #1D9BF0;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  width: 70%;
  padding: 18px 0;
  margin-left: 30px;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover{
    background: #1A8CD8;
  }

  @media (max-width: 1161px) {
    display: none;
  }

  @media (max-width: 730px) {
    display: block;
  }
`;

const ButtonTweet = styled.button`
  background: #1D9BF0;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  width: 50px;
  height: 50px;
  display: none;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover{
    background: #1A8CD8;
  }

  @media (max-width: 1161px) {
    display: flex;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

const MyAccountContainer = styled.div`
  width: 75%;
  height: 60px;
  margin-left: 20%;
  margin-top: 12px;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover{
    background: #1D1F23;
  }

  @media (max-width: 1161px) {
    margin-left: 0;
     &:hover{
      background: 0;
    }
  }

  @media (max-width: 730px) {
    margin-left: 5%;
    width: 90%;

     &:hover{
      background: #1D1F23;
    }
  }

`;

const AccountImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 1161px) {
    margin-right: 20px;
  }
`;

const UserAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserAccount = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 680px){
    margin-left: -10px;
  }
`;

const UserName = styled.p`
  display: flex;
  align-items: center;

  @media (max-width: 680px){
    font-size: .9rem;
  }
`;

const Span = styled.span`
  font-size: 1.3rem;
  color: #1D9BF0;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

  @media (max-width: 680px){
    font-size: 1rem;
  }
`;

const UserHandle = styled.p`
  color: #71767B;
  padding-top: 3px;

  @media (max-width: 680px){
    font-size: .8rem;
  }
  
`;

const ThreeDotWrapper = styled.div`
  font-size: .9rem;

  @media (max-width: 680px){
    display: none;
  }
`;


const LeftSection = ({direction}) => {
  return (
    <Container active = {direction}>
      <TwitterIcon>
        <TwitterLogo className="twitter_logo" />
      </TwitterIcon>
      <Ulcontainer>
        <LiContainer>
          <HomeIcon />
          <LiText><Bold>Home</Bold></LiText>
        </LiContainer>
        <LiContainer>
          <Explore />
          <LiText>Explore</LiText>
        </LiContainer>
        <LiContainer>
          <Communities />
          <LiText>Communities</LiText>
        </LiContainer>
        <LiContainer>
          <NotificationIcon />
          <LiText>Notifications</LiText>
        </LiContainer>
        <LiContainer>
          <MessageIcon />
          <LiText>Home</LiText>
        </LiContainer>
        <LiContainer>
          <BookmarkIcon />
          <LiText>Bookmarks</LiText>
        </LiContainer>
        <LiContainer>
          <TwitterBlueIcon />
          <LiText>Twitter Blue</LiText>
        </LiContainer>
        <LiContainer>
          <ProfileIcon />
          <LiText>Profile</LiText>
        </LiContainer>
        <LiContainer>
          <MoreIcon />
          <LiText>More</LiText>
        </LiContainer>
      </Ulcontainer>
      <ButtonContainer>
        <Button>Tweet</Button>
        <ButtonTweet><TweetsIcon /></ButtonTweet>
      </ButtonContainer>
      <MyAccountContainer>
        <UserAccountWrapper>
          <AccountImage src={MyPhoto} />
          <UserAccount>
            <UserName>
              Ayotech👨🏿‍💻
              <Span className="material-symbols-outlined ">
              verified
              </Span>
            </UserName>
            <UserHandle>
              @Ayotech11
            </UserHandle>
          </UserAccount>
        </UserAccountWrapper>
        <ThreeDotWrapper>
          <ThreeDot />
        </ThreeDotWrapper>
      </MyAccountContainer>
    </Container>
  )
}

export default LeftSection;