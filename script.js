const button = document.getElementById("theme-toggle");
const icon = button.querySelector("i");

button.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        // Dark mode = show sun
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{
        // Light mode = show moon
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }


});