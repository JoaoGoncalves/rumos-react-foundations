
import {livros} from '../dados/livros.js';

const livro = livros[0];

const {ano: xpto, titulo, autor: {nome: alcunha }} = livro; // destructuring


console.log(xpto);
console.log(titulo);
console.log(alcunha);
console.log(livro.autor.nome);


const [primeiro, segundo, ...outros] = livros ; // rest operator

console.log(primeiro.titulo);
console.log(segundo.titulo);

console.log(outros);


