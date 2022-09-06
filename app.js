//Loads express and sets it as app
const express = require('express');
const app = express();

//Set port to 3000
const port = 3000;

//Loads the handlebars module
const handlebars = require('express-handlebars')

//Set the app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations
app.engine('hbs', handlebars.engine({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'planB',
  partialsDir: __dirname + '/views/partials/'
}));

//Serves static files
app.use(express.static('public'))

// //Sets a basic route
app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('main', {layout : 'index'});
  });

//Makes the app listen to port 3000
app.listen(port, () => console.log('Running at Port 3000'));