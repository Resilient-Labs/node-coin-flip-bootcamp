let button = document.querySelectorAll('.button')
Array.from(button).forEach(function (element) {
    element.addEventListener('click', function () {
        const guess = this.getAttribute("data-name")
        fetch(`/api?guess=${guess}`)
            .then(response => response.json())
            .then((data) => {
                document.querySelector('#result').innerText = data.result
            });
    })
})