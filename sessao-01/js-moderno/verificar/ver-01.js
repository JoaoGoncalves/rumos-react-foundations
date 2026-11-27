// EXEMPLO — como ver o resultado do exercício 01. Correr, na pasta js-moderno:
//   node verificar/ver-01.js
//
// Importamos o que o exercício exporta e mostramos com console.log.
// Se aparecer "does not provide an export named …", falta o export dessa função ou constante.
//
// Para os exercícios 02 a 06, criem vocês o vosso ver-02.js, ver-03.js, … nesta pasta, da mesma forma.

import precoComIva, { IVA, formatarPreco, descreverLivro } from '../exercicios/01-modulos.js';
import { livros } from '../dados/livros.js';

console.log(IVA);                         // esperado: 0.23
console.log(formatarPreco(12.5));         // esperado: 12,50 €
console.log(descreverLivro(livros[0]));   // esperado: "Clean Code" de Robert C. Martin (2008)
console.log(precoComIva(10));             // esperado: 12.3
