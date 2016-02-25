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
	if(model.getPending()){
		var imgSrc = "<img src='images/" + model.getDish(model.getPending().id).image + "'alt=`food` width='100%' height='100%'/>";
		
		this.name.html(model.getPending().name);
		this.pic.html(imgSrc);
		this.desc.html(model.getPending().description);
		
			//Listar Ingredienserna
		var len = model.getPending().ingredients.length;
		var ingName = [];
		var ingQ = [];
		var ingUnit = [];
		var ingPrice = [];
	
		for (i = 0; i < len; i++){
			ingName.push(model.getPending().ingredients[i].name);
		}
		
		for (i = 0; i < len; i++){
			ingQ.push(model.getPending().ingredients[i].quantity);
		}
		
		for (i = 0; i < len; i++){
			ingUnit.push(model.getPending().ingredients[i].unit);
		}
		
		for (i = 0; i < len; i++){
			ingPrice.push(model.getPending().ingredients[i].price);
		}
	}
	//Nytt försök
	var output = "";
	for (i = 0; i < len; i++){
		output += "<div class='row rad'>" + "<div class='col-md-4'>" + ingQ[i]*model.getNumberOfGuests() +" "+ ingUnit[i] + "</div>" + "<div class='col-md-4'>" + ingName[i] + "</div>" + "SEK" +  "<div class='col-md-4'>" + ingPrice[i]*model.getNumberOfGuests() + "</div>" + "</div>";
	}
	this.output.html(output);

	this.update = function(Object){
		this.numberOfGuests.html(model.getNumberOfGuests());
		if(model.getPending()){
			var imgSrc = "<img src='images/" + model.getPending().image + "'alt=`food` width='70%' height='70%'/>";
			
			this.name.html(model.getPending().name);
			this.pic.html(imgSrc);
			this.desc.html(model.getPending().description);
			
				//Listar Ingredienserna
			var len = model.getPending().ingredients.length;
			var ingName = [];
			var ingQ = [];
			var ingUnit = [];
			var ingPrice = [];
			
			for (i = 0; i < len; i++){
				ingName.push(model.getPending().ingredients[i].name);
			}
			
			for (i = 0; i < len; i++){
				ingQ.push(model.getPending().ingredients[i].quantity);
			}
			
			for (i = 0; i < len; i++){
				ingUnit.push(model.getPending().ingredients[i].unit);
			}
			
			for (i = 0; i < len; i++){
				ingPrice.push(model.getPending().ingredients[i].price);
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