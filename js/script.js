//JS-функция определения поддержки WebP

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
});




$(document).ready(function () {



  //Page Loader
  setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 1500);


  /*-------class for background----------*/

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

    /*----burger-----*/
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('.header').toggleClass('bege');
    /* ---- lock scroll main content when burger open -------  */
    $('body').toggleClass('lock');
  })
// клік поза бургер меню
/*$(document).mouseup(function (e) {
  if ($('.header__burger').hasClass('active')) {
    var menu = $(".header__menu");
    if (!menu.is(e.target) && menu.has(e.target).length === 0) {
      $('.header__burger').click();
    }
  }
});*/

//change nav bg when scroll or resize
  function consoleBG() {
    if ($(window).scrollTop() <= 100 && $(window).width() >= '768') {
      $('.header').css('background', 'rgba(0, 91, 193, 0.6)');
    } else if ($(window).scrollTop() <= 100 && $(window).width() < '768') {
      $('.header').css('background', 'rgba(0, 91, 193, 0.6)');
    }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
      $('.header').css('background', 'rgba(0, 91, 193, 1)');
    } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
      $('.header').css('background', 'rgba(0, 91, 193, 1)');
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });

  $(window).on('load resize',consoleBG);


/*-------slick slider--------*/
  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: false,
    arrows:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.rent__slider-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
//    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: false,
    arrows:true
  });

$(".footer__btn-Top").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

});//end

