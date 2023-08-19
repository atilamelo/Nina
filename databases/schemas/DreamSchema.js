export class DreamSchema extends Realm.Object{
    static schema = {
        name: 'Dream',
        properties: {
            _id: 'string',
            title: 'string',
            text: 'string',
            date: 'date',
            imagePath: 'string?',
            selectedTags: 'string?[]',
            selectedFeelings: 'string?[]',
            lucidyRating: 'int?',
            realityConection: 'bool?',
            recurrence: 'bool?',
        },
        primaryKey: '_id',
    }
}

