//DEPENDENCIES
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
const PORT = process.env.PORT || 3001; //Decide on port number??

const sequelize = require('./config/connection');

const hbs = exphbs.create({});


//Handlebar midware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Need to add listener
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});