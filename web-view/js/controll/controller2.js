var Controller2 = function(view, model){
	
	$('input').ready(function(){
		$("button").click(function(){
			view.update(view.getDishFilterType($('select').val().toLowerCase(), $('input').val()));
		})
	});
	
	$('select').change(function(filter){
		view.update(view.getDishFilterType($('select').val().toLowerCase(), $('input').val()));
	});
	
	
	
	
	//for(i=0; i<view.getDishFilterType($('select').val().toLowerCase(), $('input').val()).length; i++){
		//document.getElementById(String(i)).addEventListener("click", function(){
			//console.log(document.getElementById(String(i-1)).getAttribute('value'));
			
		//});
		
	//}
	
}