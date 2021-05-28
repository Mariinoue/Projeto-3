//3 - Crie uma função que recebe 2 parâmetros e retorna/n
// o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function parOuImpar(x,y){

     if ( x/y%2 ===0) {
        return 'O numero '+ x/y + ' é par.'
    } else( x/y%2 !==0)
        return  'O numero '+ x/y+ ' é ímpar.'
  }
console.log(parOuImpar(40,2))