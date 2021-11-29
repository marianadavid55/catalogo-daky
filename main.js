var  hamburgerBtn, hiddenMenu, prevBtn, nextBtn, dots, slides, btns;

const handleClick = () => {
    if(hiddenMenu.classList.contains("hiddenMenu")){
        hiddenMenu.classList.remove("hiddenMenu")
    }else{
        hiddenMenu.classList.add("hiddenMenu")
    }
}

const slide = (dotsArr, dotClass, slidesimgs) => {
    dotsArr.map(dot => {
        if(dot.id){
            dot.id = "";
        }else{
            dot.id = dotClass;
        }
    })

    slidesimgs.map(slide => {
        if(slide.classList.contains("slide-hidden")){
            slide.classList.remove("slide-hidden");
        }else{
            slide.classList.add("slide-hidden");
        }
    })
    
    {
        
        const addingClickEvent = (buttons, dotss, dotClass, slidess) => {
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            slide(dotss, dotClass, slidess);
        })
    })
        
    }

const handleLoad = () => {
    hamburgerBtn = document.querySelector(".hamburguerBtn")
    hiddenMenu = document.querySelector("header > nav")
    hamburgerBtn.addEventListener("click", handleClick)

     btns = [...document.querySelectorAll(".slider-arrow")];
    dots = [...document.querySelectorAll(".dot-slider")];
    let btns2 = [...document.querySelectorAll(".slider-arrow2")];

    if(btns2.length > 0){
        let dots2 = [...document.querySelectorAll(".dot-slider2")];

        slides = [...document.querySelectorAll(".slider1 > div")];
        let slides2 = [...document.querySelectorAll(".slider2 > div")];

        addingClickEvent(btns, dots, "dot-active", slides);
        addingClickEvent(btns2, dots2, "dot-active", slides2);
    }else{
        slides = [...document.querySelectorAll(".main_photo > div")] || null;   
        addingClickEvent(btns, dots, "dot-active", slides)
    }
    
}

window.addEventListener("load", handleLoad)