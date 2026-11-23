import { describe, it, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './carregar.js';

const m = await carregar('06-async.js');

const TITULOS = [
  'Clean Code',
  'Effective Java',
  'Eloquent JavaScript',
  'Design Patterns',
  'The Pragmatic Programmer',
  'JavaScript: The Good Parts',
];

describe('06 — Promises e async/await', () => {
  const fetchOriginal = globalThis.fetch;
  afterEach(() => {
    globalThis.fetch = fetchOriginal;
  });

  it('carregarTitulosComThen devolve uma Promise', async () => {
    const resultado = m.carregarTitulosComThen();
    assert.ok(resultado instanceof Promise, 'tem de devolver uma Promise (faltou o return?)');
    assert.deepEqual(await resultado, TITULOS);
  });

  it('carregarTitulos com async/await', async () => {
    assert.deepEqual(await m.carregarTitulos(), TITULOS);
  });

  it('carregarLivroSeguro devolve null quando a API rejeita', async () => {
    assert.equal((await m.carregarLivroSeguro(2))?.titulo, 'Effective Java');
    assert.equal(await m.carregarLivroSeguro(999), null);
  });

  it('carregarVarios usa Promise.all e mantém a ordem', async () => {
    const resultado = await m.carregarVarios([3, 1]);
    assert.deepEqual(
      resultado?.map((l) => l.id),
      [3, 1],
    );
  });

  it('EXTRA: buscarJson devolve o JSON e lança erro se !ok', async () => {
    globalThis.fetch = async () => ({ ok: true, status: 200, json: async () => ({ id: 1 }) });
    assert.deepEqual(await m.buscarJson('http://localhost:8080/api/livros/1'), { id: 1 });

    globalThis.fetch = async () => ({ ok: false, status: 404, json: async () => ({}) });
    await assert.rejects(() => m.buscarJson('http://localhost:8080/api/livros/999'), /HTTP 404/);
  });
});
