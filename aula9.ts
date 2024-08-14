// Criando um laço que repete números de 1 a 1000
for (let i = 1; i <= 1000; i++) {

    if ( i === 997 ) {
        i += 10;
        console.log ( i );
        // A intrução 'continue' permite pular este laço
        // ou seja quando estivermos no número 997, o laço
        // será pulado e passado para o próximo.
        continue;
    }
}