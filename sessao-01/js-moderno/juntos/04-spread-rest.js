// 04-spread-rest.js
import { livros } from '../dados/livros.js';

const livro = livros[0];

// ERRADO em React: alterar o original
// livro.disponivel = false;

// CERTO: um objeto NOVO, com tudo o que o livro tinha e a alteração por cima
const emprestado = { ...livro, disponivel: false };
console.log(livro.disponivel, emprestado.disponivel);   // true false
console.log(livro === emprestado);                      // false: é outro objeto

// arrays aninhados também se copiam (o spread é superficial)
const comTag = { ...livro, tags: [...livro.tags, 'react'] };
console.log(livro.tags, comTag.tags);

// juntar e acrescentar a arrays sem os alterar
const novos = [...livros, { id: 7, titulo: 'Learning React' }];
console.log(livros.length, novos.length);

// rest parameters: como os varargs (int... numeros) em Java
const somar = (...numeros) => numeros.reduce((total, n) => total + n, 0);
console.log(somar(1, 2, 3, 4));
