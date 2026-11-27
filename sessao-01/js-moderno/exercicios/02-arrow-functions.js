// Exercício 02 — const/let, arrow functions, default parameters e closures
// VER O RESULTADO — criem o ficheiro verificar/ver-02.js, com a mesma lógica do ver-01.js
// (importar as funções deste exercício e mostrá-las com console.log). Correr, na pasta js-moderno:
//   node verificar/ver-02.js
//
// Uma arrow function é o equivalente mais próximo de uma lambda em Java:
//   Java: (n) -> n * 2
//   JS:   (n) => n * 2
// Regra da casa: usar `const` por defeito, `let` só quando o valor muda. Nunca `var`.

// 1. Reescreve como arrow function com retorno implícito (sem chavetas nem return)
export function dobro(n) {
  return n * 2;
}

// 2. Arrow function com default parameter:
//    saudar('Ana') → 'Olá, Ana!'      saudar() → 'Olá, formando!'
export const saudar = undefined; // TODO

// 3. ehPar(4) → true    ehPar(7) → false
export const ehPar = undefined; // TODO

// 4. criarPonto(1, 2) → { x: 1, y: 2 }
//    Atenção: para devolver um objeto literal numa arrow function,
//    é preciso envolvê-lo em parênteses: () => ({ ... })
//    Dica: { x, y } é o mesmo que { x: x, y: y } (shorthand properties)
export const criarPonto = undefined; // TODO

// 5. EXTRA — closure: criarContador(inicial = 0) devolve um objeto com duas funções:
//    const c = criarContador(5);
//    c.incrementar(); // → 6
//    c.valor();       // → 6
//    O `valor` interno não deve ser acessível de fora (como um campo private em Java).
export const criarContador = undefined; // TODO
