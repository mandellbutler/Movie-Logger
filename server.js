const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// routes

// sequelize connection

// helpers

const app = express()
const PORT = process.env.PORT || 3001

// sessions

const hbs = exphbs.create()

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// routes

app.listen(PORT, () => console.log(`Now listening on ${PORT}.`))
