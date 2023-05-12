const styleswitchertoggle = document.querySelector(".style-switcher-toggler");
styleswitchertoggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll

window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})



// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute('disabled')
        }
        else{
            style.setAttribute('disabled', 'true')
        }
    
    })
    
}

// dark mode

const daynight = document.querySelector(".day-night");

daynight.addEventListener("click", ()=>{
               daynight.querySelector("i").classList.toggle("fa-sun");
               daynight.querySelector("i").classList.toggle("fa-moon");
               document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
    if (document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun")
    }
    else{
      daynight.querySelector("i").classList.add("fa-moon")
    }
})