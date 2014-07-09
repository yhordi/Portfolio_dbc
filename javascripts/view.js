var View = function() {
}

View.prototype = {
  fix: function () {
    if ($(window).scrollTop() >= 296) {
      this.view.addFixed()
      } else {
        $(".intro").removeClass("fixed");
        $(".intro").removeClass("slideIn");
      }
  },
  addFixed: function () {
    $(".intro").addClass("fixed");
    $(".intro").addClass("slideIn")
    $(".social").addClass("visible")
  },
  addSlideIn: function () {

  },
  removeFixed: function() {

  }
}
