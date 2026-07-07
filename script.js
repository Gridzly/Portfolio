// Dark and light mode switch

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    // Change icon depending on selected mode
    if(document.body.classList.contains("dark")){

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});