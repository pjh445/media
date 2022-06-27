$(document).ready(function(){
	
	
	$("#days button").click(function(){
		let y = $(this).index();
		$(this).removeClass("active").siblings().addClass("active");	
		$("#table>div").eq(y).removeClass("active").siblings().addClass("active");
	});
	
	/*$("#gu rt").click(function(){
		$(this).css("color","red");
		if( $(this).hasClass("add") ){ 
			$(".add").hide();
			$(".favorite").show();
			console.log("add");
			}
			
		if( $(this).hasClass("favorite") ){ 
			$(".favorite").hide();
			$(".add").show();
			}	 
	});*/
	$("#gu b").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
});//ÀüÃ¼³¡