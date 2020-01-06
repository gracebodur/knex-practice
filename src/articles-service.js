//Making a service object first involves making an object that we'll export.
//We'll put methods on this object that store our transactions. 
//The first method is for getting all articles
const ArticlesService = {
    getAllArticles() {
        return 'all the articles!!'
    }
}

module.exports = ArticlesService