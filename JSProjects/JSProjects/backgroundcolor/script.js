
/*const btncolor = document.getElementById("color");

btncolor.addEventListener("click", () => {
    document.body.style.backgroundColor = randomBg();
});*/

window.onload = function color(){
    document.body.style.backgroundColor =  randomBg();
    
setInterval(randomBg, 1000) };

function randomBg(){
    // return "blue";
    //return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;    
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;  
}