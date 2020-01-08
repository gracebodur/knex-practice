const ArticlesService = require('../src/articles-service')
const knex = require('knex')

describe(`Articles service object`, function() {
    let db
    let testArticles = [
        {
            id: 1,
            date_published: new Date('2029-01-22T16:28:32.615Z'),
            title: 'First test post!',
            content: 'Commodo Lorem ipsum adipisicing voluptate qui consequat cillum cupidatat pariatur.'
        },
        {
            id: 2,
            date_published: new Date('2100-05-22T16:28:32.615Z'),
            title: 'Second test post!',
            content: 'Do sunt est excepteur eu in officia amet quis cupidatat nisi qui exercitation ullamco labore.'
        },
        {
            id: 3,
            date_published: new Date('1919-12-22T16:28:32.615Z'),
            title: 'Third test post!',
            content: 'Incididunt ex incididunt irure esse laboris dolore esse consequat.'
        },
    ]

    before(() => {
        db = knex({
            client:'pg',
            connection: process.env.TEST_DB_URL,
        })
    })
    
    after(() => db.destroy())

    before(() => db('blogful_articles').truncate())

    afterEach(() => db('blogful_articles').truncate())

    after(() => db.destroy())

//     before(() => {
//         return db
//             .into('blogful_articles')
//             .insert(testArticles)
//     })

// describe(`getAllArticles()`, () => {
    context(`Given'blogful_articles has data`, () => {
        // test that ArticlesService.getAllArticles gets data from table
        before(() => {
            return db
                .into('blogful_articles')
                .insert(testArticles)
        })

        it(`getAllArticles() resolves all articles from 'blogful_articles' table`, () => {
            return ArticlesService.getAllArticles(db)
            .then(actual => {
                expect(actual).to.eql(testArticles.map(article => ({
                    ...article,
                    date_published: new Date(article.date_published)
                    // expect(actual).to.eql(testArticles)
            })))
        })
    })

    context(`Given 'blogful_articles' has no data`, () => {
        it(`getAllArticles() resolves an empty array`, () => {
            return ArticlesService.getAllArticles(db)
            .then(actual => {
                expect(actual).to.eql([])
            })
        })
    })
})
})
