$(document).ready(function(){
	
	$("#top button").click(function(){
		$("#menu").animate({height:"150px"});
		
	});
	
	$("#menu").click(function(){
		$("#menu").animate({height:0});
	});
	
});