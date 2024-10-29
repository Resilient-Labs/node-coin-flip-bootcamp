document.getElementById('flipButton').addEventListener('click', () => {
    fetch('/flip')
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.classList.remove('hidden');
            resultDiv.innerText = `Result: ${data.result}`;
        })
        .catch(error => console.error('Error:', error));
});
