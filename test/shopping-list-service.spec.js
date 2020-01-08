const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping List Service object`, function() {
    let db
    let testShoppingListItems = [
        {
            id: 1,
            name: 'First test item',
            price: '11.25',
            category: 'Main',
            checked: false,
            date_added: new Date('2020-01-08T02:10:32.615Z')
        },
        {
            id: 1,
            name: 'Second test item',
            price: '10.25',
            category: 'Snack',
            checked: true,
            date_added: new Date('2021-01-08T02:10:32.615Z')
        },
        {
            id: 2,
            name: 'Third test item',
            price: '9.25',
            category: 'Lunch',
            checked: true,
            date_added: new Date('2022-01-08T02:10:32.615Z')
        },
        {
            id: 3,
            name: 'Third test item',
            price: '8.25',
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
})
})