var navMain = document.querySelector(".main-nav__open");
var navPopup = document.querySelector(".modal-menu");
var navClose = document.querySelector(".modal-menu-close");

navMain.addEventListener("click", function(event) {
  event.preventDefault();
        navPopup.classList.add("modal-menu-close");
      });
close.addEventListener("click", function(event) {
        event.preventDefault();
        navPopup.classList.remove("modal-menu-close");
      });
window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (navpPopup.classList.contains("modal-menu-close")) {
            popup.classList.remove("modal-menu-close");
          }
        }
      });


var popupOpen = document.querySelector(".btn__js");
var popup = document.querySelector(".modal-content");
var popupClose = Popup.querySelector(".modal-content-close");

popupOpen.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
      });

      popupClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
      });



var form = document.querySelector(".form");
var storage = localStorage.getItem("order");

      form.addEventListener("submit", function(event) {
        if (!first.value || !family-name.value || !second-name.value || !tel.value || !email-name.value || !additional-name.value) {
          event.preventDefault();
        } else {
          localStorage.setItem("order", order.value);
        }
      }
      });
