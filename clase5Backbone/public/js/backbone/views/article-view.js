Puls3.Views.Article = Backbone.View.extend({
	/*Cada vez que se cree una vista generar 
	una etiqueta html article con una clase llamada post.
	Si no se especifican tagName ni className se genera
	un div vacio*/
	tagName : "article", //genera un tag de tipo article que se utiliza en el DOM
	className : "post",
	initialize : function(){
		//debugger;
	},

	render : function(){
		this.$el.html(this.model.get('title'));
	}

});
