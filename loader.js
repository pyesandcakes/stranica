
// if (!('hasCodeRunBefore' in localStorage)) {
    var loader = document.getElementById("preloader")
    function loaddelay() {
        loader.style.display = "none";
    }
    window.addEventListener("load", function () {
        setTimeout(loaddelay, 3000)
    })
//     localStorage.setItem("hasCodeRunBefore", true);
// }

