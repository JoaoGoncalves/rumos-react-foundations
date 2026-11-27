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

Para verem o resultado de um exercício, na pasta `js-moderno`, o exemplo do exercício 01:

```bash
node verificar/ver-01.js
```

Para os exercícios 02 a 06, criem vocês o `verificar/ver-02.js`, `ver-03.js`, … da mesma forma: importar as funções do exercício e mostrá-las com `console.log`.

Os testes (opcional):

```bash
npm run test:01      # só os testes do exercício 01
npm test             # todos
npm run test:watch   # volta a correr os testes sempre que gravam
```

Os exercícios marcados **EXTRA** são para quem acabar mais cedo. Os dados de exemplo (`dados/livros.js`) têm o mesmo formato que um `GET /api/livros` de uma API Spring Boot devolveria.

---

## Depois da sessão (`git pull`)

Na sessão de 27 nov chegámos ao **destructuring** (slide 22), com o **rest** (`...outros`) e uma primeira ideia de **spread e imutabilidade**. Já estão nesta pasta:

- `js-moderno/juntos/` — o código que escrevemos juntos (`01-modulos.js`, `formatar.js`, `02-functions.js`, `03-destructuring.js`) e o `04-spread-rest.js`, o exemplo de spread e rest de que falámos (`node juntos/04-spread-rest.js`);
- `snippets/sessao-01-snippets-parte1.md` (e `.txt`) — o código da sessão até ao slide 25, incluindo o destructuring completo (nos parâmetros e com valores por defeito) e o spread e rest;
- `slides/Slides-Sessao-01-parte1.pdf` — os slides 1 a 25 (até aos exercícios 01 a 04);
- `referencias-javascript-moderno.md` — leituras, o vídeo sobre o event loop e sítios para praticar.

**Para a sessão 2 (4.ª, 2 dez), sozinhos: os exercícios 01 a 04** (slide 25), na vossa pasta `react-trabalho/sessao-01/js-moderno`:

1. Abrir `exercicios/0X-….js` e substituir os `TODO`.
2. Ver o resultado: `node verificar/ver-01.js` (o 01 já tem o exemplo); para o 02, 03 e 04, criem o vosso `verificar/ver-0X.js` da mesma forma.
3. Os **EXTRA** são opcionais.

No 04 (spread e imutabilidade), tentem com o slide 23, o `juntos/04-spread-rest.js`, os snippets e os comentários do ficheiro; no `somar` podem usar um ciclo `for...of` (o `reduce` vemos na 4.ª).

**Na 4.ª corrigimos juntos os exercícios 01 a 04** e revemos a imutabilidade; só depois entram aqui as soluções, os snippets e o resto dos slides. Os exercícios 05 e 06 (arrays e async) ficam para depois de vermos esses temas na 4.ª.

Antes da 4.ª, vejam o vídeo do Philip Roberts sobre o event loop (está nas referências): vamos falar dele.

---

## Referências

- React, o guia oficial: https://react.dev/learn
- Vite: https://vite.dev/guide/
- MDN, JavaScript (em português): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- HTML e CSS (não fazem parte deste módulo, mas ajudam a ler o JSX; para quem nunca fez):
  - MDN, Learn web development (HTML e CSS): https://developer.mozilla.org/en-US/docs/Learn_web_development/Core
  - web.dev, Learn HTML: https://web.dev/learn/html · Learn CSS: https://web.dev/learn/css
  - freeCodeCamp, Responsive Web Design (interativo): https://www.freecodecamp.org/learn/
- **Mais referências de JavaScript** (leitura obrigatória, o vídeo do event loop, sítios para praticar): [referencias-javascript-moderno.md](referencias-javascript-moderno.md)
