const prompt = require("prompt-sync")({ sigint: true });
const {Cards} = require("./lib/Cards");
const {Deck} = require("./lib/Deck");
const {TwoCardHand} = require("./lib/Hand")
const {Score} =require("./lib/Score")
const {Player} =require("./lib/Player")
const {Reward} =require("./lib/Reward")

class startPokdeng{
    constructor() {
        this.startPokdeng = this.pokDeng();
    }
    pokDeng() {
        console.log("Start")
        let start = true
        let rewards = 0;
        while (start) {

            console.log("place a bet")
            let Bet = prompt('');
            let BetNumber = parseInt(Bet);

            let cards = new Cards()
            let deck =new Deck(cards.suits,cards.ranks)

            let handBanker = new TwoCardHand(deck.deck)
            let banker =new Player("banker",handBanker.hand)
            console.log("banker",banker.card)

            let handPlayer = new TwoCardHand(deck.deck)
            let player =new Player("player",handPlayer.hand)
            console.log("player",player.card)
            let scoreBanker = new Score(handBanker.hand)
            let scorePlayer = new Score(handPlayer.hand)

            let backerScore = [scoreBanker.scoreOfCards, scoreBanker.valuesFaceOfCards];
            let playerScore = [scorePlayer.scoreOfCards, scorePlayer.valuesFaceOfCards];


            rewards += new Reward(BetNumber,backerScore, playerScore);

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