var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"; 
        }
    });    
}
document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");
    let section = document.querySelector(".counter-section");
    let started = false;

    function startCounter() {
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-count");
            let count = 0;
            let duration = 2000; 
            let intervalTime = 20; 
            let increment = target / (duration / intervalTime);

            let updateCounter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.innerText = target; 
                    clearInterval(updateCounter);
                } else {
                    counter.innerText = Math.floor(count);
                }
            }, intervalTime);
        });
    }

    function checkVisibility() {
        if (!section) return;
        let sectionPos = section.getBoundingClientRect().top;
        let screenPos = window.innerHeight / 1.3; 

        if (sectionPos < screenPos && !started) {
            startCounter();
            started = true;
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});


