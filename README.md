# Proyecto: búsqueda binaria con Jasmine

Requisitos: Node.js y npm. Para este trabajo se utilizó Jasmine 5.13.0; su documentación enumera Node 18, 20 y 22 como versiones compatibles. La ejecución registrada se realizó con Node 26.3.0, aunque esta versión no aparece en dicha lista. Para reproducirlo con una versión expresamente documentada, use Node 22.

Desde esta carpeta:

    npm ci
    npm test

Las dependencias se incluyen en node_modules. Con Node.js instalado, puede ejecutar npm test directamente. Use npm ci si necesita reinstalarlas a partir de package-lock.json.

El archivo resultado_pruebas.txt conserva la salida real de una ejecución. El algoritmo supone un arreglo numérico ordenado ascendentemente; no valida la entrada. En caso de duplicados devuelve cualquier índice coincidente.

El codigo y los casos de prueba se entregan mediante el repositorio de GitHub.
