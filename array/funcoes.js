//Reconhecer número primo
export function primos(numero){
    let divisores=0;
    let primo;

    for(let i=1; i<=numero; i++){
        if (numero%i == 0){
            divisores+=1;
        }
    }

    if(divisores==2){
        primo = true;
    } else {
        primo = false
    }
    return primo;
}

//Decompor número em fatores primos
export function decomposicao_em_primos(numero){
    let divisor = 2;
    let primos_lista = [];

    while(numero>1){
            if(primos(divisor)==true && numero%divisor==0){
                primos_lista.push(divisor);
                numero = numero/divisor;
            } else {
                divisor += 1;
            }

        }
    return primos_lista;
}

//Operações em array

//Soma
export function soma_em_array(array){
    // let soma = 0;
    // for(let i=0; i<(lista.length); i++){
    //     soma += lista[i];
    // }
    // return soma;
    return array.reduce((acc, valor) => acc + valor, 0);
}


//Soma de ímpares
export function soma_impares_array(array){
    // let soma = 0;
    // for(let i=0; i<(lista.length); i++){
    //     if (lista[i] %2 != 0){
    //         soma += lista[i];
    //     }
    // }
    // return soma;
    return array.filter(elemento => elemento%2!==0).reduce((acc,valor) => acc+valor,0);
}

//Multiplicação
export function produto_de_array(array){
    // let produto = 1;
    // for(let i=0; i<(lista.length); i++){
    //     produto *= lista[i];
    // }
    // return produto;
    return array.reduce((acc,valor) => acc * valor, 1);
}
