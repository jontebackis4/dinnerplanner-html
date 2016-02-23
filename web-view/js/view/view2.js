var View2 = function (container, model){
	model.addObserver(this);
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishBox = container.find("#dishBox");

	var dishOutput = "";
	var dishList = model.getAllDishes("starter");
	for(i = 0; i < dishList.length; i ++){
		dishOutput += "<div class='col-md-2'><div class='box' id= '"+i+"' value ='"+dishList[i].id+"'>"+"<div>"+"<img src = 'images/" +dishList[i].image +"' class='imgSize'>"+"</div>"+"<div class='imgSize'>"+dishList[i].name+"</div></div><div style='width: 100%'>"+"Super duper najs mat"+"</div></div>";
	}
	
	this.dishBox.html(dishOutput);
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	this.getDishFilterType = function (type, filter){
		return model.getAllDishes(type, filter);
	}
	
	/*document.getElementById('0').addEventListener("click", function(){
		console.log(document.getElementById('0').getAttribute('value'));
	});
	document.getElementById('1').addEventListener("click", function(){
		console.log(document.getElementById(String('1')).getAttribute('value'));
	});
	document.getElementById('2').addEventListener("click", function(){
		console.log(document.getElementById(String('2')).getAttribute('value'));
	});*/
	
	this.update = function(Object){
		var dishOutput = "";
		var dishList = Object;
		if(dishList){
			for(i = 0; i < dishList.length; i ++){
				dishOutput += "<div class='col-md-2'><div class='box' id= '"+i+"' value ='"+dishList[i].id+"'>"+"<div>"+"<img src = 'images/" +dishList[i].image +"' class='imgSize'>"+"</div>"+"<div class='imgSize'>"+dishList[i].name+"</div></div><div style='width: 100%'>"+"Super duper najs mat"+"</div></div>";
			}
		}
		this.dishBox.html(dishOutput);
		this.numberOfGuests.html(model.getNumberOfGuests());
		
		
		/*document.getElementById('0').addEventListener("click", function(){
			var id = document.getElementById('0').getAttribute('value');
			console.log(id);
		});
		document.getElementById('1').addEventListener("click",function(){
			console.log(document.getElementById(String('1')).getAttribute('value'));
		});
		document.getElementById('2').addEventListener("click",function(){
			console.log(document.getElementById(String('2')).getAttribute('value'));
		});
		document.getElementById('3').addEventListener("click",function(){
			console.log(document.getElementById(String('3')).getAttribute('value'));
		});*/
		
	}
}