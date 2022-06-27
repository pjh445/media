$(document).ready(function(){
	
		$("#share").click(function(){
		$("#menubar1").animate({height:"80vh"});
		$("#gb").fadeIn();
	});
	
	$("#menubar1").click(function(){
		$("#menubar1").animate({height:0});
		$("#gb").fadeOut();
	});
	
	$("#gb").click(function(){
		$("#menubar1").animate({height:0});
		$("#menubar2").animate({height:0});
		$("#gb").fadeOut();
	});
	
	
	$("#more").click(function(){
		$("#menubar2").animate({height:"200px"});
		$("#gb").fadeIn();
	});
	
	$("#about").click(function(){
		$("#menubar2").animate({height:0});
		$("#gb").fadeOut();
	});
	
	//문서의 스크롤바높이를 0으로 설정
	$(document).scrollTop(0);
	//각 섹션의 높이를 변수에 할당.
	const s0 = $(".sec").eq(0).offset().top; //절대값(브라우저기준 측정)=> 0
	const s1 = $(".sec").eq(1).offset().top; //100vh   937
	const s2 = $(".sec").eq(2).offset().top; //200vh   1874
	console.log(s2); //예) 1874 
	 //500vh
		
	let st = 0;			
	let last = 0;
	
	$(window).scroll(function(){
	
				//스크롤내리면, 스크롤윗쪽 top값을 st변수에 할당함.
				st = $(this).scrollTop(); //예) 150
				
				if (st > last){
							   
								 //(150<937)
					   if (st < s1){							
							move(1);
					   }
					   if( st > s1 && st < s2 ){
							move(2);							
					   }
						if( st>s2 && st<s3 ){
							move(3);							
						}
				} 
				if (st < last){	
						//console.log("위로 올림");				   
						if(st<s2 && st>s1){							
							move(1);
						}
						if(st<s1 ){							
							move(0);
						}
				}
				//스크롤 내렸을때의 top을   마지막의 스크롤 top에 값 넘겨줌
				last = st;				
	});//scroll()끝
			
	let p= 0 ;
	function move(i){
				switch(i){
					case 0: p = s0;
							break;
					case 1: p = s1; //예) p=937
							break;
					case 2: p = s2;

					
				}
				$("html,body").stop().animate({scrollTop:p},50);
	}//move()끝			
	
});//전체끝