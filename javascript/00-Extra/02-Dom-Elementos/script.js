/*
  window é o objeto global do navegador que possui diferentes métodos e propriedades
*/
console.log(window.innerWidth);
// retorna a largura do navegador

alert("Isto é um alert !");

let subtituloH2 = document.querySelector("button"); // Selecionar 1° da página h2

window.addEventListener("click", function () {
  console.log("teste");
}); //evento para clicar e mostra o total de clices
