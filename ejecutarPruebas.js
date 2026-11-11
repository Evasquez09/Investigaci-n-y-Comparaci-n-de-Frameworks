const Jasmine = require('jasmine');
const runner = new Jasmine();
runner.loadConfigFile('spec/support/jasmine.json');
runner.clearReporters();
let aprobadas = 0;
let fallidas = 0;
runner.addReporter({
  jasmineStarted(info) {
    console.log(`BUSQUEDA BINARIA: ${info.totalSpecsDefined} pruebas unitarias\n`);
    console.log('Resultado = indice desde 0; -1 significa valor ausente.');
    console.log('Los arreglos deben estar ordenados de menor a mayor.\n');
  },
  specStarted(resultado) { console.log(`CASO: ${resultado.description}`); },
  specDone(resultado) {
    if (resultado.status === 'passed') aprobadas++;
    if (resultado.status === 'failed') fallidas++;
    console.log(`Estado: ${resultado.status === 'passed' ? 'APROBADO' : resultado.status.toUpperCase()}\n`);
    for (const fallo of resultado.failedExpectations) console.log(fallo.message);
  },
  jasmineDone(resultado) {
    console.log(`RESUMEN: ${aprobadas} aprobadas; ${fallidas} fallidas.`);
    for (const fallo of resultado.failedExpectations) console.log(fallo.message);
    console.log(`Resultado general: ${resultado.overallStatus}`);
  }
});
runner.execute();
