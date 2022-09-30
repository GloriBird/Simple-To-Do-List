const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ol = document.querySelector("ol");
const li = document.querySelectorAll("li");

li.forEach((i) => {
  const deleteButton = document.createElement("BUTTON");
  deleteButton.appendChild(document.createTextNode("Delete"));
  i.appendChild(deleteButton);
});

const inputLength = () => {
  return input.value.length;
};

const createListElement = () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("BUTTON");
  span.appendChild(document.createTextNode(input.value));
  btn.appendChild(document.createTextNode("Delete"));
  ol.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
  input.value = "";
};

const addListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};

const addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ol.addEventListener("click", (event) => {
  const target = event.target;
  console.log(`target:`, target);
  if (target.matches("span")) {
    target.classList.toggle("done");
  }
});

ol.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ol = li.parentNode;
    if (button.textContent === "Delete") {
      ol.removeChild(li);
    }
  }
});
