import promptSync from 'prompt-sync';
const prompt = promptSync();

import { area_circulo } from "./funcoes.js";

const raio = Number(prompt('Raio: '));

console.log(area_circulo(raio))