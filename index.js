var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var config = require('./config');
var cartCtrl = require('./cartCtrl');
var app = express();
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(session({
  secret: 'beyoncefan4life',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.json());

// app.post('/api/cart', function(req, res){
//   // Take in a product from req.body
//   // add it to the users session cart
//   // HTTP stateless gold fish
//   // Sessions - stateful
//   // Array.isArray([])
//   if (Array.isArray(req.session.cart)) {
//     req.session.cart.push(req.body)
//   } else {
//     req.session.cart = [req.body]
//   }
//   res.status(200).send('ok');
// });

app.get('/api/cart', function(req, res){
  res.status(200).json(req.session.cart);
})
app.post('/api/cart', cartCtrl.get);
app.get('/api/cart', cartCtrl.get);
app.listen(3001, function() {
  console.log('Express is running on 3001')
})
