class Card {
		constructor(imgSrc, idCard) {
			this._id = idCard;
			this._dom = document.createElement('div');
			this._dom.id = idCard;
			
			this._canvasHTML = document.createElement('canvas');
			this._canvasHTML.classList.add('cards', 'cardFront');
			this._ctx = this._canvasHTML.getContext('2d');
			
			this._canvasHTML.width = 200;
			this._canvasHTML.height = 200;
			
			var img = new Image(200, 200);
			img.src = imgSrc;
			// console.log(img);
			this._ctx.drawImage(img, 0, 0);
			// this._ctx.fillStyle = '#000000';
			// this._ctx.fillRect(0, 0, 50, 50);
			
			
			this._dom.appendChild(this._canvasHTML);
			// this._dom.appendChild(img);
			
			this._imgBack = document.createElement('img');
			this._imgBack.src = 'img/cardBack.jpeg';
			this._imgBack.classList.add('cards', 'cardBack');
			// this._dom.appendChild(this._imgBack);
			
			// this._dom.onclick = function(){game.cards[Number(this.getAttribute('data'))].flip()};
		}
}