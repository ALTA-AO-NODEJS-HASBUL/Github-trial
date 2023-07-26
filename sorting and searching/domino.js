function playingDomino(hand, deck) {
  let recommendedCard = [];

  // Find cards with a matching number from the deck
  for (let i = 0; i < hand.length; i++) {
    const card = hand[i];

    if (card.includes(deck[0]) || card.includes(deck[1])) {
      // Check if the recommended card has not been set yet or if the current card has a higher sum
      if (
        recommendedCard.length === 0 ||
        card[0] + card[1] > recommendedCard[0] + recommendedCard[1]
      ) {
        recommendedCard = card;
      }
    }
  }

  return recommendedCard;
}

// Example usage
const kartu = [[6, 5], [3, 4], [2, 1], [3, 3]];
const deck = [4, 3];

const recommendedCard = playingDomino(kartu, deck);
console.log("Recommended Card:", recommendedCard);
