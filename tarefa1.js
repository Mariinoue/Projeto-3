//1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos /n 
//pela palavra "PULOU".

let boloDeBanana= 5;

while(boloDeBanana < 60) {

    boloDeBanana += 5;

    if(boloDeBanana === 35 || boloDeBanana === 45) {
        console.log("Pulou");
        continue;
    }

    console.log(`Faça ${boloDeBanana} bolos de Bananas`);
}

