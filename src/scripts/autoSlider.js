$(function() {      
  var width=$('.block2__slider').width();                     // Ширина слайдера.
      interval = 4000;                                    // Интервал смены слайдов.
 
  $('.block2__slider_images img:last').clone().prependTo('.block2__slider_images');     // Копия последнего слайда помещается в начало.
  $('.block2__slider_img').eq(1).clone().appendTo('.block2__slider_images');     // Копия первого слайда помещается в конец.  
  $('.block2__slider_images').css('margin-left', -width);                // Контейнер .slider сдвигается влево на ширину одного слайда.
  setInterval('animation()',interval);                    // Запускается функция animation(), выполняющая смену слайдов.
});
var circleValue = 0;
$("#circle0").css("background-color", "#aeaeae");
function animation(){
 
  var margin = parseInt($('.block2__slider_images').css('marginLeft'));  // Текущее смещение блока .slider
      width=$('.block2__slider').width(),                     // Ширина слайдера.
      slidersAmount=$('.block2__slider_images').children().length;       // Количество слайдов в слайдере.
  if(margin!=(-width*(slidersAmount-1)))                  // Если текущий слайд не последний,
  {
    margin=margin-width;                                  // то значение margin уменьшается на ширину слайда.
  }else{                                                  // Если показан последний слайд,
    $('.block2__slider_images').css('margin-left', -width);              // то блок .slider возвращается в начальное положение,
    margin=-width*2;         
  }
  $('.block2__slider_images').animate({marginLeft:margin},1000);          // Блок .slider смещается влево на 1 слайд.
    //$("#circle"+circleValue).css("background-color", "#000");
    circleValue++;
    console.log(circleValue);
    console.log();
    switcherCircles(circleValue);
    if (circleValue == 3) circleValue = -1;
    
};

function switcherCircles(circlesNumber) {
    if (circlesNumber == 0) {
        $("#circle0").css("background-color", "#aeaeae");    
        $("#circle1").css("background-color", "transparent");    
        $("#circle2").css("background-color", "transparent");    
        $("#circle3").css("background-color", "transparent");    
    } else if (circlesNumber == 1) {
        $("#circle0").css("background-color", "transparent");    
        $("#circle1").css("background-color", "#aeaeae");    
        $("#circle2").css("background-color", "transparent");    
        $("#circle3").css("background-color", "transparent"); 
    }  else if (circlesNumber == 2) {
        $("#circle0").css("background-color", "transparent");    
        $("#circle1").css("background-color", "transparent");    
        $("#circle2").css("background-color", "#aeaeae");    
        $("#circle3").css("background-color", "transparent"); 
    }  else if (circlesNumber == 3) {
        $("#circle0").css("background-color", "transparent");    
        $("#circle1").css("background-color", "transparent");    
        $("#circle2").css("background-color", "transparent");    
        $("#circle3").css("background-color", "#aeaeae"); 
    }
    
}