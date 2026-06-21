


let navContainer = document.querySelector("header")
let nav = document.querySelector("nav");
let navOptions = {
    rootMargin: "-600px 0px 0px 0px"
}
let navObserver = new IntersectionObserver((entries,navObserver)=>{
    entries.forEach(entry=>{
        if (!entry.isIntersecting) {
            nav.classList.add("active");
            console.log("done intersecting",nav)
        }else{
            nav.classList.remove("active")
        }
    })
},navOptions);

navObserver.observe(navContainer);

///bars works

let bars = document.getElementById("bars");
let linkscontainer = document.querySelector(".links");
let closey = linkscontainer.querySelector(".close")

bars.addEventListener("click",()=>{
    console.log(linkscontainer)
    linkscontainer.classList.add("small")
    document.querySelector("nav").classList.add("small")
});

closey.addEventListener("click",()=>{
    console.log(linkscontainer)
    linkscontainer.classList.remove("small")
    document.querySelector("nav").classList.remove("small")
});

//up works
let upcontainer = document.querySelector(".up")
let dollarcontainer = document.querySelector(".floating-pricing-btn")
let arrowLeft = document.querySelector("#aside-arrow");

upcontainer.addEventListener("click",()=>{
    upcontainer.classList.toggle("circular");
    upcontainer.classList.toggle("paused");
    arrowLeft.classList.toggle("trans");
    document.querySelector(".soc-more").classList.add("active")
    console.log(arrowLeft)
    dollarcontainer.classList.toggle("float")
})

// ====================nav a-z=========

let links = document.querySelector("nav .links")
document.querySelectorAll("nav .links a").forEach(link => {
  link.addEventListener("click", () => {
    links.classList.remove("small");
  });
});

// ========== dark dark-mo ========

let Dmode = document.querySelector(".dark-mo");
let BODY = document.body;
let Sun = Dmode.querySelector(".bi-sun");
let Moon = Dmode.querySelector(".bi-moon");

// ---------- APPLY MODE ----------
function applyMode(isDark) {
    BODY.classList.toggle("dark", isDark);
    Moon.style.opacity = isDark ? "0" : "1";
    Sun.style.opacity = isDark ? "1" : "0";
}

// ---------- INITIAL LOAD ----------
const savedMode = localStorage.getItem("theme");

if (savedMode) {
    // User choice exists
    applyMode(savedMode === "dark");
} else {
    // No user choice → follow system preference
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyMode(systemDark);
}

// ---------- TOGGLE CLICK ----------
Dmode.addEventListener("click", () => {
    const isDark = BODY.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyMode(isDark);
});

