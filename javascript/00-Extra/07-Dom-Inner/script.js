const titulo = document.querySelector(".titulo");
console.log(titulo.outerHTML); // todo html do elemento
console.log(titulo.innerHTML); // thml interno
console.log(titulo.innerText); // texto, tags

titulo.innerText = `<p>Novo Titulo 02</p>`; // a tag vai com texto
titulo.innerHTML = `<p>Novo Titulo 02</p>`; // a tag é renderizada
