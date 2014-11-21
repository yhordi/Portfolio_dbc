var View = function() {
}

View.prototype = {
  fix: function () {
    if ($(window).scrollTop() > 296) {
      this.view.addFixed()
      this.view.addSlideIn()
      this.view.socialVisible()
      this.view.textLeft()
      this.view.hitTop()
    } else if ($(window).scrollTop() < 296 && hit == true) {
      this.view.removeFixed()
      this.view.removeSocialVisible()
      this.view.removeSlideIn()
      this.view.removeTextLeft()
      this.view.unhitTop()
    } else if ($(window).scrollTop() < 296 && hit == false) {
      this.view.removeCenter()
    }
  },
  hitTop: function () {
    hit = true
  },
  unhitTop: function () {
    hit = false
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
  textLeft: function(){
    $(".intro").addClass("textLeft");
  },
  removeTextLeft: function(){
    $(".intro").addClass("center");
    $(".intro").removeClass("textLeft")
  },
  removeCenter: function(){
    $(".intro").removeClass("center")
  },
  socialVisible: function() {
    $(".social").addClass("visible")
  },
  removeSocialVisible: function() {
    $(".social").removeClass("visible")
  },
  fadeArrowOut: function() {
    $(".arrow").addClass("arrowFadeOut")
  },
  backroundEmphasis: function() {
    $(".defrost").hide(".glass")
  },
  hoverOver: function(){
    $(".defrost").css(".glass")
  }
}

var hit