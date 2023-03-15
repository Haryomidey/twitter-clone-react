import styled, {css} from 'styled-components';
import { CommentIcon, DownloadIcon, Liked, LikeIcon, Retweeted, RetweetIcon, ViewsIcon } from '../TweetIcons';
import { useState, useEffect } from 'react';

const CardComponent = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid #71767b6c;
  cursor: pointer;
  transition: background 0.3s;

  &:hover{
    background: #080808;
  }
`;

const TweetScource = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 45px;
  padding-top: 5px;

  @media (max-width: 450px){
    margin-left: 20px;
  }
`;

const TweetSourceIcon = styled.svg`
  width: 1rem;
  fill: #71767B;
`;

const TweetSourceText = styled.p`
  color: #71767B;
  font-size: .9rem;

  &:hover{
    text-decoration: underline;
  }

  @media (max-width: 450px){
    font-size: .7rem;
  }
`;

const CardSections = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  padding-top: 7px;
`;

const ProfileImageContainer = styled.div`
  min-width: 50px;
  min-height: 50px;
  width: 50px;
  height: 50px;
  margin-left: 15px;

  @media (max-width: 450px){
    margin-left: 5px;
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const ContentSection = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -18px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
  
  const UserName = styled.div`
  width: 50%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const UserNameText = styled.p`
  color: white;
  font-weight: bold;

  &:hover{
    text-decoration: underline;
  }

  @media (max-width: 450px){
    font-size: .9rem;
  }

  @media (max-width: 405px){
    font-size: .8rem;
  }

   @media (max-width: 305px){
    font-size: .7rem;
  }

`;

const Span = styled.span`
  font-size: 1.1rem;
  margin-right: 3px;
  color: #1D9BF0;
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
`;

const UserHandle = styled.p`
  color: #71767B;
  margin-right: 6px;
  margin-left: 4px;
  &:hover{
    text-decoration: underline;
  }

  @media (max-width: 450px){
    font-size: .8rem;
  }

  @media (max-width: 405px){
    font-size: .7rem;
    margin-left: 2px;
    margin-right: 2px;
  }

`;

const Dot = styled.span`
  margin-top: -7px;
  color: #71767B;
`;

const TweetTime = styled.p`
  color: #71767B;
  margin-left: 5px;

  @media (max-width: 450px){
    font-size: .8rem;
  }

  @media (max-width: 405px){
    margin-left: 2px;
    font-size: .7rem;
  }

`;

const ThreeDotsWrapper = styled.svg`
  width: 1.4rem;
  fill: #71767B;
  margin-right: 20px;

  @media (max-width: 450px){
    margin-right: 10px;
    width: 1rem;
  }

  @media (max-width: 370px){
    transform: rotate(90deg);
  }

`;

const TweetContent = styled.p`
  width: 96.8%;
  min-height: 30px;
  font-weight: 300;
  font-size: 1rem;
  line-height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  word-break: all;

  @media (max-width: 450px){
    font-size: .9rem;
    width: 94.8%
  }

  @media (max-width: 370px){
    font-size: .9rem;
    width: 92.8%;
  }
`;

const TweetImageWrapper = styled.div`
  border-radius: 20px;
  margin-top: 10px;
  width: 97%;
  height: 100%;

  @media (max-width: 450px){
    width: 95%;
    height: 30%;
  }

  @media (max-width: 370px){
    width: 90%;
  }

`;

const TweetImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;

`;

const TweetActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 40px;
  margin-top: 6px;
  margin-bottom: 6px;

  @media (max-width: 371px){
    width: 100%;
    margin-left: -30px;
  }

  @media (max-width: 331px){
    margin-left: -50px;
  }
`;

const TweetCardEmpty = ({id, tweetSource, userImage, userName, verified, userHandle, tweetTime, tweetContent, tweetImage, tweetComments, tweetRetweets, tweetLikes, tweetViews}) => {

  const [isRetweeted, setIsRetweeted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(window.innerWidth);

  const [retweetCount, setRetweetCount] = useState(tweetRetweets);
  const [likedCount, setLikedCount] = useState(tweetLikes);

  useEffect(() => {
    const handleResize = () => {
      setScrollWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

  }, [scrollWidth]);

  const handleRetweet = () => {
    if (isRetweeted) {
      setRetweetCount(prev => prev - 1);
      setIsRetweeted(false);
    }
    else {
      setIsRetweeted(true);
      setRetweetCount(prev => prev + 1)
    }
  }

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      
      setLikedCount(prev => prev - 1);
    }
    else {
      setIsLiked(true);
      setLikedCount(prev => prev + 1);
    }
  }

  return (
    <CardComponent key ={id}>
      {tweetSource ? 
        <TweetScource>
        <TweetSourceIcon viewBox="0 0 24 24">
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
        </TweetSourceIcon>
        <TweetSourceText>
          {tweetSource}
        </TweetSourceText>
        </TweetScource>
        :
        ""
      }
      <CardSections>
        <ProfileImageContainer>
          <ProfileImage src = {userImage} />
        </ProfileImageContainer>
        <ContentSection>
          <UserDetails>
            <UserName>
              <UserNameText>
                {userName}
              </UserNameText>
                {verified === "yes" ? <Span className="material-symbols-outlined ">
              verified
              </Span> : ''}
              <UserHandle>
                {scrollWidth < 371 ? `${userHandle.slice(0, 5)}...` : userHandle}
              </UserHandle>
              <Dot>.</Dot>
              <TweetTime>
                {tweetTime}
              </TweetTime>
            </UserName>
            <ThreeDotsWrapper viewBox="0 0 24 24" >
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </ThreeDotsWrapper>
          </UserDetails>
          <TweetContent>
            {tweetContent}
          </TweetContent>
          <TweetImageWrapper>
            {tweetImage ? <TweetImage src = {tweetImage} /> : ''}
          </TweetImageWrapper>
          <TweetActivity>
            <div className='comment_wrapper'>
              <CommentIcon />
                          <p className="comment_value">{tweetComments}</p>
            </div>
            <div className='retweet_wrapper' onClick={handleRetweet}>
              {!isRetweeted ? <RetweetIcon /> : <Retweeted />}
              <p className={!isRetweeted? "retweet_value" : "retweet_value active"}>{retweetCount}</p>
            </div>
            <div className='like_wrapper' onClick={handleLike}>
              {!isLiked ? <LikeIcon /> : <Liked />}
              <p className = {!isLiked? "like_value": "like_value active"}>{likedCount}</p>
            </div>
            <div className='views_wrapper'>
              <ViewsIcon />
                <p className="views_value">{tweetViews}</p>
            </div>
            <div className='share_wrapper'>
              <DownloadIcon />
            </div>
          </TweetActivity>
        </ContentSection>
      </CardSections>
    </CardComponent>
  )
}

export default TweetCardEmpty;