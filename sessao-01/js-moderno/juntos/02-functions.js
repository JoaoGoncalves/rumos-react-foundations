// function declaration, faz hoisting
console.log(dobroClassico(4));

function dobroClassico(n){
    return n * 2; 
}

//function expressions, nao fazem hoisting
const dobro = n => n * 2;
console.log(dobro(3));

const triplo = n => {
    return n * 3;
}
console.log(triplo(10));

const retornarObj = () => ({nome:'joao', apelido: 'Silva'})
const pessoa = retornarObj();
console.log(pessoa.nome);

