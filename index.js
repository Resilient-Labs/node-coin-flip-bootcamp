let buttons = document.querySelectorAll('.bet')

buttons.forEach((button)=>{
    button.addEventListener('click' , function(){
        let bet = button.innerText
        fetch(`/api?bet=${bet}`)
        .then(response => response.json())
        .then((data)=>{
            document.querySelector('.answer').innerText=data.result

        })
    })
})