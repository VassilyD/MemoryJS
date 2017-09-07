window.onload = function() {
	game = new Memory(4, 4);

	var reset = document.getElementById('buttonReset');
	reset.onclick = function() {
		newGame(document.getElementById('difficult').value);
	}
}