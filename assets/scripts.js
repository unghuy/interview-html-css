$(document).ready(function() {
  $('.svg-inline--fa').hover(
      function() {
          $(this).addClass('fa-beat');
      }, function() {
          $(this).removeClass('fa-beat');
      }
  );
});

$(document).ready(function () {
  $('a[href*="#"]').on('click', function (event) {
    event.preventDefault();
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {
        window.location.hash = hash;
      });
    }
  });
});