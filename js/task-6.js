function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = Number(inputNum.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = "";
  }
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";

  let initialBoxSize = 30;
  let boxSizeIncrement = 10;
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${initialBoxSize}px`;
    box.style.height = `${initialBoxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);

    initialBoxSize += boxSizeIncrement;
  }
};

function destroyBoxes() {
  boxes.innerHTML = "";
};