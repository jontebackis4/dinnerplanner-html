var View2 = function (container, model){
	model.addObserver(this);
	this.listlen = 0;
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	this.getDishFilterType = function(type, filter){
		model.getAllDishes(type, filter);
	}
	
	this.update = function(Object){
		var dishOutput = "<div class ='row'>";
		if(Object){
			if($.isArray(Object)){
				this.listlen = Object.length;
			    for(i = 0; i < Object.length; i ++){
	            	dishOutput += "<div class='col-md-2'><div class='box' id = '"+i+"' value ='"+Object[i].RecipeID+"'>"+"<div>"+"<img src = '"+Object[i].ImageURL +"' class='imgSize'>"+"</div>"+"<div class='imgSize'>"+Object[i].Title+"</div></div><div style='width: 100%'>"+"Super duper najs mat"+"</div></div>";
	            	if((i+1)%6 === 0 && i != 0){
	            		dishOutput+="</div><div class='row'>";
	            	}
				}
			}
		}
		
		dishOutput+= "</div>";
		$("#dishBox").html(dishOutput);
		$(document).ready(function(){
			var controller2 = Controller2(this, model);
		}.bind(this))
		
		this.numberOfGuests.html(model.getNumberOfGuests());
		}
}
