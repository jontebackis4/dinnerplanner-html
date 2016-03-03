var Controller2 = function(view, model){
	
	var createClick = function(){

		
		for(i=0; i < view.listlen; i++){

			if (document.getElementById(String(i))){
				document.getElementById(String(i)).addEventListener("click", function(){
				model.setPending(this.getAttribute('value'));
				$("#view2").hide();
				$("#view3").show();
			});
		}}

	}

	$('input').ready(function(){
		$("#srcBtn").click(function(){
			view.getDishFilterType($('select').val(), $('input').val());
		})
	});
	
	$('select').change(function(){
		console.log(this);
		view.getDishFilterType($('select').val(), $('input').val());
	});
	createClick();
}
	