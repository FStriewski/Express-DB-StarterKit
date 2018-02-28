const express = require('express')
//const sequelize = require('./database')
const Sequelize = require('sequelize')

const app = express()
const port = process.env.PORT || 3030

app.get('/', (req, res) => {
  res.json({ message: 'Yo!' })
})

app.listen(port, () => {
      console.log(`
    Server is listening on ${port}.

    Open http://localhost:${port}

    to see the app in your browser.
        `)
})


const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "secret",
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  }
);


// Model for sequelize to know what to expact
let Players = sequelize.define('players', {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER,
}, {
  tableName: 'Players'
})


app.get('/players', (request, response) => {
  Players.findAll().then(Players => {
    response.send({ Players })
  })
})

// app.get('/players/:id', (request, response) => {
//   const houseId = request.params.id
//   // ... run SQL query
//   response.send(/* reponse from SQL query */)
// })

app.get('/players/:id', (request, response) => {
  const playerId = request.params.id
  Players.findById(playerId).then(Players => {
    response.send({ Players })
  })
})
