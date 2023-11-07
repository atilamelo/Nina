import React from 'react';
import styled from 'styled-components/native';

const MainHeader = ({ left, middle, right }) => {
  return (
    <Container>
      <MainContainer>
        <LeftContainer>{left}</LeftContainer>
        <MiddleContainer>{middle}</MiddleContainer>
        <RightContainer>{right}</RightContainer>
      </MainContainer>
    </Container>
  );
};

export default MainHeader;

const Container = styled.View`
  height: 10%;
  justify-content: center;
`;

const MainContainer = styled.View`
  margin-horizontal: 4%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  align-items: center;
  justify-content: center;

`;

const MiddleContainer = styled.View`
  margin-left: 4%;
  flex: 1;
`;

const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;