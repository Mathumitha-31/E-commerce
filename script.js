var menu=document.querySelector(".side-nav")
menu.style.display="none"
function shownav(){
menu.style.display="block"
}
function closenav(){
menu.style.display="none"
}
var oreder=document.getElementById("order")
function order(){
   alert("You're Order has been tracked🚀")
}
var s=document.getElementById("submit")
s.addEventListener("click",function(){
    alert("You're Message reached Our CELESTRA Service.")
})