const nome = document.getElementById('name');
const celular = document.getElementById('celular');
const form = document.getElementById('form');
 let nomeAtual = JSON.parse(localStorage.getItem("nomeAtual")) || ''
while (nomeAtual === '') {
    nomeAtual = prompt('Digite seu primeiro nome')
}

const paragrafo = document.querySelector(".cabeçalho__paragrafo")

paragrafo.textContent = `${nomeAtual}, ficaremos muito felizes de ter você na celebração do nosso casamento. Queremos muito que participe do momento mais marcante de nossas vidas. Esperamos te ver lá.`

form.addEventListener('submit', (e) => {
        e.preventDefault()

        alert('Presença confirmada!')

        localStorage.setItem("nomeAtual", JSON.stringify(nomeAtual))

        nome.value = ""
        celular.value = ""
})