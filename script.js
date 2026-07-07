// ===============================
// LENIS
// ===============================

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===============================
// CURSOR GLOW
// ===============================

const glow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {

    glow.animate({

        left: e.clientX + "px",
        top: e.clientY + "px"

    }, {

        duration: 300,
        fill: "forwards"

    });

});

// ===============================
// GSAP
// ===============================

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content",{

    opacity:0,

    y:120,

    duration:1.4,

    ease:"power4.out"

});

gsap.from(".paper",{

    scrollTrigger:{

        trigger:".paper",

        start:"top 80%"

    },

    opacity:0,

    y:120,

    duration:1.3

});