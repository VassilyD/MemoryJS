const IMG_SRC = {
	default: 'img/theme/default/'
};

let Card = function(imgSrc, idDom) {
	let imgBack = this.setImgBack('img/cardBack.png' );
	let imgUp = this.setImgUp(imgSrc);
	let up = false;
	let dom = document.createElement('div');
	dom.getAttributeNode('id').value = idDom;

	this.flip = function() {
		if(!this.up) {
			this.up = true;
			this.dom.getAttributeNode('src').value = this.imgUp;
		} else {
			this.up = false;
			this.dom.getAttributeNode('src').value = this.imgBack;
		}
	}

	this.SetImgUp = function(imgSrc) {
		if(true) { //tester l'existance du fichiers
			this.imgUp = imgSrc;
		}
	}

	this.SetImgBack = function(imgSrc) {
		if(true) { //tester l'existance du fichiers
			this.imgBack = imgSrc;
		}
	}

	this.SetDom = function(idDom) {
		var dom = document.getElementById(idDom);
		if(true) { //tester l'existance de l'élément DOM
			this.dom = dom;
		}
	}
}

let Memory = function(nblines = 4, nbCols = 4, theme = 'default', idDomCards = 'cardsZone') {
	let cards = [];
	let nbCards = nblines * nbCols;
	let idDomCards = idDomCards;
	let domCards = document.getElementById(idDomCards);
	domCards.setProperty('--nbLines', nblines);
	domCards.setProperty('--nbCols', nbCols);
	for(i = 0; i < nbCards; i++) {
		this.cards.push(new Card((IMG_SRC[theme] + 'card' + i), 'card' + i));
	}
}