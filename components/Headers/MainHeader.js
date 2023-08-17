import React from 'react';
import styled from 'styled-components/native';

const MainHeader = ({ left, middle, right }) => {
  return (
    <MainContainer>
      <LeftContainer>{left}</LeftContainer>
      <MiddleContainer>{middle}</MiddleContainer>
      <RightContainer>{right}</RightContainer>
    </MainContainer>
  );
};

export default MainHeader;

const MainContainer = styled.View`
  height: 11%;
  margin-horizontal: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 2%;
`;

const LeftContainer = styled.View`
  align-items: center;
  justify-content: center;

`;

const MiddleContainer = styled.View`
  margin-left: 5%;
  flex: 1;
`;

const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;