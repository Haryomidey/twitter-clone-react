import MyPhoto from '../images/profileImage/My_profile.jpg';
import { AudienceWorldIcon, CalendarIcon, CheckIcon, EmojiIcon, GifIcon, ImageIcon, LocationIcon, PlusIcon, PollIcons, WorldIcon } from '../TweetIcons';

import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #313b4592;
    display: flex;
    justify-content: center;
    z-index: 999;

    ${props => props.active && css`
        display: none;
  `}
`;

const InputSection = styled.div`
    padding-top: 60px;
    margin-top: 50px;
    padding-left: 15px;
    display: flex;
    gap: 15px;
    border-bottom: 1px solid #71767b6c;
    background: black;
    height: 320px;
    width: 45%;
    position: relative;
    border-radius: 15px;

    @media (max-width: 1261px) {
        // width: 55%;
    }

`;

const ProfileImage = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-top: 8px;
`;

const TweetSection = styled.div`
    height: 100%;
    width: 100%;
`;

const EveryoneWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #1D9BF0;
    padding: 0 10px;
    color: #1D9BF0;
    margin-top: 8px;
    width: 100px;
    position: relative;
    cursor: default;
    user-select: none;
`;

const Everyone = styled.div`
    font-size: .9rem;
`;

const ExpandIcon = styled.span`
    font-size: 1.3rem;
`;

const ChooseAudience = styled.div`
    position: absolute;
    width: 300px;
    min-height: 250px;
    background: black;
    box-shadow: 0 0 10px rgba(161, 160, 160, 0.507);
    top: 10%;
    left: 1%;
    transform: translate(-20%, 16%);
    border-radius: 20px;
    padding-bottom: 10px;
`;

const ChooseAudienceTitle = styled.h1`
    color: white;
    margin: 18px 15px;
    font-size: 1.4rem;
`;

const EachAudience = styled.div`
    width: 100%;
    height: 75px;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover{
        background: #16181C;
    }
`;

const AudienceLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: white;
`;

const AudienceLogo = styled.div`
    background: #1D9BF0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TweetInput = styled.textarea`
    width: 98%;
    word-break: break-all;
    min-height: 100px;
    margin-top: 20px;
    color: white;
    background: black;
    font-size: 1.5rem;
    font-weight: 300;
    padding-left: 10px;
    display: flex;
    align-items: center;
    outline: none;
    border: 0;
    resize: none;

    &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
    }

    &::placeholder{
        font-size: 1.3rem;
    }

    @media (max-width: 1261px) {
        max-width: 84%;
    }
`;

const EveryoneReply = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 3px 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover{
        background: #031018;
    }

    @media (max-width: 1261px) {
        margin-left: -80px;
    }
`;

const EveryoneReplyIcon = styled.div`
    margin-top: 3px;
`;
const EveryoneReplyText = styled.p`
    color: #1D9BF0;
    font-size: .9rem;
    font-weight: 600;
`;

const EmojiContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 96%;
    height: 60px;
    border-top: 1px solid #71767b6c;
    
    @media (max-width: 1261px) {
        // border-top: 1px solid #71767b6c;
        margin-left: -70px;
        width: 50%;
    }
`;

const EmojiWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;
const TweetButtonContainer = styled.div`
    height: 40px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 110px;
    
    @media (max-width: 1261px) {
        margin-left: 60px;
    }
`;

const TweetLengthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 30px;
    margin-right: 10px;

    ${props => props.active && css`
        display: none;
  `}
`;

const TweetLength = styled.div`
    border: 2px solid #71767b6c;
    width: 22px;
    height: 22px;
    border-radius: 50%;
`;
const ShowTweetBox = styled.div`
    width: 22px;
    height: 22px;
    border: 1px solid #1D9BF0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 1px;
        height: 30px;
        background: #71767b6c;
        top: -5px;
        left: -80%;
    }
`;
const TweetButton = styled.button`
    width: 80px;
    height: 35px;
    border: 0;
    outline: none;
    background: #1D9BF0;
    border-radius: 30px;
    margin-left: auto;
    color: white;
    font-weight: 600;
    opacity: 0.6;

    ${props => props.active && css`
        opacity: 1;
        cursor: pointer;
  `}

    @media (max-width: 1261px) {
        min-width: 80px;
    }
`;

const CloseBox = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    top: 15px;
`;

const SpanClose = styled.span`
    cursor: pointer;
`;

const TweetBox = ({inputValue, setShowTweetBox, setInputValue, myTweet, setMyTweet, setShowTweetLength, setEnableBtn}) => {
    const [audience, setAudience] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [newEnableBtn, setNewEnableBtn] = useState(true);
    const [showNewTweetLength, setShowNewTweetLength] = useState(false);

    const [newInputValue, setNewInputValue] = useState(inputValue);
    
    const showAudience = () => {
        setAudience(!audience)
    }

    const handleInputClick = () => {
        setShowDetails(true)
    }
    const handleInputEnter = (e) => {
        if (e.target.value.length > 0) {
            setNewEnableBtn(true);
            setShowNewTweetLength(false);
        }
        else {
            setNewEnableBtn(false);
            setShowNewTweetLength(true);
        }
        setNewInputValue(e.target.value);
    }

    const addFromTweetBox = () => {
        if (newInputValue === "") return false;

        setMyTweet([{ id: uuid(), tweetContent: newInputValue, liked: false, retweeted: false }, ...myTweet]);
        setNewInputValue('');
        setInputValue('');
        setNewEnableBtn(true);
        setShowTweetBox(false);
        setShowTweetLength(false);
        setEnableBtn(false)
    }

    const CloseTweetBox = () => {
        setShowTweetBox(false)
    }
  return (
    <Container>
        <InputSection>
            <CloseBox>
                <SpanClose onClick={CloseTweetBox} className="material-symbols-outlined">
                close
            </SpanClose>
            </CloseBox>
            <ProfileImage src = {MyPhoto} />
            <TweetSection>
                <EveryoneWrapper active={showDetails}>
                    {audience
                    ?
                    <ChooseAudience>
                        <ChooseAudienceTitle>
                            Choose Audience
                        </ChooseAudienceTitle>
                        <EachAudience>
                            <AudienceLogoWrapper>
                                <AudienceLogo>
                                    <AudienceWorldIcon />
                                </AudienceLogo>
                                <p>
                                    Everyone
                                </p>
                            </AudienceLogoWrapper>
                            <p>
                                <CheckIcon />
                            </p>
                        </EachAudience>
                        <EachAudience>
                            <AudienceLogoWrapper>
                                <AudienceLogo>
                                    <AudienceWorldIcon />
                                </AudienceLogo>
                                <p>Everyone</p>
                            </AudienceLogoWrapper>
                            <p><CheckIcon /></p>
                        </EachAudience>
                    </ChooseAudience>
                        :
                    ''
                    }
                <Everyone onClick = {showAudience}>
                    Everyone
                </Everyone>
                <ExpandIcon className="material-symbols-outlined" onClick = {showAudience}>
                expand_more
                </ExpandIcon>
                </EveryoneWrapper>
                <TweetInput onClick = {handleInputClick}   placeholder = "What's happening?" onChange = {handleInputEnter} value = {newInputValue}>
                </TweetInput>
                <EveryoneReply>
                    <EveryoneReplyIcon>
                        <WorldIcon />
                    </EveryoneReplyIcon>
                    <EveryoneReplyText>
                        Everyone can reply
                    </EveryoneReplyText>
                </EveryoneReply>
                <EmojiContainer>
                    <EmojiWrapper>
                        <ImageIcon />
                        <GifIcon />
                        <PollIcons />
                        <EmojiIcon />
                        <CalendarIcon />
                        <LocationIcon />
                    </EmojiWrapper>
                    <TweetButtonContainer>
                        <TweetLengthContainer active={showNewTweetLength}>
                            <TweetLength>
                            
                            </TweetLength>
                            <ShowTweetBox>
                                <PlusIcon />
                            </ShowTweetBox>
                        </TweetLengthContainer>
                        <TweetButton active = {newEnableBtn} onClick = {addFromTweetBox}>
                            Tweet
                        </TweetButton>
                    </TweetButtonContainer>
                </EmojiContainer>
            </TweetSection>
        </InputSection>
    </Container>
  )
}

export default TweetBox;