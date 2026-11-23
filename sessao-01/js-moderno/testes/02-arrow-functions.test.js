import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { carregar } from './carregar.js';

const m = await carregar('02-arrow-functions.js');

describe('02 — arrow functions, default parameters e closures', () => {
  it('dobro(21) → 42', () => {
    assert.equal(m.dobro(21), 42);
  });

  it('saudar com default parameter', () => {
    assert.equal(typeof m.saudar, 'function', 'saudar ainda não está implementada');
    assert.equal(m.saudar('Ana'), 'Olá, Ana!');
    assert.equal(m.saudar(), 'Olá, formando!');
  });

  it('ehPar', () => {
    assert.equal(typeof m.ehPar, 'function', 'ehPar ainda não está implementada');
    assert.equal(m.ehPar(4), true);
    assert.equal(m.ehPar(7), false);
  });

  it('criarPonto devolve um objeto literal', () => {
    assert.equal(typeof m.criarPonto, 'function', 'criarPonto ainda não está implementada');
    assert.deepEqual(m.criarPonto(1, 2), { x: 1, y: 2 });
  });

  it('EXTRA: criarContador usa uma closure', () => {
    assert.equal(typeof m.criarContador, 'function', 'criarContador ainda não está implementada');
    const c = m.criarContador(5);
    assert.equal(c.incrementar(), 6);
    assert.equal(c.incrementar(), 7);
    assert.equal(c.valor(), 7);
    assert.equal(m.criarContador().valor(), 0);
    assert.equal(Object.keys(c).includes('_valor') || 'valorInterno' in c, false);
  });
});
