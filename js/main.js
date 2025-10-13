const head = document.getElementById('h')
const tail = document.getElementById('t')
const flipBtn = document.getElementById('flip-btn')

flipBtn.addEventListener('click', () => {
    fetch('/api')
        .then(res => res.text())
        .then(deg => {
            head.style.transform = `rotateX(${deg}deg)`
            tail.style.transform = `rotateY(${deg}deg)`
        })
})