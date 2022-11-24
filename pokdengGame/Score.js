class Score {
    constructor(card) {
        console.log(card)
        this.scoreOfCards = this.getScore(card) % 10;
        this.valuesFaceOfCards = this.getValuesFaceOfCards(card) ;
    }
    getValuesFaceOfCards(cards) {
        let rank = 0;
        cards.map((card) => {
            if (card.includes("♠")) {
                rank += 4;
            } else if (card.includes("♥")) {
                rank += 3;
            } else if (card.includes("♦")) {
                rank += 2
            } else {
                rank += 1
            }
        })
        return rank;
    }
    getScore(cards) {
        let score = 0;
        let faceCard = ['king','queen','jack','10']
        cards.map((card) => {
                if (faceCard.includes(card[0])){
                    score += 10;
                } else if (card.includes('ace')) {
                    score += 1;
                } else {
                    score += Number(card[0])
                }
            }
        )
        return score;
    }

}

module.exports = {Score}