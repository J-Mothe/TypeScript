let x: number = 1; // Devemos criar a variável fora do
while (x <= 1000 ) {

    if (x === 600) {
        // A instrução break permite quebrar este laço
        // ou seja quando estivermos no número 600, o
        // será interrompido e a instrução finalizada
        break;
    }
    console.log (x.toString());

    x++; // Também podemos passar auto incrementos como
         // instruções em qualquer código
}