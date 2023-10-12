import React, { createContext, useContext, useState } from 'react';

// Criação do contexto para armazenar dados gráficos
const GraficContext = createContext();

export const GraficProvider = ({ children }) => {
  // Estado local para armazenar os dados gráficos
  const [graficData, setGraficData] = useState({ labels: [], datasets: [] });

  // Função para atualizar os dados do contexto
  const setGraficContext = (labels, datasets) => {
    setGraficData({ labels, datasets });
  };

  // Provedor que disponibiliza o contexto e a função para os componentes filhos
  return (
    <GraficContext.Provider value={{ graficData, setGraficContext }}>
      {children}
    </GraficContext.Provider>
  );
};

// Hook personalizado para acessar o contexto em componentes funcionais
export const useGraficContext = () => {
  return useContext(GraficContext);
};
