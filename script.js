let cards = document.querySelectorAll(".container div");

let game_on = true;
let last_card = false;
for (let card of cards) {
card.addEventListener("click", function () {
  if (game_on === true) {
    if (last_card !== false && 
      last_card != card && 
      last_card.textContent === card.textContent){
      card.style.background = "lightgreen";
      last_card.style.background = "lightgreen";
      addRestartButton();
      game_on = false;
    }
  last_card = card;
}
});
}

function addRestartButton() {
  let button = document.createElement("button");
  document.querySelector("body").append(button);
  button.textContent = "Reset";
  button.addEventListener("click", function () {
  location.reload();
  });
}

 bttn = document.querySelector(".add");
bttn.addEventListener("click", function(){
for (let i = 1; i <= 10; i++) {
  let cell = document.createElement("div");
  cell.classList.add("numbers");
  cell.textContent = i;
document.querySelector("body").append(cell);
}
addRestartButton();
});

