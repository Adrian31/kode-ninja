$( document ).ready(function() {
  //Scroll Appear
  // $(".featured-work-title").hide(); //hide your div initially
  var topOfOthDiv = $("#particles-js").offset().top;
  $(window).scroll(function() {
    if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
      $(".featured-work-container").show(1200); //reached the desired point -- show div
    }
  });

  setTimeout(function() {
    setInterval(function() {
    $('#logo-gif').attr('src',$('#logo-gif').attr('src'));
    },1);
    $('#logo-gif').remove();
    $('#logo-still').show().css("display", "block");

  }, 1900);
});
