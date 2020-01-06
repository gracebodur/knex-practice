# Checkpoint 13: Databases with Node

## Drills
1. Get all items that contain text

A function that takes one parameter for searchTerm which will be any string
The function will query the shopping_list table using Knex methods and select the rows which have a name that contains the searchTerm using a case insensitive match.
2. Get all items paginated

A function that takes one parameter for pageNumber which will be a number
The function will query the shopping_list table using Knex methods and select the pageNumber page of rows paginated to 6 items per page.
3. Get all items added after date

A function that takes one parameter for daysAgo which will be a number representing a number of days.
This function will query the shopping_list table using Knex methods and select the rows which have a date_added that is greater than the daysAgo.
4. Get the total cost for each category

A function that takes no parameters
The function will query the shopping_list table using Knex methods and select the rows grouped by their category and showing the total price for each category.

# Checkpoint 14: Building Services

## Assignment
Following from the previous assignment, you should already have a table called shopping_list inside your knex-practice database. Make a new file in your knex-practice project for ./src/shopping-list-service.js that contains methods for CRUD: to get, insert, update and delete shopping list items. Also, make a ./test/shopping-list-service.spec.js file that tests the CRUD methods.


