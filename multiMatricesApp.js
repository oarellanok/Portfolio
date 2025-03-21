function validateAndGenerateInputs() {
    const rows1 = parseInt(document.getElementById('rows1').value);
    const cols1 = parseInt(document.getElementById('cols1').value);
    const rows2 = parseInt(document.getElementById('rows2').value);
    const cols2 = parseInt(document.getElementById('cols2').value);
    const compatibilityMessage = document.getElementById('compatibilityMessage');
    const matrixInputsDiv = document.getElementById('matrixInputs');

    compatibilityMessage.textContent = ''; // Restart error message
    matrixInputsDiv.innerHTML = ''; // Clean previous matrices

    // Verificar compatibilidad
    if (!rows1 || !cols1 || !rows2 || !cols2) {
        compatibilityMessage.textContent = 'Please introduce valid dimensions.';
        return;
    }
    if (cols1 !== rows2) {
        compatibilityMessage.textContent = 'Error: Columns on first matrix must match in number with rows on second matrix.';
        return;
    }

    compatibilityMessage.style.color = "green";
    compatibilityMessage.textContent = 'Wrong Dimensions. Matrices are not compatible.';

    const matrix1Div = document.createElement('div');
    const matrix2Div = document.createElement('div');

    matrix1Div.innerHTML = `<h3>First Matrix (${rows1}x${cols1})</h3>`;
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols1; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix1-${i}-${j}`;
            matrix1Div.appendChild(input);
        }
        matrix1Div.appendChild(document.createElement('br'));
    }

    matrix2Div.innerHTML = `<h3>Second Matrix (${rows2}x${cols2})</h3>`;
    for (let i = 0; i < rows2; i++) {
        for (let j = 0; j < cols2; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `matrix2-${i}-${j}`;
            matrix2Div.appendChild(input);
        }
        matrix2Div.appendChild(document.createElement('br'));
    }

    matrixInputsDiv.appendChild(matrix1Div);
    matrixInputsDiv.appendChild(matrix2Div);

    document.getElementById('calculateButton').style.display = 'inline-block';
}

function calculate() {
    const rows1 = parseInt(document.getElementById('rows1').value);
    const cols1 = parseInt(document.getElementById('cols1').value);
    const rows2 = parseInt(document.getElementById('rows2').value);
    const cols2 = parseInt(document.getElementById('cols2').value);

    const matrix1 = [];
    for (let i = 0; i < rows1; i++) {
        const row = [];
        for (let j = 0; j < cols1; j++) {
            const value = parseInt(document.getElementById(`matrix1-${i}-${j}`).value);
            row.push(value || 0); // Assign 0 if there is no value
        }
        matrix1.push(row);
    }

    const matrix2 = [];
    for (let i = 0; i < rows2; i++) {
        const row = [];
        for (let j = 0; j < cols2; j++) {
            const value = parseInt(document.getElementById(`matrix2-${i}-${j}`).value);
            row.push(value || 0); // Assign 0 if there is no value
        }
        matrix2.push(row);
    }

    // Multiply matrices
    const resultMatrix = Array(rows1).fill(0).map(() => Array(cols2).fill(0));
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    // Show result
    const resultDiv = document.getElementById('resultMatrix');
    resultDiv.innerHTML = '<table></table>';
    const table = resultDiv.querySelector('table');

    resultMatrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    document.getElementById('resultTitle').style.display = 'block';
}
