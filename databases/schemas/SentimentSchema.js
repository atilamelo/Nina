export class SentimentSchema extends Realm.Object{
    static schema = {
        name: 'Sentiment',
        properties: {
            _id: 'string',
            name: 'string',
        },
        primaryKey: '_id',
    }
}
