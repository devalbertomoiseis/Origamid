const numeros = [1,2,3,4,5];
const [primeiro, segundo, terceiro, quarto, quinto] = numeros;
console.log(primeiro, segundo, terceiro, quarto, quinto)

let a = 1;
let b = 3;
[a, b] = [b , a];
console.log(a, b)

const numeros2 = [6,7,8,9,10];
const nuemros1e2 = [...numeros2, 11, 12];
console.log(nuemros1e2);

const [dez, vinte, ...resto] = [10,20,30,40,50,60]
console.log(dez, vinte);
console.log(resto);