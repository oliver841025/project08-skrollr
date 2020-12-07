$(window).scroll(function(evt){
  if ($(window).scrollTop()>0) {
    $(".navbar").addClass("black");
  }
  else {
    $(".navbar").removeClass("black");

  }
});

var s=skrollr.init();
document.body.id = "skrollr-body "