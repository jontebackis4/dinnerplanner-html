var View1 = function (container, model){
	model.addObserver(this);

	this.minusButton = container.find("#minusGuest");
	this.plusButton = container.find("#plusGuest");
	this.confirmButton = container.find("#confirm-btn");
	this.removeStarterBtn = container.find("#removeStarter");
	this.removeMainDishBtn = container.find("#removeMainDish");
	this.removeDessertBtn = container.find("#removeDessert");
	this.removePendingBtn = container.find("#removePending");

	this.numberOfGuests = container.find("#numberOfGuests");
	this.dishID = container.find("#dishID");
	this.menuPrice = container.find("#menuPrice");
	this.starterName = container.find("#starterName");
	this.starterPrice = container.find("#starterPrice");
	this.mainDishName = container.find("#mainDishName");
	this.mainDishPrice = container.find("#mainDishPrice");
	this.dessertName = container.find("#dessertName");
	this.dessertPrice = container.find("#dessertPrice");
	this.pendingPrice = container.find("#pendingPrice");

	this.update = function(Object){
		var menuList = model.getFullMenu();
		console.log(model.getNumberOfGuests());
		this.numberOfGuests.html(model.getNumberOfGuests());
		if(menuList[0]!=0){
			this.starterName.html(menuList[0].Title);
			this.starterPrice.html(model.getDishPrice(menuList[0])*model.getNumberOfGuests());
		}else{
			this.starterPrice.html("");
			this.starterName.html("Appetizers");
		}
		if(menuList[1]!=0){
			this.mainDishName.html(menuList[1].Title);
			this.mainDishPrice.html(model.getDishPrice(menuList[1])*model.getNumberOfGuests());
		}else{
			this.mainDishPrice.html("");
			this.mainDishName.html("Main Dish");
		}
		if(menuList[2]!=0){
			this.dessertName.html(menuList[2].Title);
			this.dessertPrice.html(model.getDishPrice(menuList[2])*model.getNumberOfGuests());
		}else{
			this.dessertPrice.html("");
			this.dessertName.html("Desserts");
		}
		this.menuPrice.html(model.getTotalMenuPrice());
		
		if(model.getPending()){
			this.pendingPrice.html(model.getDishPrice(model.getPending())*model.getNumberOfGuests());
		}else{
			this.pendingPrice.html(0);
		}
	}

	var menuList = model.getFullMenu();
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.starterName.html("Starter");
	this.mainDishName.html("Main Dish");
	this.dessertName.html("Dessert");
	
	this.menuPrice.html(model.getTotalMenuPrice());
	if(model.getPending()){
		this.pendingPrice.html(model.getDishPrice(model.getPending())*model.getNumberOfGuests());
	}else{
			this.pendingPrice.html("0");
	}
	
	
}