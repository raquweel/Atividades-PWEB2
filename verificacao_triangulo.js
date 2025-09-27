import promptSync from 'prompt-sync';
const prompt = promptSync();

import { verificar_triangulo } from './funcoes.js';

const lado1 = Number(prompt('Lado 1: '));
const lado2 = Number(prompt('Lado 2: '));
const lado3 = Number(prompt('Lado 3: '))

console.log(verificar_triangulo(lado1, lado2, lado3));