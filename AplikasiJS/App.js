const modul1 = require('./modul1');
const modul2 = require('./modul2');
const modul3 = require('./modul3');
const modul4 = require('./modul4');

const resultAddition = modul1.addition(5, 3);
console.log('Hasil penambahan: ' + resultAddition);

const resultSubtraction = modul2.subtraction(10, 2);
console.log('Hasil pengurangan: ' + resultSubtraction);

const resultMultiplication = modul3.multiplication(4, 6);
console.log('Hasil perkalian: ' + resultMultiplication);

const resultDivision = modul4.division(8, 2);
console.log('Hasil pembagian: ' + resultDivision);
