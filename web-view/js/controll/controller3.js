var Controller3 = function(view, model){
	
	view.backBtn.click(function(){
		$("#view3").hide();
		$("#view2").show();
	});
	
	view.confDishBtn.click(function(){
		$("#view3").hide();
		$("#view2").show();
		model.addDishToMenu(model.getPending().id);
		model.setPending(null);
	});
}