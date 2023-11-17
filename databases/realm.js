import Realm from 'realm';
import { createRealmContext } from '@realm/react';
import { DreamSchema, TagSchema, SentimentSchema } from './schemas';

const realmConfig = {
  schema: [DreamSchema, TagSchema, SentimentSchema],
  schemaVersion: 10,
};

const { RealmProvider, useRealm, useObject, useQuery } = 
  createRealmContext(realmConfig); 

// Função para popular o banco de dados com dados predefinidos
const populateDatabase = async (realm) => {
  const predefined = require('./defaultValues.json');
  const sentiments = predefined["sentiments"];
  const tags = predefined["tags"];

  sentiments.forEach( sentiment => {
    realm.write(() => {
      realm.create('Sentiment', {
        _id: sentiment.id.toString(),
        name: sentiment.name,
      })
    })
  })

  tags.forEach( tag => {
    realm.write(() => {
      realm.create('Tag', {
        _id: tag.id.toString(),
        name: tag.name,
      })
    })
  })
}

// Função para verificar se os dados já foram populados
const isDatabasePopulated = (realm) => {
  const sentiments = realm.objects(SentimentSchema);
  const tags = realm.objects(TagSchema);
  return sentiments.length > 0 && tags.length > 0;
}

// Função para deletar sonhos que estejam na lixeira há mais de 30 dias
const deleteOldDreams = (realm) => {
  const dreams = realm.objects(DreamSchema).filtered('deleted = true');
  const currentDate = new Date();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 dias em milissegundos
  dreams.forEach( dream => {
    if (currentDate - dream.deletedAt > thirtyDays) {
      realm.write(() => {
        realm.delete(dream);
      })
    }
  })

}

const initializeRealm = async () => {
  const realm = await Realm.open(realmConfig);
  
  if (!isDatabasePopulated(realm)) {
    populateDatabase(realm);
  }else{
    console.log("Database already populated");
  }

  deleteOldDreams(realm);
};

initializeRealm();

export { RealmProvider, useRealm, useObject, useQuery };