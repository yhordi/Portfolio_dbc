var View = function() {
  this.topHit = 0
}

View.prototype = {
  fix: function () {
    if ($(window).scrollTop() >= 296) {
      this.view.topHit = 1
      this.view.addFixed()
      this.view.addSlideIn()
      this.view.socialVisible()
      } else {
      this.view.removeFixed()
      this.view.removeSocialVisible()
      this.view.removeSlideIn()
      }
  },
  addFixed: function () {
    $(".intro").addClass("fixed");
  },
  addSlideIn: function () {
    $(".intro").addClass("slideIn")
  },
  removeSlideIn: function () {
    $(".intro").removeClass("slideIn");
  },
  removeFixed: function() {
    $(".intro").removeClass("fixed");
  },
  socialVisible: function() {
    $(".social").addClass("visible")
  },
  removeSocialVisible: function() {
    $(".social").removeClass("visible")
  },
}
