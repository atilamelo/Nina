import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const options = [
  { label: 'Título', value: 'title' },
  { label: 'Data de criação', value: 'creationDate' },
  { label: 'Data de modificação', value: 'modificationDate' },
  { label: 'Favoritos', value: 'favorites' },
  { label: 'Organizar por tags', value: 'tags' },
];

const OptionsModal = ({ isVisible, onClose, onSortSelection }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSortSelection(option);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.option,
                  selectedOption === option.value && { backgroundColor: '#9F238E' },
                ]}
                onPress={() => handleOptionClick(option.value)}
              >
                <Text style={styles.texto}>{option.label}</Text>
                {selectedOption === option.value && (
                  <Image
                    source={require('@assets/icons/check.png')}
                    style={styles.checkIcon}
                  />
                )}
              </TouchableOpacity>
            ))}
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