/**
 * filter alle namen die start met een p uit de array.
 * (enkel die met een p blijven over)
 *
 */
const namenlijst = ["Karel", "Pieter", "Pol", "Stef"];

namenlijst.every(namen => namen.split() == "P")

console.log(namenlijst);
