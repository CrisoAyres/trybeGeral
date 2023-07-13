const pai = document.getElementById('pai');
const ondeVoceEsta = document.createElement('section');
ondeVoceEsta.id = 'ondeVoceEsta'
pai.appendChild(ondeVoceEsta)

console.log(pai);

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoOndeVoceEsta = document.createElement('section');
filhoOndeVoceEsta.id = 'filhoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoOndeVoceEsta)

console.log(elementoOndeVoceEsta);

const primeiroFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilho = document.createElement('section');
filhoPrimeiroFilho.id = 'filhoPrimeiroFilho';
primeiroFilho.appendChild(filhoPrimeiroFilho)

console.log(primeiroFilho);

const terceiroFilho = filhoPrimeiroFilho
document.parentElement
document.parentElement
document.nextElementSibling;

console.log(terceiroFilho);