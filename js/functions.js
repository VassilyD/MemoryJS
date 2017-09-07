const IMG_SRC = 'img/card';
const NB_IMG = 40;
let game;

let Card = function(imgSrc, idcard, classCard) {
	this.idDom = idcard;
	this.class = classCard;
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
			this.dom.classList.add('cards', this.class);
			this.dom.setAttribute('data', 0);
			this.dom.onclick = function(){game.cards[Number(this.getAttribute('data'))].flip()};
		}
	}

	this.flip = function() {
		if(game.getNbFlip() < 2) {
			if(!this.up) {
				this.up = true;
				this.imgBack.setAttribute('hidden', true);
				this.imgUp.removeAttribute('hidden');
				game.addFlipped(this);
			}
		} else {
			//if(!this.up) {
				game.unFlip();
				this.up = true;
				this.imgBack.setAttribute('hidden', true);
				this.imgUp.removeAttribute('hidden');
				game.addFlipped(this);
			//}
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

let Memory = function(nbline = 4, nbCol = 4, idCards = 'cardsZone') {
	this.cards = [];
	this.nbCards = nbline * nbCol;
	this.nbCols = nbCol;
	this.idDomCards = idCards;
	this.domCards = document.createElement('div');
	this.domCards.id = idCards;
	this.domCards.setAttribute('style', '--nbLines: ' + nbline + '; --nbCols: ' + nbCol);
	this.flipped = [];
	this.score = 0;

	this.getNbFlip = function() {
		return this.flipped.length;
	}

	this.addFlipped = function(card) {
		this.flipped.push(card);
		if(this.getNbFlip() > 1) this.checkSameCard();
	}

	this.checkSameCard = function() {
		if(this.flipped[0].getDom().classList[1] == this.flipped[1].getDom().classList[1]) {
			this.score++;
			document.getElementsByTagName('h1')[0].innerHTML = 'Memory JS : score = ' + this.score;
			this.flipped[0].dom.onclick = '';
			this.flipped[1].dom.onclick = '';
			this.flipped = [];
			if(this.score == this.nbCards / 2) alert('Vous avez gagné');
			//this.flipped[0].imgUp.setAttribute('hidden', true);
			//this.flipped[0].imgBack.setAttribute('hidden', true);
			//this.flipped[1].imgUp.setAttribute('hidden', true);
			//this.flipped[1].imgBack.setAttribute('hidden', true);
		}
	}

	this.unFlip = function() {
		this.flipped[0].imgUp.setAttribute('hidden', true);
		this.flipped[0].imgBack.removeAttribute('hidden');
		this.flipped[0].up = false;
		this.flipped[1].imgUp.setAttribute('hidden', true);
		this.flipped[1].imgBack.removeAttribute('hidden');
		this.flipped[1].up = false;
		this.flipped = [];
	}

	// création des cartes
	for(i = 0; i < this.nbCards; i += 2) {
		var tmp = Math.floor(Math.random() * (NB_IMG + 1));
		var tmp1 = new Card((IMG_SRC + ('00' + tmp).slice(-2) + '.svg'), 'card' + i, 'card' + tmp);
		var tmp2 = new Card((IMG_SRC + ('00' + tmp).slice(-2) + '.svg'), 'card' + i, 'card' + tmp);
		this.cards.push(tmp1, tmp2);
	}

	// Mémange des cartes
	for(i = 0; i < this.nbCards; i++) {
		var newI = Math.floor(Math.random() * this.nbCards);
		var tmp = this.cards[i];
		this.cards[i] = this.cards[newI];
		this.cards[i].getDom().setAttribute('data', i);
		this.cards[newI] = tmp;
		this.cards[newI].getDom().setAttribute('data', newI);
	}
	
	// Ajout des cartes au DOM
	for(i = 0; i < this.nbCards; i++) {
		this.domCards.appendChild(this.cards[i].getDom());
		if((i + 1) % this.nbCols == 0) {
			var tmp = document.createElement('br');
			this.domCards.appendChild(tmp);
		}
	}

	var zone = document.getElementById('cardsZone');
	zone.parentNode.replaceChild(this.domCards, zone);
}