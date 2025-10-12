const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => flipCoin(button)));

function flipCoin(button) {
    fetch('/coinflipapi')
        .then(res => res.text())
        .then(data => {          
            const btn = document.querySelector(`#${button.id}`);
            buttons.forEach(b => b.disabled = true);
            document.querySelector('.coin').style.background =`url('../assets/${data}.png') no-repeat center/cover`;
            if(button.id === data){
                btn.style.background = 'rgba(4, 222, 4, 0.766)';
                document.querySelector('h1').innerText = 'Correct!';
            }else {
                btn.style.backgroundColor = 'rgba(229, 25, 25, 0.707)';
                document.querySelector('h1').innerText = 'Wrong!';
            }

            document.querySelector('.coin').classList.toggle('animate');
            setTimeout(() => {
                document.querySelector('.coin').classList.toggle('animate');
                btn.style.backgroundColor = 'white';
                document.querySelector('h1').innerText = 'Heads or Tails?';
                buttons.forEach(b => b.disabled = false);
            }, 2000);
        });
}


