import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './carregar.js';
import { livros } from '../dados/livros.js';

const m = await carregar('03-destructuring.js');

describe('03 — destructuring', () => {
  it('resumoLivro', () => {
    assert.equal(m.resumoLivro(livros[0]), 'Clean Code — Robert C. Martin, 2008');
  });

  it('primeiroEUltimo', () => {
    assert.deepEqual(m.primeiroEUltimo(['a', 'b', 'c']), { primeiro: 'a', ultimo: 'c' });
  });

  it('trocar', () => {
    assert.equal(typeof m.trocar, 'function', 'trocar ainda não está implementada');
    assert.deepEqual(m.trocar([1, 2]), [2, 1]);
  });

  it('ligacao com valores por defeito', () => {
    assert.equal(typeof m.ligacao, 'function', 'ligacao ainda não está implementada');
    assert.equal(m.ligacao({ host: 'api.rumos.pt', porta: 443 }), 'http://api.rumos.pt:443');
    assert.equal(m.ligacao({ porta: 3000 }), 'http://localhost:3000');
    assert.equal(m.ligacao(), 'http://localhost:8080');
  });

  it('EXTRA: separarPrimeiro com rest', () => {
    assert.equal(typeof m.separarPrimeiro, 'function', 'separarPrimeiro ainda não está implementada');
    assert.deepEqual(m.separarPrimeiro([1, 2, 3, 4]), { primeiro: 1, resto: [2, 3, 4] });
  });
});
