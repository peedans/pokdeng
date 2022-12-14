class RewardLoseOrWin {
    constructor(scoreAll,rewardLoseOrWin) {
        this.loseOrWin = this.getLoseOrWin(scoreAll,rewardLoseOrWin);
    }
    getLoseOrWin(scoreAll,cards){
        if(cards.length < 2){
            return 'Error';
        }

        let deng = true
        let cardValue = cards[0][0]
        let cardRank = cards[0][1]

        for(let i = 0; i < cards.length; i++) {
            // Just only one false can not get 'Deng' bonus point.
            if (deng) {
                // same value diff rank or same rank diff value
                if (cardValue === cards[i][0] && cardValue === cards[cards.length-1][0] || cardRank === cards[i][1]&& cardRank === cards[cards.length-1][1]) {
                    deng = true;
                } else {
                    deng = false;
                }
            }
        }

        let score = scoreAll[0] % 10

        if(deng && score >0){
            if(score >7 && cards.length <= 3){
                return ['Pok ' + score + ' - ' + cards.length + ' Deng',true]
            }else{
                return [score + ' - ' + cards.length + ' Deng',true]
            }
        }else {
            if(score > 7 && cards.length <= 3){
                return ['Pok ' + score,false];
            } else {
                return [score.toString(),false]  ;
            }
        }

    }
}
module.exports = {RewardLoseOrWin}