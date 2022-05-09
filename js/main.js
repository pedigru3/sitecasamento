const fnome = document.getElementById('fname');
const nome = document.getElementById('name');
const celular = document.getElementById('celular');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');

let nomeAtual = JSON.parse(localStorage.getItem("nomeAtual")) || ''
if (nomeAtual == '') {
    document.getElementById('modal-popup').style.display = 'flex';
}

const paragrafo = document.querySelector(".cabeçalho__paragrafo")

paragrafo.textContent = `${nomeAtual}, ficaremos muito felizes de ter você na celebração do nosso casamento. Queremos muito que participe do momento mais marcante de nossas vidas. Esperamos te ver lá.`

form.addEventListener('submit', (e) => {
    e.preventDefault()

    alert('Presença confirmada!')

    nomeAtual = nome.value;
    localStorage.setItem("nomeAtual", JSON.stringify(nomeAtual))

    nome.value = ""
})


form2.addEventListener('submit', (e) => {

    if (fnome.value != '') {
        nomeAtual = fnome.value
        localStorage.setItem("nomeAtual", JSON.stringify(nomeAtual))
        document.getElementById('modal-popup').style.display = 'none';
    }

})