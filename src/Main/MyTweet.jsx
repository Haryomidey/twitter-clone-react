import styled from 'styled-components';
import TweetCardEmpty from './TweetCardEmpty';
import MyProfileImage from '../images/profileImage/My_profile.jpg';

import { useState } from 'react';

const MyTweet = () => {

    const [mytweet, setMytweet] = useState({
        id: '',
        tweetSource: '',
        userImage: '',
        userName: 'Ayotech👨🏿‍💻',
        verified: 'yes',
        userHandle: '@Ayotech11',
        tweetTime: 'now',
        tweetContent: '',
        tweetImage: '',
        tweetComments: 0,
        tweetLikes: 0,
        tweetViews: '',

    });

  return (
    <div>
          {/* {TweetsDB.map(tweet => (
            <TweetCardEmpty />
        ))} */}
    </div>
  )
}

export default MyTweet;