$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault()
      var hash = this.hash

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800)
    }
  })

  $("button").on('click', function(event) {
    console.log(event.target)
    if (event.target.attr('href') !== "") {
      event.preventDefault()
      var hash = event.target.attr('href')

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800)
    }
  })
})
