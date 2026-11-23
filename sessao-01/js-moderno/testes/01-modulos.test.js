import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './carregar.js';

const m = await carregar('01-modulos.js');

describe('01 — módulos e template literals', () => {
  it('exporta a constante IVA = 0.23', () => {
    assert.equal(m.IVA, 0.23);
  });

  it('formatarPreco(12.5) → "12,50 €"', () => {
    assert.equal(typeof m.formatarPreco, 'function', 'falta exportar formatarPreco');
    assert.equal(m.formatarPreco(12.5), '12,50 €');
    assert.equal(m.formatarPreco(3), '3,00 €');
  });

  it('descreverLivro usa um template literal', () => {
    assert.equal(typeof m.descreverLivro, 'function', 'falta exportar descreverLivro');
    const livro = { titulo: 'Clean Code', autor: { nome: 'Robert C. Martin' }, ano: 2008 };
    assert.equal(m.descreverLivro(livro), '"Clean Code" de Robert C. Martin (2008)');
  });

  it('precoComIva é o export default', () => {
    assert.equal(typeof m.default, 'function', 'falta o export default');
    assert.equal(m.default(10), 12.3);
    assert.equal(m.default(19.99), 24.59);
  });

  it('EXTRA: re-exporta livros', () => {
    assert.ok(Array.isArray(m.livros), 'falta re-exportar livros');
    assert.equal(m.livros.length, 6);
  });
});
