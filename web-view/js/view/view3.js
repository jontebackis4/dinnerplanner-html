var View3 = function (container, model){
	model.addObserver(this);
	this.backBtn = container.find("#back-btn");
	this.confDishBtn = container.find("#conf-dish-btn");

	this.dishBox = container.find("#dishBox");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.name = container.find("#name");
	this.pic = container.find("#pic");
	this.desc = container.find("#desc");
	this.output = container.find("#output");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(Object){
		this.numberOfGuests.html(model.getNumberOfGuests());
		if(model.getPending()){
		var imgSrc = "<img src='"+ model.getPending().ImageURL + "'alt=`food` width='100%' height='100%'/>";
		model.getPending().ImageURL
		this.name.html(model.getPending().Title);
		this.pic.html(imgSrc);
		this.desc.html(model.getPending().Instructions);
		
			//Listar Ingredienserna
		var len = model.getPending().Ingredients.length;
		var ingQ = [];
		var ingUnit = [];
		var ingName = [];
		var ingPrice = [];
		for (i=0; i<len; i++){
			ingQ.push(model.getPending().Ingredients[i].Quantity);
			ingUnit.push(model.getPending().Ingredients[i].MetricUnit);
			ingName.push(model.getPending().Ingredients[i].Name);
			ingPrice.push(model.getPending().Ingredients[i].Quantity);
		}
		
	}
	//Nytt försök
	var output = "";
	for (i = 0; i < len; i++){
		output += "<div class='row rad'>" + "<div class='col-md-4'>" + ingQ[i]*model.getNumberOfGuests() +" "+ ingUnit[i] + "</div>" + "<div class='col-md-4'>" + ingName[i] + "</div>" + "SEK" +  "<div class='col-md-4'>" + ingPrice[i]*model.getNumberOfGuests() + "</div>" + "</div>";
	}
	this.output.html(output);
	}
}