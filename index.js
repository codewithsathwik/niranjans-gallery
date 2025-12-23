let navBar = document.querySelector(".right");
let menuBtn = document.querySelector(".nav-toggle");

menuBtn.addEventListener("click", async () => {
    if (menuBtn.ariaExpanded == "false") {
        menuBtn.ariaExpanded = "true";
        navBar.style.display = "block";
        navBar.classList.remove("ani-close");
        navBar.classList.add("ani-open");

    } else {
        menuBtn.ariaExpanded = "false";
        navBar.classList.remove("ani-open");
        navBar.classList.add("ani-close");
    }


    //to remove the the navbar when window size changed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 923 && menu.classList.contains('ani-open')) {
            menu.classList.remove('ani-open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

});

navBar.addEventListener("animationend", (e) => {
    if (e.animationName === "slide-out") {
        navBar.style.display = "none";
    }
});


let ancher = document.querySelectorAll(".right ul");
ancher.forEach(a => {
    a.addEventListener("click", () => {
        menuBtn.ariaExpanded = "false";
        navBar.classList.remove("ani-open");
        navBar.classList.add("ani-close");
    })
});