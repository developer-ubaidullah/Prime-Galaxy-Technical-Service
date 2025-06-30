let menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px";
function toggler() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "900px";
        
    }
    else {
        menuList.style.maxHeight = "0px";
        
    }
}

// Image 1 scrolls
gsap.registerPlugin(ScrollTrigger);

// Image 1 scrolls down 50px
gsap.to(".img1", {
  y: -50,
  scrollTrigger: {
    trigger: ".img1",
    start: "top 40%",
    end: "bottom 40%",
    scrub: true,
    
  }
});

// Image 2 scrolls up 50px
gsap.to(".img2", {
  y:50,
  scrollTrigger: {
    trigger: ".img2",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true
  }
});

// AOS
AOS.init();

// mobile-Animation


gsap.registerPlugin(ScrollTrigger);

gsap.from(".mobile-img", {
  scrollTrigger: {
    trigger: ".service-sectionn",
    start: "top center",
    toggleActions: "play none none reverse",
    scrub: true,
  },
  x: 240,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

// svg-path

var path = 'M 10 125 Q 500 125 1320 125';
var finalpath = 'M 10 125 Q 500 125 1320 125';

var string = document.querySelector(".gsap-svg");

string.addEventListener("mousemove", function (dets) {
    path = `M 10 125 Q ${dets.x} ${dets.y} 1320 125`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalpath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    });
});