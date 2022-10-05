const prompt = require("prompt-sync")({ sigint: true });

class Deck {
    constructor() {
        this.deck = [];
        this.cards = this.createDeck();
    }
    createDeck() {
        const suits = ["+♠", "+♣", "+♥", "+♦"];
        const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

        for (const s of suits) {
            for (const r of ranks) {
                this.deck.push(r + s)
            }
        }
        return this.shuffle(this.deck);
    }

    shuffle() {
        for (let i = 0; i < this.deck.length; i++) {
            let random = Math.floor(Math.random() * this.deck.length);
            let temp = this.deck[i];
            this.deck[i] = this.deck[random];
            this.deck[random] = temp;
        }
    }
}

class DeckOfPokDeng extends Deck {
    drawCard(deck) {
        return deck.splice(0, 2);
    }
}

class score {
    constructor(card) {
        this.valuesFaceOfCards = this.getValuesFaceOfCards(card);
        this.scoreOfCards = this.getScore(card) % 10;
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

class reward {
    constructor(bet,backer,player) {
        this.reward = this.getReward(bet,backer,player);
    }
    getReward(bet,banker,Player) {
        let reward = 0;
        if (banker[0] > Player[0]) {
            if ((banker[0] === 8) && ((banker[1] > Player[1]) || (banker[0] > Player[0])) && (banker[1] !== banker[0])) {
                console.log("Banker pok 8 !!!")
                return reward = - bet
            } else if (banker[0] === 8 && ((banker[1] === banker[0]))) {
                console.log("Banker pok 8 2deng!!!")
                return reward = - bet * 2
            } else if (banker[0] === 9 && ((banker[1] > Player[1]) || (banker[0] > Player[0])) && (banker[1] !== banker[0])){
                console.log("Banker pok 9!!!")
                return reward = - bet
            } else if (banker[0] === 9 && ((banker[1] === banker[0]))) {
                console.log("Banker pok 9 2deng!!!")
                return reward = - bet * 2
            } else {
                console.log("Banker Won !!!")
                return reward = - bet
            }
        } else if (Player[0] > banker[0]) {
            if ((Player[0] === 8) && ((Player[1] > banker[1]) || (Player[0] > banker[0])) && (Player[1] !== Player[0])) {
                console.log("Player pok 8 !!!");
                return reward = + bet
            } else if ((Player[0] === 8) && (Player[1] === Player[0])) {
                console.log("Player pok 8 2deng!!!");
                return reward = + bet * 2
            } else if ((Player[0] === 9) && ((Player[1] > banker[1]) || (Player[0] > banker[0])) && (Player[1] !== Player[0])) {
                console.log("Player pok 9!!!");
                return reward = + bet
            } else if ((Player[0] === 9) && ((Player[1] === Player[0]))) {
                console.log("Player pok 9 2 deng!!!");
                return reward = + bet * 2
            } else {
                console.log('Player won!!!');
                return reward = + bet
            }
        } else { // ถ้าแต้มเสมอกัน
            if (banker[1] > Player[1]) { // เช็คดอก
                console.log('banker won!!!');
                return reward = - bet
            } else if (Player[1] > banker[1]) {
                console.log('Player won!!!');
                return reward = + bet
            } else { // ถ้าดอกเท่ากัน
                console.log('draw');
                return reward = + bet
            }
        }
    }
}


class startPokdeng{
    constructor() {
        this.startPokdeng = this.pokDeng();
    }
    pokDeng() {
        console.log("Start")
        let start = true
        let rewards = 0;
        while (start) {
            const deck = new DeckOfPokDeng();

            console.log("place a bet")
            let Bet = prompt('');
            let BetNumber = parseInt(Bet);

            const bankerDraw = deck.drawCard(deck.deck).map(card => card.split('+'));
            console.log(bankerDraw)
            const playerDraw = deck.drawCard(deck.deck).map(card => card.split('+'));

            let scoresBanker = new score(bankerDraw);
            let scoresPlayer = new score(playerDraw);

            let backer = [scoresBanker.scoreOfCards, scoresBanker.valuesFaceOfCards];
            let player = [scoresPlayer.scoreOfCards, scoresPlayer.valuesFaceOfCards];

            console.log(`Banker`, bankerDraw.map(card => card.join('')))
            console.log(`Player`, playerDraw.map(card => card.join('')))

            let threeCardHand = [bankerDraw, playerDraw];

            for(let i = 0; i < 2; i++){
                console.log('Want to draw?')
                let drawExtra = prompt('');
                if (drawExtra === 'y') {
                    let oneCard = deck.deck[0].split('+');
                    threeCardHand[i].push(oneCard)
                    deck.deck = deck.deck.filter(card => card !== deck.deck[0]);
                    if (i === 0) {
                        scoresBanker = new score(threeCardHand[i]);
                        console.log(`Banker`,threeCardHand[i].map(card => card.join('')))
                    }
                    if (i === 1) {
                        scoresPlayer = new score(threeCardHand[i]);
                        console.log(`Player`,threeCardHand[i].map(card => card.join('')))
                    }
                }
            }

            rewards += new reward(BetNumber,backer, player);
            console.log(rewards.reward);
            console.log('Start a new game (Y/N)?');
            const playAgain = prompt('');
            if (playAgain === 'y' || playAgain === 'yes' || playAgain === 'YES' || playAgain === 'Y') {
                start = true;
            } else {
                start = false;
                break;
            }
        }
    }
}

let start = new startPokdeng();