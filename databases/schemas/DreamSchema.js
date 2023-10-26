export class DreamSchema extends Realm.Object{
    static schema = {
        name: 'Dream',
        properties: {
            _id: 'string',
            title: 'string',
            text: 'string?',
            creationDate: 'date',
            modificationDate: 'date',
            imagePath: 'string?',
            localImagePath: 'string?',
            selectedTags: 'Tag[]',
            audioPath: 'string?',
            selectedFeelings: 'string?[]',
            lucidyRating: 'int?',
            realityConection: 'bool?',
            recurrence: 'bool?',
            favorite: 'bool',
            deleted: 'bool',
        },
        primaryKey: '_id',
    }
}

