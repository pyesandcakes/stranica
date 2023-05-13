var loader = document.getElementById("preloader")
    function loaddelay() {
        loader.style.display = "none";
        console.log("loaded")
    }
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            loaddelay();
        }, 10)
      });