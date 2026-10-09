//client side 
//event listner for click
//fetch api -> result


document.querySelector('#button').addEventListener('click', showResult) 

function showResult(){
    const sides = document.querySelector('#sides').value;
    console.log(sides)

    fetch(`/api?coinFlip=${sides}`)
        .then(res=>res.json())
        .then((data) => {
            document.querySelector('#sidePicked').textContent = data.name
            document.querySelector('#result').textContent = data.resultText
            document.querySelector('#sidebot').textContent = data.sidePicked
            
        });
}