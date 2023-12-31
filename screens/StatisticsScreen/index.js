// Creator: Átila Melo
// Date: 28/06/2023
// Description: Statistics Screen that will show the statistics of the user based on dreams

import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { GraficProvider } from '@contexts/GraphicBarContext';
import { useRealm } from '@databases/realm';
import { DreamSchema } from '@databases/schemas/DreamSchema';
import { TagSchema } from '@databases/schemas/TagSchema';
import styled from 'styled-components/native';
import Background from '@components/Background';
import HomeHeader from '@components/Headers/HomeHeader';
import GraphicPieContent from '@components/StatisticsComponents/GraphicPieContent';
import GraphicCloudContent from '@components/StatisticsComponents/GraphicCloudContent';
import GraphicNumberContent from '@components/StatisticsComponents/GraphicNumberContent';
import { useFocusEffect } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const cloudStyle = {
  fontFamily: 'Inter Regular',
};

const tagColor = {
  luminosity: 'light',
  hue: '#443681',
}

const feelingsColor = {
  luminosity: 'light',
  hue: '#9F238E',
}

const feelingsOptions = ['Felicidade', 'Curiosidade', 'Tristeza', 'Ansiedade', 'Medo', 'Surpresa', 'Raiva', 'Calma', 'Frustração', 'Empolgação'];

const StatisticsScreen = ({ navigation }) => {
  const realm = useRealm();
  const [feelingData, setFeelings] = useState();
  const [tagsData, setTags] = useState();
  const [numbersData, setNumbers] = useState();

  const getDreamCountByFilter = (filter, value) => {
    return realm.objects(DreamSchema).filtered(`${filter} CONTAINS $0 AND deleted == $1`, value, false).length;
  }

  const getDreamCountByEquals = (filter, value) => {
    return realm.objects(DreamSchema).filtered(`${filter} == $0 AND deleted == $1`, value, false).length;
  }

  const getDreamCountByDifferent = (filter, value) => {
    return realm.objects(DreamSchema).filtered(`${filter} != $0 AND deleted == $1`, value, false).length;
  }

  const updateTagData = () => {
    const objectTags = realm.objects(TagSchema);
    const tags = objectTags.map(row => {
      const dreamWithTag = getDreamCountByFilter('selectedTags._id', row._id);
      return dreamWithTag > 0 ? { value: row.name, count: dreamWithTag, key: row._id, props: { style: cloudStyle }} : null;
    }).filter(Boolean);

    setTags(tags);
  }

  const updateSentimentData = () => {
    const feelingsData = feelingsOptions.map(row => {
      const dreamWithSentiment = getDreamCountByFilter('selectedFeelings', row);
      return dreamWithSentiment > 0 ? { value: row, count: dreamWithSentiment, key: row, props: { style: cloudStyle }} : null;
    }).filter(Boolean);

    setFeelings(feelingsData);
  }

  const updateNumbersData = () => {
    const numbersData = [
      {"title" : "Sonhos no Período", "value": realm.objects(DreamSchema).filtered('deleted == false').length},
      {"title" : "Tags Criadas", "value": realm.objects(TagSchema).length},
      {"title" : "Sonhos Favoritados", "value": getDreamCountByEquals('favorite', true)},
      {"title" : "Imagens Geradas", "value": getDreamCountByDifferent('localImagePath', null)},
    ];  
    setNumbers(numbersData);
  }

  useFocusEffect(
    useCallback(() => {
      updateTagData();
      updateSentimentData();
      updateNumbersData();  
    }, [])
  );

  return (
    // Provedor do contexto gráfico que envolve a tela
    <GraficProvider>
      <Background>

        <HomeHeader
          title={"Estatísticas"}
        />

        <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
          <Container>
            { numbersData ?
                <GraphicNumberContent
                  Titulo="Em números"
                  data={numbersData}
                />
              : null
            }

            { tagsData ?
              <GraphicCloudContent
              Titulo="Tags mais usadas"
              data={tagsData}
              options={tagColor}
              /> : null
            }

            { feelingData ? 
              <GraphicCloudContent
                Titulo="Sentimentos mais usados"
                data={feelingData}
                options={feelingsColor}
              /> : null
            }

            <GraphicPieContent
              Titulo="Sonhos com Conexão com a Realidade"
              data={[
                {
                  name: 'Não',
                  porcentagem: getDreamCountByEquals('realityConection', false),
                  color: '#9F238E',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
                {
                  name: 'Sim',
                  porcentagem: getDreamCountByEquals('realityConection', true),
                  color: '#9464B1',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
              ]}
            />

            <GraphicPieContent
              Titulo="Sonhos com Recorrência"
              data={[
                {
                  name: 'Não',
                  porcentagem: getDreamCountByEquals('recurrence', false),
                  color: '#443681',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
                {
                  name: 'Sim',
                  porcentagem: getDreamCountByEquals('recurrence', true),
                  color: '#653483',
                  legendFontColor: '#fff',
                  legendFontSize: 15,
                  legendFontFamily: 'Inter SemiBold',
                },
              ]}
            />
          </Container>
        </ScrollView>
      </Background>
    </GraficProvider>
  );
};

export default StatisticsScreen;
