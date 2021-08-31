const mongoose = require('mongoose')
require('dotenv').config({path: './.env'})

const URL = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`

// Make the connection
mongoose.connect(URL, {
	useNewUrlParser: true, // to use a new url parsing as the old url parsing string is deprecated
	useUnifiedTopology: true
}).then(() =>
{
	console.log('Connected to Database ... Successfully. ')

}).catch((e) =>
{
	console.log('Could not connect to database. \nServer responded with Error: ', e)

})