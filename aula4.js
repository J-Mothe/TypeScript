// Declarando nossa variável
var verdadeiro = true;
var falso = false;
var x = 50;
var y = 60;
var z = "50";
// Realizando os testes
var maiorQue = x > y; // Testa se X maior que Y
var menorQue = x < y; // Testa se X menor que Y
var igual = x == z; // Testa se X igual a Y
var diferente = x != y; // Testa se X diferente de Y
var igualTipo = x === z;
;
; //Testa se X igual a Y e do mesmo tipo
var diferenteTipo = x !== z; // Testa X diferente de Y e se são do mesmo tipo
// Imprimindo nossos resultados
console.log("X maior que Y: " + maiorQue);
console.log("X menor que Y: " + menorQue);
console.log("X igual a Z: " + igual);
console.log("X é diferente de Y: " + diferente);
console.log("X tem mesmo tipo e valor de Z: " + igualTipo);
console.log("X é diferente e do mesmo tipo que Z: " + diferenteTipo);
console.log(verdadeiro);
console.log(falso);
