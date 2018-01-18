let container = document.getElementById("container");


class Die {
  constructor(value, x, y) {
    this.div = document.createElement("div");
    this.div.classList.add("new-die");
    this.div.style.left = `${x}px`;
    this.div.style.top = `${y}px`;
    this.div.style.border = "black, solid, 2px";
    this.div.appendChild(document.createTextNode(`${value}`));
    container.appendChild(this.div);
    this.div.addEventListener('click', () => {
        this.roll();
    });
  }
  roll() {
    let rollValue = randomVal(1, 7);
    $(this.div).empty();
    this.div.appendChild(document.createTextNode(`${rollValue}`));
  }
}

let btn = document.getElementById("button-die");
let btn2 = document.getElementById("button-sum");

btn.addEventListener("click", createDie);
btn2.addEventListener("click", sumDice);


function sumDice(){
   var sum = 0;
    $('.new-die').each(function(){
        sum += parseFloat($(this).text());
    })
    $('#total').text(sum);
};


function createDie() {
  let xVal = 25;
  let yVal = 25;
  let dieValue = randomVal(1, 7);
  let die = new Die(dieValue, xVal, yVal);
}

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
