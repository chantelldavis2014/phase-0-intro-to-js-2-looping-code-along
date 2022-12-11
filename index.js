
const gifts = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards){
  let i = 0; 
  while (i < cards.length) {
    console.log(` "Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    i++; 
  }

  return cards;
}

writeCards(cards);