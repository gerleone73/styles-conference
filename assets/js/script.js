
// create the back to top button
$('.primary-footer').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 600;

$(window).scroll(function() {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top').click(function() {
  $('body').animate({
    scrollTop: 0
  }, 'slow');
  return false;
});


$('.maps').click(function () {
  console.log('maps clicked');
    $('.maps iframe').removeClass('scrolloff');
});

 $( ".maps" ).mouseleave(function() {
      console.log('mouse leave');
          $('.maps iframe').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
     });  

$('.teaser h3').hover(function(){
  console.log('hover over');
 var image= $(this).closest('.col-1-3').find('img').removeClass('desaturate').addClass('saturate');

 $('.teaser h3').mouseleave(function(){
 image.removeClass('saturate').addClass('desaturate')
 })

 console.log(image);
});

$('.light').on('click', function(){
  console.log('clicked');
  $('body').toggleClass('light')
  $('.row').toggleClass('light');
});