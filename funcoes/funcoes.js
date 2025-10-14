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
