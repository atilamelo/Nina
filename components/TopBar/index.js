import React from 'react';
import styled from 'styled-components/native';

const TopBarContainer = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  background-color: 'transparent';
  padding-horizontal: 16px;
`;

const LeftSection = styled.View`
  flex: 1;
  align-items: flex-start;
  backgroundColor: yellow;
`;

const MiddleSection = styled.View`
  flex: 2;
  align-items: center;
  backgroundColor: green;
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
