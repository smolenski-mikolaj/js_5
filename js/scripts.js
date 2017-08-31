var buttons = document.getElementsByClassName("button");
var buttonsLength = buttons.length;

for (var i = 0; i < buttonsLength; i++) {
	var buttonText = buttons[i].innerHTML;
	console.log(buttonText);
}

