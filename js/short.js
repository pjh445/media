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
	
	//������ ��ũ�ѹٳ��̸� 0���� ����
	$(document).scrollTop(0);
	//�� ������ ���̸� ������ �Ҵ�.
	const s0 = $(".sec").eq(0).offset().top; //���밪(���������� ����)=> 0
	const s1 = $(".sec").eq(1).offset().top; //100vh   937
	const s2 = $(".sec").eq(2).offset().top; //200vh   1874
	console.log(s2); //��) 1874 
	 //500vh
		
	let st = 0;			
	let last = 0;
	
	$(window).scroll(function(){
	
				//��ũ�ѳ�����, ��ũ������ top���� st������ �Ҵ���.
				st = $(this).scrollTop(); //��) 150
				
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
						//console.log("���� �ø�");				   
						if(st<s2 && st>s1){							
							move(1);
						}
						if(st<s1 ){							
							move(0);
						}
				}
				//��ũ�� ���������� top��   �������� ��ũ�� top�� �� �Ѱ���
				last = st;				
	});//scroll()��
			
	let p= 0 ;
	function move(i){
				switch(i){
					case 0: p = s0;
							break;
					case 1: p = s1; //��) p=937
							break;
					case 2: p = s2;

					
				}
				$("html,body").stop().animate({scrollTop:p},50);
	}//move()��			
	
});//��ü��