const collection = document.querySelector(".navbar__collection")

function navbarToggle(){
    collection.classList.toggle("show")
}


var loader = document.querySelector(".loader");

window.addEventListener("load", function () {
    this.setTimeout(function() {
        loader.style.display = "none";
    }, 1500);
});
