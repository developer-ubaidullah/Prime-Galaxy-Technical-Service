
const animationMaskTimeline = (onComplete) => {
  const tl = gsap.timeline();

  tl.to(".vi-mask-group", {
    rotate: 10,
    duration: 2.5,
    ease: "power4.inOut",
    transformOrigin: "50% 50%",
  }).to(".vi-mask-group", {
    scale: 10,
    duration: 2,
    delay: -1.8,
    ease: "expo.inOut",
    transformOrigin: "50% 50%",
    opacity: 0,
    onUpdate: function () {
      if (this.progress() >= 0.9) {
        document.querySelector(".svg")?.remove();
        onComplete();
        this.kill();
      }
    },
  });
};

window.addEventListener("DOMContentLoaded", () => {
  animationMaskTimeline(() => {
    console.log("Animation complete");
    // You can trigger your page content load here
  });
});

// Navigation menu toggle functionality // Menu toggler
// Toggle Menu Logic
document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("menuList");
  const togglerButton = document.getElementById("togglerButton");

  menuList.style.maxHeight = "0px";

  togglerButton.addEventListener("click", () => {
    if (menuList.style.maxHeight === "0px") {
      menuList.style.maxHeight = "900px";
    } else {
      menuList.style.maxHeight = "0px";
    }
  });

  // GSAP: Navbar entrance animation
  gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });

  // GSAP: Animate nav items on load
  gsap.from("nav .navlist ul li", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    ease: "power2.out"
  });

  // GSAP: Hover animation on links
  document.querySelectorAll("nav .navlist ul a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
});

// AOS library initialization

AOS.init();

// swiper js
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  wrapperClass: 'review-wrapper', // 👈 custom wrapper class
  slideClass: 'review-slide',     // 👈 custom slide class
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// horizontal scrolling functionality

const scrollContent = document.getElementById("scrollContent");
const clone = scrollContent.innerHTML;
scrollContent.innerHTML += clone; // Duplicate content for seamless looping

gsap.to("#scrollContent", {
  x: "-50%",
  duration: 50,
  ease: "linear",
  repeat: -1
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
