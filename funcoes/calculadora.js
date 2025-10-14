import promptSync from 'prompt-sync';
const prompt = promptSync();

import { calculadora } from "./funcoes.js";

const num1 = Number(prompt('Número 1: '));
const num2 = Number(prompt('Número 2: '));
const operador = String(prompt('Operador: '));

console.log(calculadora(num1, num2, operador))

 
