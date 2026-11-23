import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './carregar.js';
import { livros } from '../dados/livros.js';

const m = await carregar('04-spread-rest.js');

describe('04 — spread, rest e imutabilidade', () => {
  it('somar com rest parameters', () => {
    assert.equal(typeof m.somar, 'function', 'somar ainda não está implementada');
    assert.equal(m.somar(1, 2, 3), 6);
    assert.equal(m.somar(), 0);
  });

  it('juntarListas não altera as originais', () => {
    assert.equal(typeof m.juntarListas, 'function', 'juntarListas ainda não está implementada');
    const a = [1, 2];
    const b = [3];
    assert.deepEqual(m.juntarListas(a, b), [1, 2, 3]);
    assert.deepEqual(a, [1, 2]);
  });

  it('atualizarLivro devolve um objeto novo', () => {
    const original = structuredClone(livros[0]);
    const novo = m.atualizarLivro(original, { disponivel: false });
    assert.ok(novo, 'atualizarLivro ainda não devolve nada');
    assert.notEqual(novo, original, 'devolveste o MESMO objeto — tem de ser uma cópia');
    assert.equal(novo.disponivel, false);
    assert.equal(novo.titulo, 'Clean Code');
    assert.equal(original.disponivel, true, 'o livro original foi alterado!');
  });

  it('adicionarTag não altera o livro nem o array de tags originais', () => {
    assert.equal(typeof m.adicionarTag, 'function', 'adicionarTag ainda não está implementada');
    const original = structuredClone(livros[2]);
    const novo = m.adicionarTag(original, 'frontend');
    assert.deepEqual(novo.tags, ['javascript', 'frontend']);
    assert.deepEqual(original.tags, ['javascript'], 'o array de tags original foi alterado!');
    assert.notEqual(novo.tags, original.tags);
  });

  it('EXTRA: removerPorId', () => {
    assert.equal(typeof m.removerPorId, 'function', 'removerPorId ainda não está implementada');
    const lista = [{ id: 1 }, { id: 2 }];
    assert.deepEqual(m.removerPorId(lista, 1), [{ id: 2 }]);
    assert.equal(lista.length, 2);
  });
});
