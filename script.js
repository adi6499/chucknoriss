let apiUrl = "https://api.chucknorris.io/jokes/random";
let refresh = document.getElementById("refresh")
let image = document.querySelector("#image")
let text = document.querySelector(".text")
refresh.addEventListener("click",()=>{
    api()
})


async function api(){
    try{
    let resp =await fetch(apiUrl)
    let data = await resp.json()
    let {icon_url,value} = data
    text.innerHTML = "Wait..."
    setTimeout(()=>{
        text.innerHTML = value
    },200)
    }
    catch(error){
        text.innerHTML = "Wait..."
    }
 }

 let color = document.querySelectorAll(".color")
 color.forEach((c)=>{
     c.addEventListener("click",(e)=>{
         text.style.background= e.target.classList[1]
       
     })
 })
 let modes = document.getElementById("modes")
 let mode = document.getElementById("mode")
 modes.addEventListener("click",()=>{
    if(modes.checked){
        document.body.classList.add("nightMode")
     
    }else{
        document.body.classList.remove("nightMode")
    }
 })