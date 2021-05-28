//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadoraRosa(operacao,num1,num2){
    

    switch(operacao){
        case 'soma':
            return num1+num2;
            break
        case 'multiplicação':
            return num1*num2;
            break    
        case 'divisão':
            return num1/num2;
             break  
        case 'subtração':
            return num1-num2;
            break
        default:
            console.log('informe dados válidos')   
    }
    
}
console.log(calculadoraRosa('divisão',30,2))
console.log(calculadoraRosa('soma',30,2))
console.log(calculadoraRosa('multiplicação',30,2))
console.log(calculadoraRosa('subtração',30,2))