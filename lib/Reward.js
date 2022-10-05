class Reward {
    constructor(bet,backer,player) {
        this.reward = this.getReward(bet,backer,player);
    }
    getReward(bet,banker,Player) {
        let reward = 0;
        if (banker[0] > Player[0]) {
                console.log("Banker Won !!!")
                return reward = - bet
        } else if (Player[0] > banker[0]) {
                console.log('Player won!!!');
                return reward = + bet
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

module.exports = {Reward}