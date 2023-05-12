

let navtoggler = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");
let isAsideVisible = false;

navtoggler.addEventListener("click", () => {
    if (!isAsideVisible) {
            navtoggler.style.display = "flex";
            aside.style.left = "0";
            aside.style.transition = "all 0.7s ease";
            navtoggler.style.left = "300px";
            aside.style.display = "flex";
            isAsideVisible = true;
          } else {
            navtoggler.style.display = "flex";
            aside.style.left = "-270px";
            aside.style.transition = "all 0.7s ease";
            navtoggler.style.left = "2px";
            aside.style.display = "flex";
            isAsideVisible = false;
          }
  
})

// Hide th

document.addEventListener('click', function(event) {
  const target = event.target;
  
  if (!navtoggler.contains(target) && !aside.contains(target)) {
    aside.style.left = '-270px';
    navtoggler.style.left="2px";
  }
});


// Hide the navbar when scrolling outside of it
document.addEventListener('scroll', function(event) {
  const scrollY = window.scrollY;
  
  if (scrollY > 0 && aside.style.display !== 'none') {
    aside.style.left = '-270px';
    navtoggler.style.left="2px";
  }
});




