
const express = require('express')
const app = express()

app.use(express.static('./server/public/dist/'))

app.listen(process.env.PORT)
