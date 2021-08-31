// Imports
const express = require("express")

const Post = require('../models/Post')


// Initializers
const router = express.Router()


// Routes

// Home - GET
router.get('/', (request, response) =>
{
	response.send('We are on posts')
})

// Home - POST
router.post('/', (req, res) =>
{
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	})

	// show the saved data as response to request
	post.save().then(data => {
		res.json(data) // showing response to request made
	}).catch(err => {
		res.json({
			message: err // if error ?
		})
	})
})

// reformating the above post request with async and await. [optional]
router.post('/', async (req, res) =>
{
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	})

	try
	{
		// show the saved data as response to request
		const savedPost = await post.save()
		res.json(savedPost)
	}catch(err)
	{
		res.json({
			message: err
		})
	}
	
})

// Id - GET
router.get('/id', (request, response) =>
{
	response.send('Page with data of specific product with id. ')
})




// export the routes
module.exports = router 