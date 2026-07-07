// Dark and Light Mode Toggle

const themeButton = document.getElementById("theme-toggle");

const body = document.body;


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    body.classList.add("dark");

    themeButton.innerHTML = '<i class="fas fa-sun"></i>';

}



// Button function

themeButton.addEventListener("click", function(){


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