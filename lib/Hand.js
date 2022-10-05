class TwoCardHand {
    constructor(deck) {
        this.hand = this.handTwocard(deck);
    }
    handTwocard (deck) {
        return deck.splice(0, 2);
    }
}

module.exports = {TwoCardHand}