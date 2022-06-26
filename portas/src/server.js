const express = require('express');
const routes = require('./routes');

const app = express();

/*app.get('/', function(req, res) {
    res.send('Hello World');
});*/
app.use(express.json());
app.use(routes);

app.listen(3000);