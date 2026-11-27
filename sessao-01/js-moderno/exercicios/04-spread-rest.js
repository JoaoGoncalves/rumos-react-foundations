// Exercício 04 — Spread (...), rest (...) e imutabilidade
// VER O RESULTADO — criem o ficheiro verificar/ver-04.js, com a mesma lógica do ver-01.js
// (importar as funções deste exercício e mostrá-las com console.log). Correr, na pasta js-moderno:
//   node verificar/ver-04.js
//
// Porque é que isto importa em React? O React só percebe que o estado mudou
// se lhe dermos um objeto/array NOVO. Nunca alteramos o original — criamos
// uma cópia com as alterações. O spread é a forma de o fazer.

// 1. Rest parameters (como varargs em Java: int... numeros)
//    somar(1, 2, 3) → 6     somar() → 0
export const somar = undefined; // TODO

// 2. juntarListas([1, 2], [3]) → [1, 2, 3]   (sem alterar as listas originais)
export const juntarListas = undefined; // TODO

// 3. Devolve um NOVO livro com as alterações aplicadas. O original não pode mudar.
//    atualizarLivro(livro, { disponivel: false }) → { ...todos os campos, disponivel: false }
export const atualizarLivro = (livro, alteracoes) => {
  // TODO — atenção: a solução abaixo está ERRADA porque altera o original!
  // livro.disponivel = alteracoes.disponivel;
  // return livro;
};

// 4. Devolve um NOVO livro com a tag acrescentada ao array `tags`.
//    Nem o livro original nem o array original de tags podem mudar.
export const adicionarTag = undefined; // TODO

// 5. EXTRA: devolve uma NOVA lista sem o item com o id indicado.
//    removerPorId([{ id: 1 }, { id: 2 }], 1) → [{ id: 2 }]
export const removerPorId = undefined; // TODO
