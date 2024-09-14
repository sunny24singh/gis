

let icon = document.querySelector("#icon");
icon.addEventListener("click" , () => {
    let icon = document.querySelector(".toggt");
    icon.classList.toggle("toggt2") 

    
})


let hover = document.querySelector(".image-container_section3");

hover.addEventListener('mouseover' , () => {
    let d = document.querySelector(".section3_datas2");
    d.style.backgroundColor = "#0096FF"
})

hover.addEventListener('mouseout' , () => {
    let d = document.querySelector(".section3_datas2");
    d.style.backgroundColor = "black"
})