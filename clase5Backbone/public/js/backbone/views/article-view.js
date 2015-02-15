Puls3.Views.Article = Backbone.View.extend({
	/*Cada vez que se cree una vista generar 
	una etiqueta html article con una clase llamada post.
	Si no se especifican tagName ni className se genera
	un div vacio*/
	tagName : "article", //genera un tag de tipo article que se utiliza en el DOM
	className : "post",
	initialize : function(){
		//debugger;

		this.template = _.template($('#article-template').html());
	},

	render : function(){
		var data = this.model.toJSON();
		//junto data con el template
		var html = this.template(data);

		this.$el.html(html);
	}

});
