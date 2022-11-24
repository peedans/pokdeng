const {Score} = require("./Score");

class CheatBanker {
    constructor(deck,cheatCard) {
        this.cardLength = cheatCard === 0 ? 2 : cheatCard.length + 1
        this.cheatCardThreecard = cheatCard
        this.cheatBanker = this.cheat(deck,this.cardLength)
    }
    cheat(deck,cardLength){
        let cardBanker =  cardLength === 3 ? [...this.cheatCardThreecard] : []
        let swapTwoCardThreeCard = cardLength === 2 ? 1 : 0
        let count = 0
            for (let i = 0; i < cardLength; i++) {
                if (cardBanker.length < cardLength) {
                    cardBanker.push(deck[count])
                    count++
                }
                if (cardBanker.length === cardLength) {
                    let cardBankerScore = new Score(cardBanker)
                    if (cardBankerScore.scoreOfCards < 8  ) {
                        cardBanker.pop()
                        i = 0
                    } else {
                        break
                    }
                }
            }
            [deck[swapTwoCardThreeCard], deck[count-1]] = [deck[count-1], deck[swapTwoCardThreeCard]]
            return deck
        }
}

module.exports = {CheatBanker}