var api = {};
var cart = [];
var products = require("../../public/js/data/products.json");
products = products.products;

/* Load product's data */
api.loadProducts = function(req,res){
	res.json(products); 
};

/* Search in products and return the one which style is equal to the requested */
api.searchByStyle = function(req,res){
	var product = products.find(function(product){ 
		return product.style == req.params.style; 
	});
	res.json(product);
};

/* Send the product data to cart */
api.addCart = function(req, res){
	var product = req.body; 
	cart.push(product); 
	res.json(product);
};

/* Load cart's products */
api.loadCart = function(req,res){
	res.json(cart); 
};

/* Search in cart's, remove the product requested and return a list of products without the removed one */
api.removeCart = function(req,res){
	cart = cart.filter(function(cart){
		return cart.id != req.params.id;
	});
	res.sendStatus(204);
};

module.exports = api;
