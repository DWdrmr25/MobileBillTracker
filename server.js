var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express();

mongoose.connect('mongodb://PJankowski25:Payton15@ds031271.mongolab.com:31271/billtracker', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

var BillsSchema = mongoose.Schema({
  name: String,
  amount: Number,
  notes: String
});

var Bills = mongoose.model('Bills', BillsSchema);

var UsersSchema = mongoose.Schema({
  name: String,
  income: String,
  bills: [BillsSchema]
});

var Users = mongoose.model('Users', UsersSchema);

app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(cors());

app.get('/api/bills', function (req, res, next) {
  Bills.find({}, function (err, bills) {
    if (err) {
      res.status(500);
      console.log(err);
    } else {
      res.status(200);
      res.json(bills);
    }
  });
});

app.post('/api/bill', function(req, res, next){
  var bill = new Bills(req.body);
  bill.save(function(err, newBill){
    if(err){
      res.status(500);
      console.log(err);
      res.json(err);
    }else{
      res.status(200);
      res.json(newBill);
    }
  });
});

app.listen(app.get('port'), function () {
  console.log('Listening on port: ' + app.get('port'));
});