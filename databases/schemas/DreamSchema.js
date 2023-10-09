export class DreamSchema extends Realm.Object{
    static schema = {
        name: 'Dream',
        properties: {
            _id: 'string',
            title: 'string',
            text: 'string',
            date: 'date',
            imagePath: 'string?',
            localImagePath: 'string?',
            selectedTags: 'string?[]',
            audioPath: 'string?',
            selectedFeelings: 'string?[]',
            lucidyRating: 'int?',
            realityConection: 'bool?',
            recurrence: 'bool?',
            favorite: 'bool?'
        },
        primaryKey: '_id',
    }
}

