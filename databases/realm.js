import Realm from 'realm';
import { createRealmContext } from '@realm/react';
import { DreamSchema } from './schemas/DreamSchema';

const realmConfig = {
    schema: [DreamSchema],
    schemaVersion: 3,
  };

const { RealmProvider, useRealm, useObject, useQuery } = 
    createRealmContext(realmConfig); 

export {RealmProvider, useRealm, useObject, useQuery};