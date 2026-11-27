import precoComIva, {IVA, formatarPreco } from './formatar.js';


const produto = 'Teclado';
const preco = 49.9;

console.log(`${produto} : ${formatarPreco(preco)}`);
console.log(`Com IVA (${IVA * 100}%): ${formatarPreco(precoComIva(preco))}`);
