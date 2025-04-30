let soma = 0;
let total = 0;
let positivos = 0;
let negativos = 0;
let valor;

while (true) {
  valor = prompt("Digite um número (ou deixe vazio para encerrar):");
  
  if (valor === null || valor.trim() === "") {
    break; // encerra o loop
  }

  valor = parseFloat(valor);

  if (!isNaN(valor)) {
    soma += valor;
    total++;

    if (valor > 0) {
      positivos++;
    } else if (valor < 0) {
      negativos++;
    }
  } else {
    alert("Por favor, digite um número válido.");
  }
}

if (total > 0) {
  let media = soma / total;
  let percentualPos = (positivos / total) * 100;
  let percentualNeg = (negativos / total) * 100;

  alert(`Média aritmética: ${media.toFixed(2)}`);
  alert(`Quantidade de positivos: ${positivos}`);
  alert(`Quantidade de negativos: ${negativos}`);
  alert(`Percentual de positivos: ${percentualPos.toFixed(2)} %`);
  alert(`Percentual de negativos: ${percentualNeg.toFixed(2)} %`);
} else {
  alert("Nenhum valor foi informado.");
}
