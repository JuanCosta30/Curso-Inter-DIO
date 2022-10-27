const precoCombustivel = 4.99;
const kmPorLitros = 13;
const distanciaKm = 1600;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(`Valor gasto do combustível: R$ ${valorGasto.toFixed(2)}`);