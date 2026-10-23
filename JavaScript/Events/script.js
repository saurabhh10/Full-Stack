function showalert(){
    alert("Click me button clicked using html events")
}

document.getElementById("clickbutton")
.addEventListener("click",showalert1);


function showalert1(){
    alert("Click me button clicked using JAVA script events")
}

document.getElementById("box").addEventListener("click", ()=>{
   document.getElementById("box").innerText="The Box has clicked" 
}
)



document.getElementById("paragraph").addEventListener("mousedown", ()=>{
   document.getElementById("paragraph").innerText="Mouse button pressed!" 
}
)


document.getElementById("paragraph").addEventListener("mouseup", ()=>{
   document.getElementById("paragraph").innerText="Mouse button released!"
}
)


document.getElementById("double").addEventListener("dblclick", ()=>{
   document.getElementById("double").innerText="You double-clicked this paragraph!"
}
)


document.getElementById("double").addEventListener("dblclick", ()=>{
   document.getElementById("double").innerText="You double-clicked this paragraph!"
}
)

document.getElementById("move").addEventListener("mousemove", ()=>{
   document.getElementById("move").innerText="Mouse pointer is moving over this text!"
}
)


document.getElementById("move").addEventListener("mouseout", ()=>{
   document.getElementById("move").innerText="Mouse pointer is moving out  this text!"
}
)

document.getElementById("nameSubmit").addEventListener("click",()=>{

})
