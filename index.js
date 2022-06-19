const content = "3322 정예준";
const text = document.querySelector(".text");
var a = document.getElementById("hide");
let i = 0;

setTimeout(function(){
    setInterval(typing,150);
}, 2000);
function typing() {
    if(i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
    }
}
