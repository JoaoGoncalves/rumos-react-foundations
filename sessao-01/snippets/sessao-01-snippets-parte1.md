# Sessão 1 · Setup e JavaScript moderno

**React Foundations · Rumos · joaogoncalves.net** · o código para seguir a sessão · 6.ª 27 nov

Escrevam vocês o código, porque copiar não conta. Usem esta folha só se encravarem, e para rever depois.

**Como ler esta folha:** 📖 TEORIA é só para consulta · ✍️ STOP é o que escrevemos juntos, cada um no seu ficheiro · 🧑‍💻 SOZINHOS são os vossos exercícios · ✅ SOLUÇÃO vem depois.

- Parte 1 · O ambiente: teoria 10, 11 e 12 → juntos 13
- Parte 2 · JavaScript moderno: o que é o JavaScript 15 · mapa 16 · teoria 17 → juntos 18 · teoria 19 → juntos 20 · teoria 21 → juntos 22 · teoria 23 → juntos 24 · sozinhos 25 (para casa, até 4.ª)
- **Esta folha vai até ao slide 25**, onde ficámos na sessão de 27 nov. As soluções dos exercícios 01 a 04 corrigimos juntos na 4.ª; depois disso entra aqui a folha completa.

---

## Antes de começar · slides 8 e 13

- Instalados: o **Node.js 26 LTS** (ou 24 LTS; mínimo 22.12), o **Git**, o **VS Code** com as extensões *ES7+ React/Redux/React-Native snippets* e *Prettier*, e um browser com a extensão *React Developer Tools*.
- Confirmar num terminal:

```bash
node -v     # v26.x (ou 22.12 ou superior)
npm -v
git --version
```

- O repositório do módulo é público: **github.com/JoaoGoncalves/rumos-react-foundations**. Clonem-no (ou, se já o têm, `git pull`), e criem ao lado a vossa pasta de trabalho, `react-trabalho`:

```bash
cd ~/Documents
git clone https://github.com/JoaoGoncalves/rumos-react-foundations.git
```

- Copiem a pasta `sessao-01` do repositório para a `react-trabalho` e abram `react-trabalho/sessao-01/js-moderno` no VS Code (File › Open Folder). O repositório é só para `git pull`: escrevemos sempre na `react-trabalho`.
- Os ficheiros que escrevemos juntos vão para uma pasta nova, `js-moderno/juntos/`. Correm-se no terminal, a partir da pasta `js-moderno`:

```bash
node juntos/01-modulos.js
```

---

## Parte 1 · O ambiente

### 📖 TEORIA · Porquê React · slide 10

- **React é uma biblioteca para construir interfaces** a partir de componentes. Corre no browser e fala com a vossa API por JSON.
- **O caminho:** SPA em React (este módulo) ⇄ JSON ⇄ API REST em Spring Boot (o módulo anterior) ⇄ base de dados.
- **SPA (Single Page Application):** o servidor envia a página uma vez; depois o React só pede dados e atualiza o ecrã, sem recarregar.

### 📖 TEORIA · As ferramentas · slide 11

| Ferramenta | Para quê |
|---|---|
| Node.js | correr JavaScript fora do browser |
| npm | instalar dependências, correr scripts |
| `package.json` | as dependências e os scripts do projeto |
| `node_modules/` | as dependências instaladas (não vai para o git) |
| Vite | servidor de desenvolvimento e build |

De passagem: o Node é parecido com a JVM (corre o código fora do browser).

### 📖 TEORIA · O package.json · slide 12

O **`package.json`** é o ficheiro que descreve o projeto. Abram o da pasta `js-moderno`:

```json
{
  "name": "sessao-01-js-moderno",
  "type": "module",
  "scripts": {
    "test": "node --test \"testes/*.test.js\"",
    "test:01": "node --test testes/01-modulos.test.js",
    "test:watch": "node --test --watch \"testes/*.test.js\""
  }
}
```

- **`scripts`:** atalhos para comandos. `npm test` corre o que está em `"test"`; `npm run test:01`, o que está em `"test:01"`.
- **`"type": "module"`:** diz ao Node que os nossos ficheiros `.js` usam `import` e `export`. Sem isto teriam de se chamar `.mjs`.
- **`npm init -y`** cria um `package.json` de raiz. Hoje não é preciso: a pasta já traz um. Na sessão 2, o Vite cria o seu.

### ✍️ STOP · ESCREVER JUNTOS · A pasta da sessão a funcionar · slide 13

**No Windows, usem sempre o Git Bash** (vem com o Git), para os comandos serem iguais aos do macOS. No VS Code: Terminal › New Terminal, e na seta ao lado do **+** escolham *Git Bash* (para ficar por defeito: *Select Default Profile* › *Git Bash*).

**1. Confirmar as versões** (escrevam-nas no chat):

```bash
node -v     # v26.x (ou 22.12 ou superior)
npm -v
git --version
```

**2. Clonar o repositório** (quem já o tem: entrar na pasta e fazer `git pull`):

```bash
cd ~/Documents
git clone https://github.com/JoaoGoncalves/rumos-react-foundations.git
```

**3. Criar a pasta `react-trabalho` ao lado e copiar para lá a `sessao-01`:**

```bash
cd ~/Documents
mkdir react-trabalho
cp -R rumos-react-foundations/sessao-01 react-trabalho/
```

**4. Abrir `react-trabalho/sessao-01/js-moderno` no VS Code** (File › Open Folder) e abrir o terminal integrado (Terminal › New Terminal). O terminal tem de estar na pasta `js-moderno`:

```bash
pwd        # deve terminar em .../react-trabalho/sessao-01/js-moderno
ls         # deve mostrar: dados  exercicios  package.json  testes
```

**5. Criar a pasta `juntos/`, ao lado de `exercicios/`:**

```bash
mkdir juntos
```

- O repositório é só para `git pull`: escrevemos sempre na `react-trabalho`.
- Não é preciso `npm install` nesta pasta.
- Sem Git ou sem Node? Instalar de nodejs.org e git-scm.com e reabrir o terminal. Portátil sem permissões: partilhem o ecrã.

---

## Parte 2 · JavaScript moderno

### 📖 TEORIA · O que é o JavaScript · slide 15

- **1995, no browser:** criado na Netscape, por Brendan Eich, para dar vida às páginas web.
- **Não é Java.** O nome foi marketing, para aproveitar a moda do Java. São linguagens diferentes.
- **ECMAScript** é o nome do standard. O ES2015 (ES6) trouxe o JavaScript moderno que vamos ver; desde então há uma versão nova por ano.
- **2009, Node.js:** o JavaScript sai do browser. Hoje está em todo o lado: browser, servidores, mobile (React Native) e desktop (o próprio VS Code).
- **Hoje:** nesta Parte 2 corremos tudo no Node, no terminal; na sessão 2 voltamos ao browser, com o React.

### 📖 TEORIA · Parecido com o que já conhecem · slide 16

| Parecido em Java | Em JavaScript | Exercício |
|---|---|---|
| `package` + `import` | `import` / `export` (ES modules) | 01 |
| `String.format`, text blocks | template literals `` `${x}` `` | 01 |
| lambdas `(x) -> x * 2` | arrow functions `(x) => x * 2` | 02 |
| `final` | `const` (a referência, não o conteúdo) | 02 |
| varargs `int... n` | rest parameters `...n` | 04 |
| Streams: `filter`, `map`, `reduce` | `array.filter`, `.map`, `.reduce` | 05 |
| `Optional.map().orElse()` | `?.` e `??` | 05 |
| `CompletableFuture` | `Promise` + `async`/`await` | 06 |

Só para orientar: são parecidos, não equivalentes. A grande diferença: o JavaScript tem **tipagem dinâmica**. Não há compilador a apanhar erros de tipos; hoje, os testes fazem esse papel.

### 📖 TEORIA · Módulos e template literals · slide 17

- **Cada ficheiro é um módulo.** Só sai o que tiver `export`.
- **Named export** (vários por ficheiro): importa-se com chavetas e o nome exato.
- **Default export** (um por ficheiro): importa-se sem chavetas, com o nome que quisermos. Em React, cada componente é o default export do seu ficheiro.
- **Template literals:** backticks (não plicas) e `${ }` para interpolar valores (pôr o valor de uma expressão dentro do texto).

### ✍️ STOP · ESCREVER JUNTOS · Módulos · slide 18

> **Agora escrevemos todos.** Ficheiros: `juntos/formatar.js` e `juntos/01-modulos.js`.

```js
// formatar.js: só sai deste ficheiro o que tiver export

export const IVA = 0.23;

// named export: quem importa usa este nome exato, entre chavetas
export function formatarPreco(valor) {
  return `${valor.toFixed(2).replace('.', ',')} €`;
}

// default export: um por ficheiro, importa-se sem chavetas
export default function precoComIva(valor) {
  return valor * (1 + IVA);
}
```

```js
// 01-modulos.js: correr com  node juntos/01-modulos.js

// o default sem chavetas (o nome é nosso), os named com chavetas
import precoComIva, { IVA, formatarPreco } from './formatar.js';

// template literals: backticks e ${ } para interpolar valores no texto
const produto = 'Teclado mecânico';
const preco = 49.9;

console.log(`${produto}: ${formatarPreco(preco)}`);
console.log(`Com IVA (${IVA * 100}%): ${formatarPreco(precoComIva(preco))}`);

// e podem ocupar várias linhas
const etiqueta = `
  Produto: ${produto}
  Preço:   ${formatarPreco(preco)}
`;
console.log(etiqueta);
```

- `Cannot use import statement outside a module`: falta o `"type": "module"` no `package.json` (o nosso já o tem) ou estão a correr o ficheiro fora da pasta `js-moderno`.
- `Cannot find module`: o caminho do `import` tem de começar por `./` ou `../` e levar o `.js`.

### 📖 TEORIA · const, let e arrow functions · slide 19

- **`const` por omissão**, `let` quando o valor muda, `var` nunca. `const` é parecido com o `final` do Java: a referência não muda, o conteúdo de um objeto ou array sim.
- **Arrow functions:** `(n) => n * 2`. Com uma só expressão, o retorno é implícito.
- **Para devolver um objeto**, envolvê-lo em parênteses: `() => ({ x })`.
- **Default parameters:** `(nome = 'formando') => …`.

### ✍️ STOP · ESCREVER JUNTOS · Arrow functions · slide 20

> **Agora escrevemos todos.** Ficheiro: `juntos/02-arrow-functions.js`.

```js
// 02-arrow-functions.js

// const por omissão; let só quando o valor muda; var nunca
const curso = 'React Foundations';
let sessao = 1;
sessao = 2;            // com let, pode
// curso = 'Angular';  // ERRO: Assignment to constant variable

// a mesma função, escrita de três formas
function dobroClassico(n) {
  return n * 2;
}
const dobroArrow = (n) => {
  return n * 2;
};
const dobro = (n) => n * 2;   // uma expressão: retorno implícito, sem chavetas

console.log(dobroClassico(21), dobroArrow(21), dobro(21));

// default parameters
const saudar = (nome = 'formando') => `Olá, ${nome}!`;
console.log(saudar('Ana'), saudar());

// devolver um objeto: entre parênteses, senão as chavetas são o corpo da função
const criarLivro = (titulo, ano) => ({ titulo, ano });
console.log(criarLivro('Clean Code', 2008));

// funções passadas a outras funções (parecido com as lambdas em Java)
console.log([1, 2, 3].map((n) => n * 10));
console.log(curso, sessao);

// compor funções: o resultado de uma é a entrada da outra
const somarUm = (n) => n + 1;
const dobroMaisUm = (n) => somarUm(dobro(n));
console.log(dobroMaisUm(20));   // 41
```

- **Function declaration vs function expression.** `function dobroClassico…` é uma *function declaration*. `const dobroArrow = …` e `const dobro = …` são *function expressions*: uma função guardada numa variável. **Uma arrow function é sempre uma function expression**, por isso **não tem hoisting**: uma declaration pode ser chamada antes da linha onde está escrita; uma arrow guardada numa `const` não pode (`ReferenceError: Cannot access '…' before initialization`).
- **As funções são valores:** guardam-se em variáveis, passam-se a outras funções, devolvem-se e compõem-se. Em JavaScript compor funções é natural, porque as funções são valores.
- **`fn` ou `fn()`?** `map(dobro)` passa **a função** (o `map` chama-a); `map(dobro(21))` passa **o resultado** (`42`) e dá erro. É um erro clássico que volta no React: `onClick={handleClick}`, e não `onClick={handleClick()}`.

### 📖 TEORIA · Destructuring · slide 21

- **Objetos:** tirar propriedades para variáveis, pelo nome: `const { titulo, ano } = livro`.
- **Arrays:** pela posição: `const [primeiro, segundo] = lista`.
- **Nos parâmetros**, com valores por defeito.
- Vão vê-lo em todos os componentes: `function CartaoLivro({ titulo, autor })` e `const [contador, setContador] = useState(0)`.

### ✍️ STOP · ESCREVER JUNTOS · Destructuring · slide 22

> **Agora escrevemos todos.** Ficheiro: `juntos/03-destructuring.js`.

```js
// 03-destructuring.js
import { livros } from '../dados/livros.js';

const livro = livros[0];

// objetos: tirar propriedades para variáveis, pelo NOME
const { titulo, ano } = livro;
console.log(titulo, ano);

// aninhado: o autor é um objeto dentro do livro
const { autor: { nome } } = livro;
console.log(nome);

// arrays: pela POSIÇÃO (é assim que vamos usar o useState)
const [primeiro, segundo] = livros;
console.log(primeiro.titulo, '|', segundo.titulo);

// nos parâmetros de uma função (é assim que vamos receber as props)
const resumo = ({ titulo, ano, autor: { nome } }) => `${titulo} — ${nome}, ${ano}`;
console.log(resumo(livros[2]));

// com valores por defeito
const ligacao = ({ host = 'localhost', porta = 8080 } = {}) => `http://${host}:${porta}`;
console.log(ligacao(), ligacao({ porta: 3000 }));
```

### 📖 TEORIA · Spread, rest e imutabilidade · slide 23

- **O React só vê uma mudança se receber um objeto (ou array) novo.** Nunca alterar o original: criar uma cópia com as alterações.
- **Spread** (`...`) copia: `{ ...livro, disponivel: false }`, `[...lista, novo]`.
- A cópia é **superficial**: um array dentro do objeto também tem de ser copiado.
- **Rest** (`...`) junta: `(...numeros) =>`, parecido com os varargs em Java.

### ✍️ STOP · ESCREVER JUNTOS · Spread e rest · slide 24

> **Agora escrevemos todos.** Ficheiro: `juntos/04-spread-rest.js`.

```js
// 04-spread-rest.js
import { livros } from '../dados/livros.js';

const livro = livros[0];

// ERRADO em React: alterar o original
// livro.disponivel = false;

// CERTO: um objeto NOVO, com tudo o que o livro tinha e a alteração por cima
const emprestado = { ...livro, disponivel: false };
console.log(livro.disponivel, emprestado.disponivel);   // true false
console.log(livro === emprestado);                      // false: é outro objeto

// arrays aninhados também se copiam (o spread é superficial)
const comTag = { ...livro, tags: [...livro.tags, 'react'] };
console.log(livro.tags, comTag.tags);

// juntar e acrescentar a arrays sem os alterar
const novos = [...livros, { id: 7, titulo: 'Learning React' }];
console.log(livros.length, novos.length);

// rest parameters: parecido com os varargs (int... numeros) em Java
const somar = (...numeros) => numeros.reduce((total, n) => total + n, 0);
console.log(somar(1, 2, 3, 4));
```

### 🧑‍💻 SOZINHOS · Exercícios 01 a 04 · slide 25

Na pasta `js-moderno`, abrir `exercicios/0X-….js` e substituir os `TODO`. Para verem o resultado, o exemplo do exercício 01:

```bash
node verificar/ver-01.js
```

Para os outros, criem vocês o `verificar/ver-02.js`, `ver-03.js`, … da mesma forma: importar as funções do exercício e mostrá-las com `console.log`. No 01, enquanto faltar um `export`, o Node diz "does not provide an export named …".

Os testes (opcional):

```bash
npm run test:01      # só os testes do exercício 01
npm run test:02
npm run test:03
npm run test:04
npm test             # todos
npm run test:watch   # volta a correr os testes sempre que gravam
```

- **01 · Módulos:** `IVA`, `formatarPreco`, `descreverLivro`, o default `precoComIva` e, EXTRA, o re-export de `livros`.
- **02 · Arrow functions:** `dobro`, `saudar`, `ehPar`, `criarPonto` e, EXTRA, `criarContador` (uma closure).
- **03 · Destructuring:** `resumoLivro`, `primeiroEUltimo`, `trocar`, `ligacao` e, EXTRA, `separarPrimeiro`.
- **04 · Spread e rest:** `somar`, `juntarListas`, `atualizarLivro`, `adicionarTag` e, EXTRA, `removerPorId`.

Os EXTRA são para quem acabar mais cedo. Não é preciso `npm install`: os testes usam o runner que já vem com o Node (`node:test`).

## Para quarta (2 dez)

- Fazer sozinhos os **exercícios 01 a 04** (secção acima). Na 4.ª revemos a imutabilidade e corrigimos os quatro juntos.
- No `somar` do 04 podem usar um ciclo `for...of`; o `reduce` (que aparece no código do slide 24) vemos na 4.ª.
- Ver o vídeo do Philip Roberts sobre o event loop: https://www.youtube.com/watch?v=8aGhZQkoFbQ

## Links

- React, o guia oficial: https://react.dev/learn
- React, "Your First Component": https://react.dev/learn/your-first-component
- Vite, o guia: https://vite.dev/guide/
- MDN, o guia de JavaScript (em português): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- MDN, arrow functions: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- MDN, destructuring: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- MDN, spread: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- MDN, métodos de array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
- MDN, async/await: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Promises
- javascript.info, o tutorial moderno de JavaScript (em inglês): https://javascript.info/
- HTML e CSS (para quem nunca fez; não faz parte do módulo):
  - MDN, Learn web development (HTML e CSS): https://developer.mozilla.org/en-US/docs/Learn_web_development/Core
  - web.dev, Learn HTML: https://web.dev/learn/html
  - web.dev, Learn CSS: https://web.dev/learn/css
  - freeCodeCamp, Responsive Web Design (interativo): https://www.freecodecamp.org/learn/
