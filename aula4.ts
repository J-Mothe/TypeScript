// Declarando nossa variável

let verdadeiro : boolean = true;
let falso : boolean = false;

let x : number = 50;
let y : number = 60;

let z : string = "50";


// Realizando os testes
let maiorQue = x > y; // Testa se X maior que Y

let menorQue = x < y; // Testa se X menor que Y

let igual = x == z; // Testa se X igual a Y

let diferente = x != y; // Testa se X diferente de Y

let igualTipo = x === z; ;; //Testa se X igual a Y e do mesmo tipo

let diferenteTipo = x !== z; // Testa X diferente de Y e se são do mesmo tipo

// Imprimindo nossos resultados
console.log("X maior que Y: " + maiorQue);
console.log("X menor que Y: " + menorQue);
console.log("X igual a Z: " + igual);
console.log("X é diferente de Y: " + diferente);
console.log("X tem mesmo tipo e valor de Z: " + igualTipo);
console.log("X é diferente e do mesmo tipo que Z: " + diferenteTipo);

console.log(verdadeiro);
console.log(falso);