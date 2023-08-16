import React, { createContext, useState } from 'react'

export const DreamContext = createContext();

function DreamProvider ( { children } ) {
    const modelo = {
        title: '',
        text: '',
        date: undefined,
        imagePath: '',
        selectedTags: [],
        selectedFeelings: [],
        lucidyRating: '',
        realityConection: '',
        recurrence: '',
    }

    const [dreamData, setDreamData] = useState(modelo);
    
    return (
        <DreamContext.Provider value = {{dreamData, setDreamData}}>
            { children }
        </DreamContext.Provider>
    )
}

export default DreamProvider;