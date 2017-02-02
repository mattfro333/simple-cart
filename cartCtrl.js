exports.get = function(req, res){

  // Take in a product from req.body
  // add it to the users session cart
  // HTTP stateless gold fish
  // Sessions - stateful
  // Array.isArray([])
  if (Array.isArray(req.session.cart)) {
    req.session.cart.push(req.body)
  } else {
    req.session.cart = [req.body]
  }
  res.status(200).send('ok');
};
