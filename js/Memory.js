class Memory {
	constructor(nbRow = 4, nbCol = 4) {
		this._startTime = 0;
		this._pauseTime = 0;
		this._cards = [];
		this._nbRow = nbRow;
		this._nbCol = nbCol;
		this._nbPair = nbRow * nbCol / 2;
		this._idPair1 = [];
		this._idPair2 = [];
		this._cardTable = [];
		this._flipped = [];
		
		this.createCards();
		
	}
	
	get startTime() {return this._startTime}
	
	get pauseTime() {return this._pauseTime}
	
	get eslapedTime() {return Date.now() - this._startTime}
	
	createCards() {
		var imgTaken = [];
		var idTaken = [];
		var imgTmp = 0, idTmp = 0;
		for(var i = 0; i < this._nbPair; i++) {
			// selection d'une image pas encore prise
			do {
				imgTmp = Math.floor(Math.random() * (NB_IMG + 1));
			}
			while (imgTaken.indexOf(imgTmp) != -1);
			imgTaken.push(imgTmp);
			
			// tirage au sort d'un id non pris
			do {
				idTmp = Math.floor(Math.random() * 1000000000);
			}
			while (idTaken.indexOf(idTmp) != -1);
			idTaken.push(idTmp);
			
			this._cardTable.push(new Card(IMG_SRC + imgTmp + '.svg', idTmp));
			this._idPair1.push(idTmp);
			
			// tirage au sort d'un id non pris
			do {
				idTmp = Math.floor(Math.random() * 1000000000);
			}
			while (idTaken.indexOf(idTmp) != -1);
			idTaken.push(idTmp);
			
			this._cardTable.push(new Card(IMG_SRC + imgTmp + '.svg', idTmp));
			this._idPair2.push(idTmp);
			
		}
		
		this._cardTable.forEach(function (card, key) {
			console.log(card);
			document.body.appendChild(card._dom)
		})
	}
}