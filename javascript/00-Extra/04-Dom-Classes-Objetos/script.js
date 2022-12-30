/*
  constantemente iremos selecionar uma lista de itens do dom.
  A melhor forma de interagir com eles é usando o método forEarch.
*/
const dropdowns = document.querySelectorAll(".js-dropdown");
dropdowns.forEach(function (item, index, array) {
  item.addEventListener("click", function () {
    // Evento de Click
    console.log(`Estou clicando no item ${index}`);
  });
});
/*
const dropdowns = document.querySelectorAll(".js-dropdown");
dropdowns.forEach(function (item, index, array) {
    console.log(item, index, array);
  });
  
*/
