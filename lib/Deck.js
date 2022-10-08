class Deck {
    constructor(suits,ranks) {
        this.deck = this.createDeck(suits,ranks).map(card => card.split('+'));
    }
    createDeck(suits,ranks) {
        let d = []
        for (const s of suits) {
            for (const r of ranks) {
                d.push(r + s)
            }
        }
        return this.shuffle(d);
    }

    shuffle(d) {
        for (let i = 0; i < d.length; i++) {
            let random = Math.floor(Math.random() * d.length);
            let temp = d[i];
            d[i] = d[random];
            d[random] = temp;
        }
        return d
    }
}

module.exports = {Deck}
