//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	this.pagenr = 1;
	this.guests = 2;
	this.selectedMenu = [0,0,0]; //sorteras som: 1.Appetizer 2.main dish 3. dessert 
	this.observers = [];
	this.pending ;
	this.listLen = 0;
	this.loremIpsum= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend risus libero, id varius nunc vulputate ac. Vestibulum et auctor urna, quis commodo nunc. Suspendisse efficitur libero at mauris laoreet mollis. Sed porta at ex sed consequat. Praesent at risus nibh. Mauris eu odio turpis."

	this.addObserver = function(observer){
		this.observers.push(observer);
	}

	this.notifyObservers = function(results){
		if (results){
			for (obs in this.observers){
				if(this.observers[obs]){
					this.observers[obs].update(results);
				}
			}
		}
	}

	this.getLoremIpsum = function(){
		return this.loremIpsum;
	}
	
	this.setPagenr = function(num){
		if(num <=1){
			this.pagenr = num;
		}
	}

	this.getPagenr = function(){
		return this.pagenr;
	}

	this.setPending = function(id){
		if(id){
			this.getDish(id);
			//this.notifyObservers();
		}else{
			this.pending=id;
			//this.notifyObservers();
		}
	}
	
	this.getPending = function() {
		return this.pending;
	}
	
	this.setNumberOfGuests = function(num){
		console.log("set");
		this.guests = num;
		this.notifyObservers("yellow");
	}

	// should return 
	this.getNumberOfGuests = function() {
		return this.guests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) { // tar in ett object
		if(type === "Appetizers"){
			return this.selectedMenu[0];
		}
		else if(type === "Main Dish"){
			return this.selectedMenu[1];
		}
		else if(type === "Desserts"){
			return this.selectedMenu[2];
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return this.selectedMenu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var all = [];
		for(dish in this.selectedMenu){
			if(this.selectedMenu[dish]!= 0){
				for(ingred in this.selectedMenu[dish].ingredients){
					all.push(dishes[dish].ingredients[ingred]);
				}
			}
		}
		return all;
	}
	this.getDishPrice = function(dish){ //tar in ett dish-object
		var cost = 0;
		if(dish){
			for(i = 0; i < dish.Ingredients.length; i++){				
				cost+= dish.Ingredients[i].Quantity;
			}
		}
		return cost;
	}
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var cost = 0;
		for(i = 0; i< this.selectedMenu.length; i++){
			if(this.selectedMenu[i]!= 0){
				for(ingred in this.selectedMenu[i].Ingredients){
					cost += this.selectedMenu[i].Ingredients[ingred].Quantity;
				}
			}
		}
	return cost*this.getNumberOfGuests();
	}
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function() { //1.Appetizer 2.bread 3.breakfast 4.drinks 5.salad 6.side dish 7.soup 8.main dish 9.marinade 10.dessert 11.other 
		var dish = this.getPending();
		console.log(dish.Category);
		if(dish.Category === "Appetizers"){
			this.selectedMenu[0]= dish;
			console.log(this.selectedMenu[0]);
		}
		else if(dish.Category === "Main Dish"){
			this.selectedMenu[1]= dish;
		}
		else if(dish.Category === "Desserts"){
			this.selectedMenu[2]= dish;
		}
		this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(type) {
		if(type === "Appetizers"){
			this.selectedMenu[0]= 0;
		}
		else if(type === "Main Dish"){
			this.selectedMenu[1]= 0;
		}
		else if(type === "Desserts"){
			this.selectedMenu[2]= 0;
		}
		this.notifyObservers();
	}


	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {
    	
        var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
        var page = 1;
        var url = "http://api.bigoven.com/recipes?api_key=" + apiKey + "&pg=" +page+ "&rpp=4&include_primarycat=" + type;
       	if (filter){
    		filter = "&any_kw=" + filter;
    		var url = "http://api.bigoven.com/recipes?api_key=" + apiKey + "&pg=" +page+ "&rpp=4&include_primarycat=" + type + filter;
    	}
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
            	console.log(data);
            	var dishList = data.Results;
            	this.notifyObservers(dishList);
            }.bind(this)
        });
    }




	//function that returns a dish of specific ID
	this.getDish = function (id) {
	   	var apiKey = "18f3cT02U9f6yRl3OKDpP8NA537kxYKu";
        var recipeId = id;
        var url = "http://api.bigoven.com/recipe/" + recipeId + "?api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
            	
                this.pending = data;
                this.notifyObservers("getDish");
            }.bind(this)
        });
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.

	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'Fish Sticks',
		'type':'main dish',
		'image':'FishSticks.jpg',
		'description':"Here is how you make Felix TM Fish Sticks; first you turn on the oven. Then when the time is right, you put the Felix TM Fish Sticks int there. When the time is right once again, you take them out and put them in your mouth.",
		'ingredients':[{ 
			'name':'Classified ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'Classified ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'Classified ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'vanillaicecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'strawberry.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
