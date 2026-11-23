# Exercício 1.1 e 1.2 · O vosso primeiro componente (sozinhos)

React Foundations · Sessão 1 · no vosso projeto `biblioteca`, criado na sessão.

## 1.1 · O cartão do formando

1. Criar `src/components/CartaoFormando.jsx`.
2. Num objeto `formando`, os vossos dados: `nome`, `apelido`, `cidade`, `profissaoAnterior`, `anoNascimento` e `sabeJavaScript` (`true` ou `false`).
3. O componente `CartaoFormando` mostra, num `<article className="cartao">`:
   - o nome completo **em maiúsculas**, seguido das iniciais entre parênteses: `RITA MARQUES (RM)`;
   - a idade (calculada a partir do ano de nascimento), a cidade e a profissão anterior;
   - com um **ternário**: “Já programa em JavaScript” ou “A aprender JavaScript”.
4. Usá-lo no `App`, por cima dos livros.

Dicas: destructuring para tirar os valores do objeto; um template literal para o nome completo; `nome[0]` dá a primeira letra.

## 1.2 · O desafio: um Rodape

1. Criar `src/components/Rodape.jsx`.
2. Um objeto `curso` com `nome`, `entidade` e `sessoes`.
3. Antes do `return`, montar o texto com um template literal: `React Foundations · Rumos · 9 sessões`.
4. Devolver um `<footer className="rodape">` com esse texto e usá-lo no fim do `App`.

A solução chega ao repositório no fim da sessão (`git pull`), na pasta `primeiro-componente-solucao/`. Não espreitem antes de tentar!
