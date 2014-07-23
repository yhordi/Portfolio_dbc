var View = function() {
}

View.prototype = {
  fix: function () {
    if ($(window).scrollTop() >= 296) {
      this.view.addFixed()
      this.view.addSlideIn()
      this.view.socialVisible()
      // this.view.addZIndex()
      this.view.fadeArrowOut()
    } else {
      this.view.removeFixed()
      this.view.removeSocialVisible()
      this.view.removeSlideIn()
      }
    // if ($(window).scrollTop() >= 811) {
    //   this.view.addFixedToDbc()
    // } else {
    //   this.view.removeFixedFromDbc()
    // }
    // if ($(window).scrollTop() >= 2000 ) {
    //   this.view.dbcHide()
    // } else {
    //   this.view.dbcShow()
    // }
  },
  addFixed: function () {
    $(".intro").addClass("fixed");
  },
  addZIndex: function () {
    $(".intro").addClass("zIndex")
  },
  addDisplayInline: function() {
    $(".intro").addClass("displayInline")
  },
  addFixedToDbc: function () {
    $(".dbcText").addClass("fixed");
  },
  removeFixedFromDbc: function () {
    $(".dbcText").removeClass("fixed");
  },
  dbcHide: function() {
    $(".dbcText").hide()
  },
  dbcShow: function() {
    $(".dbcText").show()
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
  fadeArrowOut: function() {
    $(".arrow").addClass("arrowFadeOut")
  }
}
