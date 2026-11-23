// Carrega o módulo do exercício (ou da solução, com `npm run solucoes`).
export const carregar = (ficheiro) => {
  const pasta = process.env.npm_lifecycle_event === 'solucoes' ? '../solucoes/' : '../exercicios/';
  return import(new URL(pasta + ficheiro, import.meta.url));
};
