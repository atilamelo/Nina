import React from 'react';
import { Image, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import Reprodutor from '@components/EndComponents/AudioComponents/Reprodutor';
import Barra from '@components/Barra';
import TextoComponents from '@components/EndComponents/TextoComponent';
import { QuestionContainer, QuestionText } from '@components/DreamQuestions/StyleQuestion';
import YesNoQuestion from '@components/DreamQuestions/YesNoQuestion';

const DreamDetails = ({ dreamData }) => {
  const margin = '8%';

  const { width } = useWindowDimensions();
  if (dreamData) {
    return (
      <CenteredContainer>
        <Titulo>{dreamData.title}</Titulo>
        <Data>{new Date(dreamData.creationDate).toLocaleDateString('pt-BR')}</Data>

        {/* Image Generated by AI */}
        {dreamData.localImagePath ? (
          <Image source={{ uri: dreamData.localImagePath }} style={{ width: 250, height: 250, marginTop: '5%', borderRadius: 13 }} />
        ) : null}

        {/* Tags that user attached */}
        {dreamData.selectedTags.length > 0 &&
          <Container>
            {dreamData.selectedTags.map((tag) => (
              <Content key={tag._id}>
                <Text>{tag.name}</Text>
              </Content>
            ))}
          </Container>
        }

        {dreamData.audioPath ?
          <Reprodutor disabled={true} audioSource={{ uri: dreamData.audioPath }} /> :
          null
        }

        <TextoComponents sonho={dreamData.text} />

        <ScreenContainer windowWidth={width}>

          {/* Sentimentos */}
          {dreamData.selectedFeelings.length > 0 &&
            <>
              <Barra marginTop={margin} />
              <QuestionContainer>
                <QuestionText>Como você se sentiu no sonho</QuestionText>
              </QuestionContainer>
              <Container>
                {dreamData.selectedFeelings.map((feeling, index) => (
                  <Content key={index}>
                    <Text>{feeling}</Text>
                  </Content>
                ))}

              </Container>
              <Barra marginTop={margin} />
            </>
          }

          {/* Lucidez */}
          {dreamData.lucidyRating !== undefined && dreamData.lucidyRating !== null && (
            <>
              <QuestionContainer>
                <QuestionText>Nível de Lucidez do Sonho</QuestionText>
              </QuestionContainer>
              <LucidyContainer>
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <LucidyContent key={num} selected={dreamData.lucidyRating === index}>
                    <LucidyText>{num}</LucidyText>
                  </LucidyContent>
                ))}
              </LucidyContainer>
              <Barra marginTop={margin} />
            </>
          )}

          {/* Conexão com a Realidade */}
          {dreamData.realityConection !== undefined && dreamData.realityConection !== null && (
            <>
              <YesNoQuestion
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false }
                ]}
                questionLabel={'Seu sonho teve conexão com a realidade?'}
                selectedAnswer={dreamData.realityConection}
                disabled={true}
              />
              <Barra marginTop={margin} />
            </>
          )}

          {/* Recorrencia do Sonho*/}
          {dreamData.recurrence !== undefined && dreamData.recurrence !== null && (
            <>
              <YesNoQuestion
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false }
                ]}
                questionLabel={'Esse sonho é recorrente?'}
                selectedAnswer={dreamData.recurrence}
                disabled={true}
              />
            </>
          )}

        </ScreenContainer>

      </CenteredContainer>
    );
  }
  else {
    return (
      <>
      </>
    )
  }

};

export default DreamDetails;

const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

const LucidyContainer = styled.View`
  flex-direction: row;
  margin-top: 25px;
`;

const LucidyContent = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${p => (p.selected ? '#9F238E' : '#2B314C')};
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 10px;
`;

const LucidyText = styled.Text`
  color: #fff;
  font-family: "Inter Bold";
  font-size: 25px;
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

const Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 9%;
`;

const Content = styled.View`
  margin: 6px;
  padding: 8px;
  border-radius: 6px;
  background-color: #2b314c;
  justify-content: center;
  
`;

const Text = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: 'Inter SemiBold';
  color: #fff;
`;

const ScreenContainer = styled.View`
  width: ${props => props.windowWidth}px;
  align-items: center;
  justify-content: center;
`
