import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './carregar.js';
import { livros } from '../dados/livros.js';

const m = await carregar('05-metodos-array.js');

describe('05 — métodos de array, ?. e ??', () => {
  it('map: titulos', () => {
    assert.deepEqual(m.titulos(livros), [
      'Clean Code',
      'Effective Java',
      'Eloquent JavaScript',
      'Design Patterns',
      'The Pragmatic Programmer',
      'JavaScript: The Good Parts',
    ]);
  });

  it('filter: disponiveis', () => {
    assert.deepEqual(
      m.disponiveis(livros)?.map((l) => l.id),
      [1, 3, 4, 6],
    );
  });

  it('reduce: totalPaginas', () => {
    assert.equal(m.totalPaginas(livros), 2271);
  });

  it('find: procurarPorIsbn', () => {
    assert.equal(m.procurarPorIsbn(livros, '978-0134685991')?.titulo, 'Effective Java');
    assert.equal(m.procurarPorIsbn(livros, 'nao-existe'), undefined);
  });

  it('some: haAlgumAnterior', () => {
    assert.equal(m.haAlgumAnterior(livros, 2000), true);
    assert.equal(m.haAlgumAnterior(livros, 1990), false);
  });

  it('toSorted: ordenarPorAno não altera o original', () => {
    const copia = structuredClone(livros);
    const ordenados = m.ordenarPorAno(copia);
    assert.deepEqual(
      ordenados?.map((l) => l.ano),
      [1994, 2008, 2008, 2018, 2018, 2019],
    );
    assert.equal(copia[0].id, 1, 'o array original foi reordenado!');
  });

  it('?. e ??: nomeEditora', () => {
    assert.equal(m.nomeEditora(livros[0]), 'Prentice Hall');
    assert.equal(m.nomeEditora(livros[4]), 'Desconhecida');
  });

  it('encadeamento: titulosDisponiveisDeJavaScript', () => {
    assert.deepEqual(m.titulosDisponiveisDeJavaScript(livros), [
      'ELOQUENT JAVASCRIPT',
      'JAVASCRIPT: THE GOOD PARTS',
    ]);
  });

  it('EXTRA: contarPorTag', () => {
    assert.deepEqual(m.contarPorTag(livros), {
      'boas-praticas': 3,
      java: 1,
      javascript: 2,
      arquitetura: 1,
    });
  });
});
