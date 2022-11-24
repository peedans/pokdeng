const prompt = require("prompt-sync")({ sigint: true });
const {CheatBanker} = require("./CheatBanker");

class TwoCardHand {
    constructor(deck) {
        this.hand = this.handTwoCard(deck);
    }
    handTwoCard (deck) {
        return deck.splice(0, 2);
    }
}

class ThreeCardHand {
    constructor (threeCardHand,deck){
        this.hand = this.handThreeCard(threeCardHand,deck)
    }
    handThreeCard(threeCardHand,Deck){
        for(let i = 0; i < 2; i++){
            console.log('Want to draw?')
            let isDrawExtra = prompt('');
            if (isDrawExtra === "y") {
                if(threeCardHand[2][i]=== "Banker"){
                    console.log('Do you want to cheat?')
                    let cheat = prompt('');
                    if(cheat==="y"){
                        let deckCheat = new CheatBanker(Deck,threeCardHand[0])
                        Deck = deckCheat.cheatBanker
                    }
                }
                threeCardHand[i].push(Deck[0])
                Deck = Deck.filter(card => card !== Deck[0]);
               console.log(`${threeCardHand[2][i]} [${threeCardHand[i][0][0 ]} ${threeCardHand[i][0][1 ]} ] [${threeCardHand[i][1][0 ]} ${threeCardHand[i][1][1 ]} ] [${threeCardHand[i][2][0 ]} ${threeCardHand[i][2][1 ]} ]`)
            }
        }
        return  Deck
    }

}

module.exports = {TwoCardHand,ThreeCardHand}