import styled from 'styled-components';

const Container = styled.div`
    width: 60%;
    min-height: 100vh;
    border-right: 1px solid #71767b6c;
    position: relative;
`;

const Navbar = styled.div`
    height: 120px;
    width: calc(46% + 2px);
    border-bottom: 1px solid #71767b6c;
    position: fixed;
    top: 0;
    left: 23%;
`;

const PageTitle = styled.h1`
    margin: 15px;
    font-weight: 600;
    font-size: 1.4rem;
`;

const MiddleSection = () => {
  return (
    <Container>
        <Navbar>
            <PageTitle>
                Home
            </PageTitle>
        </Navbar>
    </Container>
  )
}

export default MiddleSection