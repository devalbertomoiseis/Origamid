/*
  window é o objeto global do navegador que possui diferentes métodos e propriedades
*/
console.log(window.innerWidth);
// retorna a largura do navegador

alert("Isto é um alert !");

let subtituloH2 = document.querySelector("h2"); // Selecionar 1° da página h2
console.log(subtituloH2);
console.log(subtituloH2.classList); // Acessar a classe do H2
console.log(subtituloH2.classList[0]); // Acessar a tag do H2
subtituloH2.textContent = "Outro Titulo";
console.log(subtituloH2); // Acessar conteúdo
subtituloH2.classList.add("nova-classe"); // Adicionar nova class
console.log(subtituloH2.classList);

window.addEventListener("click", function () {
  console.log("teste");
}); //evento para clicar e mostra o total de clices
