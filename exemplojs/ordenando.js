// Função para trocar os elementos de posição no array
const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]; // Utiliza destructuring assignment para trocar os elementos
};

// Função para embaralhar os elementos do array
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) { // Loop para realizar o número de swaps especificado
        const pos1 = Math.floor(Math.random() * arr.length); // Gera uma posição aleatória no array
        const pos2 = Math.floor(Math.random() * arr.length); // Gera outra posição aleatória no array
        swap(arr, pos1, pos2); // Troca os elementos nas posições geradas aleatoriamente
    }
};

// Função para ordenar o array usando o algoritmo Bubble Sort
const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) { // Loop externo para percorrer o array
        for (let j = 0; j < n - i - 1; j++) { // Loop interno para comparar elementos adjacentes
            if (arr[j] > arr[j + 1]) { // Compara dois elementos adjacentes
                swap(arr, j, j + 1); // Troca os elementos se estiverem fora de ordem
            }
        }
    }
};

// Função para ordenar o array usando o algoritmo Selection Sort
const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) { // Loop externo para percorrer o array
        let minIndex = i; // Assume que o índice atual é o menor
        for (let j = i + 1; j < n; j++) { // Loop interno para encontrar o menor elemento
            if (arr[j] < arr[minIndex]) { // Compara com o elemento atualmente considerado como o menor
                minIndex = j; // Atualiza o índice do menor elemento
            }
        }

        if (minIndex !== i) { // Verifica se o índice do menor elemento mudou
            swap(arr, i, minIndex); // Troca os elementos para posicionar o menor elemento na posição correta
        }
    }
};

// Função para ordenar o array usando o algoritmo Quick Sort
const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) { // Verifica se ainda há elementos para ordenar
        const pivot = arr[right]; // Escolhe o pivô como o último elemento do array
        let i = left - 1; // Inicializa o índice do menor elemento

        // Loop para particionar o array em duas partes: elementos menores e elementos maiores que o pivô
        for (let j = left; j <= right - 1; j++){
            if (arr[j] < pivot) { // Compara o elemento atual com o pivô
                i++; // Incrementa o índice do menor elemento
                swap(arr, i, j); // Troca os elementos para posicionar os menores à esquerda
            }
        }

        swap(arr, i + 1, right); // Troca o pivô com o elemento após os menores
        const pivotIndex = i + 1; // Obtém o índice do pivô após a troca

        // Chama recursivamente a função para ordenar as duas partes separadas pelo pivô
        quick_sort(arr, left, pivotIndex - 1); // Parte à esquerda do pivô
        quick_sort(arr, pivotIndex + 1, right); // Parte à direita do pivô
    }
};

// Função para particionar o array (não utilizada nas funções de ordenação)
const particionamento = (arr, start, end, pivot) => {
    let left = start;
    let right = end - 1;

    while(true) { 
        while(arr[left] < pivot) { // Encontra elemento à esquerda maior que o pivô
            left++;
        }

        while (right > 0 && arr[right] > pivot) { // Encontra elemento à direita menor que o pivô
            right--;
        }

        if (left >= right) { // Verifica se os ponteiros se cruzaram
            break;
        } else {
            swap(arr, left, right); // Troca os elementos
        }
    }

    swap(arr, left, end - 1); // Troca o pivô para a posição correta
    return left; // Retorna o índice do pivô
};