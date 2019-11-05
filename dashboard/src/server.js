const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true
}).then(() => {
    console.log("You are log to the database !")
}).catch(err => {
    console.log("You are not connect to the database");
    process.exit;
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}).on('error', function(err) {
    console.log(err);
});

app.use('/users', require('./routes/usersConstroller'));


module.exports = server;

