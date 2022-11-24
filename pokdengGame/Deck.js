const prompt = require("prompt-sync")({ sigint: true });
const {CheatBanker} = require("./CheatBanker");

class Deck {
    constructor(suits,ranks) {
        this.deck = this.createDeck(suits,ranks);
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
        console.log('Do you want to cheat?')
        let cheat = prompt('');
        if (cheat === "y"){
            let deckSplit = d.map(card => card.split('+'))
            let deckCheat = new CheatBanker(deckSplit,0)
            return deckCheat.cheatBanker
        }else{
            return d.map(card => card.split('+'))
        }
    }
}

module.exports = {Deck}
