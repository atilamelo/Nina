import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import check from '@assets/icons/check.png';

const OptionsModal = ({ isVisible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
    >
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'Título' && { backgroundColor: '#C578FF'}, // Verifica se a opção foi selecionada
              ]}
              onPress={() => handleOptionClick('Título')}
            >
              <Text style={styles.texto}>Título</Text>
              {selectedOption === 'Título'}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'Data de criação' && { backgroundColor: '#C578FF' }, 
              ]}
              onPress={() => handleOptionClick('Data de criação')}
            >
              <Text style={styles.texto}>Data de criação</Text>
              {selectedOption === 'Data de criação'}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'modificação' && { backgroundColor: '#C578FF' }, 
              ]}
              onPress={() => handleOptionClick('modificação')}
            >
              <Text style={styles.texto}>Data de modificação</Text>
              {selectedOption === 'modificação'}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'favorito' && { backgroundColor: '#C578FF' }, 
              ]}
              onPress={() => handleOptionClick('favorito')}
            >
              <Text style={styles.texto}>Marcado como fav.</Text>
              {selectedOption === 'favorito'}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'tag' && { backgroundColor: '#C578FF' }, 
              ]}
              onPress={() => handleOptionClick('tag')}
            >
              <Text style={styles.texto}>Organizar por tags</Text>
              {selectedOption === 'tag'}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modal: {
    flex: 1,
    marginTop: '8%',
    marginLeft: '35%',
  },
  modalContent: {
    width: 230,
    height: 240,
    backgroundColor: '#292F45',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  texto: {
    fontFamily: 'Inter Regular',
    fontSize: 15,
    color: 'white',
  },
  checkIcon: {
    width: 18,
    height: 18,
  },
});

export default OptionsModal;
