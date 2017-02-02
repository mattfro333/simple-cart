angular.module('myApp')
.service('cartService', function($http) {
  this.addToCart = function(product) {
    console.log(`Adding ${product} to cart`);
    return $http.post('/api/cart', product)
  }
  this.getCart = function(){
    return $http.get('/api/cart')
  }
})
