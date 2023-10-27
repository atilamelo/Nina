import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export const sortOptions = [
  { label: 'Título', value: 'title' },
  { label: 'Data de criação', value: 'creationDate' },
  { label: 'Data de modificação', value: 'modificationDate' },
];

const OptionsModal = ({ isVisible, onClose, onSortSelection, defaultSortOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultSortOption);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSortSelection(option);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={onClose}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>

            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.option,
                  selectedOption === option.value && styles.selectedOption,
                ]}
                onPress={() => handleOptionClick(option.value)}
              >
                <Text style={styles.text}>{option.label}</Text>
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
    marginLeft: '32%',
    marginRight: '8%'
  },
  modalContent: {
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
    gap: 10,
  },
  selectedOption: {
    backgroundColor: '#9F238E',
  },
  text: {
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