var Controller0 = function(view, model){

	$("#view1").hide();
	$("#view2").hide();
	$("#view3").hide();
	$("#view4").hide();
	$("#view5").hide();

	view.startBtn.click(function(){
		$("#view0").hide();
		$("#view1").show();
		$("#view2").show();
	});
}