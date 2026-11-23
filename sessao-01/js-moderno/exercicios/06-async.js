// Exercício 06 — Promises e async/await
// Correr os testes: npm run test:06
//
// Uma Promise é parecida com um CompletableFuture em Java: representa um valor
// que vai chegar mais tarde. O `await` "espera" pelo valor sem bloquear a página.
// É assim que, a partir da sessão 4, vamos ler dados da API Spring Boot com fetch().
//
// A "API" está em ../dados/api-fake.js:
//   obterLivros()   → Promise com o array de livros
//   obterLivro(id)  → Promise com um livro; REJEITA com erro se o id não existir

import { obterLivros, obterLivro } from '../dados/api-fake.js';

// 1. Com .then(): devolve uma Promise com os títulos de todos os livros
export const carregarTitulosComThen = () => {
  // TODO: return obterLivros().then(...)
};

// 2. O mesmo, mas com async/await
export const carregarTitulos = async () => {
  // TODO
};

// 3. try/catch: devolve o livro, ou null se a API rejeitar (id inexistente)
export const carregarLivroSeguro = async (id) => {
  // TODO
};

// 4. Promise.all: carrega vários livros EM PARALELO e devolve-os pela mesma ordem
//    carregarVarios([3, 1]) → [livro3, livro1]
export const carregarVarios = (ids) => {
  // TODO
};

// 5. EXTRA — fetch a sério: faz GET ao url e devolve o JSON da resposta.
//    Se a resposta não for 2xx (resposta.ok === false), lança new Error(`HTTP ${status}`).
//    Atenção: ao contrário do RestTemplate, o fetch NÃO lança erro num 404 ou 500!
export const buscarJson = async (url) => {
  // TODO
};
