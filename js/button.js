var layout = document.querySelector(".layout"),
    button = document.querySelector(".icon-menu");

button.addEventListener("click", function() {
  if (layout.className.indexOf(" collapsed") > -1) {
    layout.className = layout.className.replace(" collapsed", "");
  } else {
    layout.className += " collapsed";
  }
}, false);