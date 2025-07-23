$(function() {
  // load navbar and set active link
  $("#navbar-placeholder").load("partials/navbar.html", function() {
    var path = window.location.pathname.split("/").pop();
    if (path === "" || path === "/") {
      path = "index.html";
    }
    $("#navbar-placeholder a[href='" + path + "']").addClass("active");
  });
  // load footer
  $("#footer-placeholder").load("partials/footer.html");
});
