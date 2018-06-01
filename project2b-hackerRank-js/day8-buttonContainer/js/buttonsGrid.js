
//Please select any file from left to start editing.
function rotateClockwise() {
	var btns = ["btn1", "btn2", "btn3", "btn6", "btn9", "btn8", "btn7", "btn4"];
	var prev = document.getElementById(btns[btns.length - 1]).innerHTML;
	for (var i = 0; i < btns.length; i++) {
		let tmp = document.getElementById(btns[i]).innerHTML;
		document.getElementById(btns[i]).innerHTML = prev;
		prev = tmp;
	}
}

