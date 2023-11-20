// Variáveis
const vitoriasInicial = parseInt(prompt("Digite o número de vitórias:")); // Variável para armazenar o número de vitórias inserido pelo usuário
const derrotasInicial = parseInt(prompt("Digite o número de derrotas:")); // Variável para armazenar o número de derrotas inserido pelo usuário

// Função para calcular o nível com base no saldo de vitórias
function calcularNivel(vitorias, derrotas) {
  // Operadores
  const saldoVitorias = vitorias - derrotas; // Operador de subtração para calcular o saldo de vitórias
  let nivel; // Variável para armazenar o nível do jogador

  // Estruturas de decisões
  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorno da função
  return `O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}

// Laço de repetição (while) para continuar solicitando entrada do usuário
let continuar = true;

while (continuar) {
  const vitoriasLoop = parseInt(prompt("Digite o número de vitórias:")); // Variável para armazenar o número de vitórias no loop
  const derrotasLoop = parseInt(prompt("Digite o número de derrotas:")); // Variável para armazenar o número de derrotas no loop

  const resultado = calcularNivel(vitoriasLoop, derrotasLoop);

  console.log(resultado);

  continuar = confirm("Deseja inserir outro conjunto de vitórias e derrotas?");
}
