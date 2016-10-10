var link = document.querySelector(".main-nav__open");
var popup = document.querySelector(".hidden");
var close = document.querySelector(".main-nav__close");

link.addEventListener("click", function (event) {
    event.preventDefault();
  popup.classList.add("hidden-show");
});

close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("hidden-show");

      });

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
          if (popup.classList.contains("hidden-show")) {
            popup.classList.remove("hidden-show");

          }
        }
      });
