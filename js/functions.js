const IMG_SRC = 'img/card';
let game;

let Card = function(imgSrc, idcard) {
	this.idDom = idcard;
	this.dom = this.imgBack = this.imgUp = null;
	this.up = false;
	this.imgUpSrc = imgSrc;
	this.imgBackSrc = 'img/cardBack.jpeg'

	this.getDom = function() {
		return this.dom;
	}

	this.setDom = function() {
		if(this.dom !== null) {

		}
		else {
			this.dom = document.createElement('div');
			this.dom.id = this.idDom;
			this.dom.classList.add('cards');
			this.dom.onclick = function(){game.cards[Number(this.id.slice(4))].flip()};
		}
	}

	this.flip = function() {
		if(!this.up) {
			this.up = true;
			this.imgBack.setAttribute('hidden', true);
			this.imgUp.removeAttribute('hidden');
		} else {
			this.up = false;
			this.imgUp.setAttribute('hidden', true);
			this.imgBack.removeAttribute('hidden');
		}
	}

	this.setImgUp = function(imgSrc) {
		var imgUpTmp = document.createElement('img');
		imgUpTmp.classList.add('cardImg');
		imgUpTmp.setAttribute('src', imgSrc);
		if(!this.up) imgUpTmp.setAttribute('hidden', true);
		if(this.imgUp !== null) {
			this.imgUp.parentNode.replaceChild(imgUpTmp, this.imgUp);
		}
		else {
			this.dom.appendChild(imgUpTmp);
		}
		this.imgUp = imgUpTmp;
	}

	this.setImgBack = function(imgSrc) {
		var imgBackTmp = document.createElement('img');
		imgBackTmp.classList.add('cardImg');
		imgBackTmp.setAttribute('src', imgSrc);
		if(this.up) imgBackTmp.setAttribute('hidden', true);
		if(this.imgBack !== null) {
			this.imgBack.parentNode.replaceChild(imgBackTmp, this.imgBack);
		}
		else {
			this.dom.appendChild(imgBackTmp);
		}
		this.imgBack = imgBackTmp;
	}

	this.setDom(this.idDom);
	this.setImgBack(this.imgBackSrc);
	this.setImgUp(this.imgUpSrc);
}

let Memory = function(nblines = 4, nbCols = 4, idCards = 'cardsZone') {
	this.cards = [];
	this.nbCards = nblines * nbCols;
	this.idDomCards = idCards;
	this.domCards = document.createElement('div');
	this.domCards.id = idCards;
	this.domCards.setAttribute('style', '--nbLines: ' + nblines + '; --nbCols: ' + nbCols);
	for(i = 0; i < this.nbCards; i++) {
		var tmp = new Card((IMG_SRC + ('00' + (i + 1)).slice(-2) + '.svg'), 'card' + i);
		this.cards.push(tmp);
		this.domCards.appendChild(this.cards[this.cards.length - 1].getDom());
	}
	var zone = document.getElementById('cardsZone');
	zone.parentNode.replaceChild(this.domCards, zone);
}