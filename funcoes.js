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