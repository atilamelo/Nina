import React from 'react';
import styled from 'styled-components/native';

const Logado = () => {
    return (
      <Content>
        <User />
          <UserInfo>
            <Username>Usuário</Username>
            <Email>usuário@gmail.com</Email>
          </UserInfo>
      </Content>
    );
};


export default Logado;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 7%;
`;

const User = styled.View`
  width: 60px;
  height: 60px;
  background-color: #FFFFFF;
  border-radius: 50px;
`;

const UserInfo = styled.View`
  margin-left: 6%;
`;

const Username = styled.Text`
  font-family: 'Inter Bold';
  font-size: 14px;
  color: white;
`;

const Email = styled.Text`
  font-family: 'Inter Regular';
  font-size: 14px;
  color: white;
`;