const ShoppingListService = {
    getAllShoppingListItems(knex) {
        return knex.select('*').from('shopping_list')
        .select('*')
        .from('shopping_list')
    },
    // insertArticle(knex, newArticle) {
    //     return knex
    //         .insert(newArticle)
    //         .into('blogful_articles')
    //         .returning('*')
    //         .then(rows => rows[0])
    //     },
    // getById(knex, id) {
    //     return knex
    //         .from('blogful_articles')
    //         .select('*')
    //         .where('id', id)
    //         .first()
    //     },
    // deleteArticle(knex, id) {
    //     return knex('blogful_articles')
    //         .where({ id })
    //         .delete()
    // },
    // updateArticle(knex, id, newArticleFields) {
    //     return knex('blogful_articles')
    //     .where({ id })
    //     .update(newArticleFields)
    // }
}



module.exports = ShoppingListService