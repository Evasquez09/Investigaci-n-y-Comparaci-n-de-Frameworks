const busquedaBinaria = require('../busquedaBinaria');

function comprobar(datos, objetivo, esperado) {
  const obtenido = busquedaBinaria(datos, objetivo);
  console.log(`  Arreglo: [${datos.join(', ')}]; buscar: ${objetivo}`);
  console.log(`  Esperado: ${esperado}; obtenido: ${obtenido}`);
  return obtenido;
}

describe('Búsqueda binaria', () => {
  it('encuentra un elemento en el centro', () => {
    expect(comprobar([2, 4, 6, 8, 10], 6, 2)).toBe(2);
  });
  it('encuentra el primer elemento', () => {
    expect(comprobar([2, 4, 6, 8, 10], 2, 0)).toBe(0);
  });
  it('encuentra el último elemento', () => {
    expect(comprobar([2, 4, 6, 8, 10], 10, 4)).toBe(4);
  });
  it('devuelve -1 si el valor falta dentro del rango', () => {
    expect(comprobar([2, 4, 6, 8, 10], 5, -1)).toBe(-1);
  });
  it('devuelve -1 si el valor es menor que todos', () => {
    expect(comprobar([2, 4, 6], 1, -1)).toBe(-1);
  });
  it('devuelve -1 si el valor es mayor que todos', () => {
    expect(comprobar([2, 4, 6], 9, -1)).toBe(-1);
  });
  it('devuelve -1 para un arreglo vacío', () => {
    expect(comprobar([], 3, -1)).toBe(-1);
  });
  it('encuentra un único elemento', () => {
    expect(comprobar([7], 7, 0)).toBe(0);
  });
  it('encuentra valores negativos en un arreglo par', () => {
    expect(comprobar([-9, -3, 0, 5], -3, 1)).toBe(1);
  });
  it('con duplicados devuelve un índice que contiene el valor', () => {
    const datos = [1, 3, 3, 3, 8];
    const indice = busquedaBinaria(datos, 3);
    console.log(`  Arreglo: [${datos.join(", ")}]; buscar: 3`);
    console.log(`  Esperado: indice entre 1 y 3 con valor 3; obtenido: ${indice}`);
    expect(indice).toBeGreaterThanOrEqual(0);
    expect(indice).toBeLessThan(datos.length);
    expect(datos[indice]).toBe(3);
  });
});
