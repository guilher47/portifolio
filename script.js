document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

//query selector pega o que foi digitado no campo HTML
document.querySelector("#qtde").addEventListener("change", atualizarPreco) //escuta o evento e depois executa a funcionalidade
document.querySelector("#js").addEventListener("change", atualizarPreco) 
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`   
     atualizarPreco()
})

function atualizarPreco(){ // essa função atualiza o valor digitado no cosnsole do browser
const qtde = document.querySelector("#qtde").value
const temJS = document.querySelector("#js").checked
const incluiLayout = document.querySelector("#layout-sim").checked
const prazo = document.querySelector("#prazo").value

let preco = qtde * 100;
if(temJS) preco *= 1.1
if(incluiLayout) preco += 500
let taxaUrgencia = 1 - prazo * 0.1;
preco *= 1 + taxaUrgencia

document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
