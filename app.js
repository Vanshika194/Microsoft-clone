// scripts.js

window.addEventListener("scroll", function() {
    var backToTopBtn = document.getElementById("back-to-top-btn");
    if (window.scrollY > 300) { // Adjust the scroll position as needed
        backToTopBtn.classList.remove("hidden");
    } else {
        backToTopBtn.classList.add("hidden");
    }
});

document.getElementById("back-to-top-btn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
