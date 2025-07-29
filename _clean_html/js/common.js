$(function() {

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  
});

$(window).load(function() {

  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");

});

const toggleBtn = document.getElementById('menu-toggle')
const menu = document.getElementById('hidden-nav')
const closeButton = document.getElementById('close-button')
const openButton = document.getElementById('open-button')
let closed = true;

toggleBtn.addEventListener('click', () => {
  if(closed){
    closeButton.style.opacity = '1';
    openButton.style.opacity = '0';
    closed = false;
  }
  else{
    closeButton.style.opacity = '0';
    openButton.style.opacity = '1';
    closed = true;
  }
  menu.classList.toggle('active');

})