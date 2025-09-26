//Área do círculo
export function area_circulo(raio){
    const pi = 3.141592653589793;
    return pi * raio **2
}

//Operações

export function calculadora(num1, num2, operador){
    if (operador=='+'){
        return num1 + num2;
    } else if (operador=='-'){
        return num1 - num2;
    } else if (operador=='*'){
        return num1 * num2;
    } else if (operador=='/'){
        return num1/num2;
    } else {
       return 'Operador inválido'
    }
}

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