import styled from 'styled-components';
import MyProfileImage from '../images/profileImage/My_profile.jpg';
import { CommentIcon, DownloadIcon, Liked, LikeIcon, Retweeted, RetweetIcon, ViewsIcon } from '../TweetIcons';


import { useState } from 'react';

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
`;

const Dot = styled.span`
  margin-top: -7px;
  color: #71767B;

`;

const TweetTime = styled.p`
  color: #71767B;
  margin-left: 5px;
`;

const ThreeDotsWrapper = styled.svg`
  margin-right: 20px;
  width: 1.4rem;
  fill: #71767B;
`;

const TweetContent = styled.p`
  width: 96.8%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  word-break: all;
`;

const TweetImageWrapper = styled.div`
  border-radius: 20px;
  margin-top: 10px;
  width: 97%;
  height: 100%;
`;

const TweetActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 40px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const MyTweetCard = ({myTweet, setMyTweet}) => {
  const handleRetweet = (tweet) => {
    setMyTweet(
      myTweet.map((item) => {
        if (item.id === tweet.id) {
          return { ...item, retweeted: !item.retweeted}
        }
        return item;
      })
    )
  }

  const handleLike = (tweet) => {
    setMyTweet(
      myTweet.map((item) => {
        if (item.id === tweet.id) {
          return { ...item, liked: !item.liked}
        }
        return item;
      })
    )
  }



  return (
    <>
      {myTweet.map(tweet => (
        <CardComponent key = {tweet.id}>
          <CardSections>
            <ProfileImageContainer>
              <ProfileImage src = {MyProfileImage} />
            </ProfileImageContainer>
            <ContentSection>
              <UserDetails>
                <UserName>
                  <UserNameText>
                    Ayotech
                  </UserNameText>
                    <Span className="material-symbols-outlined ">
                  verified
                  </Span>
                  <UserHandle>
                    @Ayotech11
                  </UserHandle>
                  <Dot>.</Dot>
                  <TweetTime>
                    now
                  </TweetTime>
                </UserName>
                <ThreeDotsWrapper viewBox="0 0 24 24" >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </ThreeDotsWrapper>
              </UserDetails>
              <TweetContent>
                {tweet.tweetContent}
              </TweetContent>
              <TweetImageWrapper>
              </TweetImageWrapper>
              <TweetActivity>
                <div className='comment_wrapper'>
                  <CommentIcon />
                    <p className="comment_value"></p>
                </div>
                <div className='retweet_wrapper' onClick={() => handleRetweet(tweet)}>
                  {!tweet.retweeted ? <RetweetIcon /> : <Retweeted />}
                  <p className={!tweet.retweeted ? "retweet_value" : "retweet_value active"}>{tweet.retweeted ? 1 : ''}</p>
                </div>
                <div className='like_wrapper' onClick={() => handleLike(tweet)}>
                  {!tweet.liked ? <LikeIcon /> : <Liked />}
                  <p className={!tweet.liked ? "like_value" : "like_value active"}>{tweet.liked ? 1 : ''}</p>
                </div>
                <div className='views_wrapper'>
                  <ViewsIcon />
                    <p className="views_value"></p>
                </div>
                <div className='share_wrapper'>
                  <DownloadIcon />
                </div>
              </TweetActivity>
            </ContentSection>
          </CardSections>
        </CardComponent>
      ))}
    </>
  )
}

export default MyTweetCard;