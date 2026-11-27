// Exercício 01 — Módulos (import/export) e template literals
// VER O RESULTADO — o ficheiro verificar/ver-01.js já está feito (é o exemplo).
// Correr, na pasta js-moderno:
//   node verificar/ver-01.js
//
// Em Java organizamos código em packages e usamos `import`. Em JavaScript
// cada ficheiro é um módulo: só é visível para fora o que fizermos `export`.

// 1. Exporta (named export) uma constante IVA com o valor 0.23
const IVA = 0.23;

// 2. Exporta (named export) a função formatarPreco.
//    formatarPreco(12.5) → "12,50 €"
//    Dica: toFixed(2), replace('.', ',') e um template literal `${...}`
function formatarPreco(valor) {
  // TODO
}

// 3. Exporta (named export) a função descreverLivro, usando um template literal.
//    descreverLivro({ titulo: 'Clean Code', autor: { nome: 'Robert C. Martin' }, ano: 2008 })
//    → '"Clean Code" de Robert C. Martin (2008)'
function descreverLivro(livro) {
  // TODO
}

// 4. Faz desta função o export DEFAULT do módulo.
//    precoComIva(10) → 12.3   (arredondado a 2 casas decimais)
function precoComIva(valor) {
  // TODO
}

// 5. EXTRA: re-exporta `livros` a partir de '../dados/livros.js'
//    (numa só linha, sem o importar primeiro)
