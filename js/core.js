// const IMG_SRC = 'img/card';
// const NB_IMG = 106;
// let game;

// function newGame(difficult) {
	// switch(difficult) {
		// case '0':
			// game = new Memory(2, 2);
			// break;

		// case '1':
			// game = new Memory(4, 4);
			// break;

		// case '2':
			// game = new Memory(4, 15);
			// break;

		// case '3':
			// game = new Memory(40, 15);
			// break;
	// }
// }

window.onload = function() {
	game = new Memory(4, 4);

	var reset = document.getElementById('buttonReset');
	reset.onclick = function() {
		newGame(document.getElementById('difficult').value);
	}
}