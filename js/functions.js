const IMG_SRC = ['','','','',
				'','','','',
				'','','','',
				'','','','',
				'','','','',
				'','','','',
				'','','',''];

let Card = function(imgSrc, idDom = '') {
	this.imgBack = this.setImgBack('img/cardBack.png' );
	this.imgUp = this.setImgUp(imgSrc);
	this.up = false;
	this.dom = this.setDom(idDom);

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

let Memory = function(nblines, nbCols) {
	this.cards = [];
	this.nbCards = nblines * nbCols;
	for(i = 0; i < nbCards; i++) {
		this.cards.push(new Card(IMG_SRC[Math.floor(i / 2)]));
	}
}