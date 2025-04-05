function coinFlip(){
    makeReq();
}


function makeReq() {

    fetch(`/`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            document.querySelector('#result').textContent = data.result;
        })
        .catch(err => console.log('Fetch error', err));
}



