document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  options = {
    edge:'right'
  }
  var instances = M.Sidenav.init(elems,options);

  const square = document.getElementById('square');
  const quantity = document.getElementById('quantity');
  const sum = document.getElementById('sum');
  
  calcSum(square.value, quantity.value)
  
  square.addEventListener('input', ()=>calcSum(square.value, quantity.value))
  quantity.addEventListener('input',()=> calcSum(square.value, quantity.value))
  
  function calcSum(squareValue, quantityValue) {
    if(+squareValue <= 0 || +quantityValue <= 0){
      showSum(0)
    }else{
      let squarePrice = +squareValue * 500;
      let quantityPrice = +quantityValue * 600;
    
      showSum(squarePrice + quantityPrice);
    }
  }
  
  function showSum(value) {
    sum.value = value
  }

  // slick

  // $('.cert__slider').slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });

  // $('.comments__slider').slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });

  // const countSlide = document.querySelector('.cert .cert__counter-current'),
  //       countSlideComments = document.querySelector('.comments .cert__counter-current'),
  //       all = document.querySelector('.cert .cert__counter-all'),
  //       slides = document.querySelectorAll('.cert__slider .certificates__link'),
  //       slidesComments = document.querySelectorAll('.comments__slider .comments__card'),
  //       allComments = document.querySelector('.comments .cert__counter-all');

  // all.textContent = slides.length;
  // allComments.textContent = slidesComments.length;
  // $('.cert__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
  //   countSlide.innerText = currentSlide + 1;
  // });
  // $('.comments__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){ //счётчик слайдов
  //   countSlideComments.innerText = currentSlide + 1;
  // });


  // Плавный скролл

  $('.nav__company').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#company').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__company').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#company').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__advantages').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__advantages').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#advantages').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__catalog').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#catalog').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__catalog').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#catalog').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__order').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#order').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__order').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#order').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__comments').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#comments').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__comments').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#comments').offset().top }, 1000);
    e.preventDefault();
  });

  $('.nav__contacts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    e.preventDefault();
  });
  $('.sidenav__contacts').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
    e.preventDefault();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });

  //Маска и валидация телефона в модалке
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      modalTel: "required"
    },
    messages: {
      modalTel: "Телефон обязателен"
    }
  });

  //Маска
  $('input[name="modalTel"]').mask('+7 (000) 000-00-00');

  $('.quiz__block--end').validate({
    errorClass: "invalid",
    rules: {
      quizTel: "required"
    },
    messages: {
      quizTel: "Телефон обязателен"
    }
  });

  //Маска
  $('input[name="quizTel"]').mask('+7 (000) 000-00-00');

  $('.catalog__big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img src='img/big-slider/arrow/prev.svg' class='catalog__big-slider__arrow catalog__big-slider__arrow__prev' alt='1'>",
    nextArrow: "<img src='img/big-slider/arrow/next.svg' class='catalog__big-slider__arrow catalog__big-slider__arrow__next' alt='2'>",

    fade: true,
    asNavFor: '.catalog__big-slider__nav',
    responsive:[
      {
        breakpoint: 1400,
        settings:{
          prevArrow: "<img src='img/big-slider/arrow/prev-mob.svg' class='catalog__big-slider__arrow_mobile catalog__big-slider__arrow_mobile__prev' alt='1'>",
          nextArrow: "<img src='img/big-slider/arrow/next-mob.svg' class='catalog__big-slider__arrow_mobile catalog__big-slider__arrow_mobile__next' alt='2'>",
        }
      }
    ]
  });
  $('.catalog__big-slider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite:false,
    asNavFor: '.catalog__big-slider',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });
        
  if (document.body.clientWidth <= 1200) {
    $('.reviews__inner').slick({
      prevArrow: "<img src='img/reviews/arrow/arrow.svg' class='reviews__inner__arrow reviews__inner__arrow__prev' alt='1'>",
      nextArrow: "<img src='img/reviews/arrow/arrow.svg' class='reviews__inner__arrow reviews__inner__arrow__next' alt='2'>",
      responsive:[
        {
        breakpoint: 1000,
        slidesToShow: 2
      }],
    });
  }
});
