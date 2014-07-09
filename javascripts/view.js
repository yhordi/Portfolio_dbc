var View = function() {
}

View.prototype = {
  fix: function () {
    if ($(window).scrollTop() >= 296) {
      this.view.addFixed()
      } else {
        this.view.removeFixed()
        this.view.removeSlideIn()
      }
  },
  addFixed: function () {
    $(".intro").addClass("fixed");
    $(".intro").addClass("slideIn")
    $(".social").addClass("visible")
  },
  addSlideIn: function () {

  },
  removeSlideIn: function () {
    $(".intro").removeClass("slideIn");
  },
  removeFixed: function() {
    $(".intro").removeClass("fixed");
  }
}
