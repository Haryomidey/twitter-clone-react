import styled from 'styled-components';
import { BookmarkIcon, Communities, Explore, HomeIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon, ThreeDot, TwitterBlueIcon, TwitterLogo } from '../TweetIcons';

import MyPhoto from '../images/profileImage/My_profile.jpg';

const Container = styled.div`
  color: #E7E9EA;
  border-right: 1px solid #71767b6c;
  width: 23%;
  height: 100%;
  background: transparent;
  position: fixed;
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
`;

const Ulcontainer = styled.ul`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  gap: 2px;
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
`;

const LiText = styled.h2`
  color: white;
  font-weight: 300;
`;

const Bold = styled.p`
  font-weight: 600;
`;


const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
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
`;

const AccountImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserAccount = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 1.3rem;
  color: #1D9BF0;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
`;

const UserHandle = styled.p`
  color: #71767B;
  padding-top: 3px;
`;

const ThreeDotWrapper = styled.p`
  font-size: .9rem;
`;


const LeftSection = () => {
  return (
    <Container>
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