class Score {
    constructor(card) {
        this.scoreOfCards = this.getScore(card) % 10;
        this.valuesFaceOfCards = this.getValuesFaceOfCards(card);
    }
    getValuesFaceOfCards(cards) {
        let FaceOfCards = 0;
        cards.map((card) => {
            if (card.includes("♠")) {
                FaceOfCards += 4;
            } else if (card.includes("♥")) {
                FaceOfCards += 3;
            } else if (card.includes("♦")) {
                FaceOfCards += 2
            } else {
                FaceOfCards += 1
            }
        })

        return FaceOfCards;

    }
    getScore(cards) {
        let score = 0;
        cards.map((card) => {
                if (card.includes('king')) {
                    score += 10;
                } else if (card.includes('queen')) {
                    score += 10;
                } else if (card.includes('jack')) {
                    score += 10;
                } else if (card.includes('10')) {
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