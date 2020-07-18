var cardsCount = [];
var cardsDelt = 0;
var cardsAmount;
var cardsDiv;

window.onload = function() {	
	let form = document.getElementById('form');

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		cardsAmount = 0;
		cardsCount = [];
		cardsDelt = 0;
		cardsDiv = "";
		cardsAmount = document.getElementById('cards-amount').value;

		let html = "";
		for (let j=0; j<cardsAmount; j++) {
			cardsCount.push(0);
			cardsDiv = document.getElementById('cards');
			html = html + `<p id="card${j+1}"></p>` 

			cardsDiv.innerHTML = html;
		}

		cardsDelt = document.getElementById('dealer').value;
		
		for (let i=0; i<cardsDelt; i++) {
			let cardPicked = getRandomInt(0, cardsAmount);
			cardsCount[cardPicked]++;
		}
		showAnswer();
	})
};	

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function showAnswer(){
	for(let i = 0; i < cardsAmount; i++){
		document.getElementById(`card${i+1}`).innerText = `Carta ${i+1}: frecuencia porcentual = ${cardsCount[i]*100/cardsDelt} %.`;
	}
}