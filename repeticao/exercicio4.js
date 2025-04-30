let intervalo1 = 0; // [0-25]
let intervalo2 = 0; // [26-50]
let intervalo3 = 0; // [51-75]
let intervalo4 = 0; // [76-100]

while (true) {
  let entrada = prompt("Digite um número (negativo para encerrar):");

  if (entrada === null || entrada.trim() === "") continue;

  let numero = parseFloat(entrada);

  if (isNaN(numero)) {
    alert("Digite um número válido.");
    continue;
  }

  if (numero < 0) {
    break;
  }

  if (numero >= 0 && numero <= 25) {
    intervalo1++;
  } else if (numero >= 26 && numero <= 50) {
    intervalo2++;
  } else if (numero >= 51 && numero <= 75) {
    intervalo3++;
  } else if (numero >= 76 && numero <= 100) {
    intervalo4++;
  }
}

alert(`[26-50]: ${intervalo2} números`);
alert(`[51-75]: ${intervalo3} números`);
alert(`[76-100]: ${intervalo4} números`);
