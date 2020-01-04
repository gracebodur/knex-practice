require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

// console.log('knex and driver installed correctly')

// const q1 = knexInstance('amazong_products').select('*').toQuery();
// const q2 = knexInstance.from('amazong_products').select('*').toQuery();

// console.log('q1:', q1)
// console.log('q2:', q2)

// knexInstance('amazong_products').select('*')
//     .then(result => {
//         console.log(result)
//     })


// query to select the identifier, name, price, 
// and category of one product. We'll build a query equivalent to this:
// SELECT product_id, name, price, category
//   FROM amazong_products
// WHERE name = 'Point of view gun';
const qry = knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .where({ name: 'Point of view gun' })
    .first() //method that will only select the first item found.
    .toQuery()// adding a limit to the query
    // .then(result => {
    //     console.log(result)
    // })
    console.log(qry)

//build a query that allows customers to search 
//the amazong_products table for products that contain a word
//USE LIKE operator/ ILIKE which is case insensitive and % wildcard for 0 or more characters
//we can use the above query from beaver
// SELECT product_id, name, price, category
//   FROM amazong_products
// WHERE name LIKE '%cheese%';
//knex query below:

//put it in a function that accepts the searchTerm as a parameter
const searchTerm = 'holo'

function searchByProduceName(searchTerm) {
    knexInstance
      .select('product_id', 'name', 'price', 'category')
      .from('amazong_products')
      .where('name', 'ILIKE', `%${searchTerm}%`)
      .then(result => {
        console.log(result)
      })
  }
  
  searchByProduceName('holo')

//build a query that allows customers to paginate 
//the amazong_products table products, 10 products at a time.
//use the LIMIT and OFFSET operators to achieve pagination. 
//Limit tells us the number of items to display and 
//offset will be the starting position in the list to count up to the limit from.
//SQL query:
//SELECT product_id, name, price, category
//FROM amazong_products
//LIMIT 10
//OFFSET 0;

function paginateProducts(page) {
    const productsPerPage = 10
    const offset = productsPerPage * (page - 1)
    knexInstance
      .select('product_id', 'name', 'price', 'category')
      .from('amazong_products')
      .limit(productsPerPage)
      .offset(offset)
      .then(result => {
        console.log(result)
      })
}

paginateProducts(2)

//build a query that allows customers to filter 
//the amazong_products table for products that have images.
//SQL query: 
// SELECT product_id, name, price, category, image
// FROM amazong_products
// WHERE image IS NOT NULL;
//knex query below:

function getProductsWithImages() {
    knexInstance
      .select('product_id', 'name', 'price', 'category', 'image')
      .from('amazong_products')
      .whereNotNull('image')
      .then(result => {
        console.log(result)
      })
}

getProductsWithImages()

//build a query that allows customers 
//to see the most popular videos by view 
//at Whopipe by region for the last 30 days.
//use the count() function to count the dates viewed
//group our results by a combination of the video's name and region
//sort the results by the region and order by the count with most popular first
//use a WHERE to filter only results within the last 30 days
//SQL query:
// SELECT video_name, region, count(date_viewed) AS views
// FROM whopipe_video_views
// WHERE date_viewed > (now() - '30 days'::INTERVAL)
// GROUP BY video_name, region
// ORDER BY region ASC, views DESC;
//knex query below:

function mostPopularVideosForDays(days) {
    knexInstance
      .select('video_name', 'region')
      .count('date_viewed AS views')
      .where(
        'date_viewed',
        '>',
        knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
      )
      .from('whopipe_video_views')
      .groupBy('video_name', 'region')
      .orderBy([
        { column: 'region', order: 'ASC' },
        { column: 'views', order: 'DESC' },
      ])
      .then(result => {
        console.log(result)
      })
  }
  
mostPopularVideosForDays(30)
