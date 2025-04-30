let N = parseInt(prompt("Digite um número entre 1 e 10: "));
let resultado = document.querySelector('#resultado')

if (N >= 1 && N <= 10) {
  for (let i = 0; i <= 10; i++) {
    resultado.innerHTML = `<p>${i} x ${N} = ${i * N}</p>`;
  }
} else {
  alert("Por favor, insira um número entre 1 e 10.");
}
