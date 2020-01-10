require('dotenv').config()
const knex = require ('knex')
const ShoppingListService = require('./shopping-list-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

//updating the controller to use shopping-list-service
ShoppingListService.getAllShoppingListItems(knexInstance)
  .then(testShoppingListItems => console.log(testShoppingListItems))


//QUERIES
//1. Get all items that contain text
//A function that takes one parameter for searchTerm which will be any string
//function will query the shopping_list table using 
//Knex methods and select the rows which have a name 
//that contains the searchTerm using a case insensitive match.

// const searchTerm = 'burger'

// function searchByShoppingListName(searchTerm) {
//     knexInstance
//       .select('id', 'name', 'price', 'category')
//       .from('shopping_list')
//       .where('name', 'ILIKE', `%${searchTerm}%`)
//       .then(result => {
//         console.log(result)
//       })
//   }
  
//   searchByShoppingListName('burger')

// //2. Get all items paginated
// //A function that takes one parameter for pageNumber which will be a number
// //The function will query the shopping_list table using Knex methods 
// //and select the pageNumber page of rows paginated to 6 items per page.

// function paginateShoppingListItems(page) {
//     const pageNumber = 6
//     const offset = pageNumber * (page - 1)
//     knexInstance
//       .select('id', 'name', 'price', 'date_added', 'checked','category')
//       .from('shopping_list')
//       .limit(pageNumber)
//       .offset(offset)
//       .then(result => {
//         console.log(result)
//       })
// }

// paginateShoppingListItems(1)

// //3. Get all items added after date
// //A function that takes one parameter for daysAgo 
// //which will be a number representing a number of days.
// //This function will query the shopping_list table 
// //using Knex methods and select the rows which 
// //have a date_added that is greater than the daysAgo.

// function shoppingItemsAddedAfterDate(days) {
//   knexInstance
//     .select('name', 'category', 'date_added')
//     .where(
//       'date_added',
//       '>',
//       knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
//     )
//     .from('shopping_list')
//     .groupBy('name', 'category', 'date_added')
//     // .orderBy([
//     //   { column: 'category', order: 'ASC' },
//     //   { column: 'views', order: 'DESC' },
//     // ])
//     .then(result => {
//       console.log(result)
//     })
// }

// shoppingItemsAddedAfterDate(10)

// //4. Get the total cost for each category
// //A function that takes no parameters
// //The function will query the shopping_list table 
// //using Knex methods and select the rows grouped 
// //by their category and showing the total price for each category.

// function categoryTotalCost() {
//   knexInstance
//     .select('category')
//     .from('shopping_list')
//     .sum('price')
//     .groupBy('category')
//     .then(result => {
//       console.log(result)
//     })
// }

// categoryTotalCost()
  
  


