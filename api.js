// Imports
const express = require('express')
const bodyParser = require('body-parser')


require('./mongo-connection') // connection to MongoDB


// Initializers
const app = express();
// will be requiring a body parser to handle response data.
// Body Parser - Parse our requests.
app.use(bodyParser.json()) // parsing the requests


// Import all routes
const postsRoute = require('./pages/posts')
const productRoute = require('./pages/products')


// Middlewares
/*
* A middlewares is a function that will always execute when a specific route is executed.
*/
app.use('/posts', postsRoute)
app.use('/products', productRoute)



// Routes
app.get('/', (request, response) =>
{
	response.send('We are in home.')
})

app.get('/posts', (request, response) =>
{
	response.send('We are in posts. ')
})




// listen on port
app.listen(3500)