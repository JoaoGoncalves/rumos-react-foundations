// Exercício 03 — Destructuring de objetos e arrays
// Correr os testes: npm run test:03
//
// Não há equivalente direto em Java (o mais parecido são os record patterns).
// Em React vamos usar isto em TODOS os componentes:
//   function CartaoLivro({ titulo, autor }) { ... }
//   const [contador, setContador] = useState(0);

// 1. Usa destructuring NOS PARÂMETROS (incluindo o objeto `autor`, que está aninhado)
//    resumoLivro(livro) → 'Clean Code — Robert C. Martin, 2008'
export const resumoLivro = (livro) => {
  // TODO: reescreve a assinatura como ({ titulo, ano, autor: { nome } }) => ...
};

// 2. primeiroEUltimo(['a', 'b', 'c']) → { primeiro: 'a', ultimo: 'c' }
//    Usa array destructuring para o primeiro. Dica para o último: lista.at(-1)
export const primeiroEUltimo = (lista) => {
  // TODO
};

// 3. trocar([1, 2]) → [2, 1]   (uma linha, com destructuring no parâmetro)
export const trocar = undefined; // TODO

// 4. Destructuring com valores por defeito:
//    ligacao({ host: 'api.rumos.pt', porta: 443 }) → 'http://api.rumos.pt:443'
//    ligacao({ porta: 3000 })                      → 'http://localhost:3000'
//    ligacao()                                     → 'http://localhost:8080'
//    Dica: ({ host = 'localhost', porta = 8080 } = {}) => ...
export const ligacao = undefined; // TODO

// 5. EXTRA — rest no destructuring:
//    separarPrimeiro([1, 2, 3, 4]) → { primeiro: 1, resto: [2, 3, 4] }
export const separarPrimeiro = undefined; // TODO
