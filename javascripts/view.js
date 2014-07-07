var View = function() {
  this.topHit = 0
}

View.prototype = {
  fix: function () {
    if ($(window).scrollTop() >= 296) {

      this.view.addFixed()
      } else if (this.view.topHit === 1){
        $(".intro").addClass("fadeIn")
      } else {
        $(".intro").removeClass("fixed");
        $(".intro").removeClass("slideIn");
      }
  },
  addFixed: function () {
    $(".intro").addClass("fixed");
    $(".intro").addClass("slideIn")
  },
  removeFixed: function() {

  }
}
