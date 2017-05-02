var path = require('path');

module.exports = function(app){

	var api = app.api.products;

	app.route('/data/products')
		.get(api.loadProducts);
	
	app.route('/data/products/:style')
		.get( api.searchByStyle);
	
	app.route('/data/cart')
		.get(api.loadCart)
		.post(api.addCart);

    app.route('/data/cart/:id')
		.delete(api.removeCart);

	app.all('/*', function(req, res) {
      res.sendFile(path.resolve('public/index.html'));
  	});
};
