/*
  classList
  Retorna uma lista com as classes que existe no elemento.É possível adicionar, remover classes e verificar se existe uima classe no elemento.
*/

const titulo = document.querySelector("h1");
titulo.classList; // Lista de Classes do Elemento
titulo.classList.add("ativo"); // Adicionar Classe no Elemento
titulo.classList.remove("ativo"); // Remover Classe no Elemento
titulo.classList.toggle("ativo"); // Adicionar/Remover Classe no Elemento
titulo.classList.contains("ativo"); // True ou False
titulo.classList.replace("ativo", "inativo"); //

const teste = document.getElementById("teste");

teste.innerHTML = `
  <h3>Tecnologias</h3>
  <p>HTML</p>
  <p>CSS</p>
  <p>JAVASCRIPT</p>
`;

console.log(teste);
/* --------------------------------------------- */
const input = document.querySelector("input");
const button = document.querySelector("button");
// Manipular Atributos usando Eventos e getAttribute/setAttribute
button.addEventListener("click", () => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});
