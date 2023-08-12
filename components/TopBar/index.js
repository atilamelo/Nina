import React from 'react';
import styled from 'styled-components/native';

const TopBarContainer = styled.View`
  height: 5%;
  flex-direction: row;
  align-items: center;
  background-color: 'transparent';
  padding-horizontal: 5%;
  margin-top: 7%;
`;

const LeftSection = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const MiddleSection = styled.View`
  flex: 3;
  align-items: flex-start;
  
`;

const RightSection = styled.View`
  flex: 1;
  align-items: flex-end;
  backgroundColor: white;
`;

const TopBarText = styled.Text`
  color: white;
`;

const TopBar = ({ left, middle, right }) => {
  return (
    <TopBarContainer>
      <LeftSection>{left}</LeftSection>
      <MiddleSection>{middle}</MiddleSection>
      <RightSection>{right}</RightSection>
    </TopBarContainer>
  );
};

export default TopBar;
