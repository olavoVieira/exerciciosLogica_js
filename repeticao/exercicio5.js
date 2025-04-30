let somaTotal = 0;
let somaPares = 0;
let totalNumeros = 0;
let totalPares = 0;
let totalImpares = 0;

while (true) {
  let entrada = prompt("Digite um número positivo (0 para encerrar):");

  if (entrada === null || entrada.trim() === "") continue;

  let numero = parseInt(entrada);

  if (isNaN(numero) || numero < 0) {
    alert("Digite um número positivo válido.");
    continue;
  }

  if (numero === 0) {
    break;
  }

  somaTotal += numero;
  totalNumeros++;

  if (numero % 2 === 0) {
    somaPares += numero;
    totalPares++;
  } else {
    totalImpares++;
  }
}

// Cálculos finais
let mediaGeral = totalNumeros > 0 ? somaTotal / totalNumeros : 0;
let mediaPares = totalPares > 0 ? somaPares / totalPares : 0;

// Resultados
alert(`Quantidade de pares: ${totalPares}`);
alert(`Quantidade de ímpares: ${totalImpares}`);
alert(`Média dos valores pares: ${mediaPares.toFixed(2)}`);
alert(`Média geral: ${mediaGeral.toFixed(2)}`);
