//Making a service object first involves making an object that we'll export.
//We'll put methods on this object that store our transactions. 
//The first method is for getting all articles
const ArticlesService = {
    getAllArticles(knex) {
        // return 'all the articles!!'
        // return Promise.resolve('all the articles!!')
        return knex.select('*').from('blogful_articles')
    },
    insertArticle() {
        return Promise.resolve({})
    },
}



module.exports = ArticlesService //export ArticlesService