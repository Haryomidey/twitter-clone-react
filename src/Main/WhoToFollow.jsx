import { useState } from 'react';
import styled, {css} from 'styled-components';
import WhoToFollowDB from '../WhoToFollowDB';

const Container = styled.div`
    width: 90%;
    margin-right: 50px;
    min-height: 100px;
    background: #16181C;
    border-radius: 15px;
    // overflow: hidden;
    margin-top: 15px;
`

const ContainerTitle = styled.div`
    padding: 15px;
    font-size: 1.4rem;
    font-weight: 700;
    color: #E7E9EA;
`;

const WhoToFollowList = styled.div`
    width: 100%;
    min-height: 50px;
    padding: 10px;
    transition: background 0.3s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover{
        background: #1D1F23;
    }
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;

    &:hover{
        .child{
            display: block;
        }
    }
`;

const UserImageContainer = styled.div`
    width: 50px;
    height: 50px;
`;

const UserImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const UserNameWrapper = styled.div`

`;

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    margin-bottom: 5px;
`;


const UserName = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    
    &:hover{
        text-decoration: underline;
    }
`;

const Span = styled.span`
    font-size: 1.2rem;
    color: #1D9BF0;
    font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
`;

const UserHandle = styled.p`
    font-size: .9rem;
    color: #71767B;
`;

const FollowButtonContainer = styled.div`

`;
const FollowButton = styled.button`
    border-radius: 20px;
    border: 1px solid white;
    background: white;
    font-size: .9rem;
    padding: 6px 20px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #D7DBDC;
    }
`;

const UnfollowButton = styled.button`
    border-radius: 20px;
    border: .06rem solid white;
    background: transparent;
    color: white;
    font-size: .9rem;
    width: 90px;
    height: 30px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #190305;
        color: #B41822;
        border: .06rem solid #B41822;
    }
`;

const ShowMore = styled.div`
    height: 50px;
    padding: 15px;
    display: flex;
    align-items: center;
    color: #1D9BF0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover{
        background: #1D1F23;
    }
`;

const UserHover = styled.div`
    width: 300px;
    min-height: 150px;
    background: black;
    padding: 20px 15px 15px 18px;
    border-radius: 15px;
    box-shadow: 0 0 10px #fffbfb7c;
    position: absolute;
    top: 90%;
    left: -20%;
    color: white;
    display: none;
    z-index: 1;
`;

const UserImageHoverContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
`;

const UserHoverImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const FollowButtonHover = styled.button`
    border-radius: 20px;
    border: 1px solid white;
    background: white;
    font-size: .9rem;
    width: 70px;
    height: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #D7DBDC;
    }
`;

const UnfollowButtonHover = styled.button`
    border-radius: 20px;
    border: .06rem solid white;
    background: black;
    color: white;
    font-size: .9rem;
    width: 90px;
    height: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #190305;
        color: #B41822;
        border: .06rem solid #B41822;
    }
`;

const HoverTweetContentContainer = styled.div`
    width: 100%;
`;

const HoverTweetContent = styled.div`
    width: 80%;
    line-height: 20px;
    margin: 10px 0;
    font-size: .9rem;
`;

const FollowingWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Following = styled.p`
    color: white;
    font-size: .9rem;

    &:hover{
        text-decoration: underline;
    }
`;

const Follower = styled.p`
    color: white;
    font-size: .9rem;

    &:hover{
        text-decoration: underline;
    }
`;

const FollowingSpan = styled.span`
    color: #71767B;
    font-size: .9rem;
`;
const FollowerSpan = styled.span`
    color: #71767B;
    font-size: .9rem;
`;

const UnFollowContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background:  #283b47b1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 111;
    backdrop-filter: blur(1px);

    &:hover + ${Container} {
        pointer-events: none;
  }
`;

const UnFollowContainerBox = styled.div`
    width: 310px;
    height: 320px;
    padding: 0 30px;
    background: black;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const UnFollowUser = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const UnfollowText = styled.p`
    color: #71767B;
    line-height: 23px;
`;

const UnfollowButtonShow = styled.button`
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 20px;
    border: 1px solid white;
    background: white;
    font-size: 1rem;
    width: 100%;
    height: 43px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #D7DBDC;
    }
`;

const CancelUnfollowButton = styled.button`
    border-radius: 20px;
    border: .06rem solid white;
    background: black;
    color: white;
    font-size: .9rem;
    width: 100%;
    height: 43px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #1D1F23;
        border: .06rem solid white;
    }
`;


const WhoToFollow = () => {

    const [followState, setFollowState] = useState(WhoToFollowDB);
    const [hoverState, setHoverState] = useState(null);
    const [hoveredState, setHoveredState] = useState(null);
    const [showUnfollowContainer, setShowUnfollowContainer] = useState(false);
    const [showContainer, setShowContainer] = useState(null);

    const unfollowClick = (id) => {
        setFollowState(followState.map(tweet => {
            if (tweet.id === id.id) {
                return { ...tweet, followed: true };
            }
            return tweet;
        }))
    }
    
    const followClick = (id) => {
        setFollowState(followState.map(tweet => {
            if (tweet.id === id.id) {
                return { ...tweet, followed: false };
            }
            return tweet;
        }))
    }

    const handleMouseEnter = (index) => {
        setHoverState(index);
        setHoveredState(null);
    }

    const handleMouseLeave = (index) => {
        setHoverState(null);
        setHoveredState(index);
    }

      const handleMouseEnterHover = (index) => {
        setHoveredState(index);
        setHoverState(null);
    }

    const handleMouseLeaveHover = (index) => {
        setHoveredState(null);
        setHoverState(index);
    }

    const handleUnfollowContainerShow = (index) => {
        setShowContainer(index)
        setShowUnfollowContainer(true);
    }

    const handleUnfollowContainerHide = () => {
        setShowContainer(null)
        setShowUnfollowContainer(false);
    }

    const hideFollow = (follow) => {
        followClick(follow)
        setShowUnfollowContainer(false);
        setShowContainer(null)
    }

    return (
      <Container>
        <ContainerTitle>
            Trends for you
        </ContainerTitle>
        {followState.map(follow => (
            <WhoToFollowList key = {follow.id}>
                <UserContainer>
                    <UserHover className = "child">
                        <UserImageHoverContainer>
                            <UserHoverImage src = {follow.userImage} />
                            {follow.followed ? 
                                <UnfollowButtonHover onClick = {() => followClick(follow)} onMouseEnter={() => handleMouseEnterHover(follow.id)} onMouseLeave={handleMouseLeaveHover}>{hoveredState === follow.id ? 'UnFollow' : 'Following'}</UnfollowButtonHover>
                                :
                                <FollowButtonHover onClick = {() => unfollowClick(follow)}>Follow</FollowButtonHover>
                            }
                        </UserImageHoverContainer>
                        <UserNameWrapper>
                            <User>
                                <UserName>{follow.userName}</UserName>
                                {follow.verified === "yes" ? <Span className="material-symbols-outlined ">
                                    verified
                                </Span> : ''}
                            </User>
                            <UserHandle>@Ayotech11</UserHandle>
                        </UserNameWrapper>
                        <HoverTweetContentContainer>
                            <HoverTweetContent>
                                {follow.userBio}
                            </HoverTweetContent>
                        </HoverTweetContentContainer>
                        <FollowingWrapper>
                            <Following>{follow.following} <FollowingSpan>Following</FollowingSpan></Following>
                            <Follower>{follow.follower} <FollowerSpan>Followers</FollowerSpan></Follower>
                        </FollowingWrapper>
                    </UserHover>
                    <UserImageContainer>
                        <UserImage src = {follow.userImage} />
                    </UserImageContainer> 
                    <UserNameWrapper>
                        <User>
                            <UserName>{follow.userName}</UserName>
                                {follow.verified === "yes" ? <Span className="material-symbols-outlined ">
                                    verified
                            </Span> : ''}
                        </User>
                        <UserHandle>{follow.userHandle}</UserHandle>
                    </UserNameWrapper>
                </UserContainer>
                <FollowButtonContainer>
                    {follow.followed ? 
                        <UnfollowButton onClick = {() => handleUnfollowContainerShow(follow.id)} onMouseEnter={() => handleMouseEnter(follow.id)} onMouseLeave={handleMouseLeave}>{hoverState === follow.id ? 'UnFollow' : 'Following'}</UnfollowButton>
                        :
                        <FollowButton onClick = {() => unfollowClick(follow)}>Follow</FollowButton>
                    }
                </FollowButtonContainer>
                {showContainer === follow.id ?
                    <UnFollowContainer>
                        <UnFollowContainerBox>
                            <UnFollowUser>
                                Unfollow {follow.userHandle}?
                            </UnFollowUser>
                            <UnfollowText>
                                Their Tweets will no longer show up in your home timeline. You can still view their profile, unless their Tweets are protected.
                            </UnfollowText>
                            <UnfollowButtonShow onClick={() => hideFollow(follow)}>Unfollow</UnfollowButtonShow>
                            <CancelUnfollowButton onClick={handleUnfollowContainerHide}>Cancel</CancelUnfollowButton>
                        </UnFollowContainerBox>
                    </UnFollowContainer>
                :
                ""    
                }
            </WhoToFollowList>
        ))}
        <ShowMore>Show more</ShowMore>
    </Container>
    )

}

export default WhoToFollow;