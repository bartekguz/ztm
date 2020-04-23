var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	liListener();
	createLiButtonLast();
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

function liClick(){
	this.classList.toggle("done");
}

function liListener() {
	for (var i=0; i<list.length; i++) {
		list[i].addEventListener("click", liClick);
	}
}

function deleteButton() {
	this.classList.toggle("delete");
	this.parentElement.classList.toggle("delete");
}

function createLiButtons() {
	for (var i=0; i<list.length; i++) {
		var createButton = document.createElement("button");
		createButton.innerHTML = "Delete";
		list[i].appendChild(createButton);
		createButton.addEventListener("click", deleteButton);
	}
}

function createLiButtonLast() {
	var createButton = document.createElement("button");
	createButton.innerHTML = "Delete";
	list[list.length-1].appendChild(createButton);
	createButton.addEventListener("click", deleteButton);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

liListener();
createLiButtons();




