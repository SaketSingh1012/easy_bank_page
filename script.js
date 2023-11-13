document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menuToggle");
  var dropdown = document.getElementById("dropdown");
  var mobileBack = document.getElementById("mobile");
  menuToggle.addEventListener("click", function () {
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
      dropdown.style.zIndex = "1000";
    } else {
      dropdown.style.display = "none";
      dropdown.style.zIndex = "0";
    }
    var image =
      dropdown.style.display === "none" || dropdown.style.display === ""
        ? "./images/icon-hamburger.svg"
        : "./images/icon-close.svg";

    menuToggle.style.backgroundImage = "url('" + image + "')";
  });
});
