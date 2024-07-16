const express = require('express')
const app = express()
const port = 3000
const {sequelize} = require('./models')
app.use(express.json())

app.use('/bands', require('./controllers/band.js'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/stage', require('./controllers/stage.js'))
// app.use('/set', require('./controllers/set.js'))

app.listen(port, async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  console.log(`Example app listening on port ${port}`)
})