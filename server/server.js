const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('./models')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/api', (req, res) => {
  res.send({
    msg: 'Hello word',
  })
})

app.post('/users', (req, res) => {
  console.log(req.body)
  res.send({
    msg: 'secusss'
  })
})

sequelize.authenticate()
  .then(() => {
    console.log('connection has been established successfully.')
    app.listen(3000, () => console.log(`Server has been started on`))
  })

app.listen(3000, () => console.log('listen 3000'))
