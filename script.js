const nomeElement = document.getElementById('nome');
const nomeText = nomeElement.innerText;
nomeElement.innerText = '';

let i = 0;
function typeWriter() {
    if (i < nomeText.length) {
        nomeElement.innerHTML += nomeText.charAt(i);
        i++;
        setTimeout(typeWriter, 110); // Ajuste o intervalo de tempo aqui
    }
}

typeWriter();
