import React, { createContext, useState } from 'react';

export const DreamContext = createContext();

function DreamProvider({ children }) {
  const modelo = {
    title: undefined,
    text: undefined,
    date: new Date(),
    imagePath: undefined,
    selectedTags: [],
    selectedFeelings: [],
    lucidyRating: undefined,
    realityConection: undefined,
    recurrence: undefined,
  };

  const [dreamData, setDreamData] = useState(modelo);

  const clearDreamData = () => {
    setDreamData(modelo);
  }

  return <DreamContext.Provider value={{ dreamData, setDreamData, clearDreamData }}>{children}</DreamContext.Provider>;
}

export default DreamProvider;
