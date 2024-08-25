document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add("animate-fadeInUp");
            element.classList.remove("hidden");
        }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on page load in case elements are already in view
});
