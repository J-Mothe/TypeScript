// Declarando nossas variáveis
let estado : string = "DF";

// Testando exemplo anterior com SWITCH
switch (estado) {
    case "DF": console.log ("Distrito Federal");
    break; // Necessário 'break' para finalizar
           // o 'case' , ou o próximo case é
           // executando até encontrar um 'break'
    case "SP": console.log ("São Paulo");
    break;
    case "GO": console.log ("Goias");
    break;
    case "RJ": console.log ("Rio de Janeiro");
    break;
    default:
        console.log ("Outro estado");
}    