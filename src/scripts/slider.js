var images = ["url(../images/cover.jpg)", "url(../images/cover-about.jpg)"];

var texts = ["Fully responsive website mockup PSD template. Free for commercial &amp; presonal use.  Portfolio &amp; Contact Pages included.", "azazaz fskjfla jslj woeiqp m,mc a;s al oa dals kaflma ajd ; dw mlm aslkd wjdk jw."]

var i = 0;
$(".header__main").css("background-image", images[i]);
$(".index__right_text").html(texts[i]);
$( ".slider__button_right" ).click(function() {
    i++;
    if(i==2) i=0;
    console.log(i);
  $(".header__main").css("background-image", images[i]);
    $(".index__right_text").html(texts[i]);
});

$( ".slider__button_left" ).click(function() {
    i--;
    if(i==-1) i=1;
    console.log(i);
  $(".header__main").css("background-image", images[i]);
    $(".index__right_text").html(texts[i]);
});