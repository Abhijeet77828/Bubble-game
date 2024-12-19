var timer = 30;
var score = 0;
var hitrn = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scorein").textContent = score;
}
function makeBubble() {
    var cluttur = "";

    for (var i = 0; i <= 167; i++) {
        var rn = Math.floor(Math.random() * 10);
        cluttur += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = cluttur;
}
function hittimer(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitt").textContent = hitrn;
}
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeout").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
        }
    }, 1000)
}
document.querySelector("#pbtm").addEventListener("click", function(data){
var cknumber = Number(data.target.textContent);
if (cknumber == hitrn) {
    increaseScore();
    makeBubble();
    hittimer();
    
}
});
runTimer();
makeBubble();
hittimer()
// increaseScore();
