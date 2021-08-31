const express = require("express")
const router = express.Router()

router.get('/', (req, res) =>
{
	res.send('Product Page')
})

router.get('/id', (req, res) =>
{
	res.send('Product Page with data of specific product id. ')
})


// export all routes
module.exports = router