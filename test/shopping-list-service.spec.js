const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping List Service object`, function() {
    let db
    let testShoppingListItems = [
        {
            id: 1,
            name: 'First test item',
            price: '13',
            category: 'Main',
            checked: false,
            date_added: new Date('2020-01-08T02:10:32.615Z')
        },
        {
            id: 2,
            name: 'Second test item',
            price: '5',
            category: 'Snack',
            checked: true,
            date_added: new Date('2021-01-08T02:10:32.615Z')
        },
        {
            id: 3,
            name: 'Third test item',
            price: '6',
            category: 'Lunch',
            checked: true,
            date_added: new Date('2022-01-08T02:10:32.615Z')
        },
        {
            id: 4,
            name: 'Fourth test item',
            price: '1',
            category: 'Breakfast',
            checked: false,
            date_added: new Date('2023-01-08T02:10:32.615Z')
        },
    ]

    before(() => {
        db = knex({
            client:'pg',
            connection: process.env.TEST_DB_URL,
        })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())
    
context(`Given 'shopping_list' has data`, () => {
    beforeEach(() => {
        return db
            .into('shopping_list')
            .insert(testShoppingListItems)
        })

    it(`getAllShoppingListItems() resolves all items from 'shopping_list' table`, () => {
        return ShoppingListService.getAllShoppingListItems(db)
            .then(actual => {
                expect(actual).to.eql(testShoppingListItems)
            })
        })

    it(`getShoppingItemsById() resolves shopping items by id from 'shopping_list' table`, () => {
        const thirdId = 3
        const thirdTestItem = testShoppingListItems[thirdId - 1]
        return ShoppingListService.getShoppingItemsById(db, thirdId)
        .then(actual => {
            expect(actual).to.eql({
                id: thirdId,
                ...thirdTestItem
            })
        })
    })

    it(`deleteShoppingItem() removes a shopping item by id from 'shopping_list' table`, () => {
        const itemId = 3
        return ShoppingListService.deleteShoppingItem(db, itemId)
        .then(() => ShoppingListService.getAllShoppingListItems(db))
        .then(allShoppingListItem => {
            const expected = testShoppingListItems.filter(shoppingItem => shoppingItem.id !== itemId)
            expect(allShoppingListItem).to.eql(expected)
        })
    })

    it(`updateShoppingItem() updates a shopping item from the 'shopping_list' table`, () => {
        const idOfItemToUpdate = 3
        const newItemData = {
            name: 'updated name',
            price: '11',
            category: 'Main',
            checked: true,
            date_added: new Date()
        }
        return ShoppingListService.updateShoppingItem(db, idOfItemToUpdate, newItemData)
        .then(() => ShoppingListService.getShoppingItemsById(db, idOfItemToUpdate))
        .then(allShoppingListItem => {
            expect(allShoppingListItem).to.eql({
                id: idOfItemToUpdate,
                ...newItemData
            })
        })
    })

})

context(`Given 'shopping_list' has no data`, () => {
    beforeEach(() => {
        return db('shopping_list').truncate()
    })

    it(`getAllShoppingListItems() resolves an empty array`, () => {
        return ShoppingListService.getAllShoppingListItems(db)
        .then(actual => {
            expect(actual).to.eql([])
        })
    })

    it(`insertShoppingItem() insert a new item and resolves the new item with an 'id`, () => {
        const newShoppingItem = {
            name: 'new item',
            price: '2',
            category: 'Breakfast',
            checked: false,
            date_added: new Date()
        }
        return ShoppingListService.insertShoppingItem(db, newShoppingItem)
            .then(actual => {
                expect(actual).to.eql({
                    id: 1,
                    ...newShoppingItem
                })
            })
        })
    })
})

