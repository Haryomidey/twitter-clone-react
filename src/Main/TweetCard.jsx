import styled from 'styled-components';
import TweetCardEmpty from './TweetCardEmpty';
import TweetsDB from '../TweetsDB';

// import { useState } from 'react';

const Container = styled.div`
  width: 100%;
`;

const TweetCard = () => {

  

  return (
    <Container>
      {TweetsDB.map(tweet => (
        <TweetCardEmpty
        id={tweet.id}
        tweetSource={tweet.tweetSource}
        userImage={tweet.userImage}
        userName={tweet.userName}
        verified={tweet.verified}
        userHandle={tweet.userHandle}
        tweetTime={tweet.tweetTime}
        tweetContent={tweet.tweetContent}
        tweetImage={tweet.tweetImage}
        tweetComments={tweet.tweetComments}
        tweetRetweets={tweet.tweetRetweets}
        tweetLikes={tweet.tweetLikes}
        tweetViews={tweet.tweetViews}

        />
      ))
      }
    </Container>
  )
}

export default TweetCard;