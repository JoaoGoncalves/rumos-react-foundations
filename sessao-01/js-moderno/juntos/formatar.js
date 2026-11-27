// numbers, strings, boolean, undefined, null
export const IVA = 0.23;
/* 
let nome = "joao";
let apelido = 'GOncalves';
let pais = `Portugal - ${nome}`; //backticks, template literal */

export function formatarPreco(valor){
    return `${valor.toFixed(2).replace('.', ',')} € `;
}

export default function precoComIva(valor){
    return valor * (1 + IVA);
}
