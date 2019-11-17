const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');
//const authorize = require('./youtube_server');
//const ytbcheck = require('./youtube_sev');

const app = express();

const port = 8080;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true
}).then(() => {
    console.log("You are log to the database !")
}).catch(err => {
    console.log("You are not connect to the database");
    process.exit;
})

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}).on('error', function(err) {
    console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var TestSchema = new mongoose.Schema({
    name: String,
    firstname: String,
    email: { type: String, unique: true },
    password: { type: String, unique: true }
});

var Test = mongoose.model('Test', TestSchema);

var AccountSchema = new mongoose.Schema({
    email: String,
    services: [{
        name: String,
        widgets: [{
            name: String,
            description: String,
            params: [{
                name: String,
                params_type: String
            }]
        }]
    }]
});

var Account = mongoose.model('Account', AccountSchema);

var WidgetSchema = new mongoose.Schema({
    email: String,
    name: String,
    params: String
});

var UserWidget = mongoose.model('UserWidget', WidgetSchema);

db.once('open', function callback () {
    
})

/**
 * 
 *  DIFFERENT CALL TO THE DATABASE
 *  USE BY THE PROJECT : DASHBOARD
 * 
 */

 
if (fs.existsSync('../../../src/userInfos.json')) {
    var user_log = require('../../../src/userInfos.json');
    var user_id = user_log._id;
}

/**
 * REGISTRATION POST / Call in AuthSignUpPage.js
 */


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

/**
 * LOGIN GET / Call in AuthLoginPage.js
 * 
 * This call look for a matching email in the DB,
 * If the user provide a good email, server check password and create a 'userInfos.json' file.
 *  
 */

app.get('/', function(req, res){
    Test.find({ email: req.query.email_s }, function (err, tes) {
        if (err) return console.error(err);
        if (tes.length < 1) {
            res.send("Null");
        } else {
            if(tes[0].password == req.query.password_s) {
                if (fs.existsSync('../../../App/src/userInfos.json')) {
                    fs.unlink('../../../App/src/userInfos.json', (err) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })
                }
                fs.writeFile('../../../App/src/userInfos.json', JSON.stringify(tes[0], null, 2), (err) => {
                    if (err) throw err;
                })
                if (fs.existsSync('../temp/userInfos.json')) {
                    fs.unlink('../temp/userInfos.json', (err) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })
                }
                fs.writeFile('../temp/userInfos.json', JSON.stringify(tes[0], null, 2), (err) => {
                    if (err) throw err;
                })
                res.send(tes);
            } else {
                res.send("Wrong password")
            }
        }
    })
})

/**
 * WIDGET REGISTRATION POST / Call in Widget.js
 * 
 * This call create a new Widget in DB
 */

app.post('/widget', function(req, res){
    new UserWidget({
        email: req.body.new_widget.email,
        name: req.body.new_widget.name,
        params: req.body.new_widget.param
    }).save(function(err, doc){
        if (err) res.json(err);
        UserWidget.find(function (err, res) {
            if (err) return console.error(err);
            console.log(res);
        })
    })
})

/**
 * WIDGET GET WITH EMAIL / Call in HomePage.js
 * 
 * This get all widget for a user.
 */

app.get('/widget', function(req, res){
    UserWidget.find({ email: req.query.email_s }, function(err, tes) {
        if (err) return console.error(err);
        if (fs.existsSync('../../../App/src/temp/userWidget.json')) {
            fs.unlink('../../../App/src/temp/userWidget.json', (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        fs.writeFile('../../../App/src/temp/userWidget.json', JSON.stringify(tes, null, 2), (err) => {
            if (err) throw err;
        })
        if (fs.existsSync('../temp/userWidget.json')) {
            fs.unlink('../temp/userWidget.json', (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
        fs.writeFile('../temp/userWidget.json', JSON.stringify(tes, null, 2), (err) => {
            if (err) throw err;
        })
        res.send(tes);
    })
})

/**
 * YOUTUBE
 */

// Load client secrets from a local file.
/*
app.get('/youtube', function(req, res){
    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the YouTube API.
        var auth = authorize.authorize(JSON.parse(content), authorize.getChannel);
        res.send(auth);
    });
})

app.post('/youtube', function(req, res){
    authorize.storeToken(req.body.token);
})

app.get('/youtube/channels', function(req, res){
    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the YouTube API.
        var channels = ytbcheck.authorize(JSON.parse(content));
        res.send(channels);
    });
})
*/

/**
 * 
 * ABOUT.JSON
 * 
 */

 app.get('/about.json', function(req, res){
    var ip = require("ip");
    var test = {
        "client": {
            "host": ip.address()
        },
        "server": {
            "current_time": new Date().getTime(),
            "services": ""
        }
    }
    var about = require('./about.json');
    test.server.services = about.server.services;
    res.send(test);
 })


module.exports = server;