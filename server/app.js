require('dotenv').config()
const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('./server/public/dist/'))
app.use(bodyParser.json())

function returnWanted(articlesObject) {
  const articlesArray = articlesObject.results
  console.log(articlesObject)
  console.log(articlesArray)
  const sportsArticles = articlesArray.map(item => {
    return {
      topic: item.subsection,
      title: item.title,
      abstract: item.abstract,
      url: item.short_url
    }
  })
  return sportsArticles
}

app.get('/articles', (req, res) => {
  request('https://api.nytimes.com/svc/topstories/v2/sports.json?apikey=' + process.env.API_KEY, (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    res.send(returnWanted(JSON.parse(body)))
  })
})

app.listen(process.env.PORT)
