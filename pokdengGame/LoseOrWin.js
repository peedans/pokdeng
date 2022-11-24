const {RewardLoseOrWin} = require("./RewardLoseOrWin")

class LoseOrWin{
    constructor(Bet,Banker,Player,handCardBanker,handCardPlayer) {
        this.LoseOrWin = this.WinOrLose(Bet,Banker,Player,handCardBanker,handCardPlayer);
    }
    WinOrLose(Bet,Banker,Player,handCardBanker,handCardPlayer){
        let getReward ;
        let reward = 0
        if (Banker[0] > Player[0]){
            getReward = new RewardLoseOrWin(Banker,handCardBanker)
            console.log("Banker Win",getReward.loseOrWin[0],"Point")
            if(getReward.loseOrWin[1]){
                return reward-=Bet*handCardBanker.length
            }else{
                return reward-=Bet
            }
        }else if (Player[0] > Banker[0]) {
            getReward = new RewardLoseOrWin(Player,handCardPlayer)
            console.log("Player Win",getReward.loseOrWin[0],"Point")
            if(getReward.loseOrWin[1]){
                return reward+=Bet*handCardPlayer.length
            }else{
                return reward+=Bet
            }
        }else { // ถ้าแต้มเสมอกัน
            if (Banker[1] > Player[1]) { // เช็คดอก
                getReward = new RewardLoseOrWin(Banker,handCardBanker)
                console.log("Banker Win",getReward.loseOrWin[0],"Point")
                if(getReward.loseOrWin[1]){
                    return reward-=Bet*handCardBanker.length
                }else{
                    return reward-=Bet
                }
            } else if (Player[1] > Banker[1]) {
                getReward = new RewardLoseOrWin(Player,handCardPlayer)
                console.log("Player Win",getReward.loseOrWin[0],"Point")
                if(getReward.loseOrWin[1]){
                    return reward+=Bet*handCardPlayer.length
                }else{
                    return reward+=Bet
                }
            } else { // ถ้าดอกเท่ากัน
                console.log("draw")
                    return reward === Bet
            }
        }
    }
}

module.exports = {LoseOrWin}