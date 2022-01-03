$(document).ready(function() {
  const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  keypress(Swiper, keyCode) {},
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  keypress(Swiper, keyCode) {},
});
//  ymaps.ready(init);
//     function init(){
//         // Создание карты.
//         var myMap = new ymaps.Map("map", {
//             // Координаты центра карты.
//             // Порядок по умолчанию: «широта, долгота».
//             // Чтобы не определять координаты центра карты вручную,
//             // воспользуйтесь инструментом Определение координат.
//             center: [7.82984905, 98.29001943],
//             // Уровень масштабирования. Допустимые значения:
//             // от 0 (весь мир) до 19.
//             zoom: 7
//         });
//     }

$(".newsletter").parallax({
  imageSrc: "./img/newsletter-bg.jpeg",
  androinFix: false,
  iosFix: false,
});

var menuButton = $(".menu-button");
menuButton.on("click", function () {
  $('.navbar-buttom').toggleClass('navbar-buttom--visible');
});


var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close") 
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);

$(this).keyup(function(event) {
   var key = event.keyCode;
  if (key == 27) {
     var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
     modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
   }
else {return  false;};
   });

   

function openModal() {
  var targetModal = $(this).attr("data-href");
  $(targetModal).find('.modal__overlay').addClass("modal__overlay--visible");
  $(targetModal).find('.modal__dialog').addClass("modal__dialog--visible");

}

function closeModal(event){
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');


  
};

//обработка форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Please specify your name",
      minlenth: "The name should not be shorter than 2 letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Please leave your phone number",
    },
  },
});
});

$('.input-phone').mask('+7 (999) 999-99-99', {placeholder: "+7 (999) 999-99-99"}, {'translation': {9: {pattern: /[0-9]/}}});



});


