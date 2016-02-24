var Controller4 = function(view, model){
	
	view.printBtn.click(function(){
		$("#view4").hide();
		$("#view5").show();
	});
	
	view.backBtn.click(function(){
		$("#view4").hide();
		$("#view1").show();
		$("#view2").show();
	});
}