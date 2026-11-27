# Sessão 1 · Setup e JavaScript moderno

**React Foundations · Rumos · 6.ª, 27 nov 2026 · 18:45–21:45**

Objetivos da sessão:

1. Ter o ambiente pronto: Node.js, Git, VS Code e a pasta da sessão a funcionar no terminal.
2. Rever o JavaScript moderno que o React usa em todo o lado.

O React começa na **sessão 2**, com o primeiro projeto (Vite) e os primeiros componentes.

---

## Antes da sessão

1. Instalar o que está no [README principal](../README.md#3-antes-da-1ª-sessão-instalar) e confirmar com `node -v`, `npm -v` e `git --version`.
2. Clonar o repositório (ou, se já o têm, fazer `git pull` na véspera).
3. Criar a vossa pasta de trabalho, `react-trabalho`, ao lado do repositório, e copiar para lá a pasta `sessao-01`.

---

## Parte 1 · O ambiente

Porquê React, as ferramentas (Node.js, npm, Vite) e a pasta da sessão a funcionar. **No Windows, usem o Git Bash** (também no terminal do VS Code), para os comandos serem iguais aos das aulas. No fim desta parte, dentro de `react-trabalho/sessao-01/js-moderno`:

```bash
pwd          # deve terminar em .../react-trabalho/sessao-01/js-moderno
ls           # dados  exercicios  package.json  testes
mkdir juntos
```

---

## Parte 2 · JavaScript moderno — `js-moderno/`

Para cada tema: teoria curta, escrevemos juntos um ficheiro na pasta `js-moderno/juntos/` (criada por vocês) e, no fim de cada bloco, exercícios sozinhos.

| # | Ficheiro | Tema | Parecido em Java |
|---|---|---|---|
| 01 | `exercicios/01-modulos.js` | `import`/`export`, template literals | packages e `import`, `String.format` |
| 02 | `exercicios/02-arrow-functions.js` | `const`/`let`, arrow functions, default parameters | lambdas `(x) -> ...` |
| 03 | `exercicios/03-destructuring.js` | destructuring de objetos e arrays | — |
| 04 | `exercicios/04-spread-rest.js` | spread/rest e imutabilidade | varargs `int...` |
| 05 | `exercicios/05-metodos-array.js` | `map`, `filter`, `reduce`, `find`, `toSorted`, `?.`, `??` | Streams, `Optional` |
| 06 | `exercicios/06-async.js` | Promises, `async`/`await`, `fetch` | `CompletableFuture` |

Para verem o resultado de um exercício, acrescentem `console.log(...)` no fim do ficheiro e corram-no:

```bash
node exercicios/02-arrow-functions.js
```

Os testes (opcional):

```bash
npm run test:01      # só os testes do exercício 01
npm test             # todos
npm run test:watch   # volta a correr os testes sempre que gravam
```

Os exercícios marcados **EXTRA** são para quem acabar mais cedo. Os dados de exemplo (`dados/livros.js`) têm o mesmo formato que um `GET /api/livros` de uma API Spring Boot devolveria.

---

## Depois da sessão (`git pull`)

No fim da sessão, entram nesta pasta:

- `js-moderno/juntos/` — o código que escrevemos juntos;
- `js-moderno/solucoes/` — as soluções dos exercícios 01 a 06, e um `ver-0X.js` por exercício que mostra o resultado (`node solucoes/ver-02.js`; para verem o vosso, mudem o import para `../exercicios/…`);
- os snippets da sessão (`.md` e `.txt`) e os slides em PDF.

**Para a sessão 2 (4.ª, 2 dez):** acabar os exercícios 01 a 06 e comparar com as soluções, e ler em react.dev o [“Your First Component”](https://react.dev/learn/your-first-component). Na sessão 2 criamos juntos o primeiro projeto React.

---

## Referências

- React, o guia oficial: https://react.dev/learn
- Vite: https://vite.dev/guide/
- MDN, JavaScript (em português): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- HTML e CSS (não fazem parte deste módulo, mas ajudam a ler o JSX; para quem nunca fez):
  - MDN, Learn web development (HTML e CSS): https://developer.mozilla.org/en-US/docs/Learn_web_development/Core
  - web.dev, Learn HTML: https://web.dev/learn/html · Learn CSS: https://web.dev/learn/css
  - freeCodeCamp, Responsive Web Design (interativo): https://www.freecodecamp.org/learn/
