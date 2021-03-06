var Controller1 = function(view, model){

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
		if (model.getNumberOfGuests() > 0){
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		}
	});

	view.removeStarterBtn.click(function(){
		model.removeDishFromMenu("Appetizers");
	});

	view.removeMainDishBtn.click(function(){
		model.removeDishFromMenu("Main Dish");
	});

	view.removeDessertBtn.click(function(){
		model.removeDishFromMenu("Desserts");
	});

	view.removePendingBtn.click(function(){
		model.setPending(null);
		$("#view3").hide();
		$("#view2").show();
	});

	view.confirmButton.click(function(){
		$("#view2").hide();
		$("#view1").hide();
		$("#view4").show();
		$("#view3").hide();

	});
}