// Simulação das alturas de 15 pessoas (em metros, por exemplo)
let alturas = [1.75, 1.62, 1.80, 1.55, 1.90, 1.73, 1.60, 1.85, 1.78, 1.66, 1.59, 1.92, 1.68, 1.74, 1.88];

// Inicializa as variáveis com a primeira altura do array
let menor = alturas[0];
let maior = alturas[0];

// Percorre as alturas para encontrar o menor e o maior valor
for (let i = 1; i < alturas.length; i++) {
  if (alturas[i] < menor) {
    menor = alturas[i];
  }
  if (alturas[i] > maior) {
    maior = alturas[i];
  }
}

// Exibe os resultados
console.log(`Menor altura do grupo: ${menor} m`);
console.log(`Maior altura do grupo: ${maior} m`);