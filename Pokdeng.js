const prompt = require("prompt-sync")({ sigint: true });
const {Cards} = require("./pokdengGame/Cards");
const {Deck} = require("./pokdengGame/Deck");
const {TwoCardHand,ThreeCardHand} = require("./pokdengGame/Hand")
const {Score} = require("./pokdengGame/Score")
const {Player} = require("./pokdengGame/Player")
const {LoseOrWin} = require("./pokdengGame/LoseOrWin")

class startPokDeng{
    constructor() {
        this.startPokDeng = this.pokDeng();
    }
    pokDeng() {
        console.log("Start")
        let start = true
        let playerReward = 0;
        while (start) {
            console.log("place a bet")
            let Bet = prompt('');
            let BetNumber = parseInt(Bet);

            let cards = new Cards()
            let deck =new Deck(cards.suits,cards.ranks)

            let handBanker = new TwoCardHand(deck.deck)
            let banker =new Player("Banker",handBanker.hand)

            let handPlayer = new TwoCardHand(deck.deck)
            let player =new Player("Player",handPlayer.hand)

            console.log("Banker", `[${banker.card[0][0 ]} ${banker.card[0][1]} ]  [${banker.card[1][0 ]} ${banker.card[1][1]} ]`);
            console.log("Player", `[${player.card[0][0 ]} ${player.card[0][1]} ]  [${player.card[1][0 ]} ${player.card[1][1]} ]`);

            let threeCardHand = [banker.card, player.card,[banker.position,player.position]];

            let three = new ThreeCardHand(threeCardHand,deck.deck)

            deck.deck = three.hand

            let scoreBanker = new Score(handBanker.hand)
            let scorePlayer = new Score(handPlayer.hand)

            let bankerScore = [scoreBanker.scoreOfCards, scoreBanker.valuesFaceOfCards];
            let playerScore = [scorePlayer.scoreOfCards, scorePlayer.valuesFaceOfCards];

            let resultLoseOrWin = new LoseOrWin(BetNumber,bankerScore,playerScore,handBanker.hand,handPlayer.hand)

            playerReward +=resultLoseOrWin.LoseOrWin

            console.log(`you got total ${playerReward} chip`)
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

new startPokDeng();