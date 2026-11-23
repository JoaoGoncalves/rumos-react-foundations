// Uma "API" falsa que simula a latência de um servidor.
// Cada função devolve uma Promise — tal como o fetch() faria.

import { livros } from './livros.js';

const LATENCIA_MS = 50;

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Simula GET /api/livros */
export async function obterLivros() {
  await esperar(LATENCIA_MS);
  return structuredClone(livros);
}

/** Simula GET /api/livros/{id} — rejeita se não existir (como um 404). */
export async function obterLivro(id) {
  await esperar(LATENCIA_MS);
  const livro = livros.find((l) => l.id === id);
  if (!livro) {
    throw new Error(`Livro ${id} não encontrado`);
  }
  return structuredClone(livro);
}
