import promptSync from 'prompt-sync';
const prompt = promptSync();

import { primos } from './funcoes.js';
import { decomposicao_em_primos } from './funcoes.js';

const numero = Number(prompt('Número: '));

console.log(decomposicao_em_primos(numero));
