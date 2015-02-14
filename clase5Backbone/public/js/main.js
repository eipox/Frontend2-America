$(document).ready(function(){
	console.log('main.js loaded');

	//Crear una nueva instancia de la coleccion llamada articles
	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.on('add', function (model){//Escucha cuando se agrega nuevos articulos
		//console.log('Se ha agregado: ', model.toJSON());
		//Agregar nuevas vistas de articulos aqui
		var view = new	Puls3.Views.Article({model: model});

		view.render();

		view.$el.appendTo('body'); // Agrega el articulo al body

	});

	//Ir al server y pedir los objetos disponibles
	window.collections.articles.fetch();
});
 