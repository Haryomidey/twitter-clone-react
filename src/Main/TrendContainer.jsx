import styled, {css} from 'styled-components';
import TrendsDB from '../TrendsDB';

const Container = styled.div`
    width: 90%;
    margin-right: 50px;
    min-height: 100px;
    background: #16181C;
    border-radius: 15px;
    overflow: hidden;
`

const ContainerTitle = styled.div`
    padding: 15px;
    font-size: 1.4rem;
    font-weight: 700;
    color: #E7E9EA;
`;

const TrendsList = styled.div`
    width: 100%;
    min-height: 50px;
    padding: 10px;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover{
        background: #1D1F23;
    }
`;

const TrendLocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TrendLocation = styled.p`
    color: #71767B;
    font-size: .9rem;
    font-weight: 300;
    margin-bottom: 4px;
`;

const ThreeDot = styled.svg`
    fill: #71767B;
    width: 1.2rem;
`;

const TrendTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 4px;
`;

const TrendTweetNum = styled.div`
    color: #71767B;
    font-size: .9rem;
    font-weight: 300;
    margin-bottom: 4px;
`;

const ShowMore = styled.div`
    height: 55px;
    padding: 15px;
    display: flex;
    align-items: center;
    color: #1D9BF0;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover{
        background: #1D1F23;
    }
`;

const TrendContainer = () => {
  return (
    <Container>
        <ContainerTitle>
            Trends for you
        </ContainerTitle>
          {TrendsDB.map(trend => (
            <TrendsList key = {trend.id}>
                <TrendLocationContainer>
                    <TrendLocation>
                        {trend.trendsLocation}
                    </TrendLocation>
                    <ThreeDot viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g>
                    </ThreeDot>
                </TrendLocationContainer>
                <TrendTitle>{trend.trendstitle}</TrendTitle>
                  <TrendTweetNum>{trend.trendsNum}</TrendTweetNum>
            </TrendsList>
        ))}
        <ShowMore>Show more</ShowMore>
    </Container>
  )
}

export default TrendContainer;