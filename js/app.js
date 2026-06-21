




const lenis = new Lenis({
    smooth: true,
    lerp: 0.05,
    ease: (t) => t 
})

let raf=(time)=>{
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// ========== process observer ==========
const processObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.process-step').forEach(step => {
    processObserver.observe(step);
});

// ======= ser cards ==== auto play

let serCards = document.querySelectorAll(".service-card");
let countSer = 0;

let showSerCard=(i)=>{
    serCards.forEach((card)=>card.classList.remove("featured"));
    countSer = i;

    if (countSer <= 0) {
        countSer = serCards.length - 1;
    }else if(countSer > serCards.length - 1){
        countSer = 0
    }

    serCards[countSer].classList.add("featured");
}


let autoPlaySerCard = setInterval(()=>{
    showSerCard(countSer + 1);
},3000)

// serCards.forEach((card,index)=>{
//     card.addEventListener("click",()=>{
//         showSerCard(index);
//         clearInterval(autoPlaySerCard);
//     })
// })



// ======= service cards ==== auto play

// Media query: only autoplay above 767px
let mq = window.matchMedia("(min-width: 768px)");

function handleSerAutoplay(e) {
    if (e.matches) {
        // Desktop → start autoplay
        if (!autoPlaySerCard) {
            autoPlaySerCard = setInterval(() => {
                showSerCard(countSer + 1);
            }, 3000);
        }
    } else {
        // Mobile → stop autoplay
        clearInterval(autoPlaySerCard);
        autoPlaySerCard = null;
    }
}

// Initial check
handleSerAutoplay(mq);

// Listen for screen resize
mq.addEventListener("change", handleSerAutoplay);

// Click control
serCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        showSerCard(index);
        clearInterval(autoPlaySerCard);
        autoPlaySerCard = null;
    });
});

// autoPlaySerCard();


  // --- Simple Scroll Fade-in Animation ---
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));



