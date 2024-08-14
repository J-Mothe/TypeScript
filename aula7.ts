// Declarando nossas varíaveis
let idade : number = 30;
let estado : string = "DF";

// Testando nossa varíavel utilizando operador ternário.
let ternario : string = idade > 30 ? "velho" : "novo";

// Imprimindo o valor
console.log(ternario);

// Utilizando YF Múltiplo
if (estado === "DF") {
    console.log ("Distrito Federal");    
} else if (estado === "SP") {
    console.log ("São Paulo");    
} else if (estado === "RJ") {
    console.log ("Rio de Janeiro");    
} else if (estado === "GO") {
    console.log ("Goiás");    
} else {
    console.log (" Outro estado");
}