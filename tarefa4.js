//4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
//  a) números de 1 a 100  

for(let heart=1; heart<=100; heart++)

console.log(`${heart} S2 corações `) 

//b) quando chegar no número 50 interrompa a instrução e pare o loop 
for(let morango=1; morango<=100; morango++){
    if(morango===51){
        break
    }
    console.log(morango+ ' moranguinhos.')
}
    


//c) quando chegar no número 50 pule a instrução 

for(let gatinhos=1; gatinhos<=100; gatinhos++){
    if(gatinhos===50){
       continue;
    }

console.log(gatinhos+ ' gatinhos =^.^=')    
}

