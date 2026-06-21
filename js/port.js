

let slides = document.querySelectorAll(".slide");
let count = 0;

let showSlides =(index)=>{
    slides[count].classList.remove("active");
    count = index;
    if (count < 0) {
        count = slides.length - 1;
    }else if(count > slides.length - 1){
        count = 0
    }
    slides[count].classList.add("active");
}

let Pnext=()=>{
    showSlides(count + 1)
}

let autoP =()=>{
    setInterval(() => {
        Pnext()
    }, 5000);
}

autoP()

///clear interval on each slide mouse over.

slides.forEach((slide)=>{
    slide.addEventListener("click",()=>{
        clearInterval(Pnext);
    })
})