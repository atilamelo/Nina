import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import Reprodutor from '@components/EndComponents/AudioComponents/Reprodutor';
import Barra from '@components/Barra';
import TextoComponents from '@components/EndComponents/TextoComponent';
// import Barra from './Barra';

const DreamDetails = ({ dreamData }) => {

    return (
        <CenteredContainer>
            <Titulo>{dreamData.title}</Titulo>
            <Data>{new Date(dreamData.date).toLocaleDateString('pt-BR')}</Data>

            {dreamData.imagePath ? (
            <Image source={dreamData.imagePath} style={{ width: 250, height: 250, marginTop: '5%' }} />
            ) : null}

            <TagsContainer>
                {[...Array(3)].map((_, index) => (
                    <Tag key={index}>
                        <TextTag>{`Tag ${index + 1}`}</TextTag>
                    </Tag>
                ))}
            </TagsContainer>

            <Reprodutor disabled={true} audioSource={require('../../assets/teste.mp3')} />
            
            <TextoComponents sonho={dreamData.text} />
            <Barra/>

        </CenteredContainer>
    );

};

export default DreamDetails;

const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

const Titulo = styled.Text`
  text-align: center;
  font-size: 17px;
  font-family: 'Inter Bold';
  color: #fff;
`;

const Data = styled.Text`
  text-align: center;
  font-size: 13px;
  font-family: 'Inter Regular';
  color: #d9d9d9;
  margin-top: 3%;
`;

const TagsContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 80%;
margin-top: 9%;
`;

const Tag = styled.View`
width: 85px;
height: 30px;
border-radius: 6px;
background-color: #2b314c;
justify-content: center;
`;

const TextTag = styled.Text`
text-align: center;
font-size: 14px;
font-family: 'Inter SemiBold';
color: #fff;
`;

const BarraContainer = styled.View`
  margin-bottom: 10px;
`;