# Sessão 1 · Setup, JavaScript moderno e o primeiro componente

**React Foundations · Rumos · 6.ª, 27 nov 2026 · 18:45–21:45**

Objetivos da sessão:

1. Ter o ambiente pronto: Node.js, Git, VS Code e um projeto React a correr com Vite.
2. Rever o JavaScript moderno que o React usa em todo o lado.
3. Escrever e compor os primeiros componentes React.

---

## Antes da sessão

1. Instalar o que está no [README principal](../README.md#3-antes-da-1ª-sessão-instalar) e confirmar com `node -v`, `npm -v` e `git --version`.
2. Clonar o repositório (ou, se já o têm, fazer `git pull` na véspera).
3. Criar a vossa pasta de trabalho, `react-trabalho`, ao lado do repositório, e copiar para lá a pasta `sessao-01`.

---

## Parte 1 · O ambiente

Porquê React, as ferramentas (Node.js, npm, Vite) e a pasta da sessão a funcionar. No fim desta parte, dentro de `react-trabalho/sessao-01/js-moderno`:

```bash
npm test
```

deve mostrar **34 testes: 1 verde e 33 vermelhos**. É suposto: os vermelhos são os vossos exercícios.

---

## Parte 2 · JavaScript moderno — `js-moderno/`

Para cada tema: teoria curta, escrevemos juntos um ficheiro na pasta `js-moderno/juntos/` (criada por vocês) e, no fim de cada bloco, exercícios sozinhos com testes automáticos.

| # | Ficheiro | Tema | Parecido em Java |
|---|---|---|---|
| 01 | `exercicios/01-modulos.js` | `import`/`export`, template literals | packages e `import`, `String.format` |
| 02 | `exercicios/02-arrow-functions.js` | `const`/`let`, arrow functions, default parameters | lambdas `(x) -> ...` |
| 03 | `exercicios/03-destructuring.js` | destructuring de objetos e arrays | — |
| 04 | `exercicios/04-spread-rest.js` | spread/rest e imutabilidade | varargs `int...` |
| 05 | `exercicios/05-metodos-array.js` | `map`, `filter`, `reduce`, `find`, `toSorted`, `?.`, `??` | Streams, `Optional` |
| 06 | `exercicios/06-async.js` | Promises, `async`/`await`, `fetch` | `CompletableFuture` |

```bash
npm run test:01      # só os testes do exercício 01
npm test             # todos
npm run test:watch   # volta a correr os testes sempre que gravam
```

Os exercícios marcados **EXTRA** são para quem acabar mais cedo. Os dados de exemplo (`dados/livros.js`) têm o mesmo formato que um `GET /api/livros` de uma API Spring Boot devolveria.

---

## Parte 3 · O primeiro componente

**Juntos**, na vossa pasta de trabalho (fora de `js-moderno`), criamos o projeto:

```bash
npm create vite@latest biblioteca -- --template react
cd biblioteca
npm install
npm run dev
```

e escrevemos os primeiros componentes: `Cabecalho`, `CartaoLivro` e a composição no `App`.

**Sozinhos**, o exercício 1.1 (o cartão do formando) e o desafio 1.2 (um `Rodape`): o enunciado está em [`primeiro-componente-exercicio.md`](primeiro-componente-exercicio.md).

---

## Depois da sessão (`git pull`)

No fim da sessão, entram nesta pasta:

- `js-moderno/juntos/` — o código que escrevemos juntos;
- `js-moderno/solucoes/` — as soluções dos exercícios 01 a 06 (para confirmar: `npm run solucoes`);
- `primeiro-componente-solucao/` — o projeto `biblioteca` completo, com as soluções 1.1 e 1.2;
- os snippets da sessão (`.md` e `.txt`) e os slides em PDF.

**Para a sessão 2 (4.ª, 2 dez):** acabar os exercícios 01 a 06 (`npm test` todo verde) e o 1.2, ler em react.dev o [“Your First Component”](https://react.dev/learn/your-first-component) e trazer o projeto `biblioteca` a correr.

---

## Referências

- React, o guia oficial: https://react.dev/learn
- Vite: https://vite.dev/guide/
- MDN, JavaScript (em português): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- HTML e CSS (não fazem parte deste módulo, mas ajudam a ler o JSX; para quem nunca fez):
  - MDN, Learn web development (HTML e CSS): https://developer.mozilla.org/en-US/docs/Learn_web_development/Core
  - web.dev, Learn HTML: https://web.dev/learn/html · Learn CSS: https://web.dev/learn/css
  - freeCodeCamp, Responsive Web Design (interativo): https://www.freecodecamp.org/learn/
