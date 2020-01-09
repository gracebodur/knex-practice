const ShoppingListService = {
    getAllShoppingListItems(knex) {
        return knex.select('*').from('shopping_list')
        .select('*')
        .from('shopping_list')
    },
    insertShoppingItem(knex, newShoppingItem) {
        return knex
            .insert(newShoppingItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => rows[0])
    },
    getShoppingItemsById(knex, id) {
        return knex
            .from('shopping_list')
            .select('*')
            .where('id', id)
            .first()
    },
    deleteShoppingItem(knex, id) {
        return knex('shopping_list')
            .where({ id })
            .delete()
    },
    updateShoppingItem(knex, id, newShoppingListField) {
        return knex('shopping_list')
        .where({ id })
        .update(newShoppingListField)
    }
}



module.exports = ShoppingListService