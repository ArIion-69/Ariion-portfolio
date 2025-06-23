
const styleSwitcerToggle = document.querySelector(".style-switcher-toggler");
styleSwitcerToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

//скрыть переключатель стилей при прокрутке
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});


// Меняем цвета тем

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(theme)
{
    alternateStyle.forEach((style) => {
        if(theme === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
};


// Светлая и темная тема

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})