/**
 * Busca un número en un arreglo numérico ordenado de menor a mayor.
 * Devuelve un índice coincidente o -1 si no existe. Con duplicados,
 * puede devolver cualquier índice que contenga el valor buscado.
 * El orden y los tipos son responsabilidad de quien llama a la función.
 */
function busquedaBinaria(numeros, objetivo) {
  let izquierda = 0;
  let derecha = numeros.length - 1;

  while (izquierda <= derecha) {
    const medio = izquierda + Math.floor((derecha - izquierda) / 2);
    if (numeros[medio] === objetivo) return medio;
    if (numeros[medio] < objetivo) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }
  return -1;
}

module.exports = busquedaBinaria;
