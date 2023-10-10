export class TagSchema extends Realm.Object{
    static schema = {
        name: 'Tag',
        properties: {
            _id: 'string',
            name: 'string',
        },
        primaryKey: '_id',
    }
}

