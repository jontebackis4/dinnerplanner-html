var View4 = function (container, model){
	model.addObserver(this);
	this.printBtn = container.find("#print-btn");
	this.backBtn = container.find("#back-btn");
	
	this.numberOfGuests = container.find("#numberOfGuests");

	this.starterImage = container.find("#starterImage");
	this.starterName = container.find("#starterName");
	this.starterPrice = container.find("#starterPrice");
	
	this.mainDishImage = container.find("#mainDishImage");
	this.mainDishName = container.find("#mainDishName");
	this.mainDishPrice=container.find("#mainDishPrice");
	
	this.dessertImage = container.find("#dessertImage");
	this.dessertName = container.find("#dessertName");
	this.dessertPrice=container.find("#dessertPrice");
	
	this.menuPrice = container.find("#menuPrice");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	var imgDesc = "";
	var menuList = model.getFullMenu();

	if(menuList[0] != 0){
			imgDesc = "<img class = 'imgSize' src='"+menuList[0].ImageURL+"'>";
			this.starterImage.html(imgDesc);
			this.starterName.html(menuList[0].name);
			this.starterPrice.html(model.getDishPrice(menuList[0])*model.getNumberOfGuests());
		}else{
			imgDesc = "<img class = 'imgSize' src='images/NoDish.jpg'>";
			this.starterImage.html(imgDesc);
			this.starterName.html("");
			this.starterPrice.html(model.getDishPrice(menuList[0])*model.getNumberOfGuests());
		}

		if(menuList[1] != 0){
			imgDesc = "<img class = 'imgSize' src='"+menuList[1].ImageURL+"'>";
			this.mainDishImage.html(imgDesc);
			this.mainDishName.html(menuList[1].name);;
			this.mainDishPrice.html(model.getDishPrice(menuList[1])*model.getNumberOfGuests());
		}else{
			imgDesc = "<img class = 'imgSize' src='images/NoDish.jpg'>";
			this.mainDishImage.html(imgDesc);
			this.mainDishName.html("");
			this.mainDishPrice.html(model.getDishPrice(menuList[1])*model.getNumberOfGuests());
		}

		if(menuList[2] != 0){
			imgDesc = "<img class = 'imgSize' src='"+menuList[2].ImageURL+"'>";
			this.dessertImage.html(imgDesc);
			this.dessertName.html(menuList[2].name);
			this.dessertPrice.html(model.getDishPrice(menuList[2])*model.getNumberOfGuests());
		}else{
			imgDesc = "<img class = 'imgSize' src='images/NoDish.jpg'>";
			this.dessertImage.html(imgDesc);
			this.dessertName.html("");
			this.dessertPrice.html(model.getDishPrice(menuList[2])*model.getNumberOfGuests());
		}
	
	this.menuPrice.html(model.getTotalMenuPrice());
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.menuPrice.html(model.getTotalMenuPrice());

	this.update = function(Object){
		var dishList = Object;
		this.numberOfGuests.html(model.getNumberOfGuests());
		var imgDesc = "";
		var menuList = model.getFullMenu();

		if(menuList[0] != 0){
			imgDesc = "<img class = 'imgSize' src='"+menuList[0].ImageURL+"'>";
			this.starterImage.html(imgDesc);
			this.starterName.html(menuList[0].name);
			this.starterPrice.html(model.getDishPrice(menuList[0])*model.getNumberOfGuests());
		}else{
			imgDesc = "<img class = 'imgSize' src='images/NoDish.jpg'>";
			this.starterImage.html(imgDesc);
			this.starterName.html("");
			this.starterPrice.html(model.getDishPrice(menuList[0])*model.getNumberOfGuests());
		}

		if(menuList[1] != 0){
			imgDesc = "<img class = 'imgSize' src='"+menuList[1].ImageURL+"'>";
			this.mainDishImage.html(imgDesc);
			this.mainDishName.html(menuList[1].name);;
			this.mainDishPrice.html(model.getDishPrice(menuList[1])*model.getNumberOfGuests());
		}else{
			imgDesc = "<img class = 'imgSize' src='images/NoDish.jpg'>";
			this.mainDishImage.html(imgDesc);
			this.mainDishName.html("");
			this.mainDishPrice.html(model.getDishPrice(menuList[1])*model.getNumberOfGuests());
		}

		if(menuList[2] != 0){
			imgDesc = "<img class = 'imgSize' src='"+menuList[2].ImageURL+"'>";
			this.dessertImage.html(imgDesc);
			this.dessertName.html(menuList[2].name);
			this.dessertPrice.html(model.getDishPrice(menuList[2])*model.getNumberOfGuests());
		}else{
			imgDesc = "<img class = 'imgSize' src='images/NoDish.jpg'>";
			this.dessertImage.html(imgDesc);
			this.dessertName.html("");
			this.dessertPrice.html(model.getDishPrice(menuList[2])*model.getNumberOfGuests());
		}
		
		this.menuPrice.html(model.getTotalMenuPrice());
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.menuPrice.html(model.getTotalMenuPrice());
	}
}