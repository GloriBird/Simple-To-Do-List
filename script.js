var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

// Adding Delete Button
li.forEach(function(i) {
  var deleteButton = document.createElement('BUTTON');
  deleteButton.appendChild(document.createTextNode('Delete'));
  i.appendChild(deleteButton);
});

function inputLength() {
	return input.value.length;
}

// Addition - Added Delete Button along with new list
function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("BUTTON");
	li.appendChild(document.createTextNode(input.value));
	span.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	li.appendChild(span);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// Strike
ul.addEventListener("click", (event) => {
	const target = event.target;
	if (target.matches("li")) {
		target.classList.toggle("done");
	}
});

// Delete Button
ul.addEventListener("click", (event) => {
	if(event.target.tagName === 'BUTTON') {
		const button = event.target;
		const li = button.parentNode;
		const ul = li.parentNode;
		if(button.textContent === 'Delete') {
			ul.removeChild(li);
		}
	}
});

