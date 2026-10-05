//using anonymous function
//JS no ejecuta la funcion solo guarda y cuandos se hace click la 
// funcion anonima se ejecuta
document.querySelector('#head').addEventListener('click',() =>{
    flipCoin('Heads');
});
document.querySelector('#tail').addEventListener('click',() =>{
    flipCoin('Tails');
});
let score=0;
document.querySelector('#start-again').addEventListener('click',()=>{
    score = 0;
    document.querySelector('.txt-score').innerText = score;
});

function flipCoin(coinChoose){

    const coinImage = document.querySelector('#coin-image')
    coinImage.src = 'img/coin.gif'
    console.log('calling the function')
    fetch(`/api?coinFlip=${coinChoose}`)
    .then((res) => res.json())
    .then((data) =>{

        console.log(data);
        if(data.results.includes('Win'))
        {
            score++;
        }else{
            score--;
        }
       setTimeout(() => {
        //verifica que la propiedad flipResult contenga Heads en el resultado
        if(data.flipResult.includes('Heads')){
            coinImage.src = 'img/CoinHead.png'
            
        }else{
            coinImage.src = 'img/CoinTail.png'
        }
       }, 800); 

        document.querySelector('.result').innerText=`${data.flipResult} ${data.results}`;
        document.querySelector('.txt-score').innerText = score;
    })
    .catch(err  =>{
        console.log(`${err}`)
    })
}
