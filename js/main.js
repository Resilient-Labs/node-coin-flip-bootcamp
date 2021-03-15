// let result = document.querySelector('h2')
let heads = document.querySelector('.heads')
// let tails = document.querySelector('.tails')
let headsScore = 0
let tailsScore = 0

let result = ''

document.querySelector("button").addEventListener('click', coinflip)

function coinflip(){

    let randomChoice = Math.random()

    if (randomChoice < 0.5 ) {
        headsScore +=1
        document.querySelector('img').src = 'images/quarterHead.png'
        result = 'head'

    }
    else {
        tailsScore +=1
        document.querySelector('img').src = 'images/quarterTails.png'
          result = 'tail'

    }

    // if(userPick === 'tail' || userPick === 'head'){
    //     if(randomShuffle < 0.5){
    //       //select the img element and change the source attribute to tails image
    //       document.querySelector('img').src = 'images/quarterHead.png'
    //       faceValue = 'head'
    //     }else{
    //       //select the img element and change the source attribute to head image
    //       document.querySelector('img').src = 'images/quarterTails.png'
    //       faceValue = 'tail'
    //     }
    //   }else{
    //     alert('Choose head or tail!')
    //   }

}

