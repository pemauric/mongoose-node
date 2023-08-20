const express = require('express');
const exphbs = require('express-handlebars');
//const db = require('./db/conn'); 
const port = 5000

const productEvent = require('./routes/event.routes');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');   

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json());

app.use('/', eventRoutes)


app.listen(port, () => {
    console.log('Listening on port 3000');
    console.log('http://localhost:3000');
});