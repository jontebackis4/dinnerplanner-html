var Controller2 = function(view, model){
	
	var createClick = function(){
		for(i=0; i<view.getDishFilterType($('select').val().toLowerCase(), $('input').val()).length; i++){
			document.getElementById(String(i)).addEventListener("click", function(){
				model.setPending(this.getAttribute('value'));
				$("#view2").hide();
				$("#view3").show();
			});
		}

	}

	$('input').ready(function(){
		$("button").click(function(){
			view.update(view.getDishFilterType($('select').val().toLowerCase(), $('input').val()));
			createClick();
		})
	});
	
	$('select').change(function(filter){
		view.update(view.getDishFilterType($('select').val().toLowerCase(), $('input').val()));
		createClick();
	});
	createClick();
}
	