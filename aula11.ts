function maximo (num1 : number, num2 : number) : number {
    if (num1 >= num2){
        return num1;

    } else {
        return num2;
    }
}

// Agora vamo utilizar nossa função 
let maiorValor = maximo (10,15);

console.log (maiorValor);