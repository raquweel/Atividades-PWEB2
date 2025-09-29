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

//Retorna o tipo do triângulo
export function verificar_triangulo(lado1, lado2, lado3){
    let triangulo;
    if (lado1<=0 || lado2<=0 || lado3<=0){
        return 'Valores inválidos';
    } else {
        if (lado1==lado2 && lado2==lado3){
            triangulo = 'equilátero';
        } else if (lado1!==lado2 && lado2!==lado3 && lado1!==lado3){
            triangulo = 'escaleno';
        } else {
            triangulo = 'isósceles';
        }
        return triangulo;
    }
}

//Operações em array

//Soma
export function soma_em_array(lista){
    let soma = 0;
    for(let i=0; i<(lista.length); i++){
        soma += lista[i];
    }
    return soma;
}

//Soma de ímpares
export function soma_impares_array(lista){
    let soma = 0;
    for(let i=0; i<(lista.length); i++){
        if (lista[i] %2 != 0){
            soma += lista[i];
        }
    }
    return soma;
}

//Multiplicação
export function produto_de_array(lista){
    let produto = 1;
    for(let i=0; i<(lista.length); i++){
        produto *= lista[i];
    }
    return produto;
}
