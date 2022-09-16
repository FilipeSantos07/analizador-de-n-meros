var entradaNumero = document.querySelector("#input-numero")
entradaNumero.focus()
var selectR = document.querySelector("#selectR")
var resultado = document.querySelector("#res")

var numeros = []  //array

function isNumero() {
    if(numeros.indexOf(Number(entradaNumero.value)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(entradaNumero.value.length == 0 || entradaNumero.value > 100 || isNumero() == false) {
        alert("Valor inválido ou já encontrado na lista!")

        entradaNumero.value = ""
        entradaNumero.focus()
    } else {
        resultado.innerHTML = ""

        numeros.push(Number(entradaNumero.value))

        var opção = document.createElement("option")
        opção.text = `Valor ${entradaNumero.value} adicionado.`
        selectR.appendChild(opção)

        entradaNumero.value = ""
        entradaNumero.focus()

    }
}
function finalizar() {
    if(selectR.innerHTML == "") {
        alert("Adicione um valor antes de finalizar!")

        entradaNumero.focus()
    } else {
        var soma = 0  //soma dos valores
        for(var contador = 0; contador < numeros.length; contador += 1) {
            soma += numeros[contador]
        }

        resultado.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p> <br>`
        resultado.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(Math,numeros)}.</p> <br>`
        resultado.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(Math,numeros)}.</p> <br>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p> <br>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${soma / numeros.length}.</p> <br>`

        entradaNumero.focus()
    }
}