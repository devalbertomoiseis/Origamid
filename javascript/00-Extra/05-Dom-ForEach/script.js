/*
  addEventListener
  adicionar uma função a um elemento. Esta chamada será ativada que o certo evento ocorror neste elemento.
  O primeiro paramentro do callback e referente ao evento que ocorreu
*/
const button = document.querySelectorAll("button");
function cor() {
  this.classList.add("ativo");
}

button.forEach((element) => {
  element.addEventListener("click", cor);
});

const div = document.querySelector("div");
/*
// Boas Práticas de Programação
function eventoCallback(event) {
  Previne o comportamento padrão do evento no browser. No caso um link externo, ele irá previnir que o link seja ativado

  div.innerHTML = `
    <p>Olá Mundo !</p>
  `;
  event.preventDefault();

    console.log(event.currentTarget); //elemento que foi clicado
    console.log(event.target); // aonde foi clicado
    console.log(event.type); // tipo do evento
    console.log(event.path); // caminho do elemento
}
*/
