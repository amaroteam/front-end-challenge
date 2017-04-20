//Método para transformar uma lista de objetos em vetor
const listForArray = (objects) => {

	var array = new Array();
	Object.keys(objects).forEach(function (row) {

		 array.push(objects[row]);

	});

	return array;

};
