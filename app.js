
const express = require('express')
const path = require('path');
const app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'))
})

app.listen(app.get('port'), 
  console.log(`Listening ${app.get('port')}`))
