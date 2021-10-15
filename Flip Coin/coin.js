let cara = 0;
let coroa = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        cara++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        coroa++;
    }
    setTimeout(updateStats, 3000) ;
    disableButton();
});
function updateStats(){
    document.querySelector("#heads-count").textContent = `Cara: ${cara}`;
    document.querySelector("#tails-count").textContent = `Coroa: ${coroa}`;    
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    cara = 0;
    coroa = 0;
    updateStats();
});

