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
//A function that takes one parameter for searchTerm which will be any string
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

//2. Get all items paginated
//A function that takes one parameter for pageNumber which will be a number
//The function will query the shopping_list table using Knex methods 
//and select the pageNumber page of rows paginated to 6 items per page.

function paginateShoppingListItems(page) {
    const pageNumber = 6
    const offset = pageNumber * (page - 1)
    knexInstance
      .select('id', 'name', 'price', 'date_added', 'checked','category')
      .from('shopping_list')
      .limit(pageNumber)
      .offset(offset)
      .then(result => {
        console.log(result)
      })
}

paginateShoppingListItems(1)