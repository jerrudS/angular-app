require('dotenv').config()
const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('./server/public/dist/'))
app.use(bodyParser.json())

app.get('/articles', (req, res) => {
  request('https://api.nytimes.com/svc/topstories/v2/sports.json?apikey=' + process.env.API_KEY, (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    res.send(body)
  })
})

app.listen(process.env.PORT)
