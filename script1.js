const panels=document.querySelectorAll(".panel")

panels.forEach(panel=>{panel.addEventListener("click",function(){
    clearActive()
    panel.classList.toggle("active")
    })
})

function clearActive(){
    panels.forEach(panel=>panel.classList.remove("active"))}
