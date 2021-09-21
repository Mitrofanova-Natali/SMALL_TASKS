// КРЕСТИКИ И НОЛИКИ

let cells = document.querySelectorAll(".cell");
let isXmove = true;
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", krest);
}

function krest(event) {
  console.log(Boolean(event.target.innerText));
  if (!event.target.innerText) {
    if (isXmove === true) {
      event.target.classList.add("xAdded");
      event.target.innerText = "x";
      isXmove = false;
    } else {
      event.target.innerText = "0";
      event.target.classList.add("oAdded");
      isXmove = true;
    }
  }
  setTimeout(()=>{
    check();
  },0)
}

function check() {
  var arrCheck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arrCheck.length; i++) {
    if (
      cells[arrCheck[i][0]].innerText == "x" &&
      cells[arrCheck[i][1]].innerText == "x" &&
      cells[arrCheck[i][2]].innerText == "x"
    ) {
      alert("Победили кретсики");
    } else {
      if (
        cells[arrCheck[i][0]].innerText == "0" &&
        cells[arrCheck[i][1]].innerText == "0" &&
        cells[arrCheck[i][2]].innerText == "0"
      ) {
        alert("Победили нолики");
      }
    }
  }
}
