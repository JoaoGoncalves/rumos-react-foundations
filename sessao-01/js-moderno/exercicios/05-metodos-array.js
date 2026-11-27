// Exercício 05 — Métodos de array, optional chaining (?.) e nullish coalescing (??)
// VER O RESULTADO — criem o ficheiro verificar/ver-05.js, com a mesma lógica do ver-01.js
// (importar as funções deste exercício e mostrá-las com console.log). Correr, na pasta js-moderno:
//   node verificar/ver-05.js
//
// Se já usaram Streams em Java, isto vai parecer familiar:
//   Java: livros.stream().filter(l -> l.isDisponivel()).map(Livro::getTitulo).toList()
//   JS:   livros.filter((l) => l.disponivel).map((l) => l.titulo)
// Diferença: em JS não há .stream() nem .collect() — os métodos estão no próprio array
// e devolvem logo um array novo.
//
// Regra: NADA de ciclos for nestes exercícios (exceto no EXTRA).
// Os dados estão em ../dados/livros.js

// 1. map: devolve um array só com os títulos
export const titulos = (livros) => {
  // TODO
};

// 2. filter: devolve só os livros com disponivel === true
export const disponiveis = (livros) => {
  // TODO
};

// 3. reduce: soma das páginas de todos os livros
export const totalPaginas = (livros) => {
  // TODO
};

// 4. find: devolve o livro com o ISBN indicado (ou undefined se não existir)
export const procurarPorIsbn = (livros, isbn) => {
  // TODO
};

// 5. some: há algum livro publicado antes do ano indicado? (true/false)
export const haAlgumAnterior = (livros, ano) => {
  // TODO
};

// 6. Devolve um NOVO array ordenado por ano (crescente), sem alterar o original.
//    Atenção: .sort() altera o array original! Usa .toSorted()
export const ordenarPorAno = (livros) => {
  // TODO
};

// 7. Optional chaining + nullish coalescing:
//    devolve o nome da editora, ou 'Desconhecida' se o livro não tiver editora.
//    (o livro com id 5 não tem editora — sem ?. isto rebenta com TypeError)
export const nomeEditora = (livro) => {
  // TODO
};

// 8. Encadeamento: títulos EM MAIÚSCULAS dos livros disponíveis com a tag 'javascript'
export const titulosDisponiveisDeJavaScript = (livros) => {
  // TODO
};

// 9. EXTRA: conta quantos livros há por tag
//    → { 'boas-praticas': 3, java: 1, javascript: 2, arquitetura: 1 }
export const contarPorTag = (livros) => {
  // TODO
};
