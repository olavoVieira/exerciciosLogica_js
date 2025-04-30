let a = parseInt(prompt("Digite o valor inicial (A):"));
let r = parseInt(prompt("Digite a razão (R):"));

let titulo = document.querySelector('#titulo')
let resultado = document.querySelector('#resultado')

titulo.innerHTML = "<h2>Sequência em P.A.:</h2>";
for (let i = 0; i < 10; i++) {
  let termo = a + i * r;
  resultado.innerHTML = `<p>${termo}</p>`;
}
