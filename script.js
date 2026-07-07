// Theme switcher

const themeButton = document.getElementById("theme-toggle");

const body = document.body;


// Check previous saved theme

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    themeButton.innerHTML =
    '<i class="fas fa-sun"></i>';

}



// Button click

themeButton.addEventListener("click",()=>{


    body.classList.toggle("dark");


    if(body.classList.contains("dark")){


        localStorage.setItem("theme","dark");


        themeButton.innerHTML =
        '<i class="fas fa-sun"></i>';


    }else{


        localStorage.setItem("theme","light");


        themeButton.innerHTML =
        '<i class="fas fa-moon"></i>';

    }


});