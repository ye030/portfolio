$(document).ready(function(){

	// 상단공지
	$('#notice a').click(function(){
		$('#notice').fadeOut();
		return false;
	});

	//원스크롤 레이아웃:헤더
	let n = $('.gnb > ul > li').index();
	console.log(n); //0 

	let gnb = $('.gnb > ul > li');

	gnb.click(function(){  
		
		n = $(this).index();  
	  console.log(n);  

	  $('html, body').animate({scrollTop:$('main section').eq(n).offset().top},500);

	  return false; 
	
	});

	// 원스크롤 레이아웃 : a
	$('#navigation li a').click(function(){
		$('#navigation li a').removeClass('selected');
		$(this).addClass('selected')
	})

	//Main 텍스트 애니메이션
	  const txtImg = $('.home_ani img:first-child');
	  const pImg = $('.home_ani img:last-child');
			  
	  txtImg.css('opacity','0').animate({'left':'40px','opacity':'1'},800);
	  pImg.css('opacity','0').animate({'top':'270px','opacity':'1'},800);

	function moveSlide(){
	  $('.slide > ul').animate({'margin-left':'0px'},500,function(){
		$('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');
		$('.slide > ul').css('margin-left','-1200px');
	  });
	}
	
	// 오른쪽 원형 슬라이드
	$('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');

	$('.slide > ul').css('margin-top','-300px');

	function moveSlide(){
	  $('.slide > ul').animate({'margin-top':'-600px'},500,function(){
		$('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
		$('.slide > ul').css('margin-top','-300px');
	  });
	}

	let Timer = setInterval(moveSlide, 3000);

	//FAQ
	let qna = $(".qna > ul > li > a");

	  qna.click(function (e) {
		if (e.target.className !== "open") {
		  $(this).next().slideDown().parent().siblings().find("p").slideUp();
		  $(this)
			.find("i")
			.addClass("act2")
			.parent()
			.parent()
			.siblings()
			.find("i")
			.removeClass("act2");
		  $(e.target).parent().siblings().find("a").removeClass("open");
		  $(this).addClass("open");
		} else {
		  $(this).removeClass("open");
		  $(this).next().slideUp();
		}
		return false;
	  });	
	  const worldElem = document.querySelector('.world');
	  const handElem = document.querySelector('.hand');
	  
	  function clickHandler(e) {
		  const targetElem = e.target;

		if (targetElem.classList.contains('world')) {
		return;
	}

		if (targetElem.dataset.flip === 'false') {
		// data-flip="false"라면
		targetElem.dataset.flip = 'true';
		} else {
		// data-flip="true"라면
		targetElem.dataset.flip = 'false';
	}
}

	// Skill Card
	function moveHandler(e) {
		console.log(e.clientX, e.clientY);
		handElem.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}

	function touchHandler(e) {
		console.log(e.touches[0].clientX, e.touches[0].clientY);
		handElem.style.transform = `translate(${e.touches[0].clientX}px, ${e.touches[0].clientY}px)`;
}

	worldElem.addEventListener('click', clickHandler);
	window.addEventListener('mousemove', moveHandler);
	window.addEventListener('mousedown', () => {
		document.body.classList.add('mousedown');
});
	window.addEventListener('mouseup', () => {
		document.body.classList.remove('mousedown');
});

	// touchstart, touchend
	window.addEventListener('touchmove', touchHandler);

	// 모니터 목업

	$('.c_btn01 > li').click(function(){
		let n = -($(this).index()*600);
		console.log(n);

	$('.item_list01').animate({'left':n},500);

	$('.c_btn01 li').removeClass('on');
	$(this).addClass('on');
	});


	$('.c_btn02 > li').click(function(){
		let n = -($(this).index()*600);
		console.log(n);

	$('.item_list02').animate({'left':n},500);

	$('.c_btn02 li').removeClass('on');
	$(this).addClass('on');
	});

	
	$('.c_btn03 > li').click(function(){
		let n = -($(this).index()*600);
		console.log(n);

	$('.item_list03').animate({'left':n},500);

	$('.c_btn03 li').removeClass('on');
	$(this).addClass('on');
	});


	// 갤러리

	const g_nav = $('#gallery > .g_nav a');
			
	$('#gallery > .g_nav li:first-child a').addClass('g_on'); 
	
	g_nav.click(function(){
		$('#gallery a').removeClass('g_on');
		$(this).addClass('g_on');
		return false; 
	});
	
	$('.g_list > li').hover(function(){
		$(this).find('.caption').stop().animate({'bottom':'0px'},300);
	},function(){ 
		$('.caption').stop().animate({'bottom':'-40px'},300);
	});
	
	let src;
	
	$('.g_list li').click(function(){
		src = $(this).find('img').attr('src');
		console.log(src); 
		
		//모달창 내용
	  const modal = '<div class="modal"><img src="'+src+'" alt=""><span class="c_btn">Close</span></div>';
		
		$('body').prepend(modal);
		
		$('.modal .c_btn').click(function(){
			$('.modal').fadeOut();					
		});

		return false; 
	});
	
	//메뉴 클릭시 해당하는 이미지만 보이게하기
	const total = $('.g_nav ul li:first-child a');
	const project = $('.g_nav ul li:nth-child(2) a');
	const process = $('.g_nav ul li:nth-child(3) a');
	const design = $('.g_nav ul li:nth-child(4) a');
	const cording = $('.g_nav ul li:nth-child(5) a');
	const pub = $('.g_nav ul li:last-child a');
	
	total.click(function(){ 
		$('.g_list li').hide();
		$('.total').show();
		return false;
	});
	
	project.click(function(){
		$('.g_list li').hide(); 
		$('.project').fadeIn(); 
		return false;
	});
	
	design.click(function(){
		$('.g_list li').hide();
		$('.design').fadeIn();
		return false;
	});
	
	process.click(function(){
		$('.g_list li').hide();
		$('.process').fadeIn();
		return false;
	});
	
	cording.click(function(){
		$('.g_list li').hide();
		$('.cording').fadeIn();
		return false;
	});

	pub.click(function(){
		$('.g_list li').hide();
		$('.pub').fadeIn();
		return false;
	});
	
	// MY SROTY 탭메뉴

	$('.tab_wrap li:first-child a').addClass('n_act');
				
	$('.tab_wrap li:first-child a').next().addClass('o_act');

	let t_gnb = $('.tab_wrap li');
				
	t_gnb.click(function(){
		
	$('.tab_wrap li a').removeClass('n_act'); 
	$(this).find('a').addClass('n_act'); 
	
	$('.tab_wrap .tab_con').removeClass('o_act'); 
	$(this).find('.tab_con').addClass('o_act'); 

		var n = $(this).index();
		console.log(n);
		
		
		$('.tab_wrap li').each(function(index){ 
			$(this).find('a').children('img').attr('src', $(this).find('img').attr('src').replace('_off','_on')); 
			
			if(n!=index){ 
				$(this).find('a').children('img').attr('src', $(this).find('img').attr('src').replace('_on','_off'));
			}
		});

	return false;
	
	});

});

				
	// 목업재도전
	(() => {
		const time = 5000;
		const carousel = document.querySelector('.carousel');
		const jumbotron = carousel.querySelector('.jumbotron');
		const gallery = carousel.querySelector('.m_gallery');
		const galleryImages = [...gallery.querySelectorAll('figure')];
	
		let timer = 0;
		let pause = false;
	
		jumbotron.innerHTML = gallery.innerHTML;
		const count = gallery.childElementCount;
		carousel.style.setProperty('--count', count);
	
		if(count <= 1) {
			carousel.classList.add('single');
			return;
		}
	
		const setIndex = i => {
			index = i;
			carousel.style.setProperty('--index', i);
	
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				setIndex(pause ? i : (i + 1) % count);
			}, time);
		}
	
		galleryImages.forEach(e => {
			e.addEventListener('click', ({ currentTarget }) => {
				setIndex(galleryImages.indexOf(currentTarget));
			});
		});
	
		carousel.addEventListener('mouseenter', () => pause = true);
		carousel.addEventListener('mouseleave', () => pause = false);
	
		setIndex(0);
	})();

