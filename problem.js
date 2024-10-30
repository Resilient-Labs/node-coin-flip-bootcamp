function flipCoin(){
    const value = ['heads','tails'];
    const random = Math.floor(Math.random() * value.length);
    return value[random];
    
}

module.exports = { flipCoin };