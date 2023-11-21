// worked with alum Rio on this

const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // event obj is special to addEventListener
        // the event is everything that the browser knows about the click (in this case since that's the type of event here)
        console.log(event)
        const coinSelection = event.target.innerText
        // when you click on the Heads/Tail button, the event is fired and coinSelection will be assigned the innerText Heads or Tails depending on which button is clicked
        console.log(coinSelection)

        fetch(`/api?coin=${coinSelection}`)
         .then(res => res.json())
         .then((data) => {
            console.log(data)
            const {result} = data
            
            document.querySelector('#result').innerText = result
         })

    })
})