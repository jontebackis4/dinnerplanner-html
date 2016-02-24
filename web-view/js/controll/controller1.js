var Controller1 = function(view, model){

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	view.minusButton.click(function(){
		if (model.getNumberOfGuests() > 0){
			model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		}
	});

	view.removePendingBtn.click(function(){
		
		console.log(model.getPending());
	});

	view.confirmButton.click(function(){
		console.log("HEJ");
	});
}