'use strict';

const callHeads = document.querySelector('#callHeads');
const callTails = document.querySelector('#callTails');
const coinFace = document.querySelector('#coinFace');

console.log(callHeads);
console.log(callTails);
console.log(coinFace);

callHeads.addEventListener('click', function () {
    console.log(callHeads);

    flipCoin('Heads');
});

callTails.addEventListener('click', function () {
    console.log(callTails);

    flipCoin('Tails');
});

function flipCoin(calledFace) {
    console.log(calledFace);

    fetch('/api?choice=' + calledFace)
        .then(function (response) {
            console.log(response);

            return response.json();
        })
        .then(function (data) {
            console.log(data);

            coinFace.innerText = data.coin + ' - ' + data.result;
            console.log(coinFace);
        })
        .catch(function (error) {
            console.log(error);

            coinFace.innerText = 'Something went wrong.';
        });
};