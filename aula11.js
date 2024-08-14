function maximo(num1, num2) {
    if (num1 >= num2) {
        return num1;
    }
    else {
        return num2;
    }
}
// Agora vamo utilizar nossa função 
var maiorValor = maximo(10, 15);
console.log(maiorValor);
