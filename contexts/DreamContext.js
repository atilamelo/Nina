import React, { createContext, useState } from 'react';
import uuid from 'react-native-uuid';

export const DreamContext = createContext();

function DreamProvider({ children }) {
  const modelo = {
    id: uuid.v4(),
    title: undefined,
    text: undefined,
    creationDate: new Date(),
    modificationDate: new Date(),
    imagePath: undefined,
    localImagePath: undefined,
    audioPath: undefined,
    selectedTags: [],
    selectedFeelings: [],
    lucidyRating: undefined,
    realityConection: undefined,
    recurrence: undefined,
    deleted: false,
    favorite: false,
  };

  const [dreamData, setDreamData] = useState(modelo);

  const clearDreamData = () => {
    setDreamData(modelo);
  }

  return <DreamContext.Provider value={{ dreamData, setDreamData, clearDreamData }}>{children}</DreamContext.Provider>;
}

export default DreamProvider;
