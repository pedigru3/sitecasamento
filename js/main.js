const nome = document.getElementById('name');
const celular = document.getElementById('celular');
const form = document.getElementById('form');
const convidados = JSON.parse(localStorage.getItem("convidados")) || []
const listaDeConvidados = convidados || []

convidados.forEach( (elemento) => {
    console.log(elemento.nome, elemento.celular)
})

form.addEventListener('submit', (e) => {
    let messages = []
    url = "localhost:3000"

    if (isNaN(celular.value)){
        messages.push('Número inválido demais')
        alert('O número do seu celular não pode conter letras')
    } else if (celular.value.length != 11) {
        messages.push('Número inválido')
        alert('Número inválido! Não esqueça do DDD')
    } 

    if (messages.length > 0) {        
        e.preventDefault()
    } 
    
    else {
        e.preventDefault()

        const convidadoAtual = {
            "nome": nome.value,
            "celular": celular.value
        }

        listaDeConvidados.push(convidadoAtual)

        localStorage.setItem("convidados", JSON.stringify(listaDeConvidados))

        nome.value = ""
        celular.value = ""
    }
})