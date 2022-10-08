const prompt = require("prompt-sync")({ sigint: true });

class TwoCardHand {
    constructor(deck) {
        this.hand = this.handTwocard(deck);
    }
    handTwocard (deck) {
        return deck.splice(0, 2);
    }
}

class ThreeCardHand {
    constructor (threeCardHand,deck){
        this.hand = this.handThreeCard(threeCardHand,deck)
    }
    handThreeCard(threeCardHand,Deck){
        let threeCard = []
        for(let i = 0; i < 2; i++){
            console.log('Want to draw?')
            let isDrawExtra = prompt('');
            if (isDrawExtra === "y") {
                threeCardHand[i].push(Deck[0])
                Deck = Deck.filter(card => card !== Deck[0]);
                if (i === 0) {
                   threeCard.push(threeCardHand[i])
                    console.log(`Banker`,`[${threeCardHand[i][0][0]} ${threeCardHand[i][0][1]}] [${threeCardHand[i][1][0]} ${threeCardHand[i][1][1]}] [${threeCardHand[i][2][0]} ${threeCardHand[i][2][1]}]`)
                }
                if (i === 1) {
                    threeCard.push(threeCardHand[i])
                    console.log(`Player`,`[${threeCardHand[i][0][0]} ${threeCardHand[i][0][1]}] [${threeCardHand[i][1][0]} ${threeCardHand[i][1][1]}] [${threeCardHand[i][2][0]} ${threeCardHand[i][2][1]}]`)
                }
            }
        }
        return threeCard
    }
}

module.exports = {TwoCardHand,ThreeCardHand}