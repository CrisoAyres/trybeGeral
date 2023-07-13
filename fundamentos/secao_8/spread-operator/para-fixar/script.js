// Faça uma lista com as suas frutas favoritas
const specialFruit = ["banana", "uva", "abacaxi"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["leite condensado", "morango", "açai"];

const fruitSalad = (fruit, additional) => {
  const mixedFruitSalad = [...fruit, ...additional];
  return mixedFruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));
