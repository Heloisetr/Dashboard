var mongoose = require('mongoose');

app.use(express.bodyParser());
app.use(express.methodOverride());

mongoose.connect('mongodb://localhost/User');

var mySchema = new mongoose.Schema({
    _id : String,
    name : String,
    pwd : String
});

var user = mongoose.model('User', mySchema);

var db = mongoose.connection('mongodb://localhost/User');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

})