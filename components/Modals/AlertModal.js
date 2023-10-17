import React from 'react';
import { Modal, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';

// Obtém a altura da janela para dimensionar o tamanho máximo do modal
const windowHeight = Dimensions.get('window').height;

const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  background-color: #2B314C;
  border-radius: 10px;
  max-height: ${windowHeight * 0.8}px;
`;

const Texto = styled.Text`
  color: white;
  font-family: 'Inter Bold';
  font-size: 19px;
`;

const ContentText = styled.View`
  margin: 9% 7%;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 5%;
`;

const Button = styled(TouchableOpacity)`
  margin-left: 10%;
`;

const ButtonText = styled.Text`
  font-family: 'Inter Regular';
`;

const AlertModal = ({ visible, content, onClose, button1Text, onRequestButton1, button1Color }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      onRequestButton1={onRequestButton1}
    >
      <ModalContainer>
        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} activeOpacity={1} onPress={onClose}>
          <ModalContent>
            <ContentText>
              <Texto>{content}</Texto>
            </ContentText>
            <ButtonContainer>
              <Button onPress={() => onRequestButton1()}>
                <ButtonText style={{ color: button1Color }}>{button1Text}</ButtonText>
              </Button>
              <Button onPress={() => onClose()}>
                <ButtonText style={{ color: "white" }}>CANCELAR</ButtonText>
              </Button>
            </ButtonContainer>
          </ModalContent>
        </TouchableOpacity>
      </ModalContainer>
    </Modal>
  );
};

export default AlertModal;
