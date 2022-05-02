$(document).ready(function(){

	//원스크롤 레이아웃:헤더
	let n = $('.gnb > ul > li').index();
	console.log(n); //0 

	let gnb = $('.gnb > ul > li');

	gnb.click(function(){  //메인 메뉴를 클릭하면

	  n = $(this).index();  //해당 인덱스 값을 구하여 출력해본다.
	  console.log(n);  ///0,1,2,3,4

	  // 인덱스 번호에 해당하는 section을 화면위로 올린다.
	  $('html, body').animate({scrollTop:$('main section').eq(n).offset().top},500);

	  return false; //새로 고침 방지

	  
	
	
	});
	  //메인홈화면:애니메이션
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

	//4. 3초마다 자동으로 움직이게한다.
	//let Timer = setInterval(moveSlide,3000);'
	
	///////////////////////////////////////

	//1. 순서변경하기
	$('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');

	$('.slide > ul').css('margin-top','-300px');

	function moveSlide(){
	  $('.slide > ul').animate({'margin-top':'-600px'},500,function(){
		$('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
		$('.slide > ul').css('margin-top','-300px');
	  });
	}

	let Timer = setInterval(moveSlide, 3000);

	  //qna
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
	// targetElem.setAttribute('data-flip', 'true');

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
  });

