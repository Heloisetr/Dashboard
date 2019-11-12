const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();

const port = 5000;

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


var TestSchema = new mongoose.Schema({
    name: String,
    firstname: String,
    email: { type: String, unique: true },
    password: { type: String, unique: true }
});

TestSchema.methods.check = function () {
    var greeting = this.name
      ? "Name: " + this.name + " Firstname: " + this.firstname + " Email: " + this.email + " Pwd: " + this.password
      : "I don't have a name";
    console.log(greeting);
}

var Test = mongoose.model('Test', TestSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    /*
    var LouisTest = new Test({
        name: 'Tronche',
        email: 'heloise3.tronche@epitech.eu',
        firstname: 'Héloïse',
        password: "1234567" });

    LouisTest.save(function (err, LouisTest) {
        if (err) return console.error(err);
        LouisTest.check();
    })
    
    Test.find(function (err, tes) {
        if (err) return console.error(err);
        console.log(tes);
    })

    var query = Test.findOne({ 'email': 'louis.beugnon@epitech.eu' });

    query.select('email name firstname password');
    query.exec(function (err, test) {
        if (err) console.log(err.code);
        console.log(test);
    })
   */
})

app.use('/users', require('../../routes/usersConstroller'));

app.post('/', function(req, res){
    new Test({
        name: req.body.new_user.name,
        email: req.body.new_user.email,
        firstname: req.body.new_user.firstname,
        password: req.body.new_user.password
    }).save(function(err, doc){
        if (err) res.json(err);
        Test.find(function (err, res) {
            if (err) return console.error(err);
            console.log(res);
        })
    })
})

app.get('/', function(req, res){
    Test.find({ email: req.query.email_s }, function (err, tes) {
        if (err) return console.error(err);
        if (tes == []) {
            res.send("This email doesn't exist !")
        } else {
            if(tes[0].password == req.query.password_s) {
                if (fs.existsSync('../../userInfos.json')) {
                    fs.unlink('../../userInfos.json', (err) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })
                }
                fs.writeFile('../../userInfos.json', JSON.stringify(tes, null, 2), (err) => {
                    if (err) throw err;
                })
                res.send(tes);
            } else {
                res.send("Wrong password")
            }
        }
    })
})

module.exports = server;