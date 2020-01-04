require('dotenv').config()
const knex = require ('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

// knexInstance('shopping_list').select('*')
//     .then(result => {
//     console.log(result)
// })

//1. Get all items that contain text
//function will query the shopping_list table using 
//Knex methods and select the rows which have a name 
//that contains the searchTerm using a case insensitive match.

const searchTerm = 'burger'

function searchByShoppingListName(searchTerm) {
    knexInstance
      .select('id', 'name', 'price', 'category')
      .from('shopping_list')
      .where('name', 'ILIKE', `%${searchTerm}%`)
      .then(result => {
        console.log(result)
      })
  }
  
  searchByShoppingListName('burger')