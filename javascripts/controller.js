function Controller(view) {
  this.view = new View()
}

Controller.prototype = {
  bindListeners: function() {
    $(window).on("scroll", this.view.fix.bind(this))
    $(window).on("scroll", this.view.scrollBackUp.bind(this))
  }
}