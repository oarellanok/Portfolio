const readline = require('readline');

// Crear interfaz para entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Leer una matriz del usuario
const readMatrix = (name, rows, cols, callback) => {
    console.log(`Introduce los elementos de la matriz ${name} (${rows}x${cols}), separados por espacios:`);
    rl.question('', (input) => {
        const values = input.split(' ').map(Number);
        if (values.length !== rows * cols) {
            console.log(`Error: Se esperaban ${rows * cols} valores. Intenta de nuevo.`);
            readMatrix(name, rows, cols, callback);
        } else {
            const matrix = [];
            for (let i = 0; i < rows; i++) {
                matrix.push(values.slice(i * cols, (i + 1) * cols));
            }
            callback(matrix);
        }
    });
};

// Función para multiplicar matrices
const multiplyMatrices = (matrix1, matrix2) => {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    // Verificar compatibilidad
    if (cols1 !== rows2) {
        throw new Error("El número de columnas de la primera matriz debe coincidir con el número de filas de la segunda matriz.");
    }

    // Inicializar la matriz resultado
    const resultMatrix = Array(rows1).fill(0).map(() => Array(cols2).fill(0));

    // Realizar la multiplicación
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return resultMatrix;
};

// Flujo principal
const main = () => {
    rl.question('Introduce el número de filas de la primera matriz: ', (rows1Input) => {
        const rows1 = parseInt(rows1Input);

        rl.question('Introduce el número de columnas de la primera matriz / filas de la segunda matriz: ', (cols1Rows2Input) => {
            const cols1Rows2 = parseInt(cols1Rows2Input);

            rl.question('Introduce el número de columnas de la segunda matriz: ', (cols2Input) => {
                const cols2 = parseInt(cols2Input);

                readMatrix('A', rows1, cols1Rows2, (matrix1) => {
                    readMatrix('B', cols1Rows2, cols2, (matrix2) => {
                        try {
                            const result = multiplyMatrices(matrix1, matrix2);
                            console.log('La matriz resultado es:');
                            console.table(result);
                        } catch (error) {
                            console.error(error.message);
                        }
                        rl.close();
                    });
                });
            });
        });
    });
};

main();
