/**
 * Ga na of het vak chemie aanwezig is in de array
 *
 */
 
// niets aanpassen aan de code
 
const resultaten = [
  { vak: "wiskunde", punt: 6, totaal: 10 },
  { vak: "wiskunde", punt: 4, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
  { vak: "chemie", punt: 8, totaal: 10 },
  { vak: "nederlands", punt: 8, totaal: 10 },
];

const chemieAanwezig = resultaten
chemieAanwezig.find(vakken => vakken = resultaten.vak == "nederlands")
console.log(chemieAanwezig.find(vakken => vakken = resultaten.vak == "nederlands"));

if (chemieAanwezig) console.log("chemie is aanwezig");