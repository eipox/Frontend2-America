Puls3.Models.Article = Backbone.Model.extend({ /*toma el modelo original que existe
	en Backbone y agregale esto*/
	url : '/articles/' //direccion en el server para hacer los pedidos
	//Si se pide por get devuelve todos los articulos
	//Si se pide por post crea uno nuevo
	//Si se pide por put se actualiza un modelo

});
