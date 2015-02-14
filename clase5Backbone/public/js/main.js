$(document).ready(function(){
	console.log('main.js loaded');

	//Crear una nueva instancia de la coleccion llamada articles
	window.collections.articles = new Puls3.Collections.Articles();
	//Ir al server y pedir los objetos disponibles
	window.collections.articles.fetch();
});
