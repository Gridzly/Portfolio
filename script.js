console.log("Script loaded");


const button = document.getElementById("theme-toggle");


button.addEventListener("click", function(){

    console.log("Button clicked");


    document.body.classList.toggle("dark");


});