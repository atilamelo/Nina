import Realm from 'realm';
import { createRealmContext } from '@realm/react';
import { DreamSchema } from './schemas/DreamSchema';
import { TagSchema } from './schemas/TagSchema';
import uuid from 'react-native-uuid';

const realmConfig = {
  schema: [DreamSchema, TagSchema],
  schemaVersion: 8,
};

const { RealmProvider, useRealm, useObject, useQuery } = 
  createRealmContext(realmConfig); 

export { RealmProvider, useRealm, useObject, useQuery };