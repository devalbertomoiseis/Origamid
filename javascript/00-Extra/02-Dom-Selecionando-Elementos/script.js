/*
Selecionar elemento pelo ID para itens exclusivos:
getElementById
*/
const head = document.getElementById("js-cabecalho");
console.log(head);

// Exemplo

const rodape = document.querySelector(".rodape");
const menu = document.querySelector("#menu");
const ultimoItem = document.querySelector("ul li:last-child");
const primeiraLista = document.querySelector("li"); //Procura um li somente dentro do ul selecionado

const dropdown = document.querySelectorAll(".js-dropdown");
dropdown.forEach(function (item, index) {
  item.addEventListener("click", function () {
    console.log(item);
  });
});
