import Realm from 'realm';
import { createRealmContext } from '@realm/react';
import { DreamSchema, TagSchema, SentimentSchema } from './schemas';

const realmConfig = {
  schema: [DreamSchema, TagSchema, SentimentSchema],
  schemaVersion: 9,
};

const { RealmProvider, useRealm, useObject, useQuery } = 
  createRealmContext(realmConfig); 

// Função para popular o banco de dados com dados predefinidos
const populateDatabase = async (realm) => {
  const sentiments = require('./defaultValues.json')["sentiments"];

  sentiments.forEach( sentiment => {
    realm.write(() => {
      realm.create('Sentiment', {
        _id: sentiment.id.toString(),
        name: sentiment.name,
      })
    })
  })
}

// Função para verificar se os dados já foram populados
const isDatabasePopulated = (realm) => {
  const sentiments = realm.objects(SentimentSchema);
  return sentiments.length > 0;
}

const initializeRealm = async () => {
  const realm = await Realm.open(realmConfig);
  if (!isDatabasePopulated(realm)) {
    populateDatabase(realm);
  }else{
    console.log("Database already populated");
  }
};

initializeRealm();

export { RealmProvider, useRealm, useObject, useQuery };