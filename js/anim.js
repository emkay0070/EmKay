// Select elements
let heroh2 = document.querySelector(".hero-cont h2");
let heroP = document.querySelectorAll(".hero-cont p"); // fix: you missed querySelectorAll

// Function to initialize animations
function initHeroAnimation() {
  // Check screen width
  if (window.innerWidth < 768) {
    // Mobile: skip animations
    return;
  }

  // Desktop: run GSAP timeline
  let heroContTl = gsap.timeline({
    yoyo: true
  });

  heroContTl.from(heroh2, {
    y: 100,
    opacity: 0,
    ease: "power2.Out"
  });

  heroContTl.from(heroP, {
    y: 100,
    opacity: 0,
    ease: "power2.Out",
  });

  heroContTl.to(".hero-cont .contbtn", {
    opacity: 1,
    scale: 1,
    ease: "power2.Out"
  });

  heroContTl.from(".hero-img", {
    scale: 0.5,
    opacity: 0,
    ease: "power2.Out"
  });
}

// Initialize animation
initHeroAnimation();

// Optional: re-run on resize if you want
// window.addEventListener("resize", () => {
  // You could re-check and init animations if needed
// });

gsap.registerPlugin("ScrollTrigger");

let AbtTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".About",
        start: "top 80%",
        end: "+=600",
        scrub: 0.5
    }
});

let AbtH2 = new SplitType(".about-top h2",{type: "words",tagName: "span"});
let Abtp = new SplitType(".about-top p",{type: "words",tagName: "span"});
let AbtContp = new SplitType(".abt-c-p",{type: "words",tagName: "span"});

AbtTl.from(AbtH2.words,{
    x: 80,
    opacity: 0
})

AbtTl.from(Abtp.words,{
    x: -80,
    opacity: 0
})

AbtTl.from(".about-body-img",{
    x: -80,
    y : -80,
    height: "0",
    duration: 3,
    opacity: 0
})

AbtTl.from(AbtContp.words,{
    y: 80,
    opacity: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: "power2.Out"
})

AbtTl.from(".about-more div",{
    opacity: 0,
    duration: 3,
    ease: "elastic",
    x:-40,
    stagger: 0.1
});

//skills

SKTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        end: "+=500",
        scrub: 0.5,
    }
})

SKTl.from(".skills-top",{
    y: 100,
    opacity: 0
});

let Skh2 = new SplitType(".skills-top h2",{type: "words",tagName: "span"});
let SkP = new SplitType(".skills-top p",{type: "words",tagName: "span"});

SKTl.from(Skh2.words,{
    y: 100,
    stagger: 0.5,
    opacity: 0
});

SKTl.from(SkP.words,{
    x: -100,
    stagger: 0.1,
    opacity: 0
});

SKTl.from(".Skh4",{
    x: -40,
    opacity: 0
})

let SKtp = new SplitType(".SKtp",{type: "words",tagName: "span"})
SKTl.from(SKtp.words,{
    y: -40,
    opacity: 0,
    stagger: 0.05
});

SKTl.from(".lang",{
    y: -40,
    opacity: 0,
    stagger: 0.05
})

// SKTl.to("#css",{
//     width: "90%",
//     opacity: 0,
//     duration: 3,
//     ease: "power2.Out",
//     stagger: 0.05
// })

let SerTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "+=400",
        scrub: 0.5,
        ease: "Power2.Out",
        markers: false
    }
});

SerTl.from(".service-card",{
    y: -50,
    opacity: 0,
    stagger: 0.05
})

// ================reduced motion============

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.clear();
}


