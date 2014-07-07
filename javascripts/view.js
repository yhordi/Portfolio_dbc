var View = function() {}

View.prototype = {
  fix: function () {
    console.log("fix called")
    var top = $(".intro").offset().top - parseFloat($(".intro").css("marginTop").replace(/auto/, 0));
    var y = $(".intro").scrollTop();
    if ($(window).scrollTop() >= 296) {
      console.log("inside if statement")
      this.view.addFixed()
      } else {
        $(".intro").removeClass("fixed");
      }
  },
  addFixed: function () {
    console.log("yay!")
    $(".intro").addClass("fixed");
    $(".intro").addClass("slideIn")
  },
  removeFixed: function() {

  }
}
