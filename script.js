const button = document.getElementById("theme-toggle");
const icon = button.querySelector("i");

button.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){
        backToTop.style.display="flex";
    }else{
        backToTop.style.display="none";

    }


});

backToTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// Project video hover preview

const projectCards = document.querySelectorAll(".project-card");


projectCards.forEach(card => {


    const video = card.querySelector("video");


    if(video){


        card.addEventListener("mouseenter",()=>{

            video.play();

        });


        card.addEventListener("mouseleave",()=>{

            video.pause();

            video.currentTime = 0;

        });


    }


});

const projects = document.querySelectorAll(".project-card");


projects.forEach(project => {

    const video = project.querySelector("video");


    project.addEventListener("mouseenter",()=>{

        video.play();

    });


    project.addEventListener("mouseleave",()=>{

        video.pause();

        video.currentTime = 0;

    });

});