# React Foundations · Rumos

**Academia Programador Java · Ação 103057 · 27 horas · 9 sessões · Live Training**

Formador: **João Gonçalves** · [joaogoncalves.net](https://joaogoncalves.net) · edu@joaogoncalves.net

Este repositório é o material do módulo de React: os ficheiros de cada sessão, os exercícios, as soluções, os snippets e os slides.

> **Antes de cada sessão, façam `git pull`.** O repositório é atualizado na véspera (ficheiros iniciais e exercícios) e **no fim de cada sessão** (o código feito na aula, as soluções, os snippets e os slides em PDF).

---

## Índice

1. [O módulo](#1-o-módulo)
2. [Datas e horário](#2-datas-e-horário)
3. [Antes da 1.ª sessão: instalar](#3-antes-da-1ª-sessão-instalar)
4. [Obter e atualizar o repositório](#4-obter-e-atualizar-o-repositório)
5. [Como trabalhamos](#5-como-trabalhamos)
6. [O que há no repositório](#6-o-que-há-no-repositório)
7. [Certificado e avaliação](#7-certificado-e-avaliação)
8. [Dúvidas e contactos](#8-dúvidas-e-contactos)
9. [Referências](#9-referências)

---

## 1. O módulo

Vão aprender a construir a "cara" das aplicações: uma **Single Page Application (SPA) em React** que fala, por JSON, com uma **API REST em Spring Boot** como a que fizeram no módulo anterior.

```
Browser (React, este módulo)  ⇄  JSON  ⇄  API REST Spring Boot  ⇄  Base de dados
```

Ao longo das sessões construímos um mini-projeto que cresce de sessão em sessão: componentes, estado, dados da API, routing, e no fim debugging e testes.

## 2. Datas e horário

Todas as sessões das **18:45 às 21:45**, em **Live Training**.

| # | Data | Tema (pode ser ajustado) |
|---|---|---|
| 1 | 6.ª, 27 nov 2026 | Setup, JavaScript moderno e o primeiro componente |
| 2 | 4.ª, 2 dez 2026 | JSX, componentes, props, renderização condicional, listas e `key` |
| 3 | 6.ª, 4 dez 2026 | Estado e eventos: `useState`, formulários controlados, lifting state up |
| 4 | 4.ª, 9 dez 2026 | Efeitos e dados: `useEffect`, `fetch` à API Spring Boot, loading e erros, CORS |
| 5 | 6.ª, 11 dez 2026 | Composição e organização: `children`, custom hooks, Context API |
| 6 | 2.ª, 14 dez 2026 | Routing numa SPA com React Router |
| 7 | 4.ª, 16 dez 2026 | Avançado: `useReducer`, `useRef`, `useMemo`/`useCallback`, React 19 |
| 8 | 6.ª, 18 dez 2026 | Debugging: React DevTools, StrictMode, error boundaries; introdução a testes |
| 9 | 2.ª, 21 dez 2026 | Fecho do projeto e avaliação final |

## 3. Antes da 1.ª sessão: instalar

Contem com uns 20 minutos. **Cheguem à 1.ª sessão com tudo instalado e a funcionar:** no primeiro dia não vai haver tempo para resolver instalações. Se o portátil for da empresa e não tiverem permissões de administrador, peçam com antecedência ao apoio informático da vossa empresa. Se ficarem bloqueados noutro passo, partilhem o erro no fórum da turma: um colega pode já ter resolvido o mesmo problema.

### 3.1 Node.js (e o npm)

O Node.js corre JavaScript fora do browser (é para o JavaScript o que a JVM é para o Java). O **npm** vem incluído e é o gestor de dependências (o "Maven" do JavaScript).

- Instalar a versão **LTS** em [nodejs.org](https://nodejs.org) (hoje, o **Node.js 26 LTS**; o 24 LTS também serve; mínimo **22.12**).
- Quem já usa o **nvm** (macOS/Linux) ou o **nvm-windows**:

```bash
nvm install --lts
nvm alias default lts/*      # no nvm-windows: nvm use <versão>
```

### 3.2 Git

- **Windows:** [git-scm.com](https://git-scm.com/download/win) (aceitar as opções por omissão; inclui o Git Bash).
- **macOS:** `xcode-select --install` num terminal, ou `brew install git`.
- **Linux:** `sudo apt install git` (ou o equivalente da vossa distribuição).

Não é preciso conta no GitHub: o repositório é público.

### 3.3 Visual Studio Code

- Instalar em [code.visualstudio.com](https://code.visualstudio.com).
- Extensões (Extensions › pesquisar pelo nome):
  - **ES7+ React/Redux/React-Native snippets** (dsznajder)
  - **Prettier – Code formatter**
  - **Error Lens** (opcional, mas muito útil)

### 3.4 Um browser atualizado

Chrome, Edge ou Firefox, com a extensão **React Developer Tools**.

### 3.5 Confirmar que está tudo bem

Num terminal:

```bash
node -v     # v26.x (ou 22.12 ou superior)
npm -v
git --version
```

**Teste opcional** (confirma que o React corre no vosso computador):

```bash
npm create vite@latest teste-react -- --template react
cd teste-react
npm install
npm run dev
```

Abram http://localhost:5173: se aparecer a página do Vite + React, está tudo pronto. Podem apagar a pasta `teste-react` a seguir.

## 4. Obter e atualizar o repositório

### A primeira vez: clonar

```bash
cd ~/Documents              # ou outra pasta à vossa escolha
git clone https://github.com/JoaoGoncalves/rumos-react-foundations.git
```

### Antes de cada sessão (e no fim): atualizar

```bash
cd ~/Documents/rumos-react-foundations
git pull
```

Façam `git pull` **na véspera de cada sessão**, porque o material ainda pode ser atualizado até lá, e outra vez **no fim da sessão**, para receber o código da aula e as soluções.

### Trabalhem numa pasta vossa, fora do repositório

O repositório é para **ler**. Para não terem conflitos no `git pull`, criem uma pasta de trabalho ao lado, por exemplo `react-trabalho`, e copiem para lá a pasta da sessão:

```text
Documents/
  rumos-react-foundations/     ← o repositório: só git pull
  react-trabalho/              ← a vossa pasta: é aqui que escrevem código
    sessao-01/
      js-moderno/
    biblioteca/                ← o projeto React, criado na sessão 1
```

## 5. Como trabalhamos

Cada sessão tem sempre o mesmo ritmo:

1. **Teoria curta** — só o essencial, com exemplos.
2. **Fazemos juntos** — paro e escrevemos o código em conjunto, cada um no seu ficheiro.
3. **Exercícios** — vocês resolvem sozinhos, com tempo marcado. Muitos têm testes automáticos que dizem se está certo.
4. **Solução** — corrigimos sempre juntos. Errar aqui é o objetivo.

Nos slides, um selo no canto diz em que fase estamos: TEORIA, JUNTOS, EXERCÍCIO, SOLUÇÃO.

## 6. O que há no repositório

Uma pasta por sessão. Cada uma cresce em dois momentos:

| Quando | O que entra |
|---|---|
| **Na véspera** | O README da sessão, os ficheiros iniciais e os enunciados dos exercícios |
| **No fim da sessão** | O código escrito na aula (`juntos/`), as soluções, os snippets (`.md` e `.txt`) e os slides em PDF |

```text
rumos-react-foundations/
  README.md                  ← este ficheiro
  sessao-01/
    README.md                ← o plano e as instruções da sessão
    js-moderno/              ← exercícios de JavaScript com testes
    primeiro-componente-exercicio.md
  sessao-02/ …
```

### Correr os exercícios com testes

```bash
cd react-trabalho/sessao-01/js-moderno
npm test              # todos os testes
npm run test:01       # só os do exercício 01
npm run test:watch    # volta a correr os testes sempre que gravam
```

Não é preciso `npm install`: os testes usam o test runner que já vem com o Node.

## 7. Certificado e avaliação

- **Na 1.ª sessão**, confirmem os vossos dados no Portal do Formando (ou no formulário que receberam por email): o certificado depende disso.
- **Na última sessão (21 dez)** há uma avaliação e um questionário de avaliação do módulo. **O certificado e o badge Credly só são emitidos depois de responderem ao questionário** (confirmem a pasta de spam).

## 8. Dúvidas e contactos

- **Durante a aula:** o chat do Live Training, ou partilhem o ecrã quando bloquearem.
- **Fora da aula:** o fórum da turma ou edu@joaogoncalves.net. Mandem o código (ou um print) e a mensagem de erro completa.

## 9. Referências

- React, o guia oficial: https://react.dev/learn
- Vite: https://vite.dev/guide/
- MDN, o guia de JavaScript (em português): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide
- javascript.info, o tutorial moderno de JavaScript (em inglês): https://javascript.info/
- Git, o livro oficial: https://git-scm.com/book/pt-br/v2
