var link = document.querySelector(".main-nav__toggle");
var popup = document.querySelector(".hidden");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("hidden");
    popup.classList.remove("modal-error");
});


window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        popup.classList.contains("hidden");
        popup.classList.remove("hidden");
    }
});

