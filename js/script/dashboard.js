$(document).ready(function () {
  $(".project_img").magnificPopup({
    type: "image",
    closeBtnInside: false,
    closeOnContentClick: false,

    callbacks: {
      open: function () {
        var self = this;
        self.wrap.on("click.pinhandler", "img", function () {
          self.wrap.toggleClass("mfp-force-scrollbars");
        });
      },
      beforeClose: function () {
        this.wrap.off("click.pinhandler");
        this.wrap.removeClass("mfp-force-scrollbars");
      },
    },

    image: {
      verticalFit: false,
    },
  });

  $("#card-thumbnail").sliphover({
    fontColor: "#fff",
    backgroundColor: "rgba(0,0,0,.7)",
    textAlign: "center",
    verticalMiddle: true,
    withLink: true,
  });
});
